/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link";
import kidsDesktop from '../../../public/r-kids-desktop.webp'
import discoveryDesktop from '../../../public/discovery-desktop.webp'
import Image from "next/image";


export default function GetConnected() {
  const ministries = [
    { name: "Men's Ministry", link: "/mens-ministry", image: 'https://refresh.church/wp-content/uploads/2023/01/Refresh-Mens-Ministry.jpg' },
    { name: "Women's Ministry", link: "/womens-ministry", image: 'https://refresh.church/wp-content/uploads/2023/01/Lobby-Experience-2.jpg' },
    { name: "Youth Ministry", link: "/refresh-youth", image: 'https://refresh.church/wp-content/uploads/2023/01/Refresh-Youth.jpg' },
    { name: "Kid's Ministry", link: "/r-kids", image: kidsDesktop },
    { name: "Small Groups", link: "/small-groups", image: 'https://refresh.church/wp-content/uploads/2023/01/medium_image-1633456841431.jpg' },
    { name: "Discovery", link: "/discovery", image: discoveryDesktop },
    { name: "Baby Dedications", link: "https://refresh.churchcenter.com/people/forms/541850", image: 'https://refresh.church/wp-content/uploads/2023/08/20220301-Baby-Dedication-_Hero.jpg' },
    { name: "Serve Team", link: "https://refresh.churchcenter.com/people/forms/301611?_ga=2.212286996.1630180229.1675698110-905807684.1675698110", image: 'https://refresh.church/wp-content/uploads/2023/08/17.jpg' },
    // Add more ministries as needed
  ];

  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      <h2 className="text-4xl font-bold text-gray-900 tracking-tighter sm:text-5xl md:text-6xl mb-12">Get Connected</h2>
      {/* <p className="text-lg text-gray-700 mb-12 text-center">
        Find the ministry that fits you and get connected to our church community. Whether you're looking for fellowship, spiritual growth, or ways to serve, there's a place for you here.
      </p> */}
      <div className="bg-primaryLight p-6 rounded-lg mb-10 mx-auto w-full sm:w-4/4 lg:w-4/4">
        <p className="text-lg text-gray-900 text-left">
          Find the ministry that fits you and get connected to our church community. Whether you're looking for fellowship, spiritual growth, or ways to serve, there's a place for you here.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ministries.map((ministry, index) => (
          <Link key={index} href={ministry.link}>
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
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start justify-center">
                <h3 className="text-2xl font-extrabold text-white text-center mt-10">{ministry.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}