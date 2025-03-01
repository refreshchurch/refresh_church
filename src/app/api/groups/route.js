import { NextResponse } from "next/server";
import axios from "axios";
import Redis from "ioredis";

// Initialize Redis
const redis = new Redis(process.env.REDIS_URL, {
  tls: { rejectUnauthorized: false }, // Required for Upstash
  maxRetriesPerRequest: 5, // Prevent excessive retries
  enableAutoPipelining: true, // Optimize batch requests
  lazyConnect: true, // Connect only when needed
  connectTimeout: 10000, // 10-second timeout
});

export async function GET() {
  const CACHE_KEY = "planning_center_groups";
  const CACHE_TTL = 3600; // Cache for 1 hour
  const STALE_THRESHOLD = 600; // 10 minutes before considering stale

  try {
    // Check Redis for cached data
    const cachedData = await redis.get(CACHE_KEY);
    const lastUpdated = await redis.get(`${CACHE_KEY}_timestamp`);

    const now = Math.floor(Date.now() / 1000); // Current time in seconds

    if (cachedData && lastUpdated) {
      const age = now - parseInt(lastUpdated, 10);

      // Return cache immediately if still fresh
      if (age < STALE_THRESHOLD) {
        console.log("Returning cached Planning Center groups...");
        return NextResponse.json(JSON.parse(cachedData));
      }

      // ⚡ If data is stale, return cached version but refresh in the background
      console.log("⚠️ Cache is stale, returning old data & fetching fresh in background...");
      refreshGroupsCache(); // Non-blocking async call
      return NextResponse.json(JSON.parse(cachedData));
    }

    // If no cache exists, fetch fresh data
    console.log("No cache found, fetching fresh Planning Center groups...");
    const freshData = await fetchAndCacheGroups();
    return NextResponse.json(freshData);
  } catch (error) {
    console.error("Error fetching groups from Planning Center:", error);
    return NextResponse.json({ error: "Error fetching groups" }, { status: 500 });
  }
}

/**
 * Fetch fresh groups data and store in Redis
 */
async function fetchAndCacheGroups() {
  const CACHE_KEY = "planning_center_groups";
  const CACHE_TTL = 3600; // Cache for 1 hour

  try {
    const response = await axios.get(
      "https://api.planningcenteronline.com/groups/v2/groups",
      {
        params: {
          include: "enrollment",
          include: "group_type",
          per_page: 200,
        },
        auth: {
          username: process.env.PLANNING_CENTER_APP_ID,
          password: process.env.PLANNING_CENTER_SECRET,
        },
      }
    );

    const groupsData = response.data.data;

    try {
      // Store in Redis & update timestamp
      await redis.set(CACHE_KEY, JSON.stringify(groupsData), "EX", CACHE_TTL);
      await redis.set(`${CACHE_KEY}_timestamp`, Math.floor(Date.now() / 1000));
    } catch (redisError) {
      console.error("⚠️ Failed to cache Planning Center groups:", redisError);
    }

    return groupsData;
  } catch (error) {
    console.error("Failed to fetch & cache Planning Center groups:", error);
    return [];
  }
}

/**
 * Refresh groups cache in the background (non-blocking)
 */
async function refreshGroupsCache() {
  console.log("Refreshing Planning Center groups in the background...");
  await fetchAndCacheGroups();
}
