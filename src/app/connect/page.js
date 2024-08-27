/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link";
import kidsDesktop from '../../../public/r-kids-desktop.webp'
import Image from "next/image";

export default function GetConnected() {
  const ministries = [
    { name: "Men's Ministry", link: "/mens-ministry", image: kidsDesktop },
    { name: "Women's Ministry", link: "/womens-ministry", image: kidsDesktop },
    { name: "Youth Ministry", link: "/youth-ministry", image: kidsDesktop },
    { name: "Kid's Ministry", link: "/kids-ministry", image: kidsDesktop },
    { name: "Small Groups", link: "/small-groups", image: kidsDesktop },
    { name: "Discovery", link: "/discovery", image: kidsDesktop },
    { name: "Baby Dedications", link: "/baby-dedications", image: kidsDesktop },
    // Add more ministries as needed
  ];

  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      <h2 className="text-4xl font-bold text-gray-900 tracking-tighter sm:text-5xl md:text-6xl mb-12">Get Connected</h2>
      <p className="text-lg text-gray-700 mb-12 text-center">
        Find the ministry that fits you and get connected to our church community. Whether you're looking for fellowship, spiritual growth, or ways to serve, there's a place for you here.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ministries.map((ministry, index) => (
          <Link key={index} href={ministry.link}>
            <div className="relative group cursor-pointer rounded-2xl shadow-lg overflow-hidden">
              <Image
                src={ministry.image}
                alt={ministry.name}
                className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white text-center">{ministry.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
