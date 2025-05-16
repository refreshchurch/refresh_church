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

export async function createSiteSchema({ id, name, schema_json, enabled }) {
  "use server"

  const supabase = await createClient()

  try {
    // Validate that schema_json is valid JSON
    JSON.parse(schema_json)

    if (id) {
      // Update existing schema
      const { error } = await supabase
        .from("site_schemas")
        .update({
          name,
          schema_json,
          enabled,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id)

      if (error) throw error
      return { success: true, id }
    } else {
      // Create new schema
      const { data, error } = await supabase
        .from("site_schemas")
        .insert({
          name,
          schema_json,
          enabled,
        })
        .select("id")
        .single()

      if (error) throw error
      return { success: true, id: data.id }
    }
  } catch (error) {
    console.error("Error in createSiteSchema:", error)
    throw new Error("Failed to save site schema")
  }
}

export async function deleteSchema(id) {
  const supabase = await createClient()

  try {
    const { error } = await supabase.from("site_schemas").delete().eq("id", id)

    if (error) throw error

    revalidatePath("/admin/site-schema")
    return { success: true }
  } catch (error) {
    console.error("Error deleting site schema:", error)
    return { success: false, error }
  }
}

export async function saveRobotsConfig({ id, robots_txt }) {
  "use server"

  const supabase = await createClient()

  try {
    // Check if a robots config already exists
    if (!id) {
      const { data: existingConfig } = await supabase.from("robots_config").select("id").limit(1).single()

      id = existingConfig?.id
    }

    if (id) {
      // Update existing config
      const { error } = await supabase
        .from("robots_config")
        .update({
          robots_txt,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id)

      if (error) throw error
      return { success: true, id }
    } else {
      // Create new config
      const { data, error } = await supabase
        .from("robots_config")
        .insert({
          robots_txt,
        })
        .select("id")
        .single()

      if (error) throw error
      return { success: true, id: data.id }
    }
  } catch (error) {
    console.error("Error in saveRobotsConfig:", error)
    throw new Error("Failed to save robots.txt configuration")
  }
}
