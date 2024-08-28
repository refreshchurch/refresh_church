/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image";
import Link from "next/link";
import refreshKid from '../../../public/r-kids-desktop.webp'

export default function KidMinistry() {
  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      <h2 className="text-4xl font-bold text-gray-900 tracking-tighter sm:text-5xl md:text-6xl mb-12">Kid Ministry</h2>

      {/* Hero Blurb Section with Background Image and Improved Text Bubble */}
      {/* <div
        className="bg-cover bg-center shadow-lg rounded-2xl p-8 mb-12 text-center text-white relative"
        style={{
          backgroundImage: "url('https://refresh.church/wp-content/uploads/2023/01/Rkids-Background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl z-0"></div>

        <div className="relative z-10">
          <h3 className="text-2xl font-semibold mb-4">Welcome to Our Kid Ministry</h3>
          <p className="text-lg">
            Our Kid Ministry is designed to provide a safe, fun, and nurturing environment where children can learn about God's love. Whether it's their first Sunday or they’ve been coming for years, we’re committed to helping every child grow in their faith and make lasting friendships.
          </p>
        </div>
      </div> */}

      <div
        className="bg-cover bg-center shadow-lg rounded-2xl p-8 mb-12 text-center text-white relative"
        style={{
          backgroundImage: "url('https://refresh.church/wp-content/uploads/2023/01/Rkids-Background.jpg')",
        }}
      >
        {/* Text content with its own background */}
        <div className="relative z-10 text-black bg-[#daedec] rounded-xl p-6 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Welcome to Our Kid Ministry</h3>
          <p className="text-lg">
            Our Kid Ministry is designed to provide a safe, fun, and nurturing environment where children can learn about God's love. Whether it's their first Sunday or they’ve been coming for years, we’re committed to helping every child grow in their faith and make lasting friendships.
          </p>
        </div>
      </div>


      {/* Group Sections with Scattered Images */}
      <div className="mb-12">
        {/* Your First Sunday */}
        <div className="mb-12 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
            <h4 className="text-2xl font-bold text-primary mb-4">Your First Sunday</h4>
            <p className="text-gray-700 text-lg">
              We know that visiting a new church can be overwhelming, especially with kids. Our team is ready to welcome you and your family, help you get settled, and make sure your child has a great experience. From check-in to pick-up, we’re here to guide you every step of the way.
            </p>
          </div>
          <div className="lg:w-1/2 h-[250px] relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://refresh.church/wp-content/uploads/2023/08/S2_17.png" // Replace with the actual path to the image
              layout="fill"
              objectFit="cover"
              alt="Your First Sunday"
            />
          </div>
        </div>

        {/* Nursery */}
        <div className="mb-12 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 h-[250px] relative overflow-hidden rounded-2xl shadow-lg mb-6 lg:mb-0">
            <Image
              src={refreshKid} // Replace with the actual path to the image
              layout="fill"
              objectFit="cover"
              alt="Nursery"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h4 className="text-2xl font-bold text-primary mb-4">Nursery</h4>
            <p className="text-gray-700 text-lg">
              Our nursery is a warm and loving place where infants and toddlers (up to age 2) are cared for during the service. Our dedicated volunteers ensure that each child receives individual attention and care in a safe and secure environment.
            </p>
          </div>
        </div>

        {/* Toddlers & Pre-K */}
        <div className="mb-12 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
            <h4 className="text-2xl font-bold text-primary mb-4">Toddlers & Pre-K</h4>
            <p className="text-gray-700 text-lg">
              For children aged 2 to 5, our Toddlers & Pre-K program is full of engaging activities, Bible stories, and songs that help them learn about God in a fun and interactive way. Each week, our caring teachers help kids explore the wonder of God’s love.
            </p>
          </div>
          <div className="lg:w-1/2 h-[250px] relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://refresh.church/wp-content/uploads/2023/08/S2_16.png" // Replace with the actual path to the image
              layout="fill"
              objectFit="cover"
              alt="Toddlers & Pre-K"
            />
          </div>
        </div>

        {/* Elementary & Pre-Teen (4th & 5th Grade) */}
        <div className="mb-12 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 h-[250px] relative overflow-hidden rounded-2xl shadow-lg mb-6 lg:mb-0">
            <Image
              src="https://refresh.church/wp-content/uploads/2023/01/Rkids-Background-3.jpg" // Replace with the actual path to the image
              layout="fill"
              objectFit="cover"
              alt="Elementary & Pre-Teen"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h4 className="text-2xl font-bold text-primary mb-4">Elementary & Pre-Teen (4th & 5th Grade)</h4>
            <p className="text-gray-700 text-lg">
              Our Elementary & Pre-Teen group is designed for kids in 4th and 5th grade, offering a mix of Bible lessons, small group discussions, and activities that help them apply God’s Word to their everyday lives. We aim to equip them with the tools they need to navigate their pre-teen years with faith and confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Join the Team Section */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join the Kid Ministry Team</h3>
        <p className="text-gray-700 text-lg mb-6">
          Are you passionate about working with children and helping them grow in their faith? We're always looking for dedicated volunteers to join our team. Get involved and make a difference in the lives of our kids today!
        </p>
        <Link href="https://refresh.churchcenter.com/people/forms/301611" className="inline-block bg-primary text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
          Join the Team
        </Link>
      </div>
    </div>
  );
}
