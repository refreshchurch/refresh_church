import Redis from "ioredis";
import { slugify } from "@/lib/utils";

const redis = new Redis(process.env.REDIS_URL);
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const PLAYLIST_ID = "PLmMocV44k0FAQTmbpKO1wM2e65uICbt3_";

export function normalizePlaylistItems(data) {
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

export async function fetchPlaylistPage(pageToken = "") {
  const cacheKey = `youtube-sermons-playlist-${pageToken}`;

  const cachedData = await redis.get(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${PLAYLIST_ID}&part=snippet&maxResults=10&pageToken=${pageToken}`
  );
  const data = await response.json();
  const normalizedData = normalizePlaylistItems(data);

  await redis.set(cacheKey, JSON.stringify(normalizedData), "EX", 10800);

  return normalizedData;
}

export async function findSermonBySlug(slug) {
  let pageToken = "";

  do {
    const data = await fetchPlaylistPage(pageToken);
    const match = (data.items || []).find(
      (item) => slugify(item.snippet.title) === slug
    );

    if (match) {
      return match;
    }

    pageToken = data.nextPageToken || "";
  } while (pageToken);

  return null;
}

export async function findSermonByVideoId(videoId) {
  let pageToken = "";

  do {
    const data = await fetchPlaylistPage(pageToken);
    const match = (data.items || []).find(
      (item) => item.id.videoId === videoId
    );

    if (match) {
      return match;
    }

    pageToken = data.nextPageToken || "";
  } while (pageToken);

  return null;
}
