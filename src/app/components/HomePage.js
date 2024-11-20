"use client"
import { ArrowUpRight, Boxes, Cable, Calendar, Handshake, Shapes, Tv, Users, Waves } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Home from "../page";
import HomeEventCard from "./HomeEventCard";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [events, setEvents] = useState([]);
  const [eventsLoading, setEventsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("data:", data);
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setEventsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto px-2 sm:px-4 py-8 ">

      {/* Main */}
      <div className="flex flex-wrap gap-4 justify-center mb-4">
        <div className="bg-white shadow-md rounded-2xl w-full sm:aspect-17/9 aspect-square relative overflow-hidden">
          <Image
            src='/photos/home/church-life-3.webp'
            layout="fill"
            objectFit="cover"
            alt="Leadership Image"
            draggable="false"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center flex-col">
            <Image
              src="/photos/white-logo.webp"
              width={600}
              height={600}
              className="sm:mb-[-30px] mb-[-20px] lg:w-[600px] w-[450px] sm:w-[500px] "
              alt="Leadership Image"
              draggable="false"
            />
            <Link href="/contact" className="text-white lg:text-2xl text-xl font-bold z-100 cursor-pointer"> <span className="sm:inline-block hidden">Sunday Services</span> Owhyee High School</Link>
            <Link href="/contact" className="text-white lg:text-2xl text-xl font-bold z-100 pt-1 cursor-pointer">9 & 10:30 AM</Link>
          </div>
        </div>
      </div>

      {/* Middle */}
      <div className="grid md:grid-cols-[65%_1fr] grid-cols-1 gap-4 mb-4">
        <div className="flex flex-col gap-4">
          <Link href="/first-time-here" className="bg-white shadow-md rounded-2xl w-full aspect-video relative overflow-hidden transform transition-transform duration-350 hover:scale-[1.02]">
            <Image
              src="/photos/first-time-here/first-time-here.webp"
              layout="fill"
              objectFit="cover"
              objectPosition="0 40%"
              alt="Leadership Image"
              draggable="false"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <p className="text-white sm:text-7xl text-5xl  font-bold z-100">First Time Here</p>
            </div>
          </Link>
          <Link href="/leadership" className="bg-white shadow-md rounded-2xl w-full aspect-video relative overflow-hidden transform transition-transform duration-350 hover:scale-[1.02]">
            <Image
              src="/photos/home/tj.webp"
              layout="fill"
              objectFit="cover"
              alt="Leadership Image"
              draggable="false"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
              <h1 className="text-white sm:text-7xl text-5xl font-bold z-100">Leadership</h1>
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-white shadow-md rounded-2xl w-full md:h-[35%] h-[40%] relative overflow-hidden p-6">
            <h1 className="text-black text-3xl font-bold pb-[1px]">Learn More</h1>
            <h3 className="text-gray-400 text-lg">More than just a Sunday</h3>
            <ul className="mt-2 gap-y-2">
              <Link href="/r-kids" className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                <Shapes className="w-7" />
                <p className="text-xl font-semibold">
                  Kids
                </p>
              </Link>
              <Link href="/refresh-youth" className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                {/* <Plug/> */}
                <Waves className="w-7" />
                <p className="text-xl font-semibold">
                  Youth
                </p>
              </Link>
              <Link href="/small-groups" className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                {/* <User className="w-7" /> */}
                <Boxes className="w-7" />
                <p className="text-xl font-semibold">
                  Groups
                </p>
              </Link>
              <Link href="/sermons" className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                <Tv className="w-7" />
                <p className="text-xl font-semibold">
                  Sermons
                </p>
              </Link>
            </ul>
          </div>
          <div className="bg-white shadow-md rounded-2xl w-full h-[65%] relative overflow-hidden p-6">
            <h2 className="text-black text-3xl font-bold">Get Involved</h2>
            <h3 className="text-gray-400 text-xl ps-0.5">Next Steps</h3>
            <ul className="mt-2 gap-y-2">
              <Link href="/connect" className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                <Cable className="w-7" />
                <p className="text-xl font-semibold">
                  Get Connected
                </p>
              </Link>
              <Link href="https://refresh.churchcenter.com/people/forms/301611?_ga=2.212286996.1630180229.1675698110-905807684.1675698110" className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 rounded-lg cursor-pointer" target="_blank" rel="noopener noreferrer">
                <Users className="w-7" />
                <p className="text-xl font-semibold">
                  Serve
                </p>
              </Link>
              <Link href="https://refresh.churchcenter.com/giving?open-in-church-center-modal=true" className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 rounded-lg cursor-pointer" target="_blank" rel="noopener noreferrer">
                <Handshake className="w-7" />
                <p className="text-xl font-semibold">
                  Give
                </p>
              </Link>
              <Link href="/events" className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                <Calendar className="w-7" />
                <p className="text-xl font-semibold">
                  Events
                </p>
              </Link>

              {events
                .filter((event) => event.attributes.visibility === "public")
                .map((event, index) => (
                  <HomeEventCard key={index} event={event} />
                ))}
              {/* <Link href={''} className="flex items-center gap-5 px-3 py-3 hover:bg-gray-100 rounded-lg cursor-pointer mt-3">
                <div className="overflow-hidden rounded-full w-12 h-12 flex items-center">
                  <Image
                    src={"/photos/background/WhiteOrange1_1.webp"}
                    alt='test'
                    width={48}
                    height={48}
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <p className="md:text-lg text-md font-semibold md:max-w-[270px] max-w-[170px] w-full">
                  Test Event
                </p>
                <ArrowUpRight className="w-7" />
              </Link> */}

              {eventsLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-5 px-3 py-3 rounded-lg mt-3 animate-pulse">
                      <div className="overflow-hidden rounded-full bg-gray-200 w-12 h-12"></div>
                      <p className="text-xl font-semibold max-w-[270px] w-full bg-gray-200 rounded h-6"></p>
                      <div className="w-7 h-6 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
              ) : null}

            </ul>
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Link href="/connect" className="bg-white shadow-md rounded-2xl w-full aspect-video relative overflow-hidden transform transition-transform duration-350 hover:scale-[1.02]">
          <Image
            src="/photos/background/DarkBlue16_9.webp"
            layout="fill"
            objectFit="cover"
            alt="Dark Blue Background"
            draggable="false"
          />
          <div className="absolute inset-0 bg-opacity-10 flex items-center justify-center">
            <p className="text-white sm:text-7xl text-5xl font-bold z-100">Community</p>
          </div>
        </Link>
        <Link href="/discovery" className="bg-white shadow-md rounded-2xl w-full aspect-video relative overflow-hidden transform transition-transform duration-350 hover:scale-[1.02]">
          <Image
            src="/photos/background/DarkOrange16_9.webp"
            layout="fill"
            objectFit="cover"
            alt="Dark Orange Background"
            draggable="false"
          />
          <div className="absolute inset-0  bg-opacity-10 flex items-center justify-center">
            <p className="text-white sm:text-7xl text-5xl font-bold z-100">Discovery</p>
          </div>
        </Link>

      </div>
    </div>
  );
}
