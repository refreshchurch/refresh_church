"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { createSiteSchema } from "@/lib/actions"

// Dynamically import the JSON editor to avoid SSR issues
const JsonEditor = dynamic(() => import("@/components/json-editor"), {
  ssr: false,
  loading: () => <div className="h-96 w-full rounded-md border border-input bg-muted/20 animate-pulse" />,
})

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  schema_json: z.string().refine(
    (value) => {
      try {
        JSON.parse(value)
        return true
      } catch (error) {
        return false
      }
    },
    {
      message: "Must be valid JSON.",
    },
  ),
  enabled: z.boolean().default(true),
})

export function SiteSchemaForm({ initialData = {} }) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [jsonContent, setJsonContent] = useState(
    initialData?.schema_json || JSON.stringify({ properties: {} }, null, 2),
  )
  const formRef = useRef(null)

  // Parse the JSON string for initial data if it exists
  const parsedInitialJson = initialData?.schema_json
    ? initialData.schema_json
    : JSON.stringify({ properties: {} }, null, 2)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData?.name || "",
      schema_json: parsedInitialJson,
      enabled: initialData?.enabled !== undefined ? initialData.enabled : true,
    },
  })

  // Update form schema_json value when JSON editor content changes
  useEffect(() => {
    try {
      // Validate that it's proper JSON before setting the value
      JSON.parse(jsonContent)
      form.setValue("schema_json", jsonContent, { shouldValidate: true })
    } catch (error) {
      // If it's not valid JSON, still update the field but it will fail validation
      form.setValue("schema_json", jsonContent, { shouldValidate: true })
    }
  }, [jsonContent, form])

  async function onSubmit(values) {
    try {
      setIsSubmitting(true)
      await createSiteSchema({
        id: initialData?.id,
        name: values.name,
        schema_json: values.schema_json,
        enabled: values.enabled,
      })
      router.refresh()
      router.push("/admin/site-schema")
      form.reset()
    } catch (error) {
      console.error("Error saving site schema:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative pb-16">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Schema Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter schema name" {...field} />
              </FormControl>
              <FormDescription>A descriptive name for this schema.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="enabled"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Enabled</FormLabel>
                <FormDescription>When disabled, this schema will not be used in the application.</FormDescription>
              </div>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="schema_json"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Schema JSON</FormLabel>
              <FormControl>
                <JsonEditor value={jsonContent} onChange={setJsonContent} height="400px" />
              </FormControl>
              <FormDescription>
                Define your schema structure using JSON. This will determine the fields and validation rules.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="fixed bottom-8 right-8 z-10">
          <Button type="submit" size="lg" disabled={isSubmitting} className="shadow-lg">
            <Save className="mr-2 h-4 w-4" />
            {isSubmitting ? "Saving..." : "Save Schema"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
