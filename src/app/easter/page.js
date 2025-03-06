import Image from "next/image";
import { InfinitePhotoScroll } from "../components/InfinitePhotoScroll";


export default function EasterPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/photos/easter/bg.png"
            alt="Easter background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">Easter at Refresh Church 2025</h1>
          <h2 className="mb-6 text-xl font-medium md:text-3xl lg:text-4xl">Owyhee High School 9:30 am and 10:30 am</h2>
          <p className="max-w-2xl text-md md:text-xl">
            Something for families, kids, youth, and young adults. Come for amazing worship, a great sermon, and to meet stellar people who are after the same things in life. We are all better together - we believe that every person can be refreshed and every purpose can be discovered. See you soon!
          </p>
        </div>
      </section>

      <InfinitePhotoScroll />
      {/* Photo Gallery with Infinite Scroll */}
      {/* <section className="py-12">
      </section> */}
    </main>
  )
}