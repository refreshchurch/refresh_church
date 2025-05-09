// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { z } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { Loader2, Plus } from 'lucide-react'

// import { Button } from "@/components/ui/button"
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { toast } from "@/components/ui/use-toast"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// const formSchema = z.object({
//   email: z.string().email({ message: "Please enter a valid email address" }),
//   name: z.string().min(2, { message: "Name must be at least 2 characters" }),
//   role: z.string().optional(),
// })

// export function AddUserForm() {
//   const router = useRouter()
//   const [isLoading, setIsLoading] = useState(false)

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       name: "",
//       role: "user",
//     },
//   })

//   async function onSubmit(values) {
//     setIsLoading(true)

//     try {
//       const response = await fetch("/api/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(values),
//       })

//       if (!response.ok) {
//         throw new Error("Failed to add user")
//       }

//       toast({
//         title: "User added successfully",
//         description: `${values.name} (${values.email}) has been added to the allowed users.`,
//       })

//       form.reset()
//       router.refresh()
//     } catch (error) {
//       console.error("Error adding user:", error)
//       toast({
//         title: "Error",
//         description: "Failed to add user. Please try again.",
//         variant: "destructive",
//       })
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Add New User</CardTitle>
//         <CardDescription>Add a new user to the allowed-emails table</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input placeholder="user@example.com" {...field} />
//                   </FormControl>
//                   <FormDescription>The email address of the user</FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="John Doe" {...field} />
//                   </FormControl>
//                   <FormDescription>The full name of the user</FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="role"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Role (Optional)</FormLabel>
//                   <FormControl>
//                     <Input placeholder="user" {...field} />
//                   </FormControl>
//                   <FormDescription>The role of the user (default: user)</FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <Button type="submit" disabled={isLoading} className="w-full">
//               {isLoading ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Adding...
//                 </>
//               ) : (
//                 <>
//                   <Plus className="mr-2 h-4 w-4" />
//                   Add User
//                 </>
//               )}
//             </Button>
//           </form>
//         </Form>
//       </CardContent>
//     </Card>
//   )
// }