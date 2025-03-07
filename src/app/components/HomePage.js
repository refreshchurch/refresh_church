"use client"
import { ArrowUpRight, Boxes, Cable, Calendar, Handshake, Shapes, Tv, Users, Waves } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Home from "../page";
import HomeEventCard from "./HomeEventCard";
import { useState, useEffect } from "react";
import EventPopup from "./EventPopup";

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
      <EventPopup
        easter-test
        // imageUrl="/photos/popup/Easter-2025.png"
        imageUrl="/photos/easter/banner-with-text.png"
        eventUrl="/easter"
        endDate={new Date('2025-04-20T17:00:00.000Z')} //// 4-10-20-25 @ 11:00 AM MST UTC time
      />
      {/* Main */}
      <div className="flex flex-wrap gap-4 justify-center mb-4">
        <div className="bg-white shadow-md rounded-2xl w-full sm:aspect-17/9 aspect-square relative overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className='absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100'
          >
            <source src="/videos/landing-page.webm" type="video/webm" />
            {/* Fallback for unsupported browsers */}
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center flex-col">
            <Image
              src="/photos/white-logo.webp"
              width={600}
              height={600}
              className="sm:mb-[-30px] mb-[-20px] lg:w-[600px] w-[450px] sm:w-[500px] "
              alt="logo Image"
              draggable="false"
            />
            {/*  */}
            <Link href="/contact" className="sm:block hidden text-white lg:text-2xl text-xl font-bold z-100 cursor-pointer">
              Sunday Services at Owhyee High School
            </Link>
            {/* Sm screen Title */}
            <Link href="/contact" className="block sm:hidden text-white lg:text-2xl text-xl font-bold z-100 cursor-pointer">
              <span className="block">Sunday Services at</span>
              <span className="block">Owhyee High School</span>
            </Link>
            <Link href="/contact" className="text-white lg:text-2xl text-xl font-bold z-100 pt-1 cursor-pointer">9 & 10:30 AM</Link>
          </div>
        </div>
      </div>

      {/* Invisible h tags */}
      <div className="hidden">
        <h1>Refresh Church</h1>
        <h2>More than just a Sunday.</h2>
        <h3></h3>
      </div>

      {/* Middle */}
      <div className="grid md:grid-cols-[65%_1fr] grid-cols-1 gap-4 mb-4">
        <div className="flex flex-col gap-4">
          <Link href="/first-time-here" className="bg-white shadow-md rounded-2xl w-full aspect-video relative overflow-hidden transform transition-transform duration-350 hover:scale-[1.02]">
            <Image
              src="/photos/home/first-time-here.webp"
              layout="fill"
              objectFit="cover"
              objectPosition="0 15%"
              alt="First Time Here Image"
              draggable="false"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <p className="text-white sm:text-7xl text-5xl font-bold max-[400px]:text-4xl z-100">First Time Here</p>
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
              <h3 className="text-white sm:text-7xl text-5xl font-bold z-100">Leadership</h3>
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-white shadow-md rounded-2xl w-full md:h-[35%] h-[40%] relative overflow-hidden p-6">
            <h3 className="text-black text-3xl font-bold pb-[1px]">Learn More</h3>
            <h5 className="text-gray-400 text-lg">More than just a Sunday</h5>
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
              {/* NOTE: Small group link */}
              {/* <Link href="/small-groups" className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 rounded-lg cursor-pointer"> */}
              <Link href="https://refresh.churchcenter.com/groups/all-groups?enrollment=open_signup%2Crequest_to_join&filter=enrollment" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">
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
            <h4 className="text-black text-3xl font-bold">Get Involved</h4>
            <h5 className="text-gray-400 text-xl ps-0.5">Next Steps</h5>
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
              {/* NOTE: Give Link */}
              {/* <Link href="https://refresh.churchcenter.com/giving?open-in-church-center-modal=true" className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 rounded-lg cursor-pointer" target="_blank" rel="noopener noreferrer"> */}
              <Link href="/give" className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 rounded-lg cursor-pointer" target="_blank" rel="noopener noreferrer">
                <Handshake className="w-7" />
                <p className="text-xl font-semibold">
                  Give
                </p>
              </Link>
              {/* NOTE: Event Link */}
              <Link href="https://refresh.churchcenter.com/registrations/events" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                {/* <Link href="/events" className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 rounded-lg cursor-pointer"> */}
                <Calendar className="w-7" />
                <p className="text-xl font-semibold">
                  Events
                </p>
              </Link>

              {events.slice(0, 2).map((event, index) => (
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
                <
/div>
                <p className="md:text-lg text-md font-semibold md:max-w-[270px] max-w-[170px] w-full">
                  Test Event
                </p>
                <ArrowUpRight className="w-7" />
              </Link> */}
              {eventsLoading ? (
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-5 px-3 py-3 hover:bg-gray-100 rounded-lg cursor-pointer mt-3 animate-pulse">
                      <div className="overflow-hidden rounded-full w-12 h-12 flex items-center min-w-[48px]">
                        <div className="w-full h-full bg-gray-200 rounded"></div>
                      </div>
                      <div className="md:text-lg text-md font-semibold md:max-w-[270px] max-w-[170px] w-full h-4 bg-gray-200 rounded"></div>
                      <div className="w-7 h-7 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
              ) : null}

            </ul>
          </div>

        </div>

      </div>

      {/*TODO: consistant colors throughout, map buttons need to be dark */}
      {/* Try new maps, cut new card is half height wise */}

      <div className="flex flex-wrap gap-4 justify-center mb-4">
        <div className="bg-white shadow-md rounded-2xl w-full h-[200px] sm:h-[300px] lg:h-[350px] relative overflow-hidden">
          {/* <Image
            src='/photos/background/WhiteBlue16_9.webp'
            layout="fill"
            objectFit="cover"
            alt="white and orange background Image"
            draggable="false"
          /> */}
          <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center flex-col">
            <h4 className="text-gray-900 text-2xl sm:text-5xl font-bold z-100 mb-1 mt-5"> Connect with us Online</h4>
            <div className="flex justify-end space-x-8 mt-3">
              <Link href='https://www.instagram.com/refreshchurchtv/' target="_blank" rel="noopener noreferrer">
                <svg className=" w-16 h-16 sm:w-20 sm:h-20 hover:scale-110 duration-300 ease-in-out cursor-pointer text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
                </svg>
              </Link>

              <Link href="https://www.facebook.com/myrefreshchurch" target="_blank" rel="noopener noreferrer">
                <svg className="pb-0.5 w-16 h-16 sm:w-20 sm:h-20 hover:scale-110 duration-300 ease-in-out cursor-pointer text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                </svg>
              </Link>

              <Link href="https://www.youtube.com/@refreshchurchtv" target="_blank" rel="noopener noreferrer">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 hover:scale-110 duration-300 ease-in-out cursor-pointer mt-1 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mb-4">
        <div className="bg-white shadow-md rounded-2xl w-full h-[200px] sm:h-[300px] lg:h-[350px] relative overflow-hidden">
          <Image
            src="/photos/home/verse.webp"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Verse Image"
            draggable="false"
            className="sm:scale-[1.2] scale-[1.6]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-end flex-col mb-[23px]">
            <Link href="/connect">
              <button className="bg-white text-black text-md font-semibold px-5 py-2 rounded-full hover:text-white hover:bg-primaryDark transition duration-300 ease-in-out">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Video(s) Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

        {/* Refresh Intro Video */}
        <div className="bg-white shadow-md rounded-2xl w-full aspect-video relative overflow-hidden transform transition-transform duration-350 hover:scale-[1.02]">
          <video
            // autoPlay
            controls
            muted
            loop
            playsInline
            poster="/photos/home/invite-thumbnail.JPG"
            preload="auto"
            className='absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100'
          >
            <source src="/videos/refresh-invite.webm" type="video/webm" />
            {/* Fallback for unsupported browsers */}
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Durrand Video */}
        <div className="bg-white shadow-md rounded-2xl w-full aspect-video relative overflow-hidden transform transition-transform duration-350 hover:scale-[1.02]">
          <video
            // autoPlay
            controls
            muted
            loop
            playsInline
            poster="/photos/home/durand-thumbnail.png"
            preload="auto"
            className='absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100'
          >
            <source src="/videos/durand-story.webm" type="video/webm" />
            {/* Fallback for unsupported browsers */}
            Your browser does not support the video tag.
          </video>
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
            <p className="text-white text-5xl sm:text-7xl md:text-4xl lg:text-5xl font-bold z-100">Community</p>
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
            <p className="text-white text-5xl sm:text-7xl md:text-4xl lg:text-5xl font-bold z-100">Discovery</p>
          </div>
        </Link>
      </div>

    </div>
  );
}
