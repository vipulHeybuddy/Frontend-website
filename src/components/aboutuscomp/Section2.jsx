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
      {/* <div
        className=" absolute inset-x-0 top-90 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-90"
        aria-hidden="true"
      
        
      </div> */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-20 w-[90%] lg:w-[80%] mx-auto lg:pt-36 lg:pb-20">
        <div className="w-full lg:w-[80%] mx-auto">
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
          {/* <div
            // style={{ width: "fit-content" }}
            className=" w-[90%] mx-auto lg:mx-0 rounded-2xl bg-[#3F8AE2] px-2 py-2 text-lg lg:text-3xl  text-white  shadow-sm  mt-10 flex items-center justify-center gap-x-2"
          >
            WE LISTEN TO YOU!
          </div> */}
        </div>
        <div className="relative mt-10 px-auto">
          <Image
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Ellipse%20girl.png"
            alt="bg_img"
            width={200}
            height={200}
            className="z-20 absolute lg:-top-32 -top-4  left-2 lg:left-12 w-[100%] lg:w-[75%] "
          />
          <Image
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/girl.png"
            alt="bg_img"
            width={200}
            height={200}
            className="z-10 absolute lg:-top-[6.8rem] top-2 left-2 lg:left-[2.9rem] w-[95%] lg:w-[70%] "
          />
          <div className="w-[81%] lg:w-[60%] h-[53vh] lg:h-[100%] bg-[#ffffff] opacity-20  lg:ml-20 mt-32  lg:mt-10 rounded-b-full rounded-t-xl px-auto mx-auto  "></div>
          {/* <Image
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/section2bg.png"
            alt="bg_img"
            width={200}
            height={200}
            className="absolute top-24 left-36 w-[70%] "
          /> */}
          <div className="absolute top-52 lg:top-28 left-20 lg:left-32  ">
            <div>
              <div className=" flex gap-4  items-center my-4 lg:my-8">
                <div className="mr-6">
                  <div className="relative">
                    <div className="p-4 absolute -top-4  bg-[#979797] opacity-20 w-14 h-14 rounded-xl "></div>
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
                  <p className=" font-semibold text-white text-4xl ">10+</p>
                  <p className="text-white text-xs">Years of experience</p>
                </div>
              </div>
              <div className=" flex gap-4   items-center my-6 lg:my-12">
                <div className="mr-6">
                  <div className="relative">
                    <div className="p-4 absolute -top-4  bg-[#979797] opacity-20 w-14 h-14 rounded-xl "></div>
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
                  <p className=" font-semibold text-white text-4xl ">100+</p>
                  <p className="text-white text-xs">Repeated clients</p>
                </div>
              </div>
              <div className=" flex gap-4  items-center my-6 lg:my-12">
                <div className="mr-6">
                  <div className="relative">
                    <div className="p-4 absolute -top-4  bg-[#979797] opacity-20 w-14 h-14 rounded-xl "></div>
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
                  <p className=" font-semibold text-white text-4xl ">400+</p>
                  <p className="text-white text-xs">Projects completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="pt-[44px] lg:pt-[44px] " id="aboutus">
        <div className="mx-auto text-center justify-center ">
          <div className="p-4 lg:p-4  h-full ">
            <div className="lg:px-8 lg:pt-16">
              <motion.h1
                className="px-4 text-2xl lg:text-4xl font-bold text-white mb-6"
                {...textAnimation1}
              >
                What we have delieverd so far
              </motion.h1>
            </div>
          </div>
        </div>
        <div>
          {/* <div
            className="absolute inset-x-0 top-[calc(100%-0rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-0rem)]"
            aria-hidden="true"
          >
           
          </div> 

          <motion.div
            class="p-4 lg:p-2 lg:w-[60%]  grid mb-8 mx-auto text-center justify-center rounded-xl shadow-sm  md:mb-12 grid-cols-2 md:grid-cols-2"
            {...textAnimation1}
          >
            <figure class="flex flex-col  p-8  border-b border-gray-900 rounded-tl-3xl md:rounded-t-none md:rounded-tl-3xl md:border-r h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
              <blockquote class=" mb-4 lg:py-8 lg:mb-8 :text-gray-400">
                <h3 class="text-xl lg:text-5xl font-semibold text-gray-900 text-white">
                  400+
                </h3>
                <p style={{ color: "white" }} className="text-sm">
                  Projects
                </p>
              </blockquote>
            </figure>

            <figure class="flex flex-col p-8  border-b border-gray-900 rounded-tr-3xl    h-full w-full bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
              <blockquote class="max-w-2xl lg:py-8 mx-auto mb-4 text-gray-500 lg:mb-8 :text-gray-400">
                <h3 class="text-xl lg:text-5xl font-semibold text-gray-900 text-white">
                  150+
                </h3>
                <p style={{ color: "white" }} className="text-sm">
                  Clients
                </p>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-900 rounded-bl-3xl md:border-b-0 md:border-r   h-full w-full bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
              <blockquote class="max-w-2xl lg:py-8 mx-auto mb-4 text-gray-500 lg:mb-8 :text-gray-400">
                <h3 class="text-xl lg:text-5xl font-semibold text-gray-900 text-white">
                  250+
                </h3>
                <p style={{ color: "white" }} className="text-sm">
                  Experts
                </p>
              </blockquote>
            </figure>

            <figure class="flex flex-col mx-auto items-center justify-center p-8 text-center  border-gray-900 rounded-br-3xl md:rounded-br-3xl h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
              <blockquote class="max-w-2xl lg:py-8 mx-auto mb-4 text-gray-500 lg:mb-8 :text-gray-400">
                <h3 class="text-xl lg:text-5xl font-semibold text-gray-900 text-white">
                  97.68%
                </h3>
                <p style={{ color: "white" }} className="text-sm">
                  Retention Rate
                </p>
              </blockquote>
            </figure>
          </motion.div>
        </div>
      </div> */}
    </div>
  );
};

export default Section2;
