"use client"

import { useEffect } from "react"
import { DataTable } from "./data-table"
import { createClient } from "@/lib/supabase/client"
import { toast } from "sonner"

const columns = [
  { name: "content", label: "Content", type: "json" },
  { name: "updated_at", label: "Last Updated", type: "datetime" },
]

const deleteSiteMap = async (id) => {
  try {
    const supabase = createClient()
    const { error } = await supabase.from("site_maps").delete().eq("id", id)
    if (error) throw error
    toast.success("Site map deleted successfully")
  } catch (error) {
    toast.error("Something went wrong")
    console.error(error)
  }
}

export function SiteMapTable({ site_maps }) {
  useEffect(() => {
    console.log("Site map data:", site_maps)
  }, [site_maps])

  return (
    <DataTable
      data={site_maps}
      columns={columns}
      onDelete={deleteSiteMap}
      editPath="/admin/site-map/edit"
      emptyMessage="No site maps found. Create your first site map."
      deleteConfirmMessage="This action cannot be undone. This will permanently delete the site map."
    />
  )
} 