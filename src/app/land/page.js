/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const LAND_VIDEO_POSTER = "/photos/land/land-video-thumb.jpg";
/** From https://youtu.be/e5iIWp95rRo — embed uses the same ID */
const LAND_YOUTUBE_VIDEO_ID = "e5iIWp95rRo";

const LAND_PHOTOS = [
  // {
  //   src: "/photos/land/01.png",
  //   alt: "View of Refresh Church land in Meridian, Idaho",
  // },
  {
    src: "/photos/land/09.png",
    alt: "Wide view of purchased land for Refresh Church",
  },
  {
    src: "/photos/land/05.png",
    alt: "Meridian land for Refresh Church",
  },
  {
    src: "/photos/land/10.png",
    alt: "Refresh Church land in the Treasure Valley",
  },
  {
    src: "/photos/land/04.png",
    alt: "Open land at the Refresh Church site",
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
    src: "/photos/land/03.png",
    alt: "Land purchased for future Refresh Church ministry",
  },

  {
    src: "/photos/land/02.png",
    alt: "Refresh Church property landscape",
  },
];

export default function LandPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const touchStartX = useRef(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + LAND_PHOTOS.length) % LAND_PHOTOS.length
    );
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % LAND_PHOTOS.length
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, goPrev, goNext]);

  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      <h1 className="text-4xl font-bold text-gray-900 tracking-tighter sm:text-5xl md:text-6xl mb-6">
        Our Land
      </h1>
      <div className="bg-primaryDark text-white p-6 rounded-lg mb-10 w-full">
        <p className="text-lg text-left">
          God has made a way for Refresh Church to purchase land in Meridian. We
          are grateful for this step toward long-term ministry in the Treasure
          Valley and for everyone who has prayed and given along the way and for everyone believing with us.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Full Story</h2>
      <div className="flex flex-wrap gap-4 justify-center mb-14">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-white shadow-md sm:aspect-17/9">
          {isPlaying ? (
            <iframe
              title="Full Story"
              src={`https://www.youtube.com/embed/${LAND_YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : (
            <button
              type="button"
              className="group absolute inset-0 block cursor-pointer border-0 p-0"
              onClick={() => setIsPlaying(true)}
              aria-label="Play intro video"
            >
              <Image
                src={LAND_VIDEO_POSTER}
                alt="Land video thumbnail"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 896px"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/05 transition-colors group-hover:bg-black/30">
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-black/50 text-3xl text-white shadow-lg transition-all duration-300 group-hover:bg-black/70 sm:h-20 sm:w-20 sm:text-4xl"
                  aria-hidden
                >
                  ▶
                </span>
              </div>
            </button>
          )}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">All photos</h2>
      <div className="grid grid-cols-2 gap-6 mb-12">
        {LAND_PHOTOS.map((photo, index) => {
          // index 0 → full width; then pairs starting at 1: positions 1,2 are half; 3,4 half; etc.
          // Within the shifted index (index - 1), even = first of pair → half width, odd = second → half width.
          // Only index 0 spans both columns.
          const isFullWidth = index < 3;
          return (
            <button
              key={`grid-${photo.src}`}
              type="button"
              className={`group relative w-full cursor-zoom-in overflow-hidden rounded-xl border-0 bg-neutral-100 p-0 text-left shadow-md transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isFullWidth ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}
              onClick={() => setLightboxIndex(index)}
              aria-label={`Open photo ${index + 1} of ${LAND_PHOTOS.length} in gallery`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes={isFullWidth ? "100vw" : "(max-width: 640px) 100vw, 50vw"}
              />
            </button>
          );
        })}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-2 backdrop-blur-[2px] sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery"
          onClick={() => setLightboxIndex(null)}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            touchStartX.current = null;
            if (dx > 60) goPrev();
            else if (dx < -60) goNext();
          }}
        >
          <button
            type="button"
            className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>

          <button
            type="button"
            className="absolute left-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-4 sm:h-12 sm:w-12"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden />
          </button>

          <button
            type="button"
            className="absolute right-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-4 sm:h-12 sm:w-12"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next photo"
          >
            <ChevronRight className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden />
          </button>

          <div
            className="flex w-full max-w-[min(98vw,1920px)] max-h-[96vh] flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LAND_PHOTOS[lightboxIndex].src}
              alt={LAND_PHOTOS[lightboxIndex].alt}
              className="h-auto w-auto max-h-[90vh] max-w-[min(96vw,1920px)] rounded-lg object-contain shadow-2xl ring-1 ring-black/10 sm:max-h-[94vh]"
            />
            <p className="mt-3 text-center text-sm font-medium text-white/90 drop-shadow-md">
              {lightboxIndex + 1} / {LAND_PHOTOS.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
