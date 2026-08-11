import { NextResponse } from "next/server";
import { fetchPlaylistPage } from "@/lib/youtube";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const pageToken = searchParams.get("pageToken") || "";

  try {
    const data = await fetchPlaylistPage(pageToken);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch YouTube data" }, { status: 500 });
  }
}
