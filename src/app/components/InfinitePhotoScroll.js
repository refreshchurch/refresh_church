"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function InfinitePhotoScroll() {
  // Array of images (increase length to add more photos easily)
  const images = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    src: `/photos/easter/img${i + 1}.webp`,
    alt: `Easter photo ${i + 1}`,
  }));

  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    let animationFrame;

    const smoothScroll = () => {
      scrollAmount += .8; // Adjust for faster/slower scrolling
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0; // Loop back smoothly
      }
      scrollContainer.scrollLeft = scrollAmount;
      animationFrame = requestAnimationFrame(smoothScroll);
    };

    animationFrame = requestAnimationFrame(smoothScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative overflow-hidden w-full">
      <div ref={scrollRef} className="flex whitespace-nowrap overflow-x-scroll scroll-container">
        {/* Render original + duplicate images for seamless infinite loop */}
        {[...images, ...images].map((image, index) => (
          <div
            key={`image-${index}`}
            className="relative h-64 w-64 flex-shrink-0 overflow-hidden sm:h-72 sm:w-72 md:h-80 md:w-80"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}