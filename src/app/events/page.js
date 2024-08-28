"use client"

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import discoveryDesktop from '../../../public/discovery-desktop.webp'

// Utility function to strip HTML tags
const stripHtml = (html) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || "";
};

export default function Events() {
  const [events, setEvents] = useState([]);
  const [showMobile, setShowMobile] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowMobile(window.innerWidth < 1025);
    };

    setHydrated(true);
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("data:", data);
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        // setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (!hydrated) {
    return (
      <div className="container mx-auto px-8 sm:px-36 py-16">
        <div className="flex flex-wrap justify-center gap-12 mt-20">
          <div className="bg-gray-300 shadow-md rounded-2xl lg:w-[814px] lg:h-[250px] w-[814px] h-[400px] animate-pulse"></div>
          <div className="bg-gray-300 shadow-md rounded-2xl lg:w-[814px] lg:h-[250px] w-[814px] h-[250px] animate-pulse"></div>
          <div className="bg-gray-300 shadow-md rounded-2xl lg:w-[814px] lg:h-[250px] w-[814px] h-[250px] animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/*  OG */}
      <div className="container mx-auto px-8 sm:px-36 py-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 tracking-tighter sm:text-4xl md:text-5xl ms-0 lg:ms-6 md:ms-4">Events</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {events.filter(event => event.attributes.visibility === "public").map(event => (
            <Link href='' key={event.id} className={showMobile ? "bg-white shadow-md rounded-2xl w-[339px] overflow-hidden" : "bg-white shadow-md rounded-2xl flex w-[814px] h-[250px] overflow-hidden"}>
              {/* Event Image */}
              <div className={showMobile ? "w-full" : "h-full w-1/2 flex items-center justify-center overflow-hidden"}>
                <Image
                  src={event.attributes.logo_url || 'https://placehold.co/600x400?text=No+Image'}
                  layout="responsive"
                  width={showMobile ? 814 : 462}
                  height={showMobile ? 462 : 250}
                  objectFit="cover"
                  alt={event.attributes.name}
                  className={showMobile ? "rounded-t-2xl" : ""}
                />
              </div>

              {/* Event Info */}
              <div className={`${showMobile ? "w-full" : "w-1/2"} p-6 pb-4 flex flex-col justify-between`}>
                <h3 className="text-xl font-bold text-gray-900">{event.attributes.name}</h3>
                <p className="text-gray-600">
                  {showMobile ? (
                    <>
                      {stripHtml(event.attributes.description).substring(0, 175)}...
                    </>
                  ) : (
                    <>
                      {stripHtml(event.attributes.description).substring(0, 185)}...
                    </>
                  )}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-600 font-semibold">{event.attributes.event_time_summary}</span>
                  <button href={event.attributes.public_url} className="flex items-center bg-primary text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
                    Register
                    <svg className="w-4 h-4 ms-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
                    </svg>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 2 wide */}
      <div className="container mx-auto px-8 sm:px-36 py-12">
        <h2 className="mb-10 text-4xl font-extrabold text-gray-900 tracking-tighter sm:text-4xl">Upcoming Events</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {events.filter(event => event.attributes.visibility === "public").map(event => (
            <div key={event.id} className="bg-white shadow-lg rounded-3xl overflow-hidden transform transition-all hover:scale-105">
              <div className="relative w-full sm:h-[275px] h-[200px]">
                <Image
                  src={event.attributes.logo_url || 'https://placehold.co/600x400?text=No+Image'}
                  layout="fill"
                  objectFit="cover"
                  alt={event.attributes.name}
                />
              </div>
              <div className="p-6 flex flex-col justify-between h-[250px]">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 truncate overflow-hidden whitespace-nowrap">{event.attributes.name}</h3>
                <p className="text-gray-700 sm:mb-5 mb-3 flex-grow">
                {showMobile ? (
                    <>
                      {stripHtml(event.attributes.description).substring(0, 175)}...
                    </>
                  ) : (
                    <>
                      {stripHtml(event.attributes.description).substring(0, 200)}...
                    </>
                  )}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">{event.attributes.event_time_summary}</span>
                  <Link href="/register">
                    <button href={event.attributes.public_url} className="flex items-center bg-primary text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
                      Register
                      <svg className="w-4 h-4 ms-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  3 wide */}
      <div className="container mx-auto px-8 sm:px-36 py-12">
        <h2 className="mb-10 text-4xl font-extrabold text-gray-900 tracking-tighter sm:text-4xl">Upcoming Events</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {events.filter(event => event.attributes.visibility === "public").map(event => (
            <div key={event.id} className="bg-white shadow-lg rounded-3xl overflow-hidden transform transition-all hover:scale-105">
              <div className="relative w-full h-[200px]">
                <Image
                  src={event.attributes.logo_url || 'https://placehold.co/600x400?text=No+Image'}
                  layout="fill"
                  objectFit="cover"
                  alt={event.attributes.name}
                />
              </div>
              <div className="p-6 flex flex-col justify-between h-[300px]">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 truncate overflow-hidden whitespace-nowrap">{event.attributes.name}</h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  {stripHtml(event.attributes.description).substring(0, 125)}...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">{event.attributes.event_time_summary}</span>
                  <Link href="/register">
                    <button href={event.attributes.public_url} className="flex items-center bg-primary text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
                      Register
                      <svg className="w-4 h-4 ms-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}




// <div className="container mx-auto px-8 sm:px-36 py-12">
//   <h2 className="mb-6 text-3xl font-bold text-gray-900 tracking-tighter sm:text-4xl md:text-5xl ms-0 lg:ms-6 md:ms-4">Events</h2>
//   <div className="flex flex-wrap justify-center gap-12">
//     {events.map(event => (
//       <Link key={event.id} href="/register" className={showMobile ? "bg-white shadow-md rounded-2xl w-[339px] overflow-hidden" : "bg-white shadow-md rounded-2xl flex w-[814px] h-[250px] overflow-hidden"}>
//         {/* Event Image */}
//         <div className={showMobile ? "w-full" : "h-full w-1/2 flex items-center justify-center overflow-hidden"}>
//           <Image
//             src={event.attributes.image_url || '/fallback-image.png'} // Fallback to a default image if no URL
//             layout="responsive"
//             width={showMobile ? 814 : 462}
//             height={showMobile ? 462 : 250}
//             objectFit="cover"
//             alt={event.attributes.name}
//             className={showMobile ? "rounded-t-2xl" : ""}
//           />
//         </div>

//         {/* Event Info */}
//         <div className={`${showMobile ? "w-full" : "w-1/2"} p-6 pb-4 flex flex-col justify-between`}>
//           <h3 className="text-xl font-bold text-gray-900">{event.attributes.name}</h3>
//           <p className="text-gray-600">
//             {showMobile ? (
//               <>
//                 {event.attributes.description.length > 175 ? `${event.attributes.description.substring(0, 175)}...` : event.attributes.description}
//               </>
//             ) : (
//               <>
//                 {event.attributes.description.length > 185 ? `${event.attributes.description.substring(0, 185)}...` : event.attributes.description}
//               </>
//             )}
//           </p>
//           <div className="flex justify-between items-center mt-4">
//             <span className="text-gray-600 font-semibold">{new Date(event.attributes.starts_at).toLocaleDateString()}</span>
//             <button className="flex items-center bg-primary text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
//               Register
//               <svg className="w-4 h-4 ms-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                 <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </Link>
//     ))}
//   </div>
// </div>