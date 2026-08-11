import { NextResponse } from "next/server";
import { isYouTubeVideoId } from "@/lib/utils";
import { findSermonBySlug, findSermonByVideoId } from "@/lib/youtube";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  try {
    let sermon = await findSermonBySlug(slug);

    // Support old video-id URLs by resolving them to the slugified title
    if (!sermon && isYouTubeVideoId(slug)) {
      sermon = await findSermonByVideoId(slug);
    }

    if (!sermon) {
      return NextResponse.json({ error: "Sermon not found" }, { status: 404 });
    }

    return NextResponse.json(sermon);
  } catch (error) {
    console.error("Error looking up sermon:", error);
    return NextResponse.json({ error: "Failed to fetch sermon" }, { status: 500 });
  }
}
