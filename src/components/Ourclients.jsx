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
            Here is my opinion based on my experience, I have really enjoyed working with the game development team. The team is amicable, creative and understanding.
            </p>

            <h3 style={{color:'white'}} class="pt-4 text-right text-xl font-semibold  text-gray-500 ">
              01
            </h3>
            <h3 className="text-right text-white text-xl">Zan Syed</h3>

          </blockquote>
        </figure>

        <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center  border-gray-500 rounded-lg h-full w-full bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
          <blockquote class="max-w-2xl mx-auto text-gray-500 :text-gray-400">
           
            <p style={{color:'white'}} className="text-left">
            Thank you very much! An amazing job done by buddies what I like to call the team that exceeds all expectations. I am glad that I trusted you guys.
            </p>

            <h3 style={{color:'white'}} class="pt-4 text-right text-xl font-semibold text-gray-900 text-gray-500 ">
              02
            </h3>
            <h3 className="text-right text-white text-xl">Sarah</h3>
          </blockquote>
        </figure>

        <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center  border-gray-500 rounded-lg h-full w-full bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
          <blockquote class="max-w-2xl mx-auto text-gray-500 :text-gray-400">
            
            <p style={{color:'white'}} className="text-left">
            I loved working with Hey Buddy and the way my VR project was handled, I consider this company the best metaverse company in India.
            </p>

            <h3 style={{color:'white'}} class="pt-4 text-right text-xl font-semibold text-gray-900 text-gray-500 ">
              03
            </h3>
            <h3 className="text-right text-white text-xl">Ankit</h3>
          </blockquote>
        </figure>

        <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center  border-gray-500 rounded-lg h-full w-full bg-gray-800  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
          <blockquote class="max-w-2xl mx-auto text-gray-500 :text-gray-400">
           
            <p style={{color:'white'}} className="text-left">
            OMG where to start, I have no idea! people are amazing here, very focused and client-oriented. Kudos to the team for delivering the game project on time.
            </p>

            <h3 style={{color:'white'}} class="pt-4 text-right text-xl font-semibold text-gray-900 text-gray-500 ">
              04
            </h3>
            <h3 className="text-right text-white text-xl">Riyahi</h3>
          </blockquote>
        </figure>

        <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center  border-gray-500 rounded-lg h-full w-full bg-gray-800  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
          <blockquote class="max-w-2xl mx-auto text-gray-500  :text-gray-400">
            
            <p style={{color:'white'}} className="text-left">
            Best game company in India, though I am from US but never felt that I had hired this company, it was like this is my in-house team.
            </p>
            <h3 style={{color:'white'}} class="pt-4 text-right text-xl font-semibold text-gray-900 text-gray-500 ">
              05
            </h3>
            <h3 className="text-right text-white text-xl">Jeremy</h3>
          </blockquote>
        </figure>

        <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center  border-gray-500 rounded-lg h-full w-full bg-gray-800  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
          <blockquote class="max-w-2xl mx-auto text-gray-500  :text-gray-400">
           
            <p style={{color:'white'}} className="text-left">
            If anyone has a futuristic idea in mind and not finding the way to turn the idea into reality, I would recommend to reach out to Hey buddy, they are the best technology partner.
            </p>

            <h3 style={{color:'white'}} class="pt-4 text-right text-xl font-semibold text-gray-900 text-gray-500 ">
              06
            </h3>
            <h3 className="text-right text-white text-xl">Bhaskar</h3>
          </blockquote>
        </figure>
      </motion.div>
    </div>
  );
};

export default Ourclients;
