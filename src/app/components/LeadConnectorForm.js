"use client"
import { useEffect, useRef } from "react"

export default function LeadConnectorForm() {
  const containerRef = useRef(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://link.msgsndr.com/js/form_embed.js"
    script.async = true
    containerRef.current?.appendChild(script)
  }, [])

  return (
    <div ref={containerRef}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/00dOLbBTurzLJHNzAfa2"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "3px"
        }}
        id="inline-00dOLbBTurzLJHNzAfa2"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="PYV - Refresh Church - Easter"
        data-height="897"
        data-layout-iframe-id="inline-00dOLbBTurzLJHNzAfa2"
        data-form-id="00dOLbBTurzLJHNzAfa2"
        title="PYV - Refresh Church - Easter"
      ></iframe>
    </div>
  )
}
