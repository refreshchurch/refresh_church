"use client"

import { DataTable } from "@/components/data-table"
import { deleteBlog } from "@/lib/actions"

const columns = [
  { name: "title", label: "Title", className: "font-medium" },
  { name: "slug", label: "Slug" },
  { name: "created_at", label: "Created", type: "date" },
]

export function BlogsTable({ blogs }) {
  return (
    <DataTable
      data={blogs}
      columns={columns}
      onDelete={deleteBlog}
      editPath="/admin/blogs/edit"
      emptyMessage="No blogs found. Create your first blog post."
      deleteConfirmMessage="This action cannot be undone. This will permanently delete the blog post."
    />
  )
}
