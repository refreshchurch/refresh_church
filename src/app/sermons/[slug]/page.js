"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Calendar } from "lucide-react";
import { slugify, isYouTubeVideoId } from "@/lib/utils";

export default function SermonPlayer() {
  const { slug } = useParams();
  const router = useRouter();
  const [video, setVideo] = useState(null);
  const [videoId, setVideoId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(
          `/api/youtube/sermon?slug=${encodeURIComponent(slug)}`
        );

        if (!response.ok) {
          setLoading(false);
          return;
        }

        const data = await response.json();
        const titleSlug = slugify(data.snippet.title);

        // Redirect old /sermons/[videoId] URLs to the title-based slug
        if (isYouTubeVideoId(slug) && titleSlug !== slug) {
          router.replace(`/sermons/${titleSlug}`);
          return;
        }

        setVideo(data.snippet);
        setVideoId(data.id.videoId);
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
      setLoading(false);
    };

    fetchVideoDetails();
  }, [slug, router]);

  function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  }

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

  if (!video || !videoId) {
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
            src={`https://www.youtube.com/embed/${videoId}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="space-y-2">
          {/* Video Title */}
          <h2 className="text-2xl font-semibold text-gray-900">{video.title}</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar className="w-5 h-5" />
            <p>{formatDate(video.publishedAt)}</p>
          </div>
          {/* Video Description */}
          <p className="text-gray-700 whitespace-pre-line text-md">{video.description}</p>

        </div>

      </div>
    </section>
  );
}
