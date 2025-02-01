"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Replace these with your YouTube API key and channel ID
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

export default function Stories() {
  const [mainVideo, setMainVideo] = useState(null);
  const [recentVideos, setRecentVideos] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hidePlaylist, setHidePlaylist] = useState(false);
  const [useVideoList, setUseVideoList] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [darkTheme] = useState(false);


  const LargeVideo = "https://www.youtube.com/embed/ysDpWS-sdQ8"
  const LargeVideoThumbnail = `https://img.youtube.com/vi/ysDpWS-sdQ8/maxresdefault.jpg`;

  // Static data for fallback
  const staticRecentVideos = [
    "https://www.youtube.com/embed/OVHcuEj1zbw",
    "https://www.youtube.com/embed/yVxBS55WaO0",
    "https://www.youtube.com/embed/vB5eaBE6t7E",
    "https://www.youtube.com/embed/9yBU7a9OHEA",
  ];

  useEffect(() => {
    const fetchYouTubeData = async () => {
      if (!useVideoList) {
        try {
          // Fetch most recent 5 videos
          const videoResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&order=date&maxResults=5`
          );
          const videoData = await videoResponse.json();

          // Set the latest video
          const mainVideoId = videoData.items[0]?.id.videoId;
          setMainVideo(`https://www.youtube.com/embed/${mainVideoId}`);

          // Set the 4 recent videos
          const recentVideos = videoData.items.slice(1, 5).map((item) => {
            return `https://www.youtube.com/embed/${item.id.videoId}`;
          });
          setRecentVideos(recentVideos);

          // Fetch most recent 4 playlists
          const playlistResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/playlists?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&maxResults=4`
          );
          const playlistData = await playlistResponse.json();
          setPlaylists(playlistData.items);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching YouTube data:", error);
          console.log("Falling back to static data");
          // setMainVideo("https://www.youtube.com/embed/KZ1Pcm7PgbU");
          // setRecentVideos(staticRecentVideos);
          // setLoading(false);
        }
      } else {
        // Fallback to static data
        setMainVideo(LargeVideo);
        setRecentVideos(staticRecentVideos);
        setHidePlaylist(true);
        setLoading(false);
      }
    };

    fetchYouTubeData();
  }, []);

  // const handleViewAllClick = () => {
  //   window.open("https://www.youtube.com/@refreshchurchtv", "_blank");
  // };

  if (darkTheme) {
    return (
      <section className="w-full py-8 md:py-10 lg:py-12 bg-zinc-900 text-gray-100">
        <div className="container mx-auto px-8 md:px-24 lg:px-32 space-y-12">
          {/* Large video section */}
          <h2 className="text-3xl font-bold text-gray-100 tracking-tighter md:text-4xl">Stories</h2>
          <div className="flex justify-center w-full">
            <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg">
              {loading ? (
                <div className="w-full h-full bg-zinc-800 animate-pulse rounded-xl"></div>
              ) : (
                <>
                  {isPlaying ? (
                    <iframe
                      className="w-full h-full object-cover"
                      src="https://www.youtube.com/embed/ysDpWS-sdQ8?autoplay=1&modestbranding=1&controls=1&rel=0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      playsinline
                    ></iframe>
                  ) : (
                    <div
                      className="w-full h-full bg-black flex justify-center items-center cursor-pointer"
                      onClick={() => setIsPlaying(true)}
                    >
                      <img
                        src={LargeVideoThumbnail || "/placeholder.svg"}
                        className="w-full h-full object-cover"
                        alt="Video Thumbnail"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="text-white bg-black bg-opacity-50 rounded-full p-4 hover:bg-opacity-70 transition-all duration-300">
                          ▶
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Recent Stories */}
          <div className="space-y-6 w-full mt-32">
            <h2 className="text-2xl inline-block font-semibold rounded-lg px-3 py-1 text-gray-100 bg-zinc-800">
              Recent Stories
            </h2>
            <div className="overflow-x-auto flex gap-6 snap-x w-full">
              {(loading ? staticRecentVideos : recentVideos).map((videoUrl, index) => (
                <div key={index} className="flex-none w-[60%] sm:w-[50%] lg:w-[30%] snap-start">
                  <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                    {loading ? (
                      <div className="w-full h-full bg-zinc-800 animate-pulse rounded-xl"></div>
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
            <button
              onClick={handleViewAllClick}
              className="flex items-center px-6 py-3 bg-zinc-700 text-white font-semibold rounded-lg shadow hover:bg-zinc-600 transition duration-300 ease-in-out"
            >
              View All Stories
              <svg
                className="w-5 h-5 ms-1 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-8 md:py-10 lg:py-12">
      <div className="container mx-auto px-8 md:px-24 lg:px-32 space-y-12">
        {/* Large video section */}
        <h2 className="text-3xl font-bold text-gray-900 tracking-tighter md:text-4xl">Stories</h2>
        <div className="flex justify-center w-full">
          <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg">
            {loading ? (
              <div className="w-full h-full bg-gray-300 animate-pulse rounded-xl"></div>
            ) : (
              <>
                {isPlaying ? (
                  <iframe
                    className="w-full h-full object-cover"
                    // showinfo=0 controls=0 autohide=1
                    // src={mainVideo}
                    src='https://www.youtube.com/embed/ysDpWS-sdQ8?autoplay=1&modestbranding=1&controls=1&rel=0'
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div
                    className="w-full h-full bg-black flex justify-center items-center cursor-pointer"
                    onClick={() => setIsPlaying(true)}
                  >
                    <img
                      src={LargeVideoThumbnail}
                      className="w-full h-full object-cover"
                      alt="Video Thumbnail"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="text-white bg-black bg-opacity-50 rounded-full p-4">
                        ▶
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Recent Stories */}
        <div className="space-y-6 w-full mt-32">
          <h2 className="text-2xl inline-block font-semibold rounded-lg px-3 py-1 text-gray-900">Recent Stories</h2>
          <div className="overflow-x-auto flex gap-6 snap-x w-full">
            {(loading ? staticRecentVideos : recentVideos).map((videoUrl, index) => (
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
          <Link href={"/sermons"} className="flex items-center px-6 py-3 bg-primaryDark text-white font-semibold rounded-lg shadow hover:bg-primary transition duration-300 ease-in-out">
            More Videos
            <svg className="w-5 h-5 ms-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="mt-1 w-full flex items-center justify-center">
      </div>
    </section>
  );
}
