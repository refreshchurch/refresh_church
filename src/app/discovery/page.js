/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image";
import Link from "next/link";

export default function Discovery() {
  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      <h2 className="text-4xl font-bold text-gray-900 tracking-tighter sm:text-5xl md:text-6xl mb-12">Discovery Class</h2>
      
      {/* Introduction Section */}
      <div className="bg-white shadow-lg rounded-2xl p-8 mb-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Take Your Next Steps</h3>
        <p className="text-gray-700 text-lg mb-6">
          The Discovery Class is designed to help you take your next steps in faith, connect with others, and grow in your relationship with God. Whether you're new to the church or have been here for years, these four steps will guide you on your journey.
        </p>
        <Link href="/signup" className="inline-block bg-primary text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
          Sign Up for Discovery
        </Link>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        {/* Step 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
          <Image
            src="/path-to-step1-image.jpg" // Replace with the actual path to the image
            layout="responsive"
            width={150}
            height={150}
            objectFit="cover"
            alt="Step 1 Image"
            className="rounded-full mb-4"
          />
          <h4 className="text-xl font-bold text-primary mb-2">Step 1: Know God</h4>
          <p className="text-gray-600">
            Discover who God is and learn the basics of the Christian faith in a way that is simple and practical.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
          <Image
            src="/path-to-step2-image.jpg" // Replace with the actual path to the image
            layout="responsive"
            width={150}
            height={150}
            objectFit="cover"
            alt="Step 2 Image"
            className="rounded-full mb-4"
          />
          <h4 className="text-xl font-bold text-primary mb-2">Step 2: Find Freedom</h4>
          <p className="text-gray-600">
            Connect with others and experience the freedom that comes from living a life fully committed to Christ.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
          <Image
            src="/path-to-step3-image.jpg" // Replace with the actual path to the image
            layout="responsive"
            width={150}
            height={150}
            objectFit="cover"
            alt="Step 3 Image"
            className="rounded-full mb-4"
          />
          <h4 className="text-xl font-bold text-primary mb-2">Step 3: Discover Purpose</h4>
          <p className="text-gray-600">
            Understand the unique gifts and talents God has given you and how you can use them to make a difference.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
          <Image
            src="/path-to-step4-image.jpg" // Replace with the actual path to the image
            layout="responsive"
            width={150}
            height={150}
            objectFit="cover"
            alt="Step 4 Image"
            className="rounded-full mb-4"
          />
          <h4 className="text-xl font-bold text-primary mb-2">Step 4: Make a Difference</h4>
          <p className="text-gray-600">
            Learn how you can impact others by serving in the church and the community, living out your faith daily.
          </p>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Take the Next Step?</h3>
        <Link href="/signup" className="inline-block bg-primary text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
          Sign Up Now
        </Link>
      </div>
    </div>
  );
}
