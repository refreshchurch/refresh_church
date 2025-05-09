/* eslint-disable react/no-unescaped-entities */
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Edit, FileText, Settings, Users } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Admin Dashboard | Refresh Church",
  description: "Welcome to the Refresh Church admin dashboard",
}

export default async function AdminDashboard() {
  const supabase = await createClient()

  // Get some basic stats for the dashboard
  const { count: blogCount } = await supabase.from("blogs").select("*", { count: "exact", head: true })

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome to the Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Manage your church's content and settings from one central location.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{blogCount || 0}</div>
            <p className="text-xs text-muted-foreground mt-1">Total published blog posts</p>
          </CardContent>
        </Card>

        {/* Add more stat cards here as needed */}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Everything you need to know about the admin dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium flex items-center">
                <Edit className="h-4 w-4 mr-2" /> Content Management
              </h3>
              <p className="text-sm text-muted-foreground">
                All editable content can be found in the left sidebar. Click on any section to manage that content type.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium flex items-center">
                <Users className="h-4 w-4 mr-2" /> User Roles
              </h3>
              <p className="text-sm text-muted-foreground">
                Only authorized administrators can access this dashboard.
                {/* Each user can be assigned specific
                permissions. */}
              </p>
            </div>

            {/* <div className="space-y-2">
              <h3 className="font-medium flex items-center">
                <Settings className="h-4 w-4 mr-2" /> Site Settings
              </h3>
              <p className="text-sm text-muted-foreground">
                Configure global settings for your website through the settings section in the sidebar.
              </p>
            </div> */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you might want to perform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link
              href="/admin/blogs"
              className="flex items-center justify-between p-3 text-sm rounded-md border bg-card hover:bg-accent transition-colors"
            >
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                <span>Manage Blog Posts</span>
              </div>
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* Add more quick links as needed */}
            <Link
              href="/blog"
              className="flex items-center justify-between p-3 text-sm rounded-md border bg-card hover:bg-accent transition-colors"
              target="_blank"
            >
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                <span>View Public Blog</span>
              </div>
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* You can add more quick links here as you develop more features */}
          </CardContent>
        </Card>
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            If you need assistance using the admin dashboard or have questions about specific features, please contact
            your website administrator {" "}
            <a
              href="mailto:garrett@refresh.church"
              className="text-primary underline underline-offset-2 hover:text-primary/80 transition"
            >
              garrett@refresh.church
            </a>.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
