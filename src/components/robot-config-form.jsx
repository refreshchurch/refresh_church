"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { saveRobotsConfig } from "@/lib/actions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

// Dynamically import the code editor to avoid SSR issues
const CodeEditor = dynamic(() => import("@/components/code-editor"), {
  ssr: false,
  loading: () => <div className="h-96 w-full rounded-md border border-input bg-muted/20 animate-pulse" />,
})

const formSchema = z.object({
  robots_txt: z.string().min(1, {
    message: "Robots.txt content is required.",
  }),
})

const DEFAULT_ROBOTS_TXT = `# Allow all crawlers
User-agent: *
Allow: /

# Disallow admin paths
User-agent: *
Disallow: /admin/

# Sitemap location
Sitemap: https://example.com/sitemap.xml`

export function RobotsConfigForm({ initialData = {} }) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [editorContent, setEditorContent] = useState(initialData?.robots_txt || DEFAULT_ROBOTS_TXT)
  const formRef = useRef(null)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      robots_txt: initialData?.robots_txt || DEFAULT_ROBOTS_TXT,
    },
  })

  // Update form value when editor content changes
  const handleEditorChange = (value) => {
    setEditorContent(value)
    form.setValue("robots_txt", value, { shouldValidate: true })
  }

  async function onSubmit(values) {
    try {
      setIsSubmitting(true)
      await saveRobotsConfig({
        id: initialData?.id,
        robots_txt: values.robots_txt,
      })
      router.refresh()
      router.push("/admin/settings")
    } catch (error) {
      console.error("Error saving robots.txt configuration:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative pb-16">
        <Card>
          <CardHeader>
            <CardTitle>Robots.txt Configuration</CardTitle>
            <CardDescription>Configure how search engines and other web robots crawl your site.</CardDescription>
          </CardHeader>
          <CardContent>
            <Alert className="mb-6">
              <Info className="h-4 w-4" />
              <AlertTitle>Important</AlertTitle>
              <AlertDescription>
                Changes to robots.txt may affect how search engines index your site. Make sure you understand the
                implications before saving.
              </AlertDescription>
            </Alert>

            <FormField
              control={form.control}
              name="robots_txt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Robots.txt Content</FormLabel>
                  <FormControl>
                    <CodeEditor
                      value={editorContent}
                      onChange={handleEditorChange}
                      language="plaintext"
                      height="400px"
                    />
                  </FormControl>
                  <FormDescription>
                    Enter the content for your robots.txt file. This file tells search engines which pages they can and
                    cannot crawl.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <div className="fixed bottom-8 right-8 z-10">
          <Button type="submit" size="lg" disabled={isSubmitting} className="shadow-lg">
            <Save className="mr-2 h-4 w-4" />
            {isSubmitting ? "Saving..." : "Save Configuration"}
          </Button>
        </div>
      </form>
    </Form>
  )
}