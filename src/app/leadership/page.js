/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image";

export default function Leadership() {
  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      <h2 className="text-3xl font-bold text-gray-900 tracking-tighter sm:text-3xl md:text-4xl mb-12">Our Leadership</h2>

      {/* Head Pastor Section */}
      <div className="bg-white shadow-lg rounded-2xl p-8 mb-12 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <div className="relative w-72 h-72">
            <Image
              src="https://refresh.church/wp-content/uploads/2023/01/TJLeah.jpg" // Replace with the actual path to the image
              layout="fill"
              objectFit="cover"
              alt="Head Pastor"
              className="rounded-full shadow-md"
            />
          </div>
        </div>
        <div className="lg:w-2/3 lg:pl-8 text-center lg:text-left">
          <h3 className="text-3xl font-bold text-primary mb-4">Pastor TJ & Leah</h3>
          <p className="text-gray-700 text-lg mb-4">
            Pastor John has been leading our church for over 20 years, inspiring our community with his powerful messages and deep commitment to serving others. He and his wife, Jane, have three wonderful children and love spending time outdoors. They are passionate about mentoring the next generation and sharing the love of Christ with everyone they meet.
          </p>
          <p className="text-gray-700 text-lg">
            T.J. Hankey felt called to be a pastor shortly after he graduated from high school in Sarasota, FL. With this new purpose in mind, he started his education through a local church program called the Master’s Commission. It was here that he gained valuable experience and education through Global and Southeastern Universities. While serving his local church, he met his beautiful wife Leah.
            <br />
            In 2011, T.J. and Leah set out on the incredible adventure of planting a new, life-giving, church on the west side of Sarasota. On January 29th, 2012, The Shore Church had its first service. Over the next 8-and-a-half  years, The Shore saw more than 1,000 people make the decision to follow Jesus with their entire lives.
            <br />
            In the summer of 2020, T.J. and Leah once again felt a clear call from God to plant a life-giving church. This time, in the Treasure Valley of Idaho. Refresh Church launched in September of 2021 and has built an incredible team to see people refreshed by the presence of God and discover their purpose in Him.
            <br />
            Pastor T.J. is a gifted teacher and communicator. He has a passion for making God’s word relatable and practical, and he has a heart for reaching people right where they are and introducing them to the refreshing message of Jesus. In their free time, T.J. and Leah like spending time outdoors with their four children Mckenna, Addison, Cecelia, and Layton.
          </p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-2xl p-12 mb-12 flex flex-col lg:flex-row items-center">
        <p className="text-gray-700 text-lg">
          T.J. Hankey felt called to be a pastor shortly after he graduated from high school in Sarasota, FL. With this new purpose in mind, he started his education through a local church program called the Master’s Commission. It was here that he gained valuable experience and education through Global and Southeastern Universities. While serving his local church, he met his beautiful wife Leah.
          In 2011, T.J. and Leah set out on the incredible adventure of planting a new, life-giving, church on the west side of Sarasota. On January 29th, 2012, The Shore Church had its first service. Over the next 8-and-a-half years, The Shore saw more than 1,000 people make the decision to follow Jesus with their entire lives.
          In the summer of 2020, T.J. and Leah once again felt a clear call from God to plant a life-giving church. This time, in the Treasure Valley of Idaho. Refresh Church launched in September of 2021 and has built an incredible team to see people refreshed by the presence of God and discover their purpose in Him.
          Pastor T.J. is a gifted teacher and communicator. He has a passion for making God’s word relatable and practical, and he has a heart for reaching people right where they are and introducing them to the refreshing message of Jesus. In their free time, T.J. and Leah like spending time outdoors with their four children Mckenna, Addison, Cecelia, and Layton.
        </p>
      </div>

      {/* Associate Pastors Section */}
      <h3 className="text-xl font-bold text-gray-900 tracking-tighter sm:text-4xl md:text-3xl mb-8">Associate Pastors & Staff</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Pastor 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
          <Image
            src="https://refresh.church/wp-content/uploads/2023/08/Chris-EDIT-1536x1536.jpg" // Replace with the actual path to the image
            layout="responsive"
            width={200}
            height={200}
            objectFit="cover"
            alt="Associate Pastor 1"
            className="rounded-full mb-4"
          />
          <h4 className="text-xl font-bold text-primary">Pastor Christ Abernathy</h4>
          <p className="text-gray-600">Connections Director</p>
        </div>

        {/* Pastor 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
          <Image
            src="https://refresh.church/wp-content/uploads/2023/01/Sam-EDIT-scaled-1.jpg" // Replace with the actual path to the image
            layout="responsive"
            width={200}
            height={200}
            objectFit="cover"
            alt="Associate Pastor 2"
            className="rounded-full mb-4"
          />
          <h4 className="text-xl font-bold text-primary">Pastor Same</h4>
          <p className="text-gray-600">Next Gen Director</p>
        </div>

        {/* Pastor 3 */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
          <Image
            src="https://refresh.church/wp-content/uploads/2024/04/IMG_2173-e1712875733838.jpeg" // Replace with the actual path to the image
            layout="responsive"
            width={200}
            height={200}
            objectFit="cover"
            alt="Associate Pastor 3"
            className="rounded-full mb-4"
          />
          <h4 className="text-xl font-bold text-primary">Yolonda Pech</h4>
          <p className="text-gray-600">Pastoral Assistant and Administration</p>
        </div>
      </div>
    </div>
  );
}