"use client"

import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Link from "next/link";

export default function Contact() {
  // Google Maps API setup
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY" // Replace with your actual Google Maps API key
  });

  const center = useMemo(() => ({ lat: 40.7128, lng: -74.0060 }), []); // Replace with your church's actual coordinates

  return (
    <div className="container mx-auto px-8 sm:px-36 py-12">
      <h2 className="text-4xl font-bold text-gray-900 tracking-tighter sm:text-5xl md:text-6xl mb-12">Contact Us</h2>
      
      {/* Contact Form Button */}
      <div className="text-center mb-12">
        <Link href="/contact-form">
          <div className="inline-block bg-primary text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primaryDark transition duration-300 ease-in-out">
            Get in Touch
          </div>
        </Link>
      </div>

      {/* Google Map Section */}
      <div className="w-full h-[400px] mb-12">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        ) : (
          <div>Loading map...</div>
        )}
      </div>

      {/* Church Center App Installation */}
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Stay Connected with Our Church Center App</h3>
        <p className="text-lg text-gray-700 mb-6">
          Install the Church Center app to stay up to date with all of our events, groups, and more. Available on both Android and iOS.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://play.google.com/store/apps/details?id=com.ministrycentered.churchcenter" target="_blank" rel="noopener noreferrer">
            <img src="/path-to-google-play-badge.png" alt="Get it on Google Play" className="h-12" />
          </a>
          <a href="https://apps.apple.com/us/app/church-center-app/id1357742931" target="_blank" rel="noopener noreferrer">
            <img src="/path-to-app-store-badge.png" alt="Download on the App Store" className="h-12" />
          </a>
        </div>
      </div>
    </div>
  );
}
