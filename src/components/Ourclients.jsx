"use client";
import React from "react";
import { motion } from "framer-motion";

const Ourclients = () => {

  const textAnimation1 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2 },
  };

  return (
    <div  className="pt-16 bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Ellipse4.png')] bg-no-repeat bg-auto bg-[center_top_1rem]" id="testimonials">


    <div className="py-2 lg:py-8  mx-auto text-center justify-center  text-2xl lg:text-4xl font-bold text-white mb-6"> 
    <h3>Listen from our clients</h3>
    </div>
      <motion.div class="p-2 lg:p-12  w-[90%] lg:w-[80%]  grid mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4" {...textAnimation1}>
       
       
        <figure class="flex flex-col  p-2 lg:p-4   border-gray-500 rounded-lg  h-full w-full bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
          <blockquote class="  :text-gray-400">
            
            <p  style={{color:'white'}}className="text-left">
              Hey Buddy excels in IT services, specializing in cutting-edge
              technologies like AR, VR, Metaverse, Game Development, and App
              Development.
            </p>

            <h3 style={{color:'white'}} class="pt-4 text-right text-xl font-semibold  text-gray-500 ">
              01
            </h3>
            <h3 className="text-right text-white text-xl">Expertise</h3>

          </blockquote>
        </figure>

        <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center  border-gray-500 rounded-lg h-full w-full bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
          <blockquote class="max-w-2xl mx-auto text-gray-500 :text-gray-400">
           
            <p style={{color:'white'}} className="text-left">
              Hey Buddy stands out by delivering seamless and immersive
              experiences. They specialize in creating captivating VR games,
              interactive.
            </p>

            <h3 style={{color:'white'}} class="pt-4 text-right text-xl font-semibold text-gray-900 text-gray-500 ">
              02
            </h3>
            <h3 className="text-right text-white text-xl">Expertise</h3>
          </blockquote>
        </figure>

        <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center  border-gray-500 rounded-lg h-full w-full bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
          <blockquote class="max-w-2xl mx-auto text-gray-500 :text-gray-400">
            
            <p style={{color:'white'}} className="text-left">
              Hey Buddy stands out by delivering seamless and immersive
              experiences. They specialize in creating captivating VR games,
              interactive.
            </p>

            <h3 style={{color:'white'}} class="pt-4 text-right text-xl font-semibold text-gray-900 text-gray-500 ">
              03
            </h3>
            <h3 className="text-right text-white text-xl">Expertise</h3>
          </blockquote>
        </figure>

        <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center  border-gray-500 rounded-lg h-full w-full bg-gray-800  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
          <blockquote class="max-w-2xl mx-auto text-gray-500 :text-gray-400">
           
            <p style={{color:'white'}} className="text-left">
              Hey Buddy stands out by delivering seamless and immersive
              experiences. They specialize in creating captivating VR games,
              interactive.
            </p>

            <h3 style={{color:'white'}} class="pt-4 text-right text-xl font-semibold text-gray-900 text-gray-500 ">
              04
            </h3>
            <h3 className="text-right text-white text-xl">Expertise</h3>
          </blockquote>
        </figure>

        <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center  border-gray-500 rounded-lg h-full w-full bg-gray-800  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
          <blockquote class="max-w-2xl mx-auto text-gray-500  :text-gray-400">
            
            <p style={{color:'white'}} className="text-left">
              Hey Buddy excels in tailoring services to diverse industries with
              a client-centric approach. They empower businesses with innovative
              training solutions.
            </p>
            <h3 style={{color:'white'}} class="pt-4 text-right text-xl font-semibold text-gray-900 text-gray-500 ">
              05
            </h3>
            <h3 className="text-right text-white text-xl">Expertise</h3>
          </blockquote>
        </figure>

        <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center  border-gray-500 rounded-lg h-full w-full bg-gray-800  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
          <blockquote class="max-w-2xl mx-auto text-gray-500  :text-gray-400">
           
            <p style={{color:'white'}} className="text-left">
              Hey Buddy excels in tailoring services to diverse industries with
              a client-centric approach. They empower businesses with innovative
              training solutions.
            </p>

            <h3 style={{color:'white'}} class="pt-4 text-right text-xl font-semibold text-gray-900 text-gray-500 ">
              06
            </h3>
            <h3 className="text-right text-white text-xl">Expertise</h3>
          </blockquote>
        </figure>
      </motion.div>
    </div>
  );
};

export default Ourclients;
