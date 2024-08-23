"use client"

import { useEffect, useState } from "react";

export default function Sermons() {
  const [latestVideo, setLatestVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  const displayedVideos = [
    "https://www.youtube.com/embed/TjqX-0Katbo",
    "https://www.youtube.com/embed/xUP6sqec6kk",
    "https://www.youtube.com/embed/F3wW1BN4iBo",
    "https://www.youtube.com/embed/GaHVrnsXjI0"
  ];

  useEffect(() => {
    setLatestVideo("https://www.youtube.com/embed/KZ1Pcm7PgbU");
    setLoading(false);
  }, []);

  const handleViewAllClick = () => {
    window.open("https://www.youtube.com/@refreshchurchtv", "_blank");
  };

  return (
    <section className="w-full py-8 md:py-10 lg:py-12">
      <div className="container mx-auto px-8 md:px-24 lg:px-32 space-y-12">
        {/* Large video section */}
        <h2 className="text-3xl font-bold text-gray-900 tracking-tighter sm:text-4xl md:text-5xl">Sermons</h2>
        <div className="flex justify-center w-full">
          <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg">
            {loading ? (
              <div className="w-full h-full bg-gray-300 animate-pulse rounded-xl"></div>
            ) : (
              <iframe
                className="w-full h-full object-cover"
                src={latestVideo} // Replace with your larger video URL
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        {/* Recent Sermons */}
        <div className="space-y-6 w-full mt-32">
          <h2 className="text-2xl inline-block font-bold rounded-lg px-3 py-1 bg-gray-100 text-gray-900">Recent Sermons</h2>
          <div className="overflow-x-auto flex gap-6 snap-x w-full">
            {displayedVideos.map((videoUrl, index) => (
              <div key={index} className="flex-none w-[60%] sm:w-[50%] lg:w-[30%] snap-start">
                <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                  {loading ? (
                    <div className="w-full h-full bg-gray-300 animate-pulse rounded-xl"></div>
                  ) : (
                    <iframe
                      className="w-full h-full object-cover"
                      src={videoUrl}
                      title={`YouTube video player ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sermon Series */}
        <div className="space-y-6 mt-6 w-full">
          <h2 className="text-2xl inline-block font-bold rounded-lg px-3 py-1 bg-gray-100 text-gray-900">Sermon Series</h2>
          <div className="overflow-x-auto flex gap-6 snap-x w-full">
            {displayedVideos.map((videoUrl, index) => (
              <div key={index} className="flex-none w-[60%] sm:w-[50%] lg:w-[30%] snap-start">
                <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                  {loading ? (
                    <div className="w-full h-full bg-gray-300 animate-pulse rounded-xl"></div>
                  ) : (
                    <iframe
                      className="w-full h-full object-cover"
                      src={videoUrl}
                      title={`YouTube video player ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 w-full flex items-center justify-center">
          <button onClick={handleViewAllClick}  className="flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primaryDark transition duration-300 ease-in-out">
            View All Sermons
            <svg className="w-5 h-5 ms-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}
