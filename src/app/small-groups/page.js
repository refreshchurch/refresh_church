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
  const [loading, setLoading] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowMobile(window.innerWidth < 1025);
    };

    setLoading(true);
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

  const smallGroups = [
    { name: "Young Adults Bible Study", description: "Join other young adults as we dive deep into the Word of God and build lasting friendships.", link: "/register/young-adults", image: getConnectedImage },
    { name: "Couples Group", description: "Strengthen your relationship through biblical principles and connect with other couples in a supportive environment.", link: "/register/couples-group", image: getConnectedImage },
    { name: "Men's Discipleship", description: "Grow in your faith alongside other men, studying scripture and applying it to daily life.", link: "/register/mens-discipleship", image: getConnectedImage },
    { name: "Women's Prayer Group", description: "Join other women in prayer, support, and encouragement as we lift each other up and grow together.", link: "/register/womens-prayer-group", image: getConnectedImage },
    { name: "Parenting Group", description: "Navigate the challenges of parenting with biblical wisdom and practical advice in a community of parents.", link: "/register/parenting-group", image: getConnectedImage },
    // Add more small groups as needed
  ];

  if (loading) {
    return (
      <div>loading...</div>
    )
  }

  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      <h2 className="mb-10 text-4xl font-extrabold text-gray-900 tracking-tighter sm:text-4xl">Small Groups</h2>
      <div className="bg-gray-100 p-6 rounded-lg mb-12 mx-auto w-full sm:w-3/4 lg:w-2/3">
        <p className="text-lg text-gray-700 text-center">
          Our small groups are a great way to connect with others, grow in your faith, and find support in your journey. Explore the groups below and sign up to get started!
        </p>
      </div>
      <h2 className="mb-10 text-3xl font-bold text-gray-900 tracking-tighter sm:text-3xl text-center">All Groups</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {groups.filter(event => event.attributes.events_visibility === "public").map((group, index) => (
          <div key={group.id} className="bg-white shadow-lg rounded-3xl overflow-hidden transform transition-all hover:scale-105">
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
                <span className="text-gray-600 font-medium">time</span>
                <Link href="/register">
                  <button href='/' className="flex items-center bg-primary text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
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
  );
}
