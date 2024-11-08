/* eslint-disable react/no-unescaped-entities */
"use client"

// import Link from "next/link";
// import Image from "next/image";
import { useEffect, useState } from "react";
import Card from "../components/Card";

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
      setShowMobile(window.innerWidth < 1280);
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
      <div className="bg-primaryLight p-6 rounded-lg mb-10 mx-auto w-full sm:w-4/4 lg:w-4/4">
        <p className="text-lg text-gray-900 text-left">
          Small groups are a key aspect of our spiritual growth. We get better when we are together. It is for this reason we've decided to make small groups a central part of what we do as a church. Check back each semester for new groups, dates, and times.
        </p>
      </div>
      <h2 className="mb-10 text-3xl font-bold text-gray-900 tracking-tighter sm:text-3xl text-center">All Groups</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {loading ? (
          <>
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-gray-200 animate-pulse shadow-lg rounded-xl overflow-hidden transform transition-all">
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
                (group) => group.attributes.events_visibility === "public" && group.attributes.public_church_center_web_url
              )
              .map((group, index) => (
                <Card key={index} item={group} showMobile={showMobile}/>
              ))}
          </>
        )}
      </div>
    </div>
  );
}
