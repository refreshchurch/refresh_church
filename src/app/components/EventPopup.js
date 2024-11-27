import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import Link from 'next/link'

const POPUP_SESSION_KEY = 'eventPopupSeen'

export default function EventPopup({ id, imageUrl, eventUrl, delay = 4000 }) {
  const [isVisible, setIsVisible] = useState(false)
  const [aspectRatio, setAspectRatio] = useState(1)

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem(`popup-${id}`)
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsVisible(true), delay)
      return () => clearTimeout(timer)
    }
  }, [id, delay])

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
          width: '90vw',
          maxWidth: '600px',
          aspectRatio: aspectRatio,
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
