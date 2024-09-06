/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image";
import Link from "next/link";

export default function MensMinistry() {
  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      <h2 className="text-4xl font-bold text-gray-900 tracking-tighter sm:text-4xl md:text-5xl mb-12">Women's Ministry</h2>

      {/* Introduction Section with Image */}
      <div className="flex flex-col lg:flex-row items-center mb-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Women's Ministry</h3>
          <p className="text-gray-700 text-lg mb-6">
          Women’s Ministry is the active pursuit of women in order to connect to God, His Word, and other women for the purpose of winning and growing in Christ.
          </p>
          <Link href="/events" className="inline-block bg-primary text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
            Explore Upcoming Events
          </Link>
        </div>
        <div className="lg:w-1/2">
          <div className="w-full h-[350px] relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://refresh.church/wp-content/uploads/2023/01/Lobby-Experience-2.jpg" // Replace with the actual path to the image
              layout="fill"
              objectFit="cover"
              alt="Women's Ministry Image 1"
            />
          </div>
        </div>
      </div>

      {/* Information Section with Embedded Images */}
      <div className="mb-12">
        <div className="flex flex-col lg:flex-row-reverse items-center">
          <div className="lg:w-1/2 lg:pl-8 mb-8 lg:mb-0">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Grow in Faith Together</h3>
            <p className="text-gray-700 text-lg">
            We spend time together every quarter sharing food, and getting to know each other. These gatherings lend themselves to building community so that we can break off into smaller groups and take steps to see every person refreshed and every purpose discovered. We have a variety of small groups available for women throughout the year! Check them out by clicking below!

            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="w-full h-[250px] relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/path-to-photo4.jpg"
                layout="fill"
                objectFit="cover"
                alt="Women's Ministry Image 3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Final Call to Action with Image */}
      <div className="flex flex-col lg:flex-row items-center text-center lg:text-left mt-12">
        <div className="lg:w-1/2 lg:pr-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join Us at Our Next Event</h3>
          <p className="text-gray-700 text-lg mb-6">
            We would love for you to be a part of our upcoming events. Whether it's a retreat, a service project, or a fun social gathering, there's always something happening in our Women's Ministry.
          </p>
          <Link href="/events" className="inline-block bg-primary text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
            View Upcoming Events
          </Link>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <div className="w-full h-[350px] relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://refresh.church/wp-content/uploads/2023/01/Refresh-Friends.jpg" // Replace with the actual path to the image
              layout="fill"
              objectFit="cover"
              alt="Women's Ministry Image 4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
