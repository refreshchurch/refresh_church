"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export function SiteMapForm({ initialData = {} }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [content, setContent] = useState(initialData.content || "")

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const supabase = createClient()
      const { error } = await supabase.from("site_maps").upsert({
        id: initialData.id,
        content,
        updated_at: new Date().toISOString(),
      })

      if (error) throw error

      toast.success("Site map saved successfully")
      router.refresh()
      router.push("/admin/site-map")
      if (!initialData.id) {
        setContent("")
      }
    } catch (error) {
      toast.error("Something went wrong")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Textarea
          placeholder="Enter your site map XML content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[400px] font-mono"
          required
        />
      </div>
      <div className="flex justify-end">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </form>
  )
} 