import { NextResponse } from "next/server";
import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL);
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

export async function GET() {
  const cachedData = await redis.get("youtube-sermons");
  if (cachedData) {
    return NextResponse.json(JSON.parse(cachedData));
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&order=date&maxResults=10`
    );
    const data = await response.json();

    await redis.set("youtube-sermons", JSON.stringify(data), "EX", 10800); // Cache for 3 hours
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch YouTube data" }, { status: 500 });
  }
}