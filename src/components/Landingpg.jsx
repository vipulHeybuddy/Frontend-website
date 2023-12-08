"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import './landingpage.scss';
import { BsArrowRightShort } from "react-icons/bs";
import Link from 'next/link'
import '../styles/styles.css';
// import Solar from '../../public/Images/Frame.png';

const Landingpg = () => {
  useEffect(() => {
   
  }, []);

  const textAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2 },
  };

  return (
    <div>
      <div className=" bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Ellipse8.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          {/* ... Your existing code ... */}
          <div className="mx-auto lg:w-[60%] py-32 sm:pt-48 lg:pt-56">
            <div className="text-center">
              <motion.h1
                className="heading1 lg:text-6xl text-3xl lg:pb-8 font-bold tracking-tight text-white sm:text-6xl"
                {...textAnimation}
              >
                A Metaverse & Game Development Company in India

              </motion.h1>
              <motion.div className="wordCarousel">
        <span className="wearetext"  style={{fontWeight: '300'}}>We Are </span>
        <div>
        <ul className="flip5">
          <li style={{marginRight: '10rem'}}>Buddies!</li>
          <li style={{marginRight: '10rem'}}>Creative</li>
          <li style={{marginRight: '9rem'}}>Immersive</li>
          <li  style={{marginRight: '10rem'}}>Dynamic</li>
          <li style={{marginRight: '9rem'}}> Innovative</li>
          </ul>
         </div>
        </motion.div>

              <motion.div
                              className="mt-10 flex items-center justify-center gap-x-6"
                {...textAnimation}
              >
                 <Link href='/Pages/Contactus'>
                <div
                  className="getintouch rounded-3xl px-10 py-4 text-sm text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               >
                  Get in Touch <span aria-hidden="true" className="arrow">➜
</span>

    
                </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpg;