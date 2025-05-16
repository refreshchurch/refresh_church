"use client"

import { useEffect } from "react"
import { DataTable } from "./data-table"
import { deleteSchema } from "@/lib/actions"


const columns = [
    { name: "name", label: "Name", className: "font-medium" },
    { name: "schema_json", label: "Schema", type: "json" },
    { name: "enabled", label: "Enabled", type: "boolean" },
    { name: "updated_at", label: "Last Updated", type: "date" },
  ]
  
  export function SiteSchemaTable({ site_schema }) {
    useEffect(() => {
      console.log("Site schema data:", site_schema)
    }, [site_schema])
    return (
      <DataTable
        data={site_schema}
        columns={columns}
        onDelete={deleteSchema}
        editPath="/admin/site-schema/edit"
        emptyMessage="No schemas found. Create your first schema."
        deleteConfirmMessage="This action cannot be undone. This will permanently delete the schema."
      />
    )
  }