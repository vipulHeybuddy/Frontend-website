"use client";
import '../../../../styles/Font.css'
import React, { useEffect, useState , useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Gridsection from "@/components/Gridsection";
import Faqsection from "@/components/servicescomp/gamedevelopmentcomp/Section10";
import Pagenation from "@/components/servicescomp/gamedevelopmentcomp/Section8";
import Mixsection from "@/components/servicescomp/gamedevelopmentcomp/Section4";
import Timelinecomp from "@/components/servicescomp/gamedevelopmentcomp/Section5";
import Motionslide from "@/components/servicescomp/gamedevelopmentcomp/Section3";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import Herosection from "@/components/servicescomp/gamedevelopmentcomp/Section1";
import Bottomclient from "@/components/servicescomp/gamedevelopmentcomp/Section9";
import Section7 from "@/components/servicescomp/vrdevelopmentcomp/Section7";

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

  // const checklist1 = [
  //   {
  //     title: "Tablet/Mobile Game Developments",
  //   },
  //   {
  //     title: "Metaverse Game Development",
  //   },
  //   {
  //     title: "Immersive AR/VR Game Development",
  //   },
  //   {
  //     title: "Unreal and Unity Game Development",
  //   },
  // ];

  // --------------------grid section-1----------------------------------
  const List1 = [
    {
      id: "1",
      heading: "Innovative Virtual Real Estate Tours with Complete Customisation",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid1.png",
      para: "Hey Buddy developed a cutting-edge virtual real estate tour application that exceeded client expectations. The immersive VR experience helped our client offer high-quality, completely customizable property tours. This not only enhanced their ability to market and sell properties remotely but also enhanced their name in the Real Estate market. ",
    },
    {
      id: "2",
      heading: "Sophisticated VR Employee Training Solution in Manufacturing",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid2.png",
      para: "Staying true to its reputation, Hey Buddy successfully developed a VR training program for a manufacturing client. Our expert VR development team delivered high-quality immersive training solutions while ensuring timely delivery. The result helped the client in multiple ways including efficient onboarding, better employee engagement and learning outcomes, and high productivity.",
    },
    {
      id: "3",
      heading: "Virtual Reality in Healthcare: Medical Training",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid3.png",
      para: "We developed an intricate training solution for a medical institution. It offered a digital environment with a realistic and interactive training experience. Additionally, we supplied them with post-launch support and maintenance services for seamless ongoing functionality. As always, we met the client's expectations by demonstrating our in-depth understanding of the medical industry, for a reliable, industry-specific VR training solution. ",
    },
    // {
    //   id: "4",
    //   heading: "Data-Driven Insights:",
    //   imgurl:
    //     "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid4.png",
    //   para: "Games generate a wealth of data and information about player behaviour and preferences. Leverage it to gain deep audience insights, refine your marketing strategies, and make data-driven impactful decisions that get you the best business outcomes.",
    // },
    // {
    //   id: "5",
    //   heading: "Cross-Platform Reach:",
    //   imgurl:
    //     "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid5.png",
    //   para: "Reach your audience across various platforms and devices. From mobile and tablets to PCs, consoles, or VR, be present where your audience is and enjoy a broader reach. Gaming ensures that your message is accessible to a diverse and widespread audience.",
    // },
    // {
    //   id: "6",
    //   heading: "Innovative Marketing Opportunities:",
    //   imgurl:
    //     "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid6.png",
    //   para: "Games offer innovative marketing avenues by integrating your brand seamlessly into gaming storylines and environments. Utilize in-game advertising, or create branded mini-games for hyper-interactive campaigns, to enhance brand visibility and brand recall.",
    // },
  ];

  const Text1 = [
    {
      heading:
        "Success Stories with Hey Buddy Custom Virtual Reality Development",
      subtext:
        "Hey Buddy is renowned for consistently delivering superior-quality VR solutions well within the stipulated time. Here are some of the many success stories where our custom VR development services worked wonders for the clients.",
    },
  ];

  //   ------------------grid section-2----------------------------------
  const List2 = [
    {
      id: "1",
      heading: "Android VR Development Services",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid7.png",
      para: "We offer comprehensive Android VR development services so you easily reach a wider audience, right from day one.",
    },
    {
      id: "2",
      heading: "iOS VR Development Service",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid8.png",
      para: "Our expert iOS development service helps you reach a high-quality audience of iOS users around the globe.",
    },
    {
      id: "3",
      heading: "Unreal Engine 5 VR Development",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid9.png",
      para: "Get hyper-realistic VR experiences with our development services utilizing Unreal Engine 5.",
    },
    {
      id: "4",
      heading: "Unity VR Development Services",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid10.png",
      para: "With our Unity VR development, we create visually interactive VR experiences for your specific audience.",
    },
    // {
    //   id: "5",
    //   heading: "Enhanced Brand Engagement",
    //   imgurl:
    //     "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid11.png",
    //   para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    // },
    // {
    //   id: "6",
    //   heading: "Enhanced Brand Engagement",
    //   imgurl:
    //     "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid12.png",
    //   para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    // },
  ];

  const Text2 = [
    {
      heading:
        "Hey Buddy: Power VR Experiences Across Platforms",
      subtext:
        "We have a large team dedicated to VR development. This helps us possess talents for diverse platforms powered by powerful development frameworks.",
    },
  ];

  // ----------------------------------------------------------------


  return (
    <div className="lg:w-[80%] mx-auto">
      <div>

          {/* --------------------Section-1 ------------------------------------------ */}
        <div className="relative isolate px-6  pt-20 lg:px-8 ">
         
         <Herosection />

          {/* <div
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
          </div> */}

          {/* -------------------------grid-reuse------------------------------------- */}

          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev2.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Gridsection listData={List1} textData={Text1} />
          </div>

          {/* ------------------------Section-3-------------------------------------- */}
          <div> 
            <Motionslide />
          </div>

       

          {/* ----------------------------Section-4---------------------------------- */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev4.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Mixsection />
          </div>

          {/* ------------------------Section-5------------------------------------- */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev5.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Timelinecomp />
          </div>

          {/* ----------------------------grid-reuse---------------------------------- */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev6.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Gridsection listData={List2} textData={Text2} />
          </div>

          {/* ----------------------------Section7---------------------------------- */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev7.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            {/* <Gridsection listData={List3} textData={Text3} /> */}
            <Section7/>
          </div>

          {/* ------------------------section-8-------------------------------------- */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev8.png')] py-8 bg-no-repeat lg:bg-cover ">
            <Pagenation />
          </div>

          {/* -----------------------Section-9--------------------------------------- */}
          <div className="text-white lg:py-16 bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev9.png')] py-8 bg-no-repeat lg:bg-cover">
            <Bottomclient />
          </div>

          {/* -----------------------------Section-10----------------------------------- */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev10.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Faqsection />
          </div>


        </div>
      </div>
    </div>
  );
};

export default page;
