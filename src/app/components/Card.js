import Image from "next/image";
import Link from "next/link";

// Utility function to strip HTML tags
const stripHtml = (html) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || "";
};

export default function Card({ item, showMobile }) {
  console.log("showMobile:", showMobile);
  return (
    <div className="bg-white shadow-lg rounded-3xl overflow-hidden transform transition-all hover:scale-105">
      <div className="relative w-full sm:h-[275px] h-[200px]">
        <Image
          src={item.attributes.header_image?.medium || item.attributes.logo_url || 'https://placehold.co/600x400?text=No+Image'}
          alt={item.attributes.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6 flex flex-col justify-between h-[250px]">
        <h3 className="text-2xl font-semibold text-gray-900 mb-1 truncate overflow-hidden whitespace-nowrap">{item.attributes.name}</h3>
        <p className="text-gray-700 sm:mb-5 mb-3 flex-grow">
          {showMobile ? (
            <>
              {stripHtml(item.attributes.description).substring(0, 100)}...
            </>
          ) : (
            <>
              {stripHtml(item.attributes.description).substring(0, 180)}...
            </>
          )}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">{item.attributes.schedule || item.attributes.event_time_summary}</span>
          <Link href={item.attributes.public_church_center_web_url || item.attributes.public_url}>
            <button className="flex items-center bg-primary text-white text-md font-semibold py-3 px-7 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
              Register
              <svg className="w-4 h-4 ms-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
