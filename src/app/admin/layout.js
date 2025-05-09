import { AppSidebar } from "@/components/app-sidebar"
import AdminBreadcrumb from "@/components/admin-breadcrumb"
import {
  Separator
} from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SquareArrowLeft } from "lucide-react"

export const metadata = {
  title: "Admin Panel",
  description: "Admin area for managing Refresh Church",
}

export default async function AdminLayout({ children }) {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    redirect("/auth/login")
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Suspense fallback={null}>
              <AdminBreadcrumb />
            </Suspense>
          </div>
          <div className="ml-auto mr-4">
            <Button asChild variant="outline" size="sm">
              <Link href="/" className="flex items-center gap-2">
                <SquareArrowLeft className="h-4 w-4" />
                Return to Site
              </Link>
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}