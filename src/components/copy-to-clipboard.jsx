"use client"

import { Check } from "lucide-react"
import { useEffect, useState } from "react"

export function CopiedToClipboard({ show, onHide, duration = 2000, className = "" }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        setIsVisible(false)
        onHide?.()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [show, duration, onHide])

  if (!isVisible) return null

  return (
    <div className={`fixed top-4 right-4 z-50 ${className}`}>
      <div className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg animate-in fade-in-0 slide-in-from-top-2 duration-300">
        <div className="flex items-center justify-center w-5 h-5 bg-gray-700 rounded-full animate-in zoom-in-50 duration-500 delay-100">
          <Check className="w-3 h-3 text-green-400 animate-in zoom-in-0 duration-300 delay-200" />
        </div>
        <span className="text-sm font-medium">Copied to clipboard</span>
      </div>
    </div>
  )
}

