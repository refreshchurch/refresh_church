/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image";
import Link from "next/link";
import { ClipboardList, FileText, GraduationCap, Rocket, BookOpenCheck } from "lucide-react";
import { showSmallGroupInfoPage } from "../../../../constants";
import { notFound } from "next/navigation";

// Redirect to 404 if showSmallGroupInfoPage is false
// if (!showSmallGroupInfoPage) {
//    notFound()
// }

export default function SmallGroupsPage() {
  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      <h2 className="text-4xl font-bold text-gray-900 tracking-tighter sm:text-4xl md:text-5xl mb-12">Small Groups</h2>

      {/* Introduction Section */}
      <div className="flex flex-col lg:flex-row items-center mb-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join a Small Group!</h3>
          <p className="text-gray-700 text-lg mb-6">
            Small groups are how we care for each other. At its core, a Small Group is less about what you do and more about who you do it with. We are not meant to do life alone and that's why we have Small Groups. Whether you're new to groups, leading for the first time, or a seasoned leader, there's a place for you!
          </p>
          <Link href="https://refresh.churchcenter.com/groups/small-groups" target="_blank" rel="noopener noreferrer" className="inline-block bg-primaryDark text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primary transition duration-300 ease-in-out">
            Find Your Group!
          </Link>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="w-full h-[350px] sm:h-[300px] relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/photos/small-groups/01.jpg"
              alt="Small Groups Community"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Want to Lead Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center mb-12">
        <div className="lg:w-1/2 lg:pl-8 mb-8 lg:mb-0">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Want to Lead a Group?</h3>
          <p className="text-gray-700 text-lg mb-6">
            You don't need to have it all together to lead a Small Group—you just have to be willing to let God use you. We believe God uses Small Groups to change people's lives, and as a leader, you get to be a part of that. God is not looking for perfection, but willingness to walk out what He has called you to do.
          </p>
          {/* <Link href="/small-groups/lead" className="inline-block bg-primaryDark text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primary transition duration-300 ease-in-out">
            Take Your Next Step
          </Link> */}
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="w-full h-[350px] sm:h-[300px] relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/photos/small-groups/02.jpg"
              alt="Small Groups Community"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Lead a Group Details */}
      <div className="mb-12 pt-10">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">4 Steps To Leading A Group</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Step 1 */}
          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <ClipboardList className="text-primaryDark w-7 h-7" />
              <h4 className="text-xl font-semibold text-gray-800">Step 1: Decide on an Activity or Study</h4>
            </div>
            <p className="text-gray-700 text-lg">
              At Refresh Church, we use a free market approach to Small Groups. This means we want people to gather together based on the things they enjoy and are important to them. Start by deciding what your group will be centered around.
            </p>
          </div>

          {/* Step 2 */}
          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <FileText className="text-primaryDark w-7 h-7" />
              <h4 className="text-xl font-semibold text-gray-800">Step 2: Fill Out the Application</h4>
            </div>
            <p className="text-gray-700 text-lg mb-4">
              This helps us support you in the best way possible. It's not exclusive — just a way to get to know you and help set you up to lead well!
            </p>
            <Link
              href="https://refresh.churchcenter.com/people/forms/311150"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primaryDark text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-primary transition duration-300 ease-in-out"
            >
              Small Group Leader Application
            </Link>
          </div>

          {/* Step 3 */}
          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <GraduationCap className="text-primaryDark w-7 h-7" />
              <h4 className="text-xl font-semibold text-gray-800">Step 3: Attend Training</h4>
            </div>
            <p className="text-gray-700 text-lg">
              In about 45 minutes, we'll equip you with everything you need to lead a group and partner with you for a great experience.
            </p>
          </div>

          {/* Step 4 */}
          <div className="border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <Rocket className="text-primaryDark w-7 h-7" />
              <h4 className="text-xl font-semibold text-gray-800">Step 4: Launch Your Group</h4>
            </div>
            <p className="text-gray-700 text-lg">
              Start inviting! Reach out to coworkers, friends, neighbors, or anyone looking to get involved — a personal invite is powerful.
            </p>
          </div>
        </div>

        {/* Already a Leader */}
        {/* <div className="mt-12 border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <BookOpenCheck className="text-primaryDark w-7 h-7" />
            <h4 className="text-xl font-semibold text-gray-800">Already a Leader?</h4>
          </div>
          <p className="text-gray-700 text-lg mb-4">
            If you're already leading a Small Group, check out this list of suggested resources to support your group!
          </p>
          <Link
            href="#"
            className="inline-block bg-primaryDark text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-primary transition duration-300 ease-in-out"
          >
            Small Group Leader Resources
          </Link>
        </div> */}
      </div>

    </div>
  );
}