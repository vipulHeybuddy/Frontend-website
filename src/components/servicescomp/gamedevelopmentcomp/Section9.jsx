"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";


const Bottomclient = () => {

    const controls = useAnimation();
    const ref = useRef();
  
    const textAnimation1 = {
      hidden: { opacity: 0, y: "20%" },
      visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
    };
  
    const onScreen = async () => {
      const element = ref.current;
      if (element) {
        const isVisible = await controls.start("visible");
        if (isVisible) {
        }
      }
    };
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            onScreen();
          }
        },
        { threshold: 0 }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, []);
    const clientcardData = [
        {
          id: 1,
          content:
            "We assure you that no one can beat Hey Buddy in AI gaming. Their AI gaming solutions took our game to a whole new level. Our game became more dynamic and engaging throwing perfect challenges to the players. The team's dedication to offering the best solution sets them apart in the AI gaming space.",
          position: "Head of VP at Disney Hotstar",
          name: "Jonathan",
        },
        {
          id: 2,
          name: "Sarah",
          content:
            "Cross-platform development was like a breeze with Hey Buddy. They seamlessly optimized our game for iOS, Android, and PC, ensuring a consistent experience for players across different platforms. They are certainly the best game development company in India commitment to quality made them an invaluable partner in our game development journey.",
          position: "Head of VP at Disney Hotstar",
        },
        {
          id: 3,
          name: "Michael",
          content:
            "Our metaverse game wouldn't have been possible without Hey Buddy's expertise in the immersive gaming domain. They skillfully integrated VR and AR elements into our project We highly recommend them as a trusted metaverse game development company.",
          position: "Head of VP at Disney Hotstar",
        },
        {
          id: 4,
          name: "Emily",
          content:
            "Choosing Hey Buddy for our mobile game development was the right decision. Their team's proficiency in iOS and Android development ensured a smooth launch and unwavering post-release support. Moreover, the game's success surpassed our expectations. They are the best mobile game development company.",
          position: "Head of VP at Disney Hotstar",
        },
        {
          id: 5,
          name: "Jeremy",
          content:
            "Best game development company in India, though I am from the United States but never felt that I had hired this company, it was like this is my in-house team.",
          position: "Head of VP at Disney Hotstar",
        },
        {
          id: 6,
          name: "Alex",
          content:
            "If anyone has a futuristic idea in mind and not finding the way to turn the idea into reality, I would recommend to reach out to Hey buddy, they are the best technology partner.",
          position: "Head of VP at Disney Hotstar",
        },
      ];


  return (
    <motion.div 
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={textAnimation1}
    >
        <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
              How Clients Rate Our Game Development Services
            </h1>
            <p className="text-xl lg:text-2xl">
              Feature testimonials from satisfied clients who have utilised your
              game development services. Include their feedback on your
              professionalism, creativity, and the quality of your work.
            </p>
            <div class=" lg:py-12  grid mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
              {clientcardData.map((section, index) => (
                <figure class="flex flex-col  p-2 lg:p-6 border-2  border-gray-500 rounded-lg  h-full w-full bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-yellow-600 hover:bg-opacity-30">
                  <blockquote class="  :text-gray-400">
                    <p style={{ color: "white" }} className="text-left">
                      {section.content}{" "}
                    </p>

                    <h3 className="pt-4 text-right font-semibold text-white text-xl">
                      {section.name}
                    </h3>

                    {/* <h3
                      style={{ color: "white" }}
                      class="pt-2 text-right text-xl   text-gray-500 "
                    >
                      {section.position}
                    </h3> */}
                    {/* <h3 className="text-right text-white text-xl">{section.name}</h3> */}
                  </blockquote>
                </figure>
              ))}
            </div>
    </motion.div>
  )
}

export default Bottomclient