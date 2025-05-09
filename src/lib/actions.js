"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"

export async function createBlog(data) {
  const supabase = await createClient()

  try {
    if (data.id) {
      // Update existing blog
      const { error } = await supabase
        .from("blogs")
        .update({
          title: data.title,
          slug: data.slug,
          content: data.content,
          updated_at: new Date().toISOString(),
        })
        .eq("id", data.id)

      if (error) throw error
    } else {
      // Create new blog
      const { error } = await supabase.from("blogs").insert({
        title: data.title,
        slug: data.slug,
        content: data.content,
      })

      if (error) throw error
    }

    revalidatePath("/admin/blogs")
    return { success: true }
  } catch (error) {
    console.error("Error saving blog:", error)
    return { success: false, error }
  }
}

export async function deleteBlog(id) {
  const supabase = await createClient()

  try {
    const { error } = await supabase.from("blogs").delete().eq("id", id)

    if (error) throw error

    revalidatePath("/admin/blogs")
    return { success: true }
  } catch (error) {
    console.error("Error deleting blog:", error)
    return { success: false, error }
  }
}