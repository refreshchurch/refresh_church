/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link";
import Image from "next/image";


export default function GetConnected() {
  const ministries = [
    // NOTE: Small Group Links
    // { name: "Small Groups", link: "/small-groups", image: '/photos/connect/small-groups.webp', external: false },
    { name: "Small Groups", link: "https://refresh.churchcenter.com/groups/all-groups?enrollment=open_signup%2Crequest_to_join&filter=enrollment", image: '/photos/connect/small-groups.webp', external: true },
    { name: "Men's Ministry", link: "/mens-ministry", image: '/photos/mens/men-1.webp', external: false },
    { name: "Women's Ministry", link: "/womens-ministry", image: '/photos/womens/women-1.webp', external: false },
    { name: "Young Adults", link: "https://refresh.churchcenter.com/groups/all-groups/young-adults-garrett-cat-adams", image: '/photos/connect/young-adults.webp', external: true },
    { name: "Youth Ministry", link: "/refresh-youth", image: '/photos/youth/youth-5.webp', external: false },
    { name: "Kid's Ministry", link: "/r-kids", image: '/photos/background/WhiteBlue1_1.webp', external: false },
    { name: "Discovery", link: "/discovery", image: '/photos/background/DarkBlue1_1.webp', external: false },
    // { name: "Missions and Outreach", link: "/missions-and-outreach", image: '/photos/background/LightOrange1_1.webp', external: false },
    { name: "Baby Dedications", link: "https://refresh.churchcenter.com/people/forms/541850", image: '/photos/background/DarkOrange1_1.webp', external: true },
    { name: "Serve Team", link: "https://refresh.churchcenter.com/people/forms/301611?_ga=2.212286996.1630180229.1675698110-905807684.1675698110", image: '/photos/connect/serve-team.webp', external: true },
    // Add more ministries as needed
  ];

  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      <h2 className="text-4xl font-bold text-gray-900 tracking-tighter sm:text-5xl md:text-6xl mb-12">Get Connected</h2>
      {/* <p className="text-lg text-gray-700 mb-12 text-center">
        Find the ministry that fits you and get connected to our church community. Whether you're looking for fellowship, spiritual growth, or ways to serve, there's a place for you here.
      </p> */}
      <div className="bg-primaryDark text-white p-6 rounded-lg mb-10 mx-auto w-full sm:w-4/4 lg:w-4/4">
        <p className="text-lg text-left">
        Find the community that fits you and get connected.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ministries.map((ministry, index) => (
          <Link key={index}
            href={ministry.link}
            target={ministry.external ? "_blank" : "_self"}
            rel={ministry.external ? "noopener noreferrer" : undefined}
          >
            <div className="relative group cursor-pointer rounded-2xl shadow-lg overflow-hidden">
              <div className="relative w-full h-[250px]">
                <Image
                  src={ministry.image}
                  alt={ministry.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-2xl font-extrabold text-white text-center">{ministry.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
