import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { format } from "date-fns"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Blog",
  description: "Read our latest blog posts",
}

export default async function BlogIndexPage() {
  const supabase = await createClient()
  const { data: blogs } = await supabase.from("blogs").select("*").order("created_at", { ascending: false })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Read our latest articles, guides, and updates</p>
      </div>

      {!blogs || blogs.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-medium mb-2">No blog posts yet</h2>
          <p className="text-muted-foreground">Check back soon for new content!</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id} className="transition-transform hover:scale-[1.02]">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
                  <CardDescription>
                    {blog.created_at && format(new Date(blog.created_at), "MMMM d, yyyy")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="line-clamp-3 text-muted-foreground">
                    {blog.content.substring(0, 150).replace(/[#*_~`]/g, "")}...
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="text-sm font-medium text-primary">Read more →</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
