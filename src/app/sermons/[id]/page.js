"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export default function SermonPlayer() {
  const { id } = useParams(); // Get ID from URL
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet&id=${id}`
        );
        const data = await response.json();

        if (data.items.length > 0) {
          setVideo(data.items[0].snippet);
        }
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
      setLoading(false);
    };

    fetchVideoDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full py-8 md:py-10 lg:py-12">
        <div className="container mx-auto px-8 md:px-24 lg:px-32">
          <div className="w-full aspect-video bg-gray-300 animate-pulse rounded-xl"></div>
          <div className="mt-4 w-3/4 h-6 bg-gray-300 animate-pulse rounded"></div>
          <div className="mt-2 w-2/3 h-4 bg-gray-300 animate-pulse rounded"></div>
        </div>
      </div>
    );
  }

  if (!video) {
    return (
      <div className="w-full py-8 md:py-10 lg:py-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Sermon Not Found</h2>
        <p className="text-gray-600 mt-2">The video you are looking for does not exist or has been removed.</p>
      </div>
    );
  }

  return (
    <section className="w-full py-8 md:py-10 lg:py-12">
      <div className="container mx-auto px-8 md:px-24 lg:px-32 space-y-6">
        
        {/* Video Player */}
        <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg">
          <iframe
            className="w-full h-full object-cover"
            src={`https://www.youtube.com/embed/${id}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Title */}
        <h2 className="text-2xl font-semibold text-gray-900">{video.title}</h2>

        {/* Video Description */}
        <p className="text-gray-700 whitespace-pre-line">{video.description}</p>
      </div>
    </section>
  );
}
