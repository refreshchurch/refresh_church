import { createClient } from "@/lib/supabase/server"
import { SiteMapForm } from "@/components/site-map-form"
import { notFound } from "next/navigation"

export default async function EditSiteMapPage({ params }) {
  const supabase = await createClient()
  const { data: site_map } = await supabase
    .from("site_maps")
    .select("*")
    .eq("id", params.id)
    .single()

  if (!site_map) {
    notFound()
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Site Map</h1>
        <p className="text-muted-foreground">Edit your site map content.</p>
      </div>

      <SiteMapForm initialData={site_map} />
    </div>
  )
} 