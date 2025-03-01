import { NextResponse } from "next/server";
import axios from "axios";
import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL, {
  tls: { rejectUnauthorized: false }, // Required for Upstash
  maxRetriesPerRequest: 5, // Prevent excessive retries
  enableAutoPipelining: true, // Optimize batch requests
  lazyConnect: true, // Connect only when needed
  connectTimeout: 10000, // 10-second timeout
});

export async function GET() {
  const CACHE_KEY = "planning_center_events";
  const CACHE_TTL = 3600; // Full cache expiry: 1 hour
  const STALE_THRESHOLD = 600; // 10 minutes before considering stale

  try {
    // 🔹 Get cached data & check TTL
    const cachedData = await redis.get(CACHE_KEY);
    const lastUpdated = await redis.get(`${CACHE_KEY}_timestamp`);

    const now = Math.floor(Date.now() / 1000); // Current time in seconds

    if (cachedData && lastUpdated) {
      const age = now - parseInt(lastUpdated, 10);

      // Return cache immediately if still fresh
      if (age < STALE_THRESHOLD) {
        console.log("eturning cached Planning Center events...");
        return NextResponse.json(JSON.parse(cachedData));
      }

      // If data is stale, return cached version but refresh in the background
      console.log("Cache is stale, returning old data & fetching fresh in background...");
      refreshEventsCache(); // Non-blocking async call
      return NextResponse.json(JSON.parse(cachedData));
    }

    // If no cache exists, fetch fresh data
    console.log("No cache found, fetching fresh Planning Center events...");
    const freshData = await fetchAndCacheEvents();
    return NextResponse.json(freshData);
  } catch (error) {
    console.error("Error fetching events from Planning Center:", error);
    return NextResponse.json({ error: "Error fetching events" }, { status: 500 });
  }
}

/**
 * Fetch fresh event data and store it in Redis
 */
async function fetchAndCacheEvents() {
  const CACHE_KEY = "planning_center_events"; // Define the cache key inside the function
  const CACHE_TTL = 3600; // Cache for 1 hour

  try {
    const response = await axios.get(
      "https://api.planningcenteronline.com/registrations/v2/events",
      {
        params: { filter: "future,active", per_page: 200 },
        auth: {
          username: process.env.PLANNING_CENTER_APP_ID,
          password: process.env.PLANNING_CENTER_SECRET,
        },
      }
    );

    // Filter public events
    const filteredEvents = response.data.data.filter(
      (event) => event.attributes.visibility === "public"
    );

    try {
      // Store the response in Redis
      await redis.set(CACHE_KEY, JSON.stringify(filteredEvents), "EX", CACHE_TTL);
      await redis.set(`${CACHE_KEY}_timestamp`, Math.floor(Date.now() / 1000)); // Store last updated time
    } catch (redisError) {
      console.error("⚠️ Failed to cache in Redis:", redisError);
    }

    return filteredEvents;
  } catch (error) {
    console.error("Failed to fetch & cache Planning Center events:", error);
    return [];
  }
}

/**
 * Refresh the cache in the background (non-blocking)
 */
async function refreshEventsCache() {
  console.log("Refreshing Planning Center events in the background...");
  await fetchAndCacheEvents();
}
