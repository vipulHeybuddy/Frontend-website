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
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const Sliderclient = () => {
  const controls = useAnimation();
  const ref = useRef();

  const textAnimation1 = {
    hidden: { opacity: 0, y: "20%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
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

  const List = [
    {
      id: "1",
      serialno: "01",
      heading: "Immense Technical Complexity",
      imgurl: "",
      para: "Achieving a high level of realism was necessary to animate the 3D CT scanner. It was only possible by using multiple tools and accurate representation of physical components. Our design team also had to learn the scanner’s specifications and functionalities. ",
    },
    {
      id: "2",
      serialno: "01",
      heading: "Educational Content Balance",
      imgurl: "",
      para: "Our team had to create the perfect balance between visually engaging content and educational value through project development. Careful consideration was necessary to avoid overwhelming viewers with excessive technical information. We couldn’t sacrifice accuracy for the sake of complex operational details.",
    },
    {
      id: "3",
      serialno: "01",
      heading: "Render Resource Management",
      imgurl: "",
      para: "It wasn’t possible to render such a complex animated video in a short time. We relied on a Render Farm to meet project deadlines and deliver an exceptional final product. Our team had to balance the need for quality work with time and cost constraints. The data storage and transfer between the modeling and rendering stages were also challenging for Hey Buddy.       ",
    },
    // {
    //   id: "4",
    //   serialno: "01",
    //   heading: "Enhanced Brand Engagement4",
    //   imgurl: "",
    //   para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    // },
    // {
    //   id: "5",
    //   serialno: "01",
    //   heading: "Enhanced Brand Engagement5",
    //   imgurl: "",
    //   para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    // },
    // {
    //   id: "6",
    //   serialno: "01",
    //   heading: "Enhanced Brand Engagement6",
    //   imgurl: "",
    //   para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    // },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    // autoplaySpeed: 2000,
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
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
    >
      <div className="py-14">
        <div className="py-8 lg:w-[90%] text-white mx-auto text-center">
          <h1 className="py-4 font-bold text-2xl lg:text-4xl">
            Project Challenges
          </h1>
          {/* <p className="text-xl lg:text-2xl">
        Investing in game development is not just about creating entertainment but a strategic move to brand expansion and market leadership. It is a strategic avenue for investing in innovation and engagement and staying ahead in today's dynamic business landscape.
        </p> */}
        </div>

        <Slider {...settings}>
          {List.map((section, index) => (
            <div className="px-2 h-[49vh] ">
              <figure class="flex flex-col p-4 lg:p-6  rounded-lg  h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
                <blockquote class="  text-gray-400">
                  <span className="text-left text-4xl lg:text-6xl font-semibold text-gray-400">
                    {section.serialno}
                  </span>

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
  );
};

export default Sliderclient;
