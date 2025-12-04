import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import Link from 'next/link'

export default function EventPopup({ id, imageUrl, eventUrl, delay = 4000, endDate }) {
  const [isVisible, setIsVisible] = useState(false)
  const [aspectRatio, setAspectRatio] = useState(1)
  const [dimensions, setDimensions] = useState({ width: '90vw', height: 'auto' })

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem(`popup-${id}`)
    const now = new Date()
    const endDateTime = new Date(endDate)

    if (!hasSeenPopup && now < endDateTime) {
      const timer = setTimeout(() => setIsVisible(true), delay)
      return () => clearTimeout(timer)
    }
  }, [id, delay, endDate])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const img = new window.Image()
      let cleanup = null
      
      img.src = imageUrl 
      img.onload = () => {
        if (img.width && img.height) {
          const ratio = img.width / img.height
          setAspectRatio(ratio)
          
          // Calculate dimensions that fit within viewport
          const calculateDimensions = () => {
            const maxWidth = Math.min(window.innerWidth * 0.9, 600)
            const maxHeight = window.innerHeight - 32 // Account for padding (2rem = 32px)
            
            // Calculate width and height based on aspect ratio
            let width = maxWidth
            let height = width / ratio
            
            // If height exceeds maxHeight, scale down width
            if (height > maxHeight) {
              height = maxHeight
              width = height * ratio
            }
            
            setDimensions({ width: `${width}px`, height: `${height}px` })
          }
          
          calculateDimensions()
          window.addEventListener('resize', calculateDimensions)
          cleanup = () => window.removeEventListener('resize', calculateDimensions)
        }
      }
      
      return () => {
        if (cleanup) cleanup()
      }
    }
  }, [imageUrl])
  
  const handleClose = () => {
    setIsVisible(false)
    sessionStorage.setItem(`popup-${id}`, 'true')
  }

  if (!isVisible) return null


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-[214748363612] p-4">
      <div 
        className="relative bg-white rounded-lg shadow-lg overflow-hidden" 
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
      >
        <button
          onClick={handleClose}
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
              objectFit="contain"
              className="rounded-lg draggable-none"
              draggable="false"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
