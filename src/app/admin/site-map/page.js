import { Suspense } from "react"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { SiteMapTable } from "@/components/site-map-table"
import { SiteMapForm } from "@/components/site-map-form"

export default async function SiteMapPage() {
  const supabase = await createClient()
  const { data: site_maps, error } = await supabase.from("site_maps").select("*")
  
  if (error) console.error("Supabase error:", error.message)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Site Map</h1>
          <p className="text-muted-foreground">Create and manage site maps for your website.</p>
          <Button asChild variant="outline" className="text-xs" size="sm">
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all-maps">
        <TabsList>
          <TabsTrigger value="all-maps">All Maps</TabsTrigger>
          <TabsTrigger value="new-map">New Map</TabsTrigger>
        </TabsList>
        <TabsContent value="all-maps" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>All Site Maps</CardTitle>
              <CardDescription>View and manage all your site maps.</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div>Loading site maps...</div>}>
                <SiteMapTable site_maps={site_maps || []} />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="new-map" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Create New Site Map</CardTitle>
              <CardDescription>Add a new site map with XML content.</CardDescription>
            </CardHeader>
            <CardContent>
              <SiteMapForm/>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 