import { notFound, redirect } from "next/navigation";
import { Calendar } from "lucide-react";
import { slugify, isYouTubeVideoId, truncateMetaDescription } from "@/lib/utils";
import { findSermonBySlug, findSermonByVideoId } from "@/lib/youtube";

async function resolveSermon(slug) {
  const sermon = await findSermonBySlug(slug);

  if (sermon) {
    return sermon;
  }

  if (isYouTubeVideoId(slug)) {
    return findSermonByVideoId(slug);
  }

  return null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const sermon = await resolveSermon(slug);

  if (!sermon) {
    return {
      title: "Sermon Not Found",
      description: "The requested sermon could not be found.",
    };
  }

  const title = sermon.snippet.title;
  const description =
    truncateMetaDescription(sermon.snippet.description) ||
    `Watch "${title}" from Refresh Church in Meridian, ID.`;
  const canonicalSlug = slugify(title);

  return {
    title,
    description,
    alternates: {
      canonical: `/sermons/${canonicalSlug}`,
    },
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  };
}

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

export default async function SermonPlayer({ params }) {
  const { slug } = await params;
  const sermon = await resolveSermon(slug);

  if (!sermon) {
    notFound();
  }

  const titleSlug = slugify(sermon.snippet.title);

  if (isYouTubeVideoId(slug) && titleSlug !== slug) {
    redirect(`/sermons/${titleSlug}`);
  }

  const video = sermon.snippet;
  const videoId = sermon.id.videoId;

  return (
    <section className="w-full py-8 md:py-10 lg:py-12">
      <div className="container mx-auto px-8 md:px-24 lg:px-32 space-y-6">
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
          <h2 className="text-2xl font-semibold text-gray-900">{video.title}</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar className="w-5 h-5" />
            <p>{formatDate(video.publishedAt)}</p>
          </div>
          <p className="text-gray-700 whitespace-pre-line text-md">{video.description}</p>
        </div>
      </div>
    </section>
  );
}
