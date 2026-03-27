/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image";
import Link from "next/link";

export default function YouthMinistry() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <section className="bg-youthDark w-full py-24 px-6 flex flex-col items-center text-center">
        <div className="relative w-full max-w-xl h-24 mb-8">
          <Image
            src="/photos/youth-restyle/Refresh Youth Branding PNGs/Refresh Youth PNG/Refresh Youth- Logo - White Text.png"
            fill
            style={{ objectFit: "contain" }}
            alt="Refresh Youth"
            priority
          />
        </div>
        <p className="text-youthCream text-xl md:text-2xl font-light tracking-wide max-w-xl mb-10">
          Building faith for the next generation
        </p>
        <Link
          href="https://refresh.churchcenter.com/groups/small-groups/youth-small-group"
          className="border-2 border-youthCream text-youthCream text-lg font-semibold py-3 px-8 rounded-full hover:bg-youthCream hover:text-youthDark transition duration-300 ease-in-out"
        >
          Join Us
        </Link>
      </section>

      {/* What We Do — Welcome */}
      <section className="bg-youthCream w-full py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-block w-2 h-10 bg-youthTeal rounded-full mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5">
              Welcome to Refresh Youth
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              We believe ministering to the next generation is one of the most important ministries here at Refresh Church.
              Our youth leaders recognize that they have a unique influence in the lives of the middle and high school students they serve.
              Their goal is to encourage authentic faith as they invest in a relationship with your student and help them build a relationship with Jesus and others around them.
            </p>
            <Link
              href="https://refresh.churchcenter.com/groups/small-groups/youth-small-group"
              className="inline-block bg-youthDark text-white text-lg font-semibold py-3 px-7 rounded-full hover:bg-youthTeal transition duration-300 ease-in-out"
            >
              Get Connected
            </Link>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="w-full h-[380px] relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/photos/youth/01.webp"
                fill
                style={{ objectFit: "cover" }}
                alt="Refresh Youth gathering"
              />
            </div>
          </div>
        </div>
      </section>

      {/* When & Where — Time and Location */}
      <section className="bg-white w-full py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-block w-2 h-10 bg-youthTeal rounded-full mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5">
              When &amp; Where
            </h2>
            <div className="border-l-4 border-youthTeal pl-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Students come together every{" "}
                <span className="font-bold text-youthDark">Wednesday Night from 6–7:30pm</span>{" "}
                to build relationships, learn about Jesus, and discover their purpose.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                We meet at the{" "}
                <span className="font-semibold">Refresh HQ: 601 E Schiller Ln, Meridian.</span>
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                Our gathering includes group games, devotional time, small group discussion, Bible study, prayer, snacks, friendship, and lots of laughs.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="w-full h-[320px] relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/photos/youth/02.webp"
                fill
                style={{ objectFit: "cover", objectPosition: "0 35%" }}
                alt="Refresh Youth at Refresh HQ"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join the Community — CTA */}
      <section className="bg-youthDark w-full py-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-14">
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-48 h-64">
              <Image
                src="/photos/youth-restyle/Refresh Youth Branding PNGs/Refresh Youth Alternate 2 PNG/Refresh Youth - Full Color Logo - White Text - Alternate - 2.png"
                fill
                style={{ objectFit: "contain" }}
                alt="Refresh Youth logo"
              />
            </div>
          </div>
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5">
              Join the Community
            </h2>
            <p className="text-youthCream text-lg leading-relaxed mb-8">
              We believe in the power of community. Our youth leaders invest in a relationship with your student
              and help them build authentic faith — one Wednesday night at a time.
            </p>
            <Link
              href="https://refresh.churchcenter.com/groups/small-groups/youth-small-group"
              className="inline-block bg-youthTeal text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-youthDark transition duration-300 ease-in-out"
            >
              Join Us for Youth Night
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
