"use client"; 
import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Link from 'next/link'
import Image from "next/image";
import classNames from 'classnames';

const Navbartest = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [backgroundwhite, setBackgroundWhite] = useState(false);

  const handleWindowScroll = (e) => {
    const height = window.scrollY;
    const tresholdHeight = 50;

    if (height > tresholdHeight) {
      setBackgroundWhite(true);
    } else {
      setBackgroundWhite(false);
    }
  };

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#whyus", label: "Why Us" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#aboutus", label: "About Us" },
    { href: "/Pages/Contactus", label: "Contact Us" },

  ];

  const handleBlackScreenClick = (e) => {
    e.stopPropagation();
    setDropdownOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);

    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);



  return (
    <div className=''>
      <header className="fixed top-0 transition-all duration-800 lg:px-24  w-full  z-50">
        {/* <nav className="flex lg:px-24  justify-center mx-auto items-center max-container"> */}
          <nav className={classNames('fixed   lg:px-24 justify-center mx-auto items-center max-container w-full transition-all duration-800 py-4 z-50 ', {
      '   bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-70 z-50': backgroundwhite
    })}>
        <div className='lg:pr-32 px-4 pt-2'>
          <Link href="/">
          <Image width={300} height={300} 
          src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/logo.png"
           className="lg:mr-32 lg:ml-0 h-6 w-[6rem] lg:h-10 lg:w-[12rem] cursor-pointer float-left" alt="Hey Buddy" />
          </Link>

          </div>

          <ul className="flex-1 flex justify-center items-center gap-4 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="lg:text-[15px]  px-4 text-white border-transparent hover:border-black block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          
          <div
            className="hidden max-lg:block cursor-pointer fixed right-0  px-4 "
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu className="text-white text-2xl" />
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div className=''>
          <nav className="fixed top-0 right-0 left-0 bottom-0 px-4 w-full lg:bottom-auto backdrop-filter bg-[#000000] backdrop-blur-2xl bg-opacity-30  z-50">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);

              }}
            >
              <AiOutlineClose className="text-white text-2xl" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="top-[295px] text-[24px font-bold  p-4 text-white border-transparent hover:border-black block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};
export default Navbartest;