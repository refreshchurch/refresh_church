"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AreaChart, BarChart, PieChart } from "@/components/ui/chart"
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, Users, MousePointerClick, Clock, BarChart3 } from "lucide-react"

// This would normally come from the Vercel Analytics API
// For now, we're using mock data
const analyticsData = {
  summary: {
    visitors: {
      total: 12547,
      change: 12.5,
      increasing: true,
    },
    pageViews: {
      total: 48293,
      change: 8.2,
      increasing: true,
    },
    bounceRate: {
      total: 42.3,
      change: -3.1,
      increasing: false,
    },
    avgSessionTime: {
      total: 183, // in seconds
      change: 5.4,
      increasing: true,
    },
  },
  dailyVisitors: [
    { date: "2023-05-01", visitors: 1234 },
    { date: "2023-05-02", visitors: 1356 },
    { date: "2023-05-03", visitors: 1489 },
    { date: "2023-05-04", visitors: 1245 },
    { date: "2023-05-05", visitors: 1367 },
    { date: "2023-05-06", visitors: 1789 },
    { date: "2023-05-07", visitors: 1567 },
  ],
  trafficSources: [
    { source: "Direct", visitors: 4235 },
    { source: "Search", visitors: 3567 },
    { source: "Social", visitors: 2789 },
    { source: "Referral", visitors: 1456 },
    { source: "Email", visitors: 500 },
  ],
  deviceTypes: [
    { device: "Desktop", visitors: 5678 },
    { device: "Mobile", visitors: 6234 },
    { device: "Tablet", visitors: 635 },
  ],
}

export function AnalyticsDashboard({ period = "7d" }) {
  const [timeframe, setTimeframe] = useState(period)

  // In a real implementation, we would fetch different data based on the timeframe

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Visitors"
          value={analyticsData.summary.visitors.total.toLocaleString()}
          change={analyticsData.summary.visitors.change}
          increasing={analyticsData.summary.visitors.increasing}
          icon={<Users className="h-4 w-4" />}
        />
        <MetricCard
          title="Page Views"
          value={analyticsData.summary.pageViews.total.toLocaleString()}
          change={analyticsData.summary.pageViews.change}
          increasing={analyticsData.summary.pageViews.increasing}
          icon={<BarChart3 className="h-4 w-4" />}
        />
        <MetricCard
          title="Bounce Rate"
          value={`${analyticsData.summary.bounceRate.total}%`}
          change={analyticsData.summary.bounceRate.change}
          increasing={analyticsData.summary.bounceRate.increasing}
          invertIncrease={true}
          icon={<MousePointerClick className="h-4 w-4" />}
        />
        <MetricCard
          title="Avg. Session Time"
          value={formatTime(analyticsData.summary.avgSessionTime.total)}
          change={analyticsData.summary.avgSessionTime.change}
          increasing={analyticsData.summary.avgSessionTime.increasing}
          icon={<Clock className="h-4 w-4" />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Visitors</CardTitle>
            <CardDescription>Daily visitor count for the past week</CardDescription>
            <Tabs defaultValue={timeframe} className="mt-2" onValueChange={setTimeframe}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="7d">7 days</TabsTrigger>
                <TabsTrigger value="30d">30 days</TabsTrigger>
                <TabsTrigger value="90d">90 days</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <AreaChart
                data={analyticsData.dailyVisitors}
                index="date"
                categories={["visitors"]}
                colors={["blue"]}
                valueFormatter={(value) => `${value.toLocaleString()} visitors`}
                className="h-full"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Where your visitors are coming from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <BarChart
                data={analyticsData.trafficSources}
                index="source"
                categories={["visitors"]}
                colors={["blue"]}
                valueFormatter={(value) => `${value.toLocaleString()} visitors`}
                layout="vertical"
                className="h-full"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Device Types</CardTitle>
            <CardDescription>Devices used by your visitors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <PieChart
                data={analyticsData.deviceTypes}
                index="device"
                category="visitors"
                valueFormatter={(value) => `${value.toLocaleString()} visitors`}
                className="h-full"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle>Quick Insights</CardTitle>
              <CardDescription>Key takeaways from your analytics</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <div className="rounded-full p-1 bg-green-100 dark:bg-green-900">
                  <ArrowUpIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Mobile traffic is growing</p>
                  <p className="text-sm text-muted-foreground">
                    Mobile visitors have increased by 15% compared to last month.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="rounded-full p-1 bg-amber-100 dark:bg-amber-900">
                  <ArrowRightIcon className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Blog engagement is steady</p>
                  <p className="text-sm text-muted-foreground">
                    Blog pages maintain consistent traffic with an average of 3 minutes per visit.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="rounded-full p-1 bg-red-100 dark:bg-red-900">
                  <ArrowDownIcon className="h-4 w-4 text-red-600 dark:text-red-400" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Contact page has high bounce rate</p>
                  <p className="text-sm text-muted-foreground">
                    The contact page has a 65% bounce rate, consider reviewing its design.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function MetricCard({ title, value, change, increasing, invertIncrease = false, icon }) {
  // For metrics like bounce rate, a decrease is actually good
  const isPositive = invertIncrease ? !increasing : increasing

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1 flex items-center">
          {increasing ? (
            <ArrowUpIcon className={`h-4 w-4 mr-1 ${isPositive ? "text-green-500" : "text-red-500"}`} />
          ) : (
            <ArrowDownIcon className={`h-4 w-4 mr-1 ${isPositive ? "text-red-500" : "text-green-500"}`} />
          )}
          <span className={isPositive ? "text-green-500" : "text-red-500"}>
            {change}% {increasing ? "increase" : "decrease"}
          </span>
        </p>
      </CardContent>
    </Card>
  )
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}m ${remainingSeconds}s`
}