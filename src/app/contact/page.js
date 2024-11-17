/* eslint-disable react/no-unescaped-entities */
"use client"

import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Link from "next/link";
import Image from "next/image";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

export default function Contact() {
  // Google Maps API setup
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: API_KEY
  // });

  const isLoaded = true

  const center = useMemo(() => ({ lat: 40.7128, lng: -74.0060 }), []);

  return (
    <>
      <div className="container mx-auto px-8 sm:px-36 py-12">
        {/* Enhanced Top Section */}
        <div className="bg-primaryLight dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-4xl font-bold text-white dark:text-white tracking-tighter sm:text-4xl md:text-5xl">Let's Connect</h2>
            <p className="text-xl text-gray-200 dark:text-gray-300">We’d love to get to know you.</p>
          </div>
          <Link href="https://refresh.churchcenter.com/people/forms/214918" target="_blank" rel="noopener noreferrer">
            <div className="inline-block bg-primary text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
              Get in Touch
            </div>
          </Link>
        </div>

        {/* Google Map and Service Times Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="w-full h-[400px]">
            {isLoaded ? (
              // <GoogleMap
              //   mapContainerStyle={{ width: "100%", height: "100%" }}
              //   center={center}
              //   zoom={15}
              // >
              //   <Marker position={center} />
              // </GoogleMap>
              <a href="https://maps.app.goo.gl/QVoYXC8LbYkQkN3s7" target="_blank" rel="noopener noreferrer">
                <Image src="/photos/maps/large-church.png" alt="Map" width={600} height={400} className="hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out" />
              </a>
            ) : (
              <div>Loading map...</div>
            )}
          </div>
          <div className="flex flex-col justify-center ms-3">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Service Times & Location</h3>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Day:</strong> Sunday<br />
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Times:</strong> 9:00 AM & 10:30 AM<br />
            </p>
            <p className="text-lg text-gray-700">
              <strong>Location:</strong><br />
              <Link href='https://maps.app.goo.gl/QVoYXC8LbYkQkN3s7' target="_blank" rel="noopener noreferrer" className="hover:underline">
                3650 N. Owyhee, Storm Ave, Meridian, ID 83646
              </Link>
            </p>

          </div>
        </div>

        {/* Church Center App Installation */}
        <section className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl px-2">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div>
              <h2 className="mb-4 text-3xl tracking-tight font-bold text-gray-900 dark:text-white">Stay Connected with Our Church Center App</h2>
              <p className="mb-6 font-light text-gray-500 md:text-md dark:text-gray-400">Install the Church Center app to stay up to date with all of our events, groups, and more. Available on both Android and iOS.</p>
              <div className="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <a href="https://apps.apple.com/us/app/church-center-app/id1357742931" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                  <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                  <div className="text-left">
                    <div className="mb-1 text-xs">Download on the</div>
                    <div className="-mt-1 font-sans text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.ministrycentered.churchcenter" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                  <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                  <div className="text-left">
                    <div className="mb-1 text-xs">Get it on</div>
                    <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            <img className="hidden mx-auto w-64 md:flex" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/iphone-mockup.png" alt="mobile app" />
          </div>
        </section>
      </div>
    </>
  );
}
