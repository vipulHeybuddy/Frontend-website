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
          heading: "3D Character Development",
          imgurl: "",
          para: "Our experienced, skilled and creative 3D artists and modellers produce visually impressive 3D characters just for your project, brand and storytelling",
        },
        {
          id: "2",
          heading: "3D Asset Development",
          imgurl: "",
          para: "We develop meticulously detailed, accurate, and high-quality 3D assets that perfectly fulfil your project's visual and functional needs.",
        },
        {
          id: "3",
          heading: "3D Environment Development",
          imgurl: "",
          para: "We create deeply immersive environments that captivate your audience with ultra-realistic visuals and perfectly fit your project needs.",
        },
        {
          id: "4",
          heading: "3D Hard Surface Modelling",
          imgurl: "",
          para: "We create detailed 3D models of objects or structures following your specific guidelines and ensure timely delivery for uninterrupted project operations.",
        },
        {
          id: "5",
          heading: "3D Animation Services",
          imgurl: "",
          para: "Our client-centric approach ensures our 3D animations and meticulous rigging convey your vision accurately while captivating the audience with high-quality visuals.",
        },
        {
          id: "6",
          heading: "3D MetaHuman Creation Services",
          imgurl: "",
          para: "Get photorealistic digital humans with easy customisation, We create Metahumans for virtual productions, games, or all other applications.",
        },
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

          <figure style={{maxHeight: '36vh' }} class="flex flex-col p-4 lg:p-6  rounded-lg  h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
            <blockquote class="  text-gray-400">
              <h3
                style={{ color: "white" }}
                class="py-4 text-xl font-semibold  text-gray-500 "
                >
                {section.heading}
              </h3>

              <p style={{ color: "white",  height:"25vh" }} className="text-left">
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