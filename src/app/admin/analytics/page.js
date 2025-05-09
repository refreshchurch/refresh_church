import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import { AnalyticsLoading } from "@/components/analytics-loading"

export const metadata = {
  title: "Analytics | Admin Dashboard",
  description: "Website analytics and visitor insights",
}

export default function AnalyticsPage() {
    return null
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground mt-2">Track website performance and visitor engagement.</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="visitors">Visitors</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Suspense fallback={<AnalyticsLoading />}>
            <AnalyticsDashboard period="7d" />
          </Suspense>
        </TabsContent>

        <TabsContent value="pages" className="space-y-4">
          <Suspense fallback={<AnalyticsLoading />}>
            <Card>
              <CardHeader>
                <CardTitle>Top Pages</CardTitle>
                <CardDescription>The most visited pages on your website.</CardDescription>
              </CardHeader>
              <CardContent>
                <Suspense
                  fallback={<div className="h-[350px] flex items-center justify-center">Loading page data...</div>}
                >
                  <TopPagesAnalytics />
                </Suspense>
              </CardContent>
            </Card>
          </Suspense>
        </TabsContent>

        <TabsContent value="visitors" className="space-y-4">
          <Suspense fallback={<AnalyticsLoading />}>
            <VisitorsAnalytics />
          </Suspense>
        </TabsContent>
      </Tabs>
    </div>
  )
}

async function TopPagesAnalytics() {
  const topPages = await fetchTopPages()

  return <TopPagesTable pages={topPages} />
}

async function VisitorsAnalytics() {
  const visitorData = await fetchVisitorData()

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Visitor Locations</CardTitle>
          <CardDescription>Geographic distribution of your visitors.</CardDescription>
        </CardHeader>
        <CardContent>
          <VisitorLocationsChart data={visitorData.locations} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Devices</CardTitle>
          <CardDescription>Types of devices used by your visitors.</CardDescription>
        </CardHeader>
        <CardContent>
          <DevicesChart data={visitorData.devices} />
        </CardContent>
      </Card>
    </div>
  )
}

async function fetchTopPages() {
  // This would be replaced with actual Vercel Analytics API call
  // For now, returning mock data
  return [
    { path: "/", views: 1245, visitors: 952 },
    { path: "/blog/how-to-pray", views: 867, visitors: 721 },
    { path: "/about", views: 532, visitors: 489 },
    { path: "/events", views: 423, visitors: 387 },
    { path: "/contact", views: 319, visitors: 298 },
  ]
}

async function fetchVisitorData() {
  // This would be replaced with actual Vercel Analytics API call
  // For now, returning mock data
  return {
    locations: [
      { country: "United States", visitors: 1245 },
      { country: "Canada", visitors: 532 },
      { country: "United Kingdom", visitors: 423 },
      { country: "Germany", visitors: 319 },
      { country: "Australia", visitors: 287 },
    ],
    devices: [
      { device: "Desktop", visitors: 1542 },
      { device: "Mobile", visitors: 2134 },
      { device: "Tablet", visitors: 487 },
    ],
  }
}

function TopPagesTable({ pages }) {
  return (
    <div className="relative w-full overflow-auto">
      <table className="w-full caption-bottom text-sm">
        <thead>
          <tr className="border-b">
            <th className="h-12 px-4 text-left align-middle font-medium">Page</th>
            <th className="h-12 px-4 text-right align-middle font-medium">Views</th>
            <th className="h-12 px-4 text-right align-middle font-medium">Visitors</th>
          </tr>
        </thead>
        <tbody>
          {pages.map((page) => (
            <tr key={page.path} className="border-b transition-colors hover:bg-muted/50">
              <td className="p-4 align-middle font-medium">{page.path}</td>
              <td className="p-4 align-middle text-right">{page.views.toLocaleString()}</td>
              <td className="p-4 align-middle text-right">{page.visitors.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function VisitorLocationsChart({ data }) {
  return (
    <div className="h-[350px]">
      <LocationBarChart data={data} />
    </div>
  )
}

function DevicesChart({ data }) {
  return (
    <div className="h-[350px]">
      <DevicesPieChart data={data} />
    </div>
  )
}

function LocationBarChart({ data }) {
  // This is a placeholder - we'll implement the actual chart in the components file
  return <div className="h-full flex items-center justify-center">Location chart will render here</div>
}

function DevicesPieChart({ data }) {
  // This is a placeholder - we'll implement the actual chart in the components file
  return <div className="h-full flex items-center justify-center">Devices chart will render here</div>
}
