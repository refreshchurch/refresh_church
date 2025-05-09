// app/blog/BlogGrid.jsx
"use client"

import Link from "next/link"
import { format } from "date-fns"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogGrid({ blogs }) {
  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-medium mb-2">No blog posts yet</h2>
        <p className="text-muted-foreground">Check back soon for new content!</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <Link
          href={`/blog/${blog.slug}`}
          key={blog.id}
          className="transition-transform hover:scale-[1.02]"
        >
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
  )
}