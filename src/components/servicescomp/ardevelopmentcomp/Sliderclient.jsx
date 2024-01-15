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
          heading: "AR App Development",
          imgurl: "",
          para: "Achieve high engagement with immersive Augmented Reality applications. We create AR apps with seamless user experience and cross-platform compatibility for wider reach.",
        },
        {
          id: "2",
          heading: "AR Software Development",
          imgurl: "",
          para: "Get an optimized and efficient solution that perfectly plugs the gap. We create customized AR development solutions for your very specific business needs.",
        },
        {
          id: "3",
          heading: "AR Consulting",
          imgurl: "",
          para: "Gain data-driven insights and strategic guidance for AR business integration. Make informed decisions with our AR consulting services and achieve major business objectives.",
        },
        {
          id: "4",
          heading: "AR Design and Prototyping",
          imgurl: "",
          para: "We design AR interfaces and create interactive prototypes to help you refine and make is as per your expectations and requirements. All this, even before the development begins.",
        },
        {
          id: "5",
          heading: "Marker-Based and Markerless AR",
          imgurl: "",
          para: "Whether marker-based or markerless AR solutions, you choose, we deliver. Get versatile AR experiences that function perfectly in every environment and condition.",
        },
        {
          id: "6",
          heading: "AR Content Development",
          imgurl: "",
          para: "Enhance your user engagement with interactive AR content. We offer 3D modeling, animations, and overlays to make your AR experience compelling and memorable.",
        },
        {
          id: "7",
          heading: "AR for Marketing and Advertising",
          imgurl: "",
          para: "Be a brand to remember. Standout with our interactive AR solutions for marketing, advertising, and brand promotions. Boost your brand visibility and brand recall.",
        },
        {
          id: "8",
          heading: "AR for Training and Education",
          imgurl: "",
          para: "Enhance learning outcomes with hands-on experiences. Our AR software solutions for training and education make complex concepts simple with experiential learning.",
        },
        {
          id: "9",
          heading: "AR Integration with IoT",
          imgurl: "",
          para: "We make your AR experience seamlessly integrate with the real-world environment. Our AR-IoT integration services enhance connectivity and the overall user experience.",
        },
        {
          id: "10",
          heading: "AR for Gaming",
          imgurl: "",
          para: "Add a layer of immersion and make your gamers enter the fantasy world. We design and develop augmented reality games for more enjoyable gaming than ever.",
        },
        {
          id: "11",
          heading: "Cross-Platform AR Development",
          imgurl: "",
          para: "Cater to a wider audience with our cross-platform AR application. We ensure seamless compatibility across devices and prominent platforms including iOS, Android, and others.",
        },
        {
          id: "12",
          heading: "AR Maintenance and Support",
          imgurl: "",
          para: "Ensure the relevance and improvement of your AR applications. With Hey Buddy, get ceaseless support, maintenance, and updates for an evolving AR application.",
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

          <figure class="flex flex-col p-4 lg:p-6  rounded-lg  h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
            <blockquote class="  text-gray-400">
              <h3
                style={{ color: "white" }}
                class="py-4 text-xl font-semibold  text-gray-500 "
                >
                {section.heading}
              </h3>

              <p style={{ color: "white" , height:"25vh" }} className="text-left">
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