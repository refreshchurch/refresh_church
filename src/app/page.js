"use client"

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import discoveryMobile from '../../public/discovery-mobile.webp'
import discoveryDesktop from '../../public/discovery-desktop.webp'
import connectedMobile from '../../public/get-connected-mobile.webp'
import connectedDesktop from '../../public/get-connected-desktop.webp'
import kidsMobile from '../../public/r-kids-mobile.webp'
import kidsDesktop from '../../public/r-kids-desktop.webp'
import leadershipImg from '../../public/tj.webp'

export default function Home() {
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1025) {
        setShowMobile(true);
      } else {
        setShowMobile(false);
      }
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="container mx-auto px-2 sm:px-4 py-8">
      <div className="flex flex-wrap justify-center gap-4">
        {showMobile ? (
          <>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <Link href="/first-time-here" className="bg-white shadow-md rounded-2xl w-[234px] h-[250px] relative overflow-hidden">
                <div className="relative block h-full">
                  {/* Add your image for this box here */}
                </div>
                <h3 className="text-2xl font-semibold absolute top-1.5 left-3 text-white">First Time Here!</h3>
                <div className="absolute right-0 bottom-0">
                  <button type="button" className='focus:outline-none focus:ring-3 focus:ring-primaryLight font-medium rounded-full text-sm px-5 py-1.5 text-center me-2 mb-2 bg-primary text-white hover:bg-primaryDark'>
                    Learn More
                  </button>
                </div>
              </Link>

              <div className="bg-white shadow-md rounded-2xl w-[462px] h-[250px] relative overflow-hidden">
                <div className="relative block h-full">
                  {/* Add your image for this box here */}
                </div>
                {/* No button or title for this box */}
              </div>

              <Link href="/leadership" className="bg-white shadow-md rounded-2xl w-[234px] h-[250px] relative overflow-hidden">
                <div className="relative block h-full">
                  <Image
                    src={leadershipImg}
                    layout="fill"
                    objectFit="cover"
                    alt="Leadership Image"
                  />
                </div>
                <h3 className="text-2xl font-semibold absolute top-1.5 left-3 text-white">Leadership</h3>
                <div className="absolute right-0 bottom-0">
                  <button type="button" className='focus:outline-none focus:ring-3 focus:ring-white-200 font-medium rounded-full text-sm px-5 py-1.5 text-center me-2 mb-2 bg-white text-black hover:bg-gray-200'>
                    Learn More
                  </button>
                </div>
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <Link href="/r-kids" className="bg-white shadow-md rounded-2xl w-[310px] h-[250px] relative overflow-hidden">
                <div className="relative block h-full">
                  <Image
                    src={kidsDesktop}
                    layout="fill"
                    objectFit="cover"
                    alt="Kids Image"
                  />
                </div>
                {/* No button or title for this box */}
              </Link>

              <Link href="/connect" className="bg-white shadow-md rounded-2xl w-[310px] h-[250px] relative overflow-hidden">
                <div className="relative block h-full">
                  <Image
                    src={connectedDesktop}
                    layout="fill"
                    objectFit="cover"
                    alt="Connected Image"
                  />
                </div>
                {/* No button or title for this box */}
              </Link>

              <Link href="/discovery" className="bg-white shadow-md rounded-2xl w-[310px] h-[250px] relative overflow-hidden">
                <div className="relative block h-full">
                  <Image
                    src={discoveryDesktop}
                    layout="fill"
                    objectFit="cover"
                    alt="Discovery Image"
                  />
                </div>
                {/* No button or title for this box */}
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/events" className="bg-white shadow-md rounded-2xl w-[462px] h-[250px] relative overflow-hidden">
                <div className="relative block h-full">
                  {/* Add your image for this box here */}
                </div>
                {/* No button or title for this box */}
              </Link>

              <Link href="/sermons" className="bg-white shadow-md rounded-2xl w-[462px] h-[250px] relative overflow-hidden">
                <div className="relative block h-full">
                  {/* Add your image for this box here */}
                </div>
                {/* No button or title for this box */}
              </Link>
            </div>
          </>
        ) : (
          <>
            {/* row 1 */}
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <div className="bg-white shadow-md rounded-2xl w-[366px] h-[198px] relative overflow-hidden">
                <div className="relative block h-full">
                  {/* Add your image for this box here */}
                </div>
                {/* No button or title for this box */}
              </div>
            </div>

            {/* row 2 */}
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <Link href="/first-time-here" className="bg-white shadow-md rounded-2xl w-[170px] h-[180px] relative overflow-hidden">
                <div className="relative block h-full">
                  {/* Add your image for this box here */}
                </div>
                <h3 className="text-2xl font-semibold absolute top-1.5 left-3 text-white">First Time Here!</h3>
                <div className="absolute right-0 bottom-0">
                  <button type="button" className='focus:outline-none focus:ring-3 focus:ring-primaryLight font-medium rounded-full text-sm px-5 py-1.5 text-center me-2 mb-2 bg-primary text-white hover:bg-primaryDark'>
                    Learn More
                  </button>
                </div>
              </Link>
              <Link href="/leadership" className="bg-white shadow-md rounded-2xl w-[170px] h-[180px] relative overflow-hidden">
                <div className="relative block h-full">
                  <Image
                    src={leadershipImg}
                    layout="fill"
                    objectFit="cover"
                    alt="Leadership Image"
                  />
                </div>
                <h3 className="text-2xl font-semibold absolute top-1.5 left-3 text-white">Leadership</h3>
                <div className="absolute right-0 bottom-0">
                  <button type="button" className='focus:outline-none focus:ring-3 focus:ring-white-200 font-medium rounded-full text-sm px-5 py-1.5 text-center me-2 mb-2 bg-white text-black hover:bg-gray-200'>
                    Learn More
                  </button>
                </div>
              </Link>
            </div>

            {/* row 3 */}
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <Link href="/r-kids" className="bg-white shadow-md rounded-2xl w-[366px] h-[52px] relative overflow-hidden">
                <div className="relative block h-full">
                  <Image
                    src={kidsMobile}
                    layout="fill"
                    objectFit="cover"
                    alt="Kids Image"
                  />
                </div>
                {/* No button or title for this box */}
              </Link>

              <Link href="/connect" className="bg-white shadow-md rounded-2xl w-[366px] h-[52px] relative overflow-hidden">
                <div className="relative block h-full">
                  <Image
                    src={connectedMobile}
                    layout="fill"
                    objectFit="cover"
                    alt="Connected Image"
                  />
                </div>
                {/* No button or title for this box */}
              </Link>

              <Link href="/discovery" className="bg-white shadow-md rounded-2xl w-[366px] h-[52px] relative overflow-hidden">
                <div className="relative block h-full">
                  <Image
                    src={discoveryMobile}
                    layout="fill"
                    objectFit="cover"
                    alt="Discovery Image"
                  />
                </div>
                {/* No button or title for this box */}
              </Link>
            </div>
            {/* row 4 */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/events" className="bg-white shadow-md rounded-2xl w-[368px] h-[199px] relative overflow-hidden">
                <div className="relative block h-full">
                <Image
                    src={kidsMobile}
                    layout="fill"
                    objectFit="cover"
                    alt="event Image"
                  />
                </div>
                {/* No button or title for this box */}
              </Link>
            </div>
            {/* row 5 */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/sermons" className="bg-white shadow-md rounded-2xl w-[368px] h-[199px] relative overflow-hidden">
                <div className="relative block h-full">
                <Image
                    src={kidsMobile}
                    layout="fill"
                    objectFit="cover"
                    alt="sermon Image"
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
