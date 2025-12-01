"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function InfinitePhotoScroll({ event = "easter" }) {
  // Array of images based on event type
  const images = event === "christmas" 
    ? [
        { id: 1, src: "/photos/christmas/pexels-jill-wellington-1638660-3309626.jpg", alt: "Christmas photo 1" },
        { id: 2, src: "/photos/easter/img1.webp", alt: "Christmas photo 2" },
        { id: 3, src: "/photos/christmas/pexels-julia-larson-6113403.jpg", alt: "Christmas photo 3" },
        { id: 4, src: "/photos/easter/img2.webp", alt: "Christmas photo 4" },
        { id: 5, src: "/photos/christmas/pexels-timmossholder-383646.jpg", alt: "Christmas photo 5" },
        { id: 6, src: "/photos/easter/img5.webp", alt: "Christmas photo 6" },
        { id: 7, src: "/photos/christmas/pexels-thepaintedsquare-748648.jpg", alt: "Christmas photo 7" },
        { id: 8, src: "/photos/easter/img6.webp", alt: "Christmas photo 8" },
        { id: 9, src: "/photos/christmas/pexels-brett-sayles-1708601.jpg", alt: "Christmas photo 9" },
        { id: 10, src: "/photos/christmas/DSC04689.jpg", alt: "Christmas photo 10" },
        { id: 11, src: "/photos/christmas/pexels-anastasia-ilina-makarova-140436704-11229648.jpg", alt: "Christmas photo 11" },
        { id: 12, src: "/photos/christmas/DSC04718.jpg", alt: "Christmas photo 12" },
        { id: 13, src: "/photos/christmas/pexels-bynamnamnam-43716305-34802106.jpg", alt: "Christmas photo 13" },
        { id: 14, src: "/photos/christmas/pexels-84330351-34804414.jpg", alt: "Christmas photo 14" },
        { id: 15, src: "/photos/christmas/IMG_3886.JPG", alt: "Christmas photo 15" },
      ]
    : Array.from({ length: 16 }, (_, i) => ({
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