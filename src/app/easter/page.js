import Image from "next/image";
import { InfinitePhotoScroll } from "../components/InfinitePhotoScroll";
import Link from "next/link";


export default function EasterPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-8 sm:px-36 py-12">

        <section className="relative w-full h-[500px] mb-12 rounded-xl overflow-hidden">
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

        <div className="flex flex-col lg:flex-row items-center mb-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">EASTER at REFRESH</h1>
            <h2 className="text-gray-700 font-semibold text-xl">
              Services are at Owyhee High School 9 am & 10:30am
            </h2>
            {/* <Link href="https://refresh.churchcenter.com/groups/small-groups/youth-small-group" className="inline-block bg-primaryDark text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primary transition duration-300 ease-in-out">
              Join Us at The Well
            </Link> */}
          </div>
          <div className="lg:w-1/2">
            <div className="w-full h-[250px] relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/photos/easter/img7.webp"
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
              <h1 className="text-3xl font-semibold text-gray-900 mb-4">Something For ...</h1>
              <h2 className="text-gray-700 text-lg">Come for amazing worship... Paragraph</h2>
            </div>
            <div className="lg:w-1/2">
              <div className="w-full h-[250px] relative overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/photos/easter/img2.webp"
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
            <h1 className="text-4xl font-semibold text-gray-900 mb-4">We are better together</h1>
            <h2 className="text-primary font-semibold text-xl">
              every person refreshed. every purpose discovered.
            </h2>
            {/* <Link href="https://refresh.churchcenter.com/groups/small-groups/youth-small-group" className="inline-block bg-primaryDark text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primary transition duration-300 ease-in-out">
              Join Us at The Well
            </Link> */}
          </div>
          <div className="lg:w-1/2">
            <div className="w-full h-[250px] relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/photos/easter/img4.webp"
                layout="fill"
                objectPosition="0 55%"
                objectFit="cover"
                alt="easter image 3"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Photo Gallery with Infinite Scroll */}
      <section className="pt-6">
        <InfinitePhotoScroll />
      </section>

    </main>
  )
}