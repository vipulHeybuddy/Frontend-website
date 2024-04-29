"use client";
import Image from "next/image";
import React from "react";
// import { motion } from "framer-motion";

const Section2 = () => {
  const textAnimation1 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2 },
  };

  return (
    <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Ellipse2.png')] bg-no-repeat bg-auto bg-[center_top_1rem] mx-auto pt-8 lg:pt-20">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-20 w-[90%] lg:w-[80%] mx-auto lg:pt-36 lg:pb-20">
        <div className="w-full pb-14 lg:pb-0 lg:w-[80%] mx-auto">
          <h1 className="text-xl lg:text-4xl text-center lg:text-left text-white my-8">
            Our Goal
          </h1>
          <p className=" text-white  mt-2 text-center lg:text-left">
            They had only one goal -- to ensure timely delivery in the most
            friendly, cooperative and convenient manner.
          </p>
          <p className=" text-white mt-2  lg:mt-10 text-center lg:text-left">
            So that everyone involved gets peace of mind and experience the joy
            of doing business with the right people they have been looking for
            “since forever”.
          </p>
          <p className=" text-white  mt-2  lg:mt-10 text-center lg:text-left">
            This is how started the saga of 100s of successful projects
            delivered to hundreds of happy clients around the world. So, if you
            are still wondering why you should choose Hey Buddy?
          </p>
          <p className=" text-white  mt-2  lg:mt-10 text-center lg:text-left">
            The answer is pretty darn simple. WE LISTEN TO YOU!
          </p>
        </div>
        <div className=" mx-auto -mt-14 px-auto">
          {/* <Image
            loading="lazy"
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Ellipse%20girl.png"
            alt="bg_img"
            width={200}
            height={200}
            className="z-20 absolute lg:-top-32 -top-4  left-2 lg:left-12 w-[100%] md:w-[60%] lg:w-[100%] xl:w-[75%] "
          />
          <Image
            loading="lazy"
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/girl.png"
            alt="bg_img"
            width={200}
            height={200}
            className="z-10 absolute lg:-top-[6.8rem] md:left-36 md:-top-24 top-2 left-2 lg:left-[2.9rem] w-[95%] md:w-[67%] xl:w-[70%] "
          /> */}
          {/* <div className="w-[81%] md:w-[56%] lg:w-[81%] xl:w-[60%] h-[53vh] lg:h-[100%] bg-[#ffffff] opacity-20  lg:ml-20 mt-32  lg:mt-10 rounded-b-full rounded-t-xl px-auto mx-auto  "></div> */}
          <Image
            loading="lazy"
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/girl_bg.png"
            alt="bg_img"
            width={200}
            height={200}
            className=" -mt-20 left-2 lg:left-12 w-[100%]   "
          />
          <div className=" py-4 -mt-[17rem] md:-mt-[24rem] lg:-mt-[20rem] xl:-mt-96 ml-20 md:ml-36 lg:ml-24   xl:ml-32   ">
            <div>
              <div className=" flex gap-4  items-center my-4 lg:my-8">
                <div className="mr-4 lg:mr-6">
                  <div className="relative">
                    <div className=" absolute -top-4  bg-[#979797] opacity-20 w-14 h-14 rounded-xl "></div>
                    <Image
                      loading="lazy"
                      src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/onevec.png"
                      alt="bg_img"
                      width={200}
                      height={200}
                      className=" ml-4  w-6 h-6 "
                    />
                  </div>
                </div>
                <div className="">
                  <p className=" font-semibold text-white text-2xl md:text-4xl lg:text-4xl xl:text-4xl ">
                    10+
                  </p>
                  <p className="text-white text-xs">Years of experience</p>
                </div>
              </div>
              <div className=" flex gap-4   items-center my-6 lg:my-12">
                <div className="mr-4 lg:mr-6">
                  <div className="relative">
                    <div className="absolute -top-4  bg-[#979797] opacity-20 w-14 h-14 rounded-xl "></div>
                    <Image
                      loading="lazy"
                      src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/twovec.png"
                      alt="bg_img"
                      width={200}
                      height={200}
                      className=" ml-4  w-6 h-6 "
                    />
                  </div>
                </div>
                <div className="">
                  <p className=" font-semibold text-white text-2xl md:text-4xl lg:text-4xl xl:text-4xl ">
                    100+
                  </p>
                  <p className="text-white text-xs">Repeated clients</p>
                </div>
              </div>
              <div className=" flex gap-4  items-center my-6 lg:my-12">
                <div className="mr-4 lg:mr-6">
                  <div className="relative">
                    <div className=" absolute -top-4  bg-[#979797] opacity-20 w-14 h-14 rounded-xl "></div>
                    <Image
                      loading="lazy"
                      src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/threevec.png"
                      alt="bg_img"
                      width={200}
                      height={200}
                      className=" ml-4  w-6 h-6 "
                    />
                  </div>
                </div>
                <div className="">
                  <p className=" font-semibold text-white text-2xl md:text-4xl lg:text-4xl xl:text-4xl ">
                    400+
                  </p>
                  <p className="text-white text-xs">Projects completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
