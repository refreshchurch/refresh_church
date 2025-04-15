/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image";
import Link from "next/link";

export default function MensMinistry() {
  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      <h2 className="text-4xl font-bold text-gray-900 tracking-tighter sm:text-4xl md:text-5xl mb-12">Men's Ministry</h2>

      {/* Introduction Section with Image */}
      <div className="flex flex-col lg:flex-row items-center mb-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Men's Ministry</h3>
          <p className="text-gray-700 text-lg mb-6">
          Men’s Ministry is the active pursuit of men in order to connect to God, His Word, and other men for the purpose of winning and growing in Christ.
          </p>
          {/* NOTE: Event link (mens specifically) */}
          <Link href="https://refresh.churchcenter.com/registrations/events/category/51058" target="_blank" rel="noopener noreferrer" className="inline-block bg-primaryDark text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primary transition duration-300 ease-in-out">
          {/* <Link href="/events" className="inline-block bg-primaryDark text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primary transition duration-300 ease-in-out"> */}
            Explore Upcoming Events
          </Link>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="w-full h-[350px] relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/photos/mens/men-1.webp"
              layout="fill"
              objectFit="cover"
              alt="Men's Ministry Image 1"
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
            We gather together to share food and get to know each other. These gatherings lend themselves to building community so that we can break off into smaller groups and take steps to see every person refreshed and every purpose discovered.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="w-full h-[250px] relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/photos/mens/men-2.webp" 
                layout="fill"
                objectFit="cover"
                alt="Men's Ministry Image 3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 611 Section */}
      {/* <div className="flex flex-col lg:flex-row items-center text-center lg:text-left mt-12">
        <div className="lg:w-1/2 lg:pr-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">611 Men</h3>
          <p className="text-gray-700 text-lg mb-6">
            "Six-one-one,” is a program designed for men who dare to pursue a biblical worldview and live it out with unwavering conviction. We’re seeking those who hunger for more, who yearn to live a life of significance, anchored in who God has called them to be. If you are interested, sign up here!
          </p>
          <Link href="https://refresh.churchcenter.com/people/forms/661960" className="inline-block bg-primaryDark text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primary transition duration-300 ease-in-out">
            View Application
          </Link>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <div className="w-full h-[350px] relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/photos/mens/men-3.webp"
              layout="fill"
              objectFit="cover"
              alt="Men's Ministry Image 4"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}
