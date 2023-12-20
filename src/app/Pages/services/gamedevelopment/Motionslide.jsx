"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Motionslide = () => {

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

  const slideData = [
    {
      title: "Game Development",
      description:
        "From casual mobile gaming to console adventure, we create all here.",
      image:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/game.png",
    },
    {
      title: "Immersive Development",
      description:
        "From casual mobile gaming to console adventure, we create all here.",
      image:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Immersive.png",
    },
    {
      title: "3D Development",
      description:
        "From casual mobile gaming to console adventure, we create all here.",
      image:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Cube.jpg",
    },
    {
      title: "AI Services",
      description:
        "From casual mobile gaming to console adventure, we create all here.",
      image:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/ai.jpg",
    },
    {
      title: "APP Development",
      description:
        "From casual mobile gaming to console adventure, we create all here.",
      image:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/appdev.jpg",
    },
    {
      title: "VR Training & Simulation",
      description:
        "From casual mobile gaming to console adventure, we create all here.",
      image:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/metaverse.jpg",
    },
    {
      title: "Web3 Development",
      description:
        "From casual mobile gaming to console adventure, we create all here.",
      image:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/blockchain.jpg",
    },
  ];

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={textAnimation1}
    >
      <div className="py-8 text-white">
        <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
          Hey Buddy, Game On!! <br />
          Complete Game Development Services
        </h1>
        <p className="text-xl lg:text-2xl">
          Hey Buddy is your one-stop shop for end-to-end game development
          services. With AI on our side, we successfully clear levels of your
          game development needs.
        </p>
      </div>

      <div className="h-[50vh] w-full ">

      </div>

      
    </motion.div>
  );
};

export default Motionslide;
