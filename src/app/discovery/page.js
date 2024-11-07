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
        <p className="text-gray-700 text-lg mb-6 text-left">
        Discovery classes are a great next-step for anyone who just committed their life to Christ, or are new to the church! The Discovery Process is a 4-part journey in which we will help you to find the purpose that God has for you. Because we believe that when you are living in the calling that He has on your life, you will live the most fulfilled life possible.
        </p>
        <Link href="https://refresh.churchcenter.com/registrations/events/category/41297" className="inline-block bg-primary text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
          Sign Up for Discovery
        </Link>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        {/* Step 1 */}
        <div className="relative bg-[#3fbeb2] shadow-md rounded-2xl flex flex-col justify-center items-center text-center h-80 transform transition-transform duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl p-4 flex flex-col justify-center items-center">
            <h4 className="text-xl font-bold text-white mb-2 uppercase">Step 1: Know God</h4>
            <p className="text-white px-4">
            Discovery Party is a “house party” at Refresh HQ, and an opportunity to connect with our church staff. You’ll also hear more about the history, mission and vision of Refresh. 
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div  className="relative bg-[#f39757] shadow-md rounded-2xl flex flex-col justify-center items-center text-center h-80 transform transition-transform duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl p-4 flex flex-col justify-center items-center">
            <h4 className="text-xl font-bold text-white mb-2 uppercase">Step 2: Find Freedom</h4>
            <p className="text-white px-4">
            Discovery Learning is an online assessment of your personality, spiritual gifts, and heart for ministry. It includes an online lesson series to help you understand how God wired you and how you can use that information to discover His purpose in your life. Watch the lessons below.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative bg-[#e46246] shadow-md rounded-2xl flex flex-col justify-center items-center text-center h-80 transform transition-transform duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl p-4 flex flex-col justify-center items-center">
            <h4 className="text-xl font-bold text-white mb-2 uppercase">Step 3: Discover Purpose</h4>
            <p className="text-white px-4">
            Discovery Lab is an in-person workshop at Refresh HQ. Our team will get to break down everything you learned throughout the week, process it with you, and help you apply it in your life. At Discovery Lab, you’ll get to discuss with us how your personality, gifts, and experience can guide you into God’s purpose for your life. Lunch and childcare are provided. 
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div  className="relative bg-[#315860] shadow-md rounded-2xl flex flex-col justify-center items-center text-center h-80 transform transition-transform duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl p-4 flex flex-col justify-center items-center">
            <h4 className="text-xl font-bold text-white mb-2 uppercase">Step 4: Make a Difference</h4>
            <p className="text-white px-4">
            Discovery Launch is an opportunity to launch into fulfilling your purpose here at Refresh. You will get to connect with a Serve Team that aligns with your personality, gifts and passion. Our prayer is that this will be a launch pad for your journey towards fulfilling your purpose! 
            </p>
          </div>
        </div>
      </div>

      {/* Final Call to Action */}
      {/* <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Take the Next Step?</h3>
        <Link href="https://refresh.churchcenter.com/registrations/events/category/41297" className="inline-block bg-primary text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
          Sign Up Now
        </Link>
      </div> */}
    </div>
  );
}
