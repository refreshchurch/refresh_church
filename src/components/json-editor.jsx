"use client"

import { useEffect, useRef } from "react"
import { Editor } from "@monaco-editor/react"

export default function JsonEditor({ value, onChange, height = "300px" }) {
  const editorRef = useRef(null)

  function handleEditorDidMount(editor) {
    editorRef.current = editor
  }

  useEffect(() => {
    // If the editor is mounted and the value prop changes externally,
    // update the editor's value if it's different from the current value
    if (editorRef.current) {
      const currentValue = editorRef.current.getValue()
      if (value !== currentValue) {
        editorRef.current.setValue(value)
      }
    }
  }, [value])

  return (
    <div className="border rounded-md overflow-hidden">
      <Editor
        height={height}
        defaultLanguage="json"
        defaultValue={value}
        onChange={onChange}
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: false },
          formatOnPaste: true,
          formatOnType: true,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          folding: true,
          lineNumbers: "on",
          scrollbar: {
            vertical: "auto",
            horizontal: "auto",
          },
        }}
      />
    </div>
  )
}
