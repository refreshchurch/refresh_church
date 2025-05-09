// "use client"

// import { useState, useEffect } from "react"
// import { Loader2, Trash2 } from 'lucide-react'

// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { toast } from "@/components/ui/use-toast"
// import { Badge } from "@/components/ui/badge"

// export function UsersList() {
//   const [users, setUsers] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [deletingId, setDeletingId] = useState(null)

//   useEffect(() => {
//     fetchUsers()
//   }, [])

//   async function fetchUsers() {
//     setIsLoading(true)
//     try {
//       const response = await fetch("/api/users")
//       if (!response.ok) {
//         throw new Error("Failed to fetch users")
//       }
//       const data = await response.json()
//       setUsers(data)
//     } catch (error) {
//       console.error("Error fetching users:", error)
//       toast({
//         title: "Error",
//         description: "Failed to load users. Please try again.",
//         variant: "destructive",
//       })
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   async function deleteUser(id) {
//     setDeletingId(id)
//     try {
//       const response = await fetch(`/api/users/${id}`, {
//         method: "DELETE",
//       })

//       if (!response.ok) {
//         throw new Error("Failed to delete user")
//       }

//       setUsers(users.filter((user) => user.id !== id))
//       toast({
//         title: "User deleted",
//         description: "The user has been removed from the allowed list.",
//       })
//     } catch (error) {
//       console.error("Error deleting user:", error)
//       toast({
//         title: "Error",
//         description: "Failed to delete user. Please try again.",
//         variant: "destructive",
//       })
//     } finally {
//       setDeletingId(null)
//     }
//   }

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Allowed Users</CardTitle>
//         <CardDescription>Users who are allowed to access the system</CardDescription>
//       </CardHeader>
//       <CardContent>
//         {isLoading ? (
//           <div className="flex justify-center py-8">
//             <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
//           </div>
//         ) : users.length === 0 ? (
//           <div className="py-8 text-center text-muted-foreground">No users found. Add your first user.</div>
//         ) : (
//           <div className="rounded-md border">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Name</TableHead>
//                   <TableHead>Email</TableHead>
//                   <TableHead>Role</TableHead>
//                   <TableHead className="text-right">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {users.map((user) => (
//                   <TableRow key={user.id}>
//                     <TableCell className="font-medium">{user.name}</TableCell>
//                     <TableCell>{user.email}</TableCell>
//                     <TableCell>
//                       <Badge variant="outline">{user.role || "user"}</Badge>
//                     </TableCell>
//                     <TableCell className="text-right">
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         onClick={() => deleteUser(user.id)}
//                         disabled={deletingId === user.id}
//                       >
//                         {deletingId === user.id ? (
//                           <Loader2 className="h-4 w-4 animate-spin" />
//                         ) : (
//                           <Trash2 className="h-4 w-4" />
//                         )}
//                         <span className="sr-only">Delete</span>
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   )
// }