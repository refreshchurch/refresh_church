'use client'
import { useEffect } from 'react';
import Head from 'next/head';

export default function VisitUs() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <div className="container mx-auto px-8 sm:px-36 py-12">
        <h2 className="text-4xl font-bold text-gray-900 tracking-tighter sm:text-4xl md:text-5xl mb-12">Visit Us</h2>
        <p className="text-xl font-semibold mb-10 text-black text-left bg-transparent rounded-lg">
          Thanks for considering Refresh Church — fill out the form below and a member of our team will be in touch.
        </p>
        {/* Typeform Embed */}
        <div data-tf-live="01JA90P7VH3WY0YWW6664KKN02"></div>
        <p className="text-lg mb-10 text-black text-left bg-transparent rounded-lg">
          By submitting, you agree to receive communications from us via text and email. You can text STOP to cancel or HELP for assistance. Message and data rates may apply. Message frequency varies.<a href='privacy-policy' className='text-primary hover:cursor-pointer'> Refresh Church Privacy Policy</a> & <a href='terms-and-conditions' className='text-primary hover:cursor-pointer'>Terms of Use apply</a>.
        </p>
      </div>
    </>
  );
}
