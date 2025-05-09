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
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { createBlog } from "@/lib/actions"
import { slugify } from "@/lib/utils"

// Dynamically import the markdown editor to avoid SSR issues
const MarkdownEditor = dynamic(() => import("@/components/markdown-editor"), {
  ssr: false,
  loading: () => <div className="h-96 w-full rounded-md border border-input bg-muted/20 animate-pulse" />,
})

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  slug: z
    .string()
    .min(3, {
      message: "Slug must be at least 3 characters.",
    })
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message: "Slug must contain only lowercase letters, numbers, and hyphens.",
    }),
  content: z.string().min(10, {
    message: "Content must be at least 10 characters.",
  }),
})

export function BlogForm({ initialData = {} }) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [markdownContent, setMarkdownContent] = useState(initialData?.content || "")
  const formRef = useRef(null)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: initialData?.title || "",
      slug: initialData?.slug || "",
      content: initialData?.content || "",
    },
  })

  // Auto-generate slug from title
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "title" && value.title && !form.getValues("slug")) {
        form.setValue("slug", slugify(value.title), { shouldValidate: true })
      }
    })
    return () => subscription.unsubscribe()
  }, [form])

  // Update form content value when markdown changes
  useEffect(() => {
    form.setValue("content", markdownContent, { shouldValidate: true })
  }, [markdownContent, form])

  async function onSubmit(values) {
    try {
      setIsSubmitting(true)
      await createBlog({
        id: initialData?.id,
        title: values.title,
        slug: values.slug,
        content: values.content,
      })
      router.refresh()
      router.push("/admin/blogs")
      form.reset()
    } catch (error) {
      console.error("Error saving blog:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative pb-16">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter blog title" {...field} />
              </FormControl>
              <FormDescription>The title of your blog post.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL Slug</FormLabel>
              <FormControl>
                <Input placeholder="enter-url-slug" {...field} />
              </FormControl>
              <FormDescription>
                The URL-friendly version of the title. Must be unique and contain only lowercase letters, numbers, and hyphens.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <MarkdownEditor value={markdownContent} onChange={setMarkdownContent} />
              </FormControl>
              <FormDescription>Write your blog content using Markdown.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="fixed bottom-8 right-8 z-10">
          <Button type="submit" size="lg" disabled={isSubmitting} className="shadow-lg">
            <Save className="mr-2 h-4 w-4" />
            {isSubmitting ? "Saving..." : "Save Blog"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
