/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

export default function FirstTimeHere() {
  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      {/* <h2 className="text-4xl font-bold text-gray-900 tracking-tighter sm:text-5xl md:text-6xl mb-12">First Time Here?</h2> */}

      {/* Hero Carousel Section */}
      <div className="relative w-full h-[500px] mb-12">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
          className="rounded-2xl overflow-hidden"
        >
          <div>
            <img src="https://placehold.co/600x400?text=1" alt="Church Life 1" className="object-cover w-full h-[500px]" />
          </div>
          <div>
            <img src="https://placehold.co/600x400?text=2" alt="Church Life 2" className="object-cover w-full h-[500px]" />
          </div>
          <div>
            <img src="https://placehold.co/600x400?text=3" alt="Church Life 3" className="object-cover w-full h-[500px]" />
          </div>
        </Carousel>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">First Time Here?</h1>
        </div>
      </div>

      {/* What to Expect Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-900 mb-8">What to Expect</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h4 className="text-xl font-bold text-primary mb-4">Services</h4>
            <p className="text-gray-700">
              Our services are designed to be engaging and meaningful, with contemporary worship, relevant messages, and a welcoming atmosphere. Come as you are, and expect to leave refreshed and encouraged.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6">
            <h4 className="text-xl font-bold text-primary mb-4">Kids Ministry</h4>
            <p className="text-gray-700">
              We offer a dynamic Kids Ministry program that provides a safe, fun, and engaging environment for your children to learn about God while you attend the main service.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6">
            <h4 className="text-xl font-bold text-primary mb-4">Students</h4>
            <p className="text-gray-700">
              Our student ministry is all about connecting young people to God and each other. We provide a space where students can grow in their faith, make friends, and have fun.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6">
            <h4 className="text-xl font-bold text-primary mb-4">Parking</h4>
            <p className="text-gray-700">
              Parking is easy and convenient with ample spaces available. Our friendly parking team will be there to guide you and ensure a smooth experience from the moment you arrive.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6">
            <h4 className="text-xl font-bold text-primary mb-4">Pre-Service</h4>
            <p className="text-gray-700">
              Arrive early to grab a coffee, meet some of our friendly team members, and settle in before the service begins. We encourage you to make yourself at home!
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6">
            <h4 className="text-xl font-bold text-primary mb-4">Post-Service</h4>
            <p className="text-gray-700">
              After the service, stick around to connect with others, ask questions, and learn more about our church. We’d love to meet you and help you get plugged in.
            </p>
          </div>
        </div>
      </div>

      {/* Church Slogan and Verse */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-primary uppercase mb-4">every person refreshed. every purpose discovered.</h3>
        <p className="text-xl text-gray-700 italic">"A generous person will prosper; whoever refreshes others will be refreshed." - Proverbs 11:25</p>
      </div>

      {/* Lead Pastor Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start mb-12">
        <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
          <div className="w-full h-[350px] relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/path-to-lead-pastor-image.jpg" // Replace with the actual path to the image
              layout="fill"
              objectFit="cover"
              alt="Lead Pastor"
            />
          </div>
        </div>
        <div className="lg:w-2/3 text-center lg:text-left">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Pastor John Doe</h3>
          <p className="text-gray-700 text-lg">
            Pastor John has a deep passion for seeing lives transformed by the love of Christ. With over 20 years of ministry experience, his heart for the church is to create a community where everyone feels welcome, valued, and loved. He believes that the church should be a place of refreshment, renewal, and purpose, where each person can discover God’s plan for their life.
          </p>
        </div>
      </div>
    </div>
  );
}
