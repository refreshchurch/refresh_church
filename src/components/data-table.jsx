"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export function DataTable({
  data,
  columns,
  onDelete,
  editPath,
  emptyMessage = "No items found. Create your first item.",
  deleteConfirmMessage = "This action cannot be undone. This will permanently delete the item.",
}) {
  const router = useRouter()
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState(null)

  const handleEdit = (id) => {
    if (editPath) {
      router.push(`${editPath}/${id}`)
    }
  }

  const handleDelete = async () => {
    if (itemToDelete && onDelete) {
      await onDelete(itemToDelete)
      router.refresh()
      setDeleteDialogOpen(false)
      setItemToDelete(null)
    }
  }

  const confirmDelete = (id) => {
    setItemToDelete(id)
    setDeleteDialogOpen(true)
  }

  const formatCellValue = (value, type) => {
    if (value === null || value === undefined) return "N/A"
    
    switch (type) {
      case "date":
        return format(new Date(value), "MMM d, yyyy")
      case "datetime":
        return format(new Date(value), "MMM d, yyyy HH:mm")
      case "boolean":
        return value ? "Yes" : "No"
      case "json":
        return typeof value === "string" ? value : JSON.stringify(value)
      default:
        return value
    }
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.name}>{column.label}</TableHead>
              ))}
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length === 0  ? (
              <TableRow>
                <TableCell colSpan={columns.length + 1} className="text-center h-24">
                  {emptyMessage}
                </TableCell>
              </TableRow>
            ) : (
              data.map((item) => (
                <TableRow key={item.id}>
                  {columns.map((column) => (
                    <TableCell 
                      key={column.name}
                      className={column.className}
                    >
                      {formatCellValue(item[column.name], column.type)}
                    </TableCell>
                  ))}
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {editPath && (
                          <DropdownMenuItem onClick={() => handleEdit(item.id)} className="cursor-pointer">
                            <Pencil className="mr-2 h-4 w-4 " />
                            Edit
                          </DropdownMenuItem>
                        )}
                        {onDelete && (
                          <DropdownMenuItem
                            onClick={() => confirmDelete(item.id)}
                            className="text-destructive focus:text-destructive cursor-pointer"
                          >
                            <Trash2 className="mr-2 h-4 w-4 cursor-pointer" />
                            Delete
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              {deleteConfirmMessage}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground cursor-pointer">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
} 