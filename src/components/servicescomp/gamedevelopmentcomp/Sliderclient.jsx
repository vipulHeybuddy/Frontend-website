"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

const Sliderclient = () => {

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


    const List = [
        {
          id: "1",
          heading: "Enhanced Brand Engagement1",
          imgurl: "",
          para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
        },
        {
          id: "2",
          heading: "Increased User Retention",
          imgurl: "",
          para: "Games have an inherent ability to keep users hooked and invested. By incorporating addictive gameplay mechanics, your business can boost user retention, ensuring that your audience keeps coming back for more, and strengthening brand loyalty over time.",
        },
        {
          id: "3",
          heading: "Best Way for Brand Awareness",
          imgurl: "",
          para: "Gaming is a powerful tool to aware, educate and train your audience on your products. Create immersive experiences that communicate your brand message to your customers and inform them about your products or services. Thus, merging entertainment and marketing for the best possible outcomes.",
        },
        {
          id: "4",
          heading: "Data-Driven Insights",
          imgurl: "",
          para: "Games generate a wealth of data and information about player behaviour and preferences. Leverage it to gain deep audience insights, refine your marketing strategies, and make data-driven impactful decisions that get you the best business outcomes.",
        },
        {
          id: "5",
          heading: "Cross-Platform Reach",
          imgurl: "",
          para: "Reach your audience across various platforms and devices. From mobile and tablets to PCs, consoles, or VR, be present where your audience is and enjoy a broader reach. Gaming ensures that your message is accessible to a diverse and widespread audience.",
        },
        {
          id: "6",
          heading: "Innovative Marketing Opportunities",
          imgurl: "",
          para: "Games offer innovative marketing avenues by integrating your brand seamlessly into gaming storylines and environments. Utilize in-game advertising, or create branded mini-games for hyper-interactive campaigns, to enhance brand visibility and brand recall.",
        },
      ];
 
        const settings = {

        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        // cssEase: "linear",


        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        };

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={textAnimation1}
    >
         <div className="py-14">


          
        
        <Slider {...settings} >
       
        {List.map((section, index) => (
            <div className="px-2">

          <figure class="flex flex-col p-4 lg:p-6  rounded-lg  h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
            <blockquote class="  text-gray-400">
              <h3
                style={{ color: "white" }}
                class="py-4 text-xl font-semibold  text-gray-500 "
                >
                {section.heading}
              </h3>

              <p style={{ color: "white" }} className="text-left">
                {section.para}
              </p>
            </blockquote>
          </figure>
                  </div>
        ))}
         
        </Slider>

      </div>
    </motion.div>
  )
}

export default Sliderclient