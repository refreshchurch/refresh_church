import { Suspense } from "react"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { SiteSchemaTable } from "@/components/site-schema-table"
import { SiteSchemaForm } from "@/components/site-schema-form"

export default async function SiteSchemaPage() {
  const supabase = await createClient()
  const { data: site_schema, error } = await supabase.from("site_schemas").select("*")
  
  if (error) console.error("Supabase error:", error.message)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Site Schema</h1>
          <p className="text-muted-foreground">Create and manage site schema posts for your website.</p>
          <Button asChild variant="outline" className="text-xs" size="sm">
          </Button>
        </div>

      </div>

      <Tabs defaultValue="all-schemas">
        <TabsList>
          <TabsTrigger value="all-schemas">All Schemas</TabsTrigger>
          <TabsTrigger value="new-schemas">New Schema</TabsTrigger>
        </TabsList>
        <TabsContent value="all-schemas" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>All Schemas</CardTitle>
              <CardDescription>View and manage all your site schemas.</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div>Loading schemas...</div>}>
                <SiteSchemaTable site_schema={site_schema || []} />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="new-schemas" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Create New Schema</CardTitle>
              <CardDescription>Add a new schema with markdown content.</CardDescription>
            </CardHeader>
            <CardContent>
              <SiteSchemaForm/>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}