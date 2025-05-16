// reroute to the parent file
import { redirect } from 'next/navigation'

export default function EditBlogPage() {
  redirect('/admin/robot-config')
}