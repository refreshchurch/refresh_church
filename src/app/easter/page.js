import Image from "next/image";
import { InfinitePhotoScroll } from "../components/InfinitePhotoScroll";
import Link from "next/link";
import PlanVisitSticky from "../components/PlanVisitSticky";
import { ArrowBigRight } from "lucide-react"

export default function EasterPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-8 sm:px-36 pt-12 pb-6">

        <section className="relative w-full h-[350px] md:h-[500px] rounded-xl overflow-hidden">
          <Image
            src='/photos/easter/bg-with-text.png'
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="First Time Here Image"
            draggable="false"
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-white sm:text-7xl text-5xl font-bold max-[473px]:text-4xl z-100">First Time Here?</h1>
        </div> */}
        </section>
      </div>

      <section className=" ">
        <InfinitePhotoScroll event="easter" />
      </section>

      <div className="container mx-auto px-8 sm:px-36 pt-12 pb-6">

        <div className="flex flex-col lg:flex-row items-center mb-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              EASTER at REFRESH
            </h1>
            <div className="text-gray-700 space-y-3 text-lg">
              <p className="font-semibold">
                Services at Owyhee High School at 9am and 10:30am
              </p>
              <p className="text-base hover:underline">
                <a href="https://www.google.com/maps/place/Refresh+Church/@43.6345987,-116.3929469,17z/data=!3m1!4b1!4m5!3m4!1s0x54afab6678a860ad:0x82e71e5f1b73360!8m2!3d43.6345987!4d-116.3929469">
                  3650 N Owyhee Storm Ave, Meridian, ID 83646
                </a>
              </p>
              <p className="text-base">
                Photo booth and coffee truck available before and after services.
              </p>
              {/* ✅ Button 1 */}
              {/* <Link
                href="/plan-your-easter"
                className="inline-block bg-primaryDark text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primary transition duration-300 ease-in-out mt-4"
              >
                PLAN A VISIT
              </Link> */}
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="w-full h-[250px] relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/photos/easter/img14.webp"
                layout="fill"
                objectFit="cover"
                alt="easter image 1"
              />
            </div>
          </div>
        </div>



        <div className="mb-12">
          <div className="flex flex-col lg:flex-row-reverse items-center">
            <div className="lg:w-1/2 lg:pl-8 mb-8 lg:mb-0">
              <h1 className="text-3xl font-semibold text-gray-900 mb-4">Something for families, kids, youth, and young adults.</h1>
              <h2 className="text-gray-700 text-lg">Come for amazing worship, a great sermon, and to meet stellar people who are after the same things in life</h2>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="w-full h-[250px] relative overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/photos/easter/img1.webp"
                  layout="fill"
                  objectPosition="0 50%"
                  objectFit="cover"
                  alt="easter image 2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h1 className="text-4xl font-semibold text-gray-900 mb-4">We are all better together</h1>
            <h2 className="text-primary font-semibold text-xl">
              We believe that every person can be refreshed and every purpose can be discovered
            </h2>
            {/* <Link
              href="/plan-your-easter"
              className="inline-block bg-primaryDark text-white text-lg font-semibold py-3 px-6 mt-3 rounded-full hover:bg-primary transition duration-300 ease-in-out"
            >
              Plan Your Visit
            </Link> */}
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="w-full h-[250px] relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/photos/easter/img13.webp"
                layout="fill"
                objectPosition="0 55%"
                objectFit="cover"
                alt="easter image 3"
              />
            </div>
          </div>
        </div>

      </div>


      <div className="my-12 px-4 sm:px-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left">
            Something for families, kids, singles, youth, and young adults
          </h1>
          <div className="text-gray-700 text-lg space-y-4">
            <p>
              Come for amazing worship, a great sermon, and to meet stellar people who are after the same things in life. We are a non-denominational church in Meridian, Idaho.
            </p>
            <p>
              Many of us in our congregation come from Meridian, Star, Nampa, Caldwell, Eagle, Boise, and Emmett, Idaho. Services are just over an hour long.
            </p>
            <p>
              There are kid-designed environments for babies through pre-teen. Our youth (Junior High and High School) sit in the services, but we do offer a youth group on Wednesdays at our HQ office in Meridian, Idaho.
            </p>
            <p>
              Expect friendly faces, free coffee (coffee truck on Easter Sunday), great music, and a relatable sermon.
            </p>
            <p>
              Please stop by and say hello in the lobby or at the connection booth—most of the time staff and pastors are around to greet you and your family. We would love to see if Refresh Church is for you and will help in any way we can with your faith journey.
            </p>
            <p>
              We believe life is <strong className="text-primary">BETTER</strong> together and would <strong className="text-primary">LOVE</strong> for you to give us a look!
            </p>
            <p className="italic">
              – Refresh Leadership
            </p>
          </div>
        </div>
      </div>




      {/* Banner */}
      <section className="pt-6">
        <div className="w-full h-auto relative">
          <Image
            src="/photos/easter/banner-with-text.png"
            layout="responsive"
            width={1920} // Adjust based on actual aspect ratio
            height={500} // Adjust based on actual aspect ratio
            objectFit="cover"
            objectPosition="center"
            alt="easter image"
          />
        </div>
      </section>

      <PlanVisitSticky
        message="Plan your visit for Easter Sunday!"
        buttonText={<ArrowBigRight/>}
        href="/plan-your-easter"
        canBeClosed={false} 
      />


    </main>
  )
}