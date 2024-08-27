/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image";
import Link from "next/link";

export default function YouthMinistry() {
  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      <h2 className="text-4xl font-bold text-gray-900 tracking-tighter sm:text-5xl md:text-6xl mb-12">Youth Ministry</h2>

      {/* Introduction Section with Image */}
      <div className="flex flex-col lg:flex-row items-center mb-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Welcome to Youth Ministry</h3>
          <p className="text-gray-700 text-lg mb-6">
            Our Youth Ministry is a vibrant and energetic community where young people can connect, grow in their faith, and have fun together. We meet weekly for worship, Bible study, and a variety of exciting activities. Whether you're new to the church or a regular attendee, there's a place for you here!
          </p>
          <Link href="/youth-events" className="inline-block bg-primary text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
            Join Us for Youth Night
          </Link>
        </div>
        <div className="lg:w-1/2">
          <div className="w-full h-[350px] relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/path-to-youth-photo1.jpg" // Replace with the actual path to the image
              layout="fill"
              objectFit="cover"
              alt="Youth Ministry Image 1"
            />
          </div>
        </div>
      </div>

      {/* Time and Location Section */}
      <div className="mb-12">
        <div className="flex flex-col lg:flex-row-reverse items-center">
          <div className="lg:w-1/2 lg:pl-8 mb-8 lg:mb-0">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Time & Location</h3>
            <p className="text-gray-700 text-lg">
            At the heart of our ministry is a commitment to helping women grow in their relationship with God. We offer a variety of Bible studies and small groups that provide a space to explore Scripture, share experiences, and pray for one another.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="w-full h-[250px] relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/path-to-photo3.jpg" // Replace with the actual path to the image
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
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get Involved in Youth Ministry</h3>
          <p className="text-gray-700 text-lg mb-6">
            Ready to take the next step? Come to one of our upcoming events or join us on a Wednesday night. We can't wait to see you there!
          </p>
          <Link href="/youth-events" className="inline-block bg-primary text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
            Join Us for Youth Night
          </Link>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <div className="w-full h-[350px] relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/path-to-youth-photo9.jpg" // Replace with the actual path to the image
              layout="fill"
              objectFit="cover"
              alt="Youth Ministry Image 3"
            />
          </div>
        </div>
      </div>

            {/* Youth Program Photo Section */}
            <div className="mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">Youth in Action</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="w-full h-[250px] relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/path-to-youth-photo3.jpg" // Replace with the actual path to the image
              layout="fill"
              objectFit="cover"
              alt="Youth Program Photo 1"
            />
          </div>
          <div className="w-full h-[250px] relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/path-to-youth-photo4.jpg" // Replace with the actual path to the image
              layout="fill"
              objectFit="cover"
              alt="Youth Program Photo 2"
            />
          </div>
          <div className="w-full h-[250px] relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/path-to-youth-photo5.jpg" // Replace with the actual path to the image
              layout="fill"
              objectFit="cover"
              alt="Youth Program Photo 3"
            />
          </div>
          <div className="w-full h-[250px] relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/path-to-youth-photo6.jpg" // Replace with the actual path to the image
              layout="fill"
              objectFit="cover"
              alt="Youth Program Photo 4"
            />
          </div>
          <div className="w-full h-[250px] relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/path-to-youth-photo7.jpg" // Replace with the actual path to the image
              layout="fill"
              objectFit="cover"
              alt="Youth Program Photo 5"
            />
          </div>
          <div className="w-full h-[250px] relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/path-to-youth-photo8.jpg" // Replace with the actual path to the image
              layout="fill"
              objectFit="cover"
              alt="Youth Program Photo 6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
