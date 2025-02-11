/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image";
import Link from "next/link";

export default function KidMinistry() {
  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      <h2 className="text-4xl font-bold text-gray-900 tracking-tighter sm:text-5xl md:text-6xl mb-12">Kids Ministry</h2>

      {/* Hero Blurb Section with Background Image and Improved Text Bubble */}
      {/* <div
        className="bg-cover bg-center shadow-lg rounded-2xl p-8 mb-12 text-center text-white relative"
        style={{
          backgroundImage: "url('https://refresh.church/wp-content/uploads/2023/01/Rkids-Background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl z-0"></div>

        <div className="relative z-10">
          <h3 className="text-2xl font-semibold mb-4">Welcome to Our Kids Ministry</h3>
          <p className="text-lg">
            Our Kid Ministry is designed to provide a safe, fun, and nurturing environment where children can learn about God's love. Whether it's their first Sunday or they’ve been coming for years, we’re committed to helping every child grow in their faith and make lasting friendships.
          </p>
        </div>
      </div> */}

      <div
        className="bg-cover bg-center shadow-lg rounded-2xl p-8 mb-12 text-center text-white relative"
        style={{
          backgroundImage: "url('/photos/kids/design-2.webp')",
        }}
      >
        {/* Text content with its own background */}
        {/* Old color top bg color : bg-[#daedec] */}
        <div className="relative z-10 text-black bg-primaryDark text-white rounded-xl p-6 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Welcome to Our Kids Ministry</h3>
          <p className="text-lg">
            We believe ministry to children is one of the most important ministries here at Refresh Church.
            We are excited to join with families as we partner together, to raise a generation of children who passionately follow Jesus, become like Him and do what He does.
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
              When you arrive at Refresh, walk over to the Check In area located near the refreshments. Here you will be greeted and assisted as you register your children for the first time. We will then direct you to one of our 5 environments.

              We care about the safety of your children and use two-part name tags with a unique family security number required for pick up.

              You can pre-register your kids <a className="text-primary" href="https://refresh.churchcenter.com/people/forms/303995">here.</a>
            </p>
          </div>
          <div className="lg:w-1/2 h-[250px] relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/photos/kids/01.webp"
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
              src='/photos/kids/02.webp'
              layout="fill"
              objectFit="cover"
              alt="Nursery"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h4 className="text-2xl font-bold text-primary mb-4">Nursery</h4>
            <p className="text-gray-700 text-lg">
              Whether you’re parenting a brand new baby or are a seasoned parent, our nursery is full of loving volunteers who are focused on their care, we meet your child where they are so that they can experience Jesus through their interaction with our loving leaders.
            </p>
          </div>
        </div>

        {/* Toddlers & Pre-K */}
        <div className="mb-12 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
            <h4 className="text-2xl font-bold text-primary mb-4">Toddlers & Pre-K</h4>
            <p className="text-gray-700 text-lg">
              For our preschoolers the message is simple. We want them to know that God loves them, God made them, and Jesus wants to be their friend. They are engaged and challenged with age-appropriate worship and Bible teaching by loving and consistent leaders. We combine childhood development techniques and practical theology to make each message relevant to your child.
            </p>
          </div>
          <div className="lg:w-1/2 h-[250px] relative overflow-hidden rounded-2xl shadow-lg">
            {/* Picture of the crafts */}
            <Image
              src="/photos/kids/03.webp"
              layout="fill"
              objectFit="cover"
              alt="Elementary & Pre-Teen"
            />
          </div>
        </div>

        {/* Elementary & Pre-Teen */}
        <div className="mb-12 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 h-[250px] relative overflow-hidden rounded-2xl shadow-lg mb-6 lg:mb-0">

            <Image
              src="/photos/kids/04.webp"
              layout="fill"
              objectFit="cover"
              alt="Toddlers & Pre-K"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h4 className="text-2xl font-bold text-primary mb-4">Elementary & Pre-Teen (4th & 5th Grade)</h4>
            <p className="text-gray-700 text-lg">
              In the Elementary and Pre-Teen classrooms, we provide a fun, high energy environment where kids come to know Jesus personally through worship, small groups, and relevant creative Bible teaching. Each week we focus our efforts to see kids fall in love with Jesus and develop a deeper faith.
              <br /><br />
              We believe in the power of community. Our small group leaders recognize that they have a unique influence on your child. Their role is to encourage authentic faith as they follow up the large group teaching time and invest in the lives of your children.
            </p>
          </div>
        </div>
      </div>

      {/* Join the Team Section */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join the Kids Ministry Team</h3>
        <p className="text-gray-700 text-lg mb-6 ">
          Are you passionate about working with children and helping them grow in their faith? We're always looking for dedicated volunteers to join our team. Get involved and make a difference in the lives of our kids today!
        </p>
        <Link href="https://refresh.churchcenter.com/people/forms/301611" className="inline-block bg-primaryDark text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primary transition duration-300 ease-in-out">
          Join the Team
        </Link>
      </div>
    </div>
  );
}
