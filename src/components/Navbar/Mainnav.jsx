"use client"
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import Navbarnew from './Navbarnew';
import Link from 'next/link'
import Image from "next/image";

// import Logo from '../../../public/Images/logo.png';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [backgroundwhite, setBackgroundWhite] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: '768px' });

  const handleWindowScroll = (e) => {
    const height = window.scrollY;
    const tresholdHeight = 50;

    if (height > tresholdHeight) {
      setBackgroundWhite(true);
    } else {
      setBackgroundWhite(false);
    }
  };

  const handleBlackScreenClick = (e) => {
    e.stopPropagation();
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (isMobile) {
      setDropdownOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    setBackgroundWhite(dropdownOpen);
  }, [dropdownOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);

    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  return (

     //#e0e1dd - grey
    //#cce3de - green
    //#eaf4f4   bg-[#cce3de]
    // #9f86c0

    <nav className={classNames('fixed w-full transition-all duration-800 py-4 z-50 ', {
      '   bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-70 z-50': backgroundwhite
    })}>
      <div className="px-4 container mx-auto top-0 flex justify-between items-center ">
        <div className="flex items-center lg:px-16 text-center justify-center mx-auto">
          <div className='lg:pr-32'>

          <Link href="/">
          <Image width={300} height={300} 
          src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/logo.png"
           className="lg:mr-6 h-10 w-40 lg:h-10 lg:w-[12rem] cursor-pointer float-left" alt="Hey Buddy" />
          </Link>

          </div>
         
          <div className=' hidden px-4 gap-4 lg:flex'>
            <Navbarnew />
          </div>
        </div>
        
        <div className="lg:hidden text-2xl">
          <button className="z-50 p-4 block transition-all" onClick={() => setDropdownOpen(!dropdownOpen)}>
            {dropdownOpen ?
              <BsX className='text-white'/>
              :
              <BsList className='text-white'/>
            }
          </button>

          {/* Menu dropdown */}
          <div className={classNames({
            'text-base left-0 top-full right-0 absolute transition-all duration-400': true,
            'invisible opacity-0': !dropdownOpen,
            'visible opacity-100': dropdownOpen,
          })}>
            <div className="h-screen left-0 bg-black bg-opacity-30" onClick={handleBlackScreenClick}>
              <div className="z-20 shadow-xl bg-blue-100 p-6">
               
                <div className="mb-4 ">
                  <Navbarnew/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}