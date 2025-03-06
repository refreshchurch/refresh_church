"use client"

import Image from "next/image"

export function InfinitePhotoScroll() {
  // Array of 16 placeholder images
  const images = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    src: `/photos/easter/img${i + 1}.jpg`,
    alt: `Easter photo ${i + 1}`
  }))

  return (
    <div className="relative overflow-hidden">
      {/* <h2 className="mb-6 text-center text-3xl font-bold">Easter Celebrations</h2> */}
      <div className="w-full overflow-hidden">
        <div className="flex animate-scroll">
          {/* Original set of images */}
          {images.map((image) => (
            <div
              key={`original-${image.id}`}
              className="relative h-64 w-64 flex-shrink-0 overflow-hidden sm:h-72 sm:w-72 md:h-80 md:w-80"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
          {/* Duplicate set of images for seamless looping */}
          {images.map((image) => (
            <div
              key={`duplicate-${image.id}`}
              className="relative h-64 w-64 flex-shrink-0 overflow-hidden sm:h-72 sm:w-72 md:h-80 md:w-80"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
