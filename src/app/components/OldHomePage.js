"use client"

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function OldHomePage({showMobile, hydrated}) {

  if (!hydrated) {
    // Skeleton UI for Desktop
    return (
      <div className="container mx-auto px-36 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-gray-300 shadow-md rounded-2xl lg:w-[234px] lg:h-[250px] w-[266px] h-[198px] animate-pulse"></div>
          <div className="bg-gray-300 shadow-md rounded-2xl lg:w-[462px] lg:h-[250px] w-[170px] h-[180px] animate-pulse"></div>
          <div className="bg-gray-300 shadow-md rounded-2xl lg:w-[234px] lg:h-[250px] w-[170px] h-[180px] animate-pulse"></div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <div className="bg-gray-300 shadow-md rounded-2xl w-[310px] h-[250px] animate-pulse"></div>
          <div className="bg-gray-300 shadow-md rounded-2xl w-[310px] h-[250px] animate-pulse"></div>
          <div className="bg-gray-300 shadow-md rounded-2xl w-[310px] h-[250px] animate-pulse"></div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <div className="bg-gray-300 shadow-md rounded-2xl w-[475px] h-[250px] animate-pulse"></div>
          <div className="bg-gray-300 shadow-md rounded-2xl w-[475px] h-[250px] animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-2 sm:px-4 py-8">
      <div className="flex flex-wrap justify-center gap-4">
        {showMobile ? (
          <>
            {/* row 1 */}
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <div className="bg-white shadow-md rounded-2xl w-[366px] h-[198px] relative overflow-hidden">
                <div className="relative block h-full flex items-center">
                  <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}

                    interval={2000} // Adjust the duration as needed
                    className="rounded-2xl overflow-hidden"
                  >
                    <div className="relative block h-full">
                      <img
                        src="/photos/home/church-life-1.webp"
                        className="w-full h-full object-cover user-select-none"
                        alt="Image 1"
                      />
                    </div>
                    <div className="relative block h-full">
                      <img
                        src="/photos/home/church-life-2.webp"
                        className="w-full h-full object-cover user-select-none"
                        alt="Image 2"
                      />
                    </div>
                    <div className="relative block h-full">
                      <img
                        src="/photos/home/church-life-3.webp"
                        className="w-full h-full object-cover user-select-none"
                        alt="Image 3"
                      />
                    </div>
                    {/* Add more items as needed */}
                  </Carousel>
                </div>
                {/* No button or title for this box */}
              </div>
            </div>

            {/* row 2 */}
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <Link href="/first-time-here" className="bg-white shadow-md rounded-2xl w-[170px] h-[180px] relative overflow-hidden">
                <div className="relative block h-full">
                  {/* Add your image for this box here */}
                  <Image
                    src="https://refresh.church/wp-content/uploads/2023/01/Worship-Team-1024x576.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="Leadership Image"
                    draggable="false"
                  />
                </div>
                <h3 className="text-2xl font-semibold absolute top-1.5 left-3 text-white">First Time Here!</h3>
                {/* <div className="absolute right-0 bottom-0">
                  <button type="button" className='focus:outline-none focus:ring-3 focus:ring-primaryLight font-medium rounded-full text-sm px-5 py-1.5 text-center me-2 mb-2 bg-primary text-white hover:bg-primaryDark'>
                    Learn More
                  </button>
                </div> */}
              </Link>
              <Link href="/leadership" className="bg-white shadow-md rounded-2xl w-[170px] h-[180px] relative overflow-hidden">
                <div className="relative block h-full">
                  <Image
                    src='/photos/home/tj.webp'
                    layout="fill"
                    objectFit="cover"
                    alt="Leadership Image"
                    draggable="false"
                  />
                </div>
                <h3 className="text-2xl font-semibold absolute top-1.5 left-3 text-white">Leadership</h3>
                {/* <div className="absolute right-0 bottom-0">
                  <button type="button" className='focus:outline-none focus:ring-3 focus:ring-white-200 font-medium rounded-full text-sm px-5 py-1.5 text-center me-2 mb-2 bg-white text-black hover:bg-gray-200'>
                    Learn More
                  </button>
                </div> */}
              </Link>
            </div>

            {/* row 3 */}
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <Link href="/r-kids" className="bg-white shadow-md rounded-2xl w-[366px] h-[52px] relative overflow-hidden">
                <div className="relative block h-full">
                  <Image
                    src="/photos/home/r-kids-mobile.webp"
                    layout="fill"
                    objectFit="cover"
                    alt="Kids Image"
                    draggable="false"
                  />
                </div>
                {/* No button or title for this box */}
              </Link>

              <Link href="/connect" className="bg-white shadow-md rounded-2xl w-[366px] h-[52px] relative overflow-hidden">
                <div className="relative block h-full">
                  <Image
                    src='/photos/home/get-connected-mobile.webp'
                    layout="fill"
                    objectFit="cover"
                    alt="Connected Image"
                    draggable="false"
                  />
                </div>
                {/* No button or title for this box */}
              </Link>

              <Link href="/discovery" className="bg-white shadow-md rounded-2xl w-[366px] h-[52px] relative overflow-hidden">
                <div className="relative block h-full">
                  <Image
                    src='/photos/home/discovery-mobile.webp'
                    layout="fill"
                    objectFit="cover"
                    alt="Discovery Image"
                    draggable="false"
                  />
                </div>
                {/* No button or title for this box */}
              </Link>
            </div>
            {/* row 4 */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/sermons" className="bg-white shadow-md rounded-2xl w-[368px] h-[199px] relative overflow-hidden">
                <div className="relative block h-full">
                  <Image
                    src="/photos/home/sermons.webp"
                    layout="fill"
                    objectFit="cover"
                    alt="sermons Image"
                    draggable="false"
                  />
                </div>
                {/* No button or title for this box */}
              </Link>
            </div>

            {/* row 5 */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/events" className="bg-white shadow-md rounded-2xl w-[368px] h-[199px] relative overflow-hidden">
                <div className="relative block h-full">
                  <Image
                    src='/photos/home/event.webp'
                    layout="fill"
                    objectFit="cover"
                    alt="event Image"
                    draggable="false"
                  />
                </div>
                {/* No button or title for this box */}
              </Link>
            </div>

          </>
        ) : (
          <>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <Link href="/first-time-here" className="bg-white shadow-md rounded-2xl w-[234px] h-[250px] relative overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="relative block h-full">
                  {/* Add your image for this box here */}
                  <Image
                    src="https://refresh.church/wp-content/uploads/2023/01/Worship-Team-1024x576.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="Leadership Image"
                    draggable="false"
                  />
                </div>
                <h3 className="text-2xl font-semibold absolute top-1.5 left-3 text-white">First Time Here!</h3>
                {/* <div className="absolute right-0 bottom-0">
                  <button type="button" className='focus:outline-none focus:ring-3 focus:ring-primaryLight font-medium rounded-full text-sm px-5 py-1.5 text-center me-2 mb-2 bg-primary text-white hover:bg-primaryDark'>
                    Learn More
                  </button>
                </div> */}
              </Link>

              <div className="bg-white shadow-md rounded-2xl w-[462px] h-[250px] relative overflow-hidden ">
                <div className="relative block h-full flex items-center">
                  <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    showArrows={false}
                    interval={2000} // Adjust the duration as needed
                    className="rounded-2xl overflow-hidden"
                  >
                    <div className="relative block h-full">
                      <img
                        src="/photos/home/church-life-1.webp"
                        className="w-full h-full object-cover"
                        alt="Image 1"
                      />
                    </div>
                    <div className="relative block h-full">
                      <img
                        src="/photos/home/church-life-2.webp"
                        className="w-full h-full object-cover"
                        alt="Image 2"
                      />
                    </div>
                    <div className="relative block h-full">
                      <img
                        src="/photos/home/church-life-3.webp"
                        className="w-full h-full object-cover"
                        alt="Image 3"
                      />
                    </div>
                    {/* Add more items as needed */}
                  </Carousel>
                </div>
              </div>

              <Link href="/leadership" className="bg-white shadow-md rounded-2xl w-[234px] h-[250px] relative overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="relative block h-full">
                  <Image
                    src='/photos/home/tj.webp'
                    layout="fill"
                    objectFit="cover"
                    alt="Leadership Image"
                    draggable="false"
                  />
                </div>
                <h3 className="text-2xl font-semibold absolute top-1.5 left-3 text-white">Leadership</h3>
                {/* <div className="absolute right-0 bottom-0">
                  <button type="button" className='focus:outline-none focus:ring-3 focus:ring-white-200 font-medium rounded-full text-sm px-5 py-1.5 text-center me-2 mb-2 bg-white text-black hover:bg-gray-200'>
                    Learn More
                  </button>
                </div> */}
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <Link href="/connect" className="bg-white shadow-md rounded-2xl w-[310px] h-[250px] relative overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="relative block h-full">
                  <Image
                    src='/photos/home/get-connected-desktop.webp'
                    layout="fill"
                    objectFit="cover"
                    alt="Connected Image"
                    draggable="false"
                  />
                </div>
                {/* No button or title for this box */}
              </Link>

              <Link href="/r-kids" className="bg-white shadow-md rounded-2xl w-[310px] h-[250px] relative overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="relative block h-full">
                  <Image
                    src='/photos/home/r-kids-desktop.webp'
                    layout="fill"
                    objectFit="cover"
                    alt="Kids Image"
                    draggable="false"
                  />
                </div>
                {/* No button or title for this box */}
              </Link>

              <Link href="/discovery" className="bg-white shadow-md rounded-2xl w-[310px] h-[250px] relative overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="relative block h-full">
                  <Image
                    src='/photos/home/discovery-desktop.webp'
                    layout="fill"
                    objectFit="cover"
                    alt="Discovery Image"
                    draggable="false"
                  />
                </div>
                {/* No button or title for this box */}
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">

              <Link href="/sermons" className="bg-white shadow-md rounded-2xl w-[475px] h-[250px] relative overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="relative block h-full">
                  {/* Add your image for this box here */}
                  <Image
                    src="/photos/home/sermons.webp"
                    layout="fill"
                    objectFit="cover"
                    alt="Leadership Image"
                    draggable="false"
                  />
                </div>
                {/* No button or title for this box */}
              </Link>

              <Link href="/events" className="bg-white shadow-md rounded-2xl w-[475px] h-[250px] relative overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="relative block h-full">
                  {/* Add your image for this box here */}
                  <Image
                    src='/photos/home/event.webp'
                    layout="fill"
                    objectFit="cover"
                    alt="Leadership Image"
                    draggable="false"
                  />
                </div>
                {/* No button or title for this box */}
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
