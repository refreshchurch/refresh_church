/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LAND_PHOTOS = [
  {
    src: "/photos/land/01.png",
    alt: "View of Refresh Church land in Meridian, Idaho",
  },
  {
    src: "/photos/land/02.png",
    alt: "Refresh Church property landscape",
  },
  {
    src: "/photos/land/03.png",
    alt: "Land purchased for future Refresh Church ministry",
  },
  {
    src: "/photos/land/04.png",
    alt: "Open land at the Refresh Church site",
  },
  {
    src: "/photos/land/05.png",
    alt: "Meridian land for Refresh Church",
  },
  {
    src: "/photos/land/06.png",
    alt: "Ground and horizon on Refresh Church land",
  },
  {
    src: "/photos/land/07.png",
    alt: "Refresh Church land from another angle",
  },
  {
    src: "/photos/land/08.png",
    alt: "Property lines and terrain at Refresh Church land",
  },
  {
    src: "/photos/land/09.png",
    alt: "Wide view of purchased land for Refresh Church",
  },
  {
    src: "/photos/land/10.png",
    alt: "Refresh Church land in the Treasure Valley",
  },
];

export default function LandPage() {
  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      <h1 className="text-4xl font-bold text-gray-900 tracking-tighter sm:text-5xl md:text-6xl mb-6">
        Our Land
      </h1>
      <div className="bg-primaryDark text-white p-6 rounded-lg mb-10 w-full">
        <p className="text-lg text-left">
        God has made a way for Refresh Church to purchase land in Meridian. We
        are grateful for this step toward long-term ministry in the Treasure
        Valley and for everyone who has prayed and given along the way.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Photo tour</h2>
      <p className="text-lg text-gray-700 mb-6 max-w-3xl">
        Swipe or use the arrows to browse the same images we have been sharing
        from the property.
      </p>

      <div className="rounded-2xl overflow-hidden shadow-lg mb-14 bg-neutral-900 [&_.carousel.carousel-slider]:rounded-2xl">
        <Carousel
          showThumbs
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          swipeable
          emulateTouch
          className="land-carousel"
        >
          {LAND_PHOTOS.map((photo, index) => (
            <div key={photo.src}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full max-h-[min(70vh,720px)] object-contain sm:object-cover align-top"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : undefined}
                draggable={false}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">All photos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {LAND_PHOTOS.map((photo) => (
          <div
            key={`grid-${photo.src}`}
            className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-neutral-100"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
