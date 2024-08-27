/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image";

export default function Leadership() {
  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      <h2 className="text-4xl font-bold text-gray-900 tracking-tighter sm:text-5xl md:text-6xl mb-12">Our Leadership</h2>
      
      {/* Head Pastor Section */}
      <div className="bg-white shadow-lg rounded-2xl p-8 mb-12 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <Image
            src="https://refresh.church/wp-content/uploads/2023/01/Leadership-1.jpg" // Replace with the actual path to the image
            layout="responsive"
            width={300}
            height={300}
            objectFit="cover"
            alt="Head Pastor"
            className="rounded-full shadow-md"
          />
        </div>
        <div className="lg:w-2/3 lg:pl-8 text-center lg:text-left">
          <h3 className="text-3xl font-bold text-primary mb-4">Pastor John Doe</h3>
          <p className="text-gray-700 text-lg mb-4">
            Pastor John has been leading our church for over 20 years, inspiring our community with his powerful messages and deep commitment to serving others. He and his wife, Jane, have three wonderful children and love spending time outdoors. They are passionate about mentoring the next generation and sharing the love of Christ with everyone they meet.
          </p>
          <p className="text-gray-700 text-lg">
            Under Pastor John's leadership, our church has grown significantly, reaching new heights in worship, community outreach, and spiritual development. His vision for the church is one of inclusion, growth, and unwavering faith in God's plan.
          </p>
        </div>
      </div>

      {/* Associate Pastors Section */}
      <h3 className="text-3xl font-bold text-gray-900 tracking-tighter sm:text-4xl md:text-5xl mb-8">Associate Pastors</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Pastor 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
          <Image
            src="/path-to-pastor1-image.jpg" // Replace with the actual path to the image
            layout="responsive"
            width={200}
            height={200}
            objectFit="cover"
            alt="Associate Pastor 1"
            className="rounded-full mb-4"
          />
          <h4 className="text-xl font-bold text-primary">Pastor Jane Smith</h4>
          <p className="text-gray-600">Youth Pastor</p>
        </div>

        {/* Pastor 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
          <Image
            src="/path-to-pastor2-image.jpg" // Replace with the actual path to the image
            layout="responsive"
            width={200}
            height={200}
            objectFit="cover"
            alt="Associate Pastor 2"
            className="rounded-full mb-4"
          />
          <h4 className="text-xl font-bold text-primary">Pastor Michael Brown</h4>
          <p className="text-gray-600">Worship Pastor</p>
        </div>

        {/* Pastor 3 */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
          <Image
            src="/path-to-pastor3-image.jpg" // Replace with the actual path to the image
            layout="responsive"
            width={200}
            height={200}
            objectFit="cover"
            alt="Associate Pastor 3"
            className="rounded-full mb-4"
          />
          <h4 className="text-xl font-bold text-primary">Pastor Sarah Johnson</h4>
          <p className="text-gray-600">Children's Pastor</p>
        </div>
      </div>
    </div>
  );
}
