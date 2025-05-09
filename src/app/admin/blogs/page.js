import { Suspense } from "react"
import { createClient } from "@/lib/supabase/server"
import { BlogsTable } from "@/components/blogs-table"
import { BlogForm } from "@/components/blog-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default async function BlogsPage() {
  const supabase = await createClient()
  const { data: blogs } = await supabase.from("blogs").select("*").order("created_at", { ascending: false })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blogs</h1>
          <p className="text-muted-foreground">Create and manage blog posts for your website.</p>
          <Button asChild variant="outline" className="text-xs" size="sm">
            <Link href="/blog" className="flex items-center gap-1 mt-2">
              <ExternalLink className="h-2 w-2" />
              View Public Blog
            </Link>
          </Button>
        </div>

      </div>

      <Tabs defaultValue="all-blogs">
        <TabsList>
          <TabsTrigger value="all-blogs">All Blogs</TabsTrigger>
          <TabsTrigger value="new-blog">New Blog</TabsTrigger>
        </TabsList>
        <TabsContent value="all-blogs" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>All Blogs</CardTitle>
              <CardDescription>View and manage all your blog posts.</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div>Loading blogs...</div>}>
                <BlogsTable blogs={blogs || []} />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="new-blog" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Create New Blog</CardTitle>
              <CardDescription>Add a new blog post with markdown content.</CardDescription>
            </CardHeader>
            <CardContent>
              <BlogForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* <Button asChild variant="outline">
        <Link href="/blog" className="flex items-center gap-2 mt-2 text-sm">
          <ExternalLink className="h-2 w-2" />
          View Public Blog
        </Link>
      </Button> */}
    </div>
  )
}