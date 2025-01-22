/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link";
import Image from "next/image";
import { Inbox, Laptop, Mail, Phone } from "lucide-react";
import { showGivingPage } from "../../../constants";


export default function Contact() {

  if (!showGivingPage) {
    return null;
  }

  return (
    <>
      <div className="container mx-auto px-8 sm:px-36 py-12">
        {/* Enhanced Top Section */}
        <div className="bg-primaryDark rounded-2xl shadow-lg p-8 mb-12 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-4xl font-bold text-white dark:text-white tracking-tighter sm:text-4xl md:text-5xl">Giving</h2>
            <p className="text-xl text-gray-200 dark:text-gray-300 pt-2">We have three ways you can give</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          <Link href="https://refresh.churchcenter.com/giving?open-in-church-center-modal=true" target="_blank" rel="noopener noreferrer">
            <div className="bg-white shadow-lg rounded-2xl p-6 h-[250px] justify-center flex flex-col items-center transform transition-all hover:scale-105">
              <Laptop className="w-24 h-24" />
              <div className=" text-gray-900 mt-4 flex flex-col items-center justify-between">
                <h4 className="text-2xl font-semibold">Online</h4>
                <p className="text-lg">Click Here!</p>
              </div>
            </div>
          </Link>

          <Link href="https://maps.app.goo.gl/QVoYXC8LbYkQkN3s7" target="_blank" rel="noopener noreferrer" >
            <div className="bg-white shadow-lg rounded-2xl p-6 h-[250px] flex flex-col items-center justify-center transform transition-all hover:scale-105">
              <Inbox className="w-24 h-24" />
              <div className=" text-gray-900 mt-4 flex flex-col items-center justify-between">
                <h4 className="text-2xl font-semibold pb-6">In-Person</h4>
                <p className="text-lg"> </p>
              </div>
            </div>
          </Link>
          <Link href="tel:84321">
            <div className="bg-white shadow-lg rounded-2xl p-6 h-[250px] justify-center flex flex-col items-center transform transition-all hover:scale-105">
              <Phone className="w-24 h-24" />
              <div className=" text-gray-900 mt-4 flex flex-col items-center justify-between">
                <h4 className="text-2xl font-semibold">Text</h4>
                <p className="text-lg">(84321)</p>
              </div>
            </div>
          </Link>
          <Link href="">
            <div className="bg-white shadow-lg rounded-2xl p-6 h-[250px] justify-center flex flex-col items-center transform transition-all hover:scale-105">
              <Mail className="w-24 h-24" />
              <div className=" text-gray-900 mt-4 flex flex-col items-center justify-between">
                <h4 className="text-2xl font-semibold">Mail-In</h4>
                <p className="text-md">P.O. Box 487 <br/>Eagle, ID 83616</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex justify-center">
          <Link href="https://stockdonator.com/stock-information/?oid=cefc76f4" target="_blank" rel="noopener noreferrer" className="transform transition-all hover:scale-105">
            <div className="inline-block bg-primary text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
              Donate Stock To Refresh Church
            </div>
          </Link>
        </div>


      </div>
    </>
  );
}
