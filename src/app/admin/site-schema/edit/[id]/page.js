import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { notFound } from "next/navigation"
import { SiteSchemaForm } from "@/components/site-schema-form"

export default async function EditSiteSchemaPage({ params }) {
  const supabase = await createClient()
  const { data: site_schema, error } = await supabase.from("site_schemas").select("*").eq("id", params.id).single()

  if (error || !site_schema) {
    notFound()
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Edit Site Schema</h1>
          <p className="text-muted-foreground">Make changes to your site schema post.</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Edit Site Schema</CardTitle>
          <CardDescription>Update your site schema content and settings.</CardDescription>
        </CardHeader>
        <CardContent>
            <SiteSchemaForm initialData={site_schema} />
        </CardContent>
      </Card>
    </div>
  )
}