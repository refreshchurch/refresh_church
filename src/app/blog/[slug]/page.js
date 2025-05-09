import { notFound } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { format } from "date-fns"
import dynamic from "next/dynamic"

// Dynamically import the markdown preview component
const MarkdownPreview = dynamic(() => import("@/components/markdown-preview"), {
  ssr: true,
})

export async function generateMetadata({ params }) {
  const supabase = await createClient()
  const { data: blog } = await supabase.from("blogs").select("title").eq("slug", params.slug).single()

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: blog.title,
    description: `Read ${blog.title} on our blog`,
  }
}

export default async function BlogPage({ params }) {
  const supabase = await createClient()
  const { data: blog, error } = await supabase.from("blogs").select("*").eq("slug", params.slug).single()

  if (error || !blog) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="bg-card rounded-lg shadow-sm p-6 md:p-8">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
          <div className="text-muted-foreground text-sm">
            {blog.created_at && (
              <time dateTime={blog.created_at}>Published on {format(new Date(blog.created_at), "MMMM d, yyyy")}</time>
            )}
            {blog.updated_at && blog.updated_at !== blog.created_at && (
              <span className="ml-2">(Updated on {format(new Date(blog.updated_at), "MMMM d, yyyy")})</span>
            )}
          </div>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <MarkdownPreview content={blog.content} />
        </div>
      </article>
    </div>
  )
}