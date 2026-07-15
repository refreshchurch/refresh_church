import { NextResponse } from "next/server";
import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL);
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const PLAYLIST_ID = "PLmMocV44k0FAQTmbpKO1wM2e65uICbt3_";

function normalizePlaylistItems(data) {
  return {
    ...data,
    items: (data.items || [])
      .filter((item) => item.snippet?.resourceId?.videoId)
      .map((item) => ({
        id: { videoId: item.snippet.resourceId.videoId },
        snippet: item.snippet,
      })),
  };
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const pageToken = searchParams.get("pageToken") || "";

  const cacheKey = `youtube-sermons-playlist-${pageToken}`;

  const cachedData = await redis.get(cacheKey);
  if (cachedData) {
    return NextResponse.json(JSON.parse(cachedData));
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${PLAYLIST_ID}&part=snippet&maxResults=10&pageToken=${pageToken}`
    );
    const data = await response.json();
    const normalizedData = normalizePlaylistItems(data);

    await redis.set(cacheKey, JSON.stringify(normalizedData), "EX", 10800);

    return NextResponse.json(normalizedData);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch YouTube data" }, { status: 500 });
  }
}
