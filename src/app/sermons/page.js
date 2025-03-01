"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Sermons() {
  const [latestVideo, setLatestVideo] = useState(null);
  const [sermons, setSermons] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const observer = useRef();

  useEffect(() => {
    fetchYouTubeData();
  }, []);

  useEffect(() => {
    console.log("Sermons state changed:", sermons);
  }, [sermons]);

  const fetchYouTubeData = async () => {
    try {
      const response = await fetch("/api/youtube");
      const data = await response.json();
      setSermons(data.items || []);
    } catch (error) {
      console.error("Error fetching YouTube data:", error);
    }
  };

  // Infinite Scroll Observer
  const lastSermonRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && nextPageToken) {
        fetchYouTubeData(nextPageToken);
      }
    });
    if (node) observer.current.observe(node);
  };

  return (
    <section className="w-full py-8 md:py-10 lg:py-12">
      <div className="container mx-auto px-8 md:px-24 lg:px-32 space-y-12">

        {/* Featured Sermon (Latest Video) */}
        <h2 className="text-3xl font-bold text-gray-900 tracking-tighter md:text-4xl">
          Sermons
        </h2>
        {loading ? (
          <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg bg-gray-300 animate-pulse"></div>
        ) : latestVideo && (
          <Link href={`/sermons/${latestVideo.id.videoId}`} className="block pb-3">
            <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg">
              <Image
                width={500}
                height={500}
                src={latestVideo.snippet.thumbnails.high.url}
                alt={latestVideo.snippet.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-5.197-3.004a1 1 0 00-1.555.832v6.008a1 1 0 001.555.832l5.197-3.004a1 1 0 000-1.664z" />
                </svg>
              </div>
            </div>
            <h3 className="mt-2 text-3xl font-semibold text-gray-800">{latestVideo.snippet.title}</h3>
          </Link>
        )}

        {/* Sermon Grid (Loads more on scroll) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {loading
            ? // Skeleton loaders for initial 2 sermons
            Array(2)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg bg-gray-300 animate-pulse"></div>
              ))
            : // Render actual sermon cards
            sermons.map((video, index) => (
              <Link
                key={`${video.id.videoId}-${index}`} 
                href={`/sermons/${video.id.videoId}`}
                ref={index === sermons.length - 1 ? lastSermonRef : null}
              >
                <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg">
                  <Image
                    width={500}
                    height={500}
                    src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">{video.snippet.title}</h3>
              </Link>
            ))}
        </div>

      </div>
    </section>
  );
}