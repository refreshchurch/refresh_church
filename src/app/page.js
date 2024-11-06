"use client"

import { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import OldHomePage from './components/OldHomePage';
import { showOldUi } from '../../constants';
import HomePage from './components/HomePage';

export default function Home() {
  const [showMobile, setShowMobile] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1025) {
        setShowMobile(true);
      } else {
        setShowMobile(false);
      }
    };

    setHydrated(true); // Set hydrated to true once the component has mounted
    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
    };
  }, []);



  return (
    <>
    {showOldUi ? (
      <OldHomePage showMobile={showMobile} hydrated={hydrated} />
    ):(
      <HomePage showMobile={showMobile} hydrated={hydrated}/>
    )}
    </>
  );
}
