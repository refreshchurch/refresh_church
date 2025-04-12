// Add near bottom of EasterPage component
"use client"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function PlanVisitSticky({ message, buttonText, href, canBeClosed}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, 1500)
    return () => clearTimeout(timeout)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-auto bg-primary text-white rounded-full shadow-lg px-6 py-3 flex items-center gap-4">
      <span className="font-semibold">{message}</span>
      <Link
        href={href}
        className="bg-white text-primary font-bold px-4 py-2 rounded-full hover:bg-gray-100 transition"
      >
        {buttonText}
      </Link>
      {canBeClosed &&
        <button onClick={() => setIsVisible(false)} className="ml-2 text-white hover:text-gray-200 text-xl">
          &times;
        </button>
      }
    </div>
  )
}
