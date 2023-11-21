"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
                className="lg:text-6xl text-3xl lg:pb-8 font-bold tracking-tight text-white sm:text-6xl"
                {...textAnimation}
              >
                A Metaverse Development Company From Future
              </motion.h1>
              <motion.p
                className="mt-6 text-center mx-auto lg:w-[60%] lg:text-2xl lg:leading-8 text-white "
                {...textAnimation}
              >
                We will grow your business 10X with our exceptionally well
                services
              </motion.p>
              <motion.div
                className="mt-10 flex items-center justify-center gap-x-6"
                {...textAnimation}
              >
                <a
                  href="#"
                  className="rounded-3xl bg-[#3F8AE2] px-10 py-4 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get in Touch <span aria-hidden="true" className="px-2 text-xl ">→</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpg;