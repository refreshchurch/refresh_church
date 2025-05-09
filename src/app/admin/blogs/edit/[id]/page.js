import { createClient } from "@/lib/supabase/server"
import { BlogForm } from "@/components/blog-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { notFound } from "next/navigation"

export default async function EditBlogPage({ params }) {
  const supabase = await createClient()
  const { data: blog, error } = await supabase.from("blogs").select("*").eq("id", params.id).single()

  if (error || !blog) {
    notFound()
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Edit Blog</h1>
          <p className="text-muted-foreground">Make changes to your blog post.</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Edit Blog</CardTitle>
          <CardDescription>Update your blog post content and settings.</CardDescription>
        </CardHeader>
        <CardContent>
          <BlogForm initialData={blog} />
        </CardContent>
      </Card>
    </div>
  )
}