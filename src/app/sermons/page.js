"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Sermons() {
  const [latestVideo, setLatestVideo] = useState(null);
  const [sermons, setSermons] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const observer = useRef();
  const isFetchingRef = useRef(false);
  const fetchedPagesRef = useRef(new Set());
  const nextPageTokenRef = useRef(null);

  const applyYouTubePage = (data, pageToken) => {
    if (!data.items || data.items.length === 0) return;

    const itemsToAdd = pageToken ? data.items : data.items.slice(1);

    if (!pageToken) {
      setLatestVideo(data.items[0]);
    }

    setSermons((prev) => {
      const existingIds = new Set(prev.map((item) => item.id.videoId));
      const uniqueToAdd = itemsToAdd.filter((item) => !existingIds.has(item.id.videoId));
      return [...prev, ...uniqueToAdd];
    });

    nextPageTokenRef.current = data.nextPageToken || null;
    setNextPageToken(data.nextPageToken || null);
  };

  const loadYouTubePage = async (pageToken = "", signal) => {
    if (fetchedPagesRef.current.has(pageToken) || isFetchingRef.current) {
      return;
    }

    isFetchingRef.current = true;

    try {
      const response = await fetch(`/api/youtube?pageToken=${pageToken}`, { signal });
      const data = await response.json();

      if (signal?.aborted) {
        return;
      }

      applyYouTubePage(data, pageToken);
      fetchedPagesRef.current.add(pageToken);
    } catch (error) {
      if (pageToken) {
        nextPageTokenRef.current = pageToken;
        setNextPageToken(pageToken);
      }
      if (error.name === "AbortError") {
        return;
      }
      console.error("Error fetching YouTube data:", error);
    } finally {
      isFetchingRef.current = false;
      if (!signal?.aborted) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    loadYouTubePage("", controller.signal);
    return () => {
      controller.abort();
      isFetchingRef.current = false;
    };
  }, []);

  const lastSermonRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      const token = nextPageTokenRef.current;
      if (entries[0].isIntersecting && token) {
        nextPageTokenRef.current = null;
        setNextPageToken(null);
        loadYouTubePage(token);
      }
    });
    if (node) observer.current.observe(node);
  };

  return (
    <>
      <Head>
        <title>Watch Christian Sermons Online - Refresh Church in Meridian</title>
        <meta
          name="description"
          content="Watch inspiring sermons from Refresh Church in Meridian, ID. Connect with our Christian community online and grow in your faith journey. Join us online now!s"
        />
      </Head>

      <div className="hidden">
        <h1>Christian Sermons from Refresh Church in Meridian, ID</h1>
        <h2></h2>
        <h3></h3>
      </div>
      
      <section className="w-full py-8 md:py-10 lg:py-12">
        <div className="container mx-auto px-8 md:px-24 lg:px-32 space-y-12">

          <h2 className="text-3xl font-bold text-gray-900 tracking-tighter md:text-4xl">
            Sermons
          </h2>
          {loading ? (
            <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg bg-gray-300 animate-pulse "></div>
          ) : latestVideo && (
            <Link href={`/sermons/${latestVideo.id.videoId}`} className="block pb-3">
              <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg transform transition-transform duration-350 hover:scale-[1.01]">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {loading
              ? Array(2)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg bg-gray-300 animate-pulse"></div>
                ))
              : sermons.map((video, index) => (
                <Link
                  key={`${video.id.videoId}-${index}`}
                  href={`/sermons/${video.id.videoId}`}
                  ref={index === sermons.length - 1 ? lastSermonRef : null}
                >
                  <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg transform transition-transform duration-350 hover:scale-[1.01]">
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
    </>
  );
}
