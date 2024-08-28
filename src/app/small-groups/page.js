"use client"

import Link from "next/link";
import getConnectedImage from "../../../public/get-connected-desktop.webp";
import Image from "next/image";

export default function SmallGroups() {
  const smallGroups = [
    { name: "Young Adults Bible Study", description: "Join other young adults as we dive deep into the Word of God and build lasting friendships.", link: "/register/young-adults", image: getConnectedImage },
    { name: "Couples Group", description: "Strengthen your relationship through biblical principles and connect with other couples in a supportive environment.", link: "/register/couples-group", image: getConnectedImage },
    { name: "Men's Discipleship", description: "Grow in your faith alongside other men, studying scripture and applying it to daily life.", link: "/register/mens-discipleship", image: getConnectedImage },
    { name: "Women's Prayer Group", description: "Join other women in prayer, support, and encouragement as we lift each other up and grow together.", link: "/register/womens-prayer-group", image: getConnectedImage },
    { name: "Parenting Group", description: "Navigate the challenges of parenting with biblical wisdom and practical advice in a community of parents.", link: "/register/parenting-group", image: getConnectedImage },
    // Add more small groups as needed
  ];

  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      <h2 className="text-4xl font-bold text-gray-900 tracking-tighter sm:text-4xl md:text-5xl mb-12">Join a Small Group</h2>
      <p className="text-lg text-gray-700 mb-12 text-center">
        Our small groups are a great way to connect with others, grow in your faith, and find support in your journey. Explore the groups below and sign up to get started!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {smallGroups.map((group, index) => (
          <Link key={index} href={group.link}>
            <div className="relative group cursor-pointer rounded-2xl shadow-lg overflow-hidden">
              <Image
                src={group.image}
                alt={group.name}
                className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
                <h3 className="text-xl font-bold text-white text-center mb-2">{group.name}</h3>
                <p className="text-sm text-white text-center">{group.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
