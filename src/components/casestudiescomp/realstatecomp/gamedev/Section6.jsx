"use client";
import React from "react";
import { motion } from "framer-motion";

const Section6 = () => {

  const textAnimation1 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2 },
  };


  return (
    <div className="bg-[url('')] bg-no-repeat bg-auto bg-[center_top_1rem]">
      {/* <div
        className=" absolute inset-x-0 top-90 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-90"
        aria-hidden="true"
      
        
      </div> */}

      <div className="pt-[44px] lg:pt-[44px] "  id = "aboutus">
        <div className="mx-auto text-center justify-center ">
          <div className="p-4 lg:p-4  h-full ">
            <div className="lg:px-8 lg:pt-16">
              <motion.h1 className="px-4 text-2xl lg:text-4xl font-bold text-white mb-6" {...textAnimation1}>
              Data on the project result
              </motion.h1>
              <motion.p className="text-white text-sm lg:w-[60%]  mx-auto text-center justify-center" {...textAnimation1}>
              Lorem ipsum dolor sit amet consectetur. Eget non et arcu sollicitudin in mi nec sollicitudin. Euismod faucibus tincidunt purus velit sed tincidunt. Amet mi nisl integer facilisis pulvinar mi. Ut id eros sed ipsum. Ut blandit eget elementum pretium sed nec mi massa duis. Tincidunt turpis tempus sit non nunc semper augue 
              </motion.p>
            </div>
          </div>
        </div>
        <div>


          
          <motion.div class="p-4 lg:p-2 lg:w-[80%]  grid mb-8 mx-auto text-center justify-center rounded-xl shadow-sm  md:mb-12 grid-cols-2 md:grid-cols-2" {...textAnimation1}>
            
            <figure class="flex flex-col  p-8  border-b border-gray-900 rounded-tl-3xl md:rounded-t-none md:rounded-tl-3xl md:border-r h-full w-full bg-gray-700  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60">
              <blockquote class=" mb-4 lg:py-8 lg:mb-8 :text-gray-400">
                <h3 class="text-xl lg:text-5xl font-semibold text-gray-900 text-white">
                4.5
                </h3>
                <p style={{color: 'white'}} className="text-sm">rating on playstore</p>
              </blockquote>
            </figure>

            <figure class="flex flex-col p-8  border-b border-gray-900 rounded-tr-3xl    h-full w-full bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
              <blockquote class="max-w-2xl lg:py-8 mx-auto mb-4 text-gray-500 lg:mb-8 :text-gray-400">
                <h3 class="text-xl lg:text-5xl font-semibold text-gray-900 text-white">
                  22%
                </h3>
                <p  style={{color: 'white'}}className="text-sm">increatement in conversion rate</p>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-900 rounded-bl-3xl md:border-b-0 md:border-r   h-full w-full bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
              <blockquote class="max-w-2xl lg:py-8 mx-auto mb-4 text-gray-500 lg:mb-8 :text-gray-400">
                <h3 class="text-xl lg:text-5xl font-semibold text-gray-900 text-white">
                 30,000+
                </h3>
                <p style={{color: 'white'}} className="text-sm">Active users</p>
              </blockquote>
            </figure>

            <figure class="flex flex-col mx-auto items-center justify-center p-8 text-center  border-gray-900 rounded-br-3xl md:rounded-br-3xl h-full w-full bg-gray-800  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60">
              <blockquote class="max-w-2xl lg:py-8 mx-auto mb-4  lg:mb-8 text-gray-400">
                <h3 class="text-xl lg:text-5xl font-semibold  text-white">
                100%
                </h3>
                <p style={{color: 'white'}} className="text-sm">revenue uoliftment</p>
              </blockquote>
            </figure>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
