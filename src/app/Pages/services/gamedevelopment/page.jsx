"use client";

import React, { useEffect, useState , useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Gridsection from "./Gridsection";
import Faqsection from "./Faqsection";
import Pagenation from "./Pagenation";
import Mixsection from "./Mixsection";
import Timelinecomp from "./Timelinecomp";
import Motionslide from "./Motionslide";
import { AiFillCheckCircle } from "react-icons/ai";

import { motion, useAnimation } from "framer-motion";
import Herosection from "./Herosection";
import Bottomclient from "./Bottomclient";

const page = () => {


  const controls = useAnimation();
  const ref = useRef();

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Check if the container is in the viewport
    const container = document.getElementById('fade-in-container');
    if (container) {
      const rect = container.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isInViewport) {
        setIsVisible(true);
      }
    }
  };

 

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const textAnimation = {
    hidden: { opacity: 0, y: "0%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const textAnimation1 = {
    hidden: { opacity: 0, y: "0%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 5.5, ease: "easeOut" },
    },
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

  const checklist1 = [
    {
      title: "Tablet/Mobile Game Development",
    },
    {
      title: "Metaverse Game Development",
    },
    {
      title: "Immersive AR/VR Game Development",
    },
    {
      title: "Unreal and Unity Game Development",
    },
  ];

  // --------------------grid section-1----------------------------------
  const List1 = [
    {
      id: "1",
      heading: "Enhanced Brand Engagement",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid1.png",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "2",
      heading: "Increased User Retention:",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid2.png",
      para: "Games have an inherent ability to keep users hooked and invested. By incorporating addictive gameplay mechanics, your business can boost user retention, ensuring that your audience keeps coming back for more, and strengthening brand loyalty over time.",
    },
    {
      id: "3",
      heading: "Best Way for Brand Awareness",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid3.png",
      para: "Gaming is a powerful tool to aware, educate and train your audience on your products. Create immersive experiences that communicate your brand message to your customers and inform them about your products or services. Thus, merging entertainment and marketing for the best possible outcomes. ",
    },
    {
      id: "4",
      heading: "Data-Driven Insights:",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid4.png",
      para: "Games generate a wealth of data and information about player behaviour and preferences. Leverage it to gain deep audience insights, refine your marketing strategies, and make data-driven impactful decisions that get you the best business outcomes.",
    },
    {
      id: "5",
      heading: "Cross-Platform Reach:",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid5.png",
      para: "Reach your audience across various platforms and devices. From mobile and tablets to PCs, consoles, or VR, be present where your audience is and enjoy a broader reach. Gaming ensures that your message is accessible to a diverse and widespread audience.",
    },
    {
      id: "6",
      heading: "Innovative Marketing Opportunities:",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid6.png",
      para: "Games offer innovative marketing avenues by integrating your brand seamlessly into gaming storylines and environments. Utilize in-game advertising, or create branded mini-games for hyper-interactive campaigns, to enhance brand visibility and brand recall.",
    },
  ];

  const Text1 = [
    {
      heading:
        "Power up Your Brand and Press Start for Profit with Game Development -  Your Gamified Success Awaits!",
      subtext:
        "Investing in game development is not just about creating entertainment but a strategic move to brand expansion and market leadership. It is a strategic avenue for investing in innovation and engagement and staying ahead in today's dynamic business landscape.",
    },
  ];

  //   ------------------grid section-2----------------------------------
  const List2 = [
    {
      id: "1",
      heading: "Enhanced Brand Engagement",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid7.png",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "2",
      heading: "Enhanced Brand Engagement",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid8.png",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "3",
      heading: "Enhanced Brand Engagement",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid9.png",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "4",
      heading: "Enhanced Brand Engagement",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid10.png",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "5",
      heading: "Enhanced Brand Engagement",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid11.png",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "6",
      heading: "Enhanced Brand Engagement",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid12.png",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
  ];

  const Text2 = [
    {
      heading:
        "Score Big Wins With Hey Buddy: Your Trusted  Game Development Company",
      subtext:
        "Hey Buddy is a renowned name in the game development space. We have an experienced development team who know what works best for your business.",
    },
  ];
  //   ------------------grid section-3----------------------------------

  const List3 = [
    {
      id: "1",
      heading: "Enhanced Brand Engagement",
      // imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "2",
      heading: "Enhanced Brand Engagement",
      // imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "3",
      heading: "Enhanced Brand Engagement",
      // imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
  ];

  const Text3 = [
    {
      heading:
        "Digital Joysticks, Real Rewards: Success Stories with Hey Buddy",
      subtext:
        "Hey Buddy offers its services to clients working in different industries and different scales. Here are the success stories that make us the best gaming development company in India. ",
    },
  ];

  //   ------------------grid section-4----------------------------------

  // ----------------------------------------------------------------


  return (
    <div className="lg:w-[80%] mx-auto">
      <div>
        <div className="relative isolate px-6  pt-20 lg:px-8 ">
         
         <Herosection />




          {/* ----------------------para section---------------------------------------- */}
          <div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textAnimation1}
            className="py-8 text-xl "
          >
            <p>
              Get an AI-powered smart gaming solution that captivates with its
              hyper-realistic graphics and enthrals with its deeply engaging
              gameplay. Hey Buddy is India's leading game development company,
              maintaining a large team of gamer-first developers who know what
              works.
            </p>
          </div>

          {/* --------------------box section ------------------------------------------ */}

          <div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textAnimation1}
            className=" bg-gradient-to-r from-[#24C2F8] to-[#0B0DF4] shadow-xl rounded-3xl py-4 lg:py-6 mt-8 mx-auto"
          >
            <div className=" lg:mx-auto lg:text-center w-full justify-center py-2 lg:py-2">
              <ol className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-2 gap-5 lg:gap-x-16">
                {checklist1.map((section, index) => (
                  <div className="px-2 lg:px-16 flex items-center text-[#FFFFFF]  space-x-2.5 rtl:space-x-reverse">
                    <san className="flex items-center justify-center w-8 h-8  rounded-full shrink-0 ">
                      {/* &#10004; */}
                      <AiFillCheckCircle className="w-8 h-8 text-[#6FCF97]" />
                    </san>
                    <span>
                      <h3 className="font-medium leading-tight">
                        {section.title}
                      </h3>
                    </span>
                  </div>
                ))}
              </ol>
            </div>
          </div>

          {/* -------------------------------------------------------------- */}

          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev2.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Gridsection listData={List1} textData={Text1} />
          </div>

          {/* ------------------------scroll component-------------------------------------- */}
          <div> 
            <Motionslide />
          </div>

       

          {/* ----------------------------mix section---------------------------------- */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev4.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Mixsection />
          </div>

          {/* ------------------------left side scroll timeline section-------------------------------------- */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev5.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Timelinecomp />
          </div>

          {/* -------------------------------------------------------------- */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev6.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Gridsection listData={List2} textData={Text2} />
          </div>

          {/* -------------------------------------------------------------- */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev7.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Gridsection listData={List3} textData={Text3} />
          </div>

          {/* ------------------------pagination section-------------------------------------- */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev8.png')] py-8 bg-no-repeat lg:bg-cover ">
            <Pagenation />
          </div>

          {/* -----------------------client section--------------------------------------- */}
          <div className="text-white lg:py-16 bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev9.png')] py-8 bg-no-repeat lg:bg-cover">
            <Bottomclient />
          </div>

          {/* -----------------------------FAQ section------------------------------------ */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev10.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Faqsection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
