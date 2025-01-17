/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image";
import Link from "next/link";
import { showMissionsAndOutreachPage } from "../../../constants";
import { notFound } from "next/navigation";

export default function MissionsAndOutreach() {
  if (!showMissionsAndOutreachPage) {
    return notFound()
  }
  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      <h2 className="text-4xl font-bold text-gray-900 tracking-tighter sm:text-4xl md:text-5xl mb-12">Missions and Outreach</h2>

      {/* Introduction Section with Image */}
      <div className="flex flex-col lg:flex-row items-center mb-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">First blurb</h3>
          <p className="text-gray-700 text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat tortor sit amet ipsum imperdiet, et porttitor dolor rutrum. Quisque ac blandit est, vitae aliquet felis. Ut convallis quam a dui dictum aliquet. Vivamus finibus erat sed fringilla eleifend. Suspendisse tortor leo, malesuada a diam in, consectetur ultricies nisi.
          </p>
          {/* NOTE: Event link (mens specifically) */}
          <Link href="https://refresh.churchcenter.com/registrations/events/category/51058" target="_blank" rel="noopener noreferrer" className="inline-block bg-primaryDark text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primary transition duration-300 ease-in-out">
            {/* <Link href="/events" className="inline-block bg-primaryDark text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primary transition duration-300 ease-in-out"> */}
            Button Text
          </Link>
        </div>
        <div className="lg:w-1/2">
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
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">blurb 2</h3>
            <p className="text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat tortor sit amet ipsum imperdiet, et porttitor dolor rutrum. Quisque ac blandit est, vitae aliquet felis. Ut convallis quam a dui dictum aliquet. Vivamus finibus erat sed fringilla eleifend. Suspendisse tortor leo, malesuada a diam in, consectetur ultricies nisi.
            </p>
          </div>
          <div className="lg:w-1/2">
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
