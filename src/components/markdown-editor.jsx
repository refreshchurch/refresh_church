"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

// Dynamically import the markdown preview component
const MarkdownPreview = dynamic(() => import("./markdown-preview"), {
  ssr: false,
  loading: () => <div className="h-96 w-full rounded-md border border-input bg-muted/20 animate-pulse" />,
})

export default function MarkdownEditor({ value, onChange, className }) {
  const [activeTab, setActiveTab] = useState("write")
  const [editorHeight, setEditorHeight] = useState(500)

  // Adjust editor height based on content
  useEffect(() => {
    const lineCount = (value.match(/\n/g) || []).length + 1
    const newHeight = Math.max(500, Math.min(800, lineCount * 24))
    setEditorHeight(newHeight)
  }, [value])

  return (
    <div className={cn("rounded-md border", className)}>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <TabsList>
            <TabsTrigger value="write">Write</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="write" className="p-0 mt-0">
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Write your content using Markdown..."
            className="min-h-[500px] rounded-none border-0 resize-none font-mono text-sm p-4"
            style={{ height: `${editorHeight}px` }}
          />
        </TabsContent>

        <TabsContent value="preview" className="p-0 mt-0">
          <div
            className="min-h-[500px] p-4 overflow-auto prose prose-slate dark:prose-invert max-w-none"
            style={{ height: `${editorHeight}px` }}
          >
            <MarkdownPreview content={value} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
