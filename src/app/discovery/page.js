/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image";
import Link from "next/link";

export default function Discovery() {
  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      <h2 className="text-4xl font-bold text-gray-900 tracking-tighter sm:text-4xl md:text-5xl mb-12">Discovery Class</h2>
      
      {/* Introduction Section */}
      <div className="bg-white shadow-lg rounded-2xl p-8 mb-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Take Your Next Steps</h3>
        <p className="text-gray-700 text-lg mb-6">
          The Discovery Class is designed to help you take your next steps in faith, connect with others, and grow in your relationship with God. Whether you're new to the church or have been here for years, these four steps will guide you on your journey.
        </p>
        <Link href="https://refresh.churchcenter.com/registrations/events/category/41297" className="inline-block bg-primary text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
          Sign Up for Discovery
        </Link>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        {/* Step 1 */}
        <Link href="https://refresh.churchcenter.com/registrations/events/category/41297" className="relative bg-[#3fbeb2] shadow-md rounded-2xl flex flex-col justify-center items-center text-center h-64 transform transition-transform duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl p-4 flex flex-col justify-center items-center">
            <h4 className="text-xl font-bold text-white mb-2">Step 1: Know God</h4>
            <p className="text-white">
              Discover who God is and learn the basics of the Christian faith in a way that is simple and practical.
            </p>
          </div>
        </Link>

        {/* Step 2 */}
        <Link href="https://refresh.churchcenter.com/registrations/events/category/41297" className="relative bg-[#f39757] shadow-md rounded-2xl flex flex-col justify-center items-center text-center h-64 transform transition-transform duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl p-4 flex flex-col justify-center items-center">
            <h4 className="text-xl font-bold text-white mb-2">Step 2: Find Freedom</h4>
            <p className="text-white">
              Connect with others and experience the freedom that comes from living a life fully committed to Christ.
            </p>
          </div>
        </Link>

        {/* Step 3 */}
        <Link href="https://refresh.churchcenter.com/registrations/events/category/41297" className="relative bg-[#e46246] shadow-md rounded-2xl flex flex-col justify-center items-center text-center h-64 transform transition-transform duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl p-4 flex flex-col justify-center items-center">
            <h4 className="text-xl font-bold text-white mb-2">Step 3: Discover Purpose</h4>
            <p className="text-white">
              Understand the unique gifts and talents God has given you and how you can use them to make a difference.
            </p>
          </div>
        </Link>

        {/* Step 4 */}
        <Link href="https://refresh.churchcenter.com/registrations/events/category/41297" className="relative bg-[#315860] shadow-md rounded-2xl flex flex-col justify-center items-center text-center h-64 transform transition-transform duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl p-4 flex flex-col justify-center items-center">
            <h4 className="text-xl font-bold text-white mb-2">Step 4: Make a Difference</h4>
            <p className="text-white">
              Learn how you can impact others by serving in the church and the community, living out your faith daily.
            </p>
          </div>
        </Link>
      </div>

      {/* Final Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Take the Next Step?</h3>
        <Link href="https://refresh.churchcenter.com/registrations/events/category/41297" className="inline-block bg-primary text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
          Sign Up Now
        </Link>
      </div>
    </div>
  );
}
