// app/blog/page.js
import { createClient } from "@/lib/supabase/server"
import BlogGrid from "@/components/BlogGrid"

export const metadata = {
  title: "Blog",
  description: "Read our latest blog posts",
}

export default async function BlogIndexPage() {
  const supabase = await createClient()
  const { data: blogs } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false })
  console.log('Blogs:', blogs)
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Read our latest articles, guides, and updates
        </p>
      </div>

      <BlogGrid blogs={blogs} />
    </div>
  )
}