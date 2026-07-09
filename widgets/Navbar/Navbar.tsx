"use client"
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar'

import { useState, useEffect } from 'react';

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(NaN);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}

const Navbar = () => {
  const windowWidth = useWindowWidth()
  
  if(windowWidth < 1024)return (
    <MobileNavbar />
  )
  else return (
    <DesktopNavbar />
  )
}

export default Navbar