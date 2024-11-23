import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import Link from 'next/link'

export default function EventPopup({ imageUrl, eventUrl }) {
  const [isVisible, setIsVisible] = useState(false)
  const [aspectRatio, setAspectRatio] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500) // Show popup after 1.5 seconds
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const img = new window.Image()
      img.src = imageUrl
      img.onload = () => {
        if (img.width && img.height) {
          setAspectRatio(img.width / img.height)
        }
      }
    }
  }, [imageUrl])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[214748363612] p-4">
      <div 
        className="relative bg-white rounded-lg shadow-lg overflow-hidden" 
        style={{
          width: '90vw', // Occupies 90% of viewport width
          maxWidth: '600px', // Maximum width to prevent it from being too large
          aspectRatio: aspectRatio, // Dynamically set aspect ratio
        }}
      >
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Close popup"
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1 z-10"
        >
          <X size={24} />
        </button>
        <Link href={eventUrl} className="block w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src={imageUrl}
              alt="Event image"
              layout="fill"
              objectFit="contain" // Ensures the full image is visible without being cut
              className="rounded-lg"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
