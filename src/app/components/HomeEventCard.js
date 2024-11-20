import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomeEventCard({ event }) {
  return (
    <>
        <Link href={ event.attributes.public_url} className="flex items-center gap-5 px-3 py-3 hover:bg-gray-100 rounded-lg cursor-pointer mt-3">
          <div className="overflow-hidden rounded-full w-12 h-12 flex items-center min-w-[48px]">
            <Image
              src={event.attributes.logo_url || 'https://placehold.co/600x400?text=No+Image'}
              alt={event.attributes.name}
              width={48}
              height={48}
              className="w-full h-full object-cover "
              draggable="false"
            />
          </div>
          <p className="md:text-lg text-md font-semibold md:max-w-[270px] max-w-[170px] w-full">
            {event.attributes.name}
          </p>
          <ArrowUpRight className="w-7" />
        </Link>
    </>
  );
}
