import { Suspense } from "react"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { RobotsConfigForm } from "@/components/robot-config-form"

export default async function BlogsPage() {
  const supabase = await createClient()
  const { data: robotsConfig } = await supabase.from("robots_config").select("*").limit(1).single()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Robot Config</h1>
          <p className="text-muted-foreground">Create and manage robot config for your website.</p>
          <Button asChild variant="outline" className="text-xs" size="sm">
          </Button>
        </div>
      </div>

      <RobotsConfigForm initialData={robotsConfig || {}} />
    </div>
  )
}