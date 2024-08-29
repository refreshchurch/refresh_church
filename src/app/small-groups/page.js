/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link";
import getConnectedImage from "../../../public/get-connected-desktop.webp";
import Image from "next/image";
import { useEffect, useState } from "react";

// Utility function to strip HTML tags
const stripHtml = (html) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || "";
};

export default function SmallGroups() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowMobile(window.innerWidth < 1025);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/groups');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("data:", data);
        setGroups(data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      <h2 className="mb-10 text-4xl font-extrabold text-gray-900 tracking-tighter sm:text-4xl">Small Groups</h2>
      <div className="bg-primaryLight p-6 rounded-lg mb-10 mx-auto w-full sm:w-3/4 lg:w-2/3">
        <p className="text-lg text-gray-900 text-left">
        Small groups are a key aspect of your spiritual growth. We get better when we are together. It is for this reason we've decided to make small groups a central part of what we do as a church. Check back each semester for new groups, dates, and times.
        </p>
      </div>
      <h2 className="mb-10 text-3xl font-bold text-gray-900 tracking-tighter sm:text-3xl text-center">All Groups</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {loading ? (
          <>
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-gray-200 animate-pulse shadow-lg rounded-3xl overflow-hidden transform transition-all">
                <div className="relative w-full sm:h-[275px] h-[200px] bg-gray-300"></div>
                <div className="p-6 flex flex-col justify-between h-[250px]">
                  <div className="h-6 bg-gray-300 mb-3 rounded"></div>
                  <div className="flex-grow mb-3 bg-gray-300 rounded"></div>
                  <div className="h-6 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {groups
              .filter(
                (group) =>
                  group.attributes.events_visibility === "public" &&
                  group.attributes.public_church_center_web_url
              )
              .map((group, index) => (
                <div key={group.id} className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all hover:scale-105">
                  <div className="relative w-full sm:h-[275px] h-[200px]">
                    <Image
                      src={group.attributes.header_image.medium || 'https://placehold.co/600x400?text=No+Image'}
                      alt={group.attributes.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between h-[250px]">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 truncate overflow-hidden whitespace-nowrap">{group.attributes.name}</h3>
                    <p className="text-gray-700 sm:mb-5 mb-3 flex-grow">
                      {showMobile ? (
                        <>
                          {stripHtml(group.attributes.description).substring(0, 175)}...
                        </>
                      ) : (
                        <>
                          {stripHtml(group.attributes.description).substring(0, 180)}...
                        </>
                      )}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">{group.attributes.schedule}</span>
                      <Link href={group.attributes.public_church_center_web_url}>
                        <button className="flex items-center bg-primary text-white text-md font-semibold py-4 px-8 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
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
          </>
        )}
      </div>
    </div>
  );
}
