/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image";
import Link from "next/link";
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
          showArrows={false}
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
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between">
            <h4 className="text-xl font-bold text-primary mb-4">Services</h4>
            <p className="text-gray-700">
            Refresh Church meets every Sunday at <b>9:00am & 10:30am</b> for an hour to an hour and ten minutes in the <b>Owyhee High School Auditorium</b> located at <Link href='https://maps.app.goo.gl/QVoYXC8LbYkQkN3s7' className="underline">3650 N. Owyhee Storm Ave. Meridian, ID 83646</Link>. Our philosophy on church services is to laugh and learn, as we draw closer to God.
            </p>
            <div className="flex justify-end mt-4">
              <Link href="https://maps.app.goo.gl/QVoYXC8LbYkQkN3s7">
                <button className="flex items-center bg-primary text-white text-sm font-semibold py-2.5 px-6 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
                  Get Directions
                  <svg
                    className="w-4 h-4 ms-2 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between">
            <div>
            <h4 className="text-xl font-bold text-primary mb-4">Kids Ministry</h4>
            <p className="text-gray-700">
              Our team works hard to create a safe, clean, and fun environment for your child. Kids ministries are offered for ages birth through 5th grade. The kids’ check-in area and classrooms are easy to find and our leaders are eager to welcome your child. You can preregister your family and save time during the check-in process by clicking the link below!
            </p>
            </div>
            <div className="flex justify-end mt-4">
              <Link href="/refresh-youth">
                <button className="flex items-center bg-primary text-white text-sm font-semibold py-2.5 px-6 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
                  Preregister
                  <svg
                    className="w-4 h-4 ms-2 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* <div className="bg-white shadow-md rounded-2xl p-6">
            <h4 className="text-xl font-bold text-primary mb-4">Students</h4>
            <p className="text-gray-700">
              During weekend services, students are invited to attend or serve during service. The Well is held every Wednesday at 6pm at the Refresh HQ where students can meet, hangout, worship and more. <a className="text-primary" href="https://refresh.churchcenter.com/groups/small-groups/youth-small-group">Learn more.</a>
            </p>
          </div> */}

          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold text-primary mb-4">Students</h4>
              <p className="text-gray-700">
                During weekend services, students are invited to attend or serve during service. The Well is held every Wednesday at 6pm at the Refresh HQ where students can meet, hangout, worship and more.
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <Link href="/refresh-youth">
                <button className="flex items-center bg-primary text-white text-sm font-semibold py-2.5 px-6 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
                  Learn more
                  <svg
                    className="w-4 h-4 ms-2 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6">
            <h4 className="text-xl font-bold text-primary mb-4">Parking</h4>
            <p className="text-gray-700">
              Owyhee High School has ample parking, and all the entrances and exits will be marked. When you arrive, feel free to park wherever you like and follow the signs toward the main entrance.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6">
            <h4 className="text-xl font-bold text-primary mb-4">Pre-Service</h4>
            <p className="text-gray-700">
              Inside you will find smiling faces, warm welcomes, and freshly brewed coffee. Pre-service, you can check your kids into their classes and enjoy a conversation with a new or old friend.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6">
            <h4 className="text-xl font-bold text-primary mb-4">Post-Service</h4>
            <p className="text-gray-700">
              When service ends, pick up your kids from their classrooms and hang out a while. Please let us know if you have any questions!
            </p>
          </div>
        </div>
      </div>

      {/* Church Slogan and Verse */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-primary lowercase mb-4">every person refreshed. every purpose discovered.</h3>
        <p className="text-xl text-gray-700 italic">"A generous person will prosper; whoever refreshes others will be refreshed." - Proverbs 11:25</p>
      </div>

      {/* Lead Pastor Section */}
      {/* <div className="flex flex-col lg:flex-row items-center lg:items-start mb-12">
        <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
          <div className="w-full h-[400px] relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://refresh.church/wp-content/uploads/2023/01/Leadership-1.jpg" // Replace with the actual path to the image
              layout="fill"
              objectFit="cover"
              alt="Lead Pastor"
            />
          </div>
        </div>
        <div className="lg:w-2/3 text-center lg:text-left">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Pastor TJ & Leah</h3>
          <p className="text-gray-700 text-lg">
            Refresh Church was born in the hearts of T.J. and Leah Hankey. While pastoring the church they started in Sarasota, Florida, Pastor T.J. and Leah felt an incredible burden for the people of the Treasure Valley. After years of wrestling, planning, and preparing they decided to follow God’s call to plant another church.
            <br />
            Amid a pandemic, the Hankey family headed for their new home. Since then, the Hankey’s have built friendships, raised resources, and dreamed about what Refresh will one day be. They are so excited to meet you!
          </p>
        </div>
      </div> */}
    </div>
  );
}
