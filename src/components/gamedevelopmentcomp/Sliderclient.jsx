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
          heading: "Enhanced Brand Engagement2",
          imgurl: "",
          para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
        },
        {
          id: "3",
          heading: "Enhanced Brand Engagement3",
          imgurl: "",
          para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
        },
        {
          id: "4",
          heading: "Enhanced Brand Engagement4",
          imgurl: "",
          para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
        },
        {
          id: "5",
          heading: "Enhanced Brand Engagement5",
          imgurl: "",
          para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
        },
        {
          id: "6",
          heading: "Enhanced Brand Engagement6",
          imgurl: "",
          para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
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
        
        <Slider {...settings}
        // index={currentCard}
        // onChangeIndex={handleChangeIndex}
        >
       
        {List.map((section, index) => (
            <div className="px-2"
            
            // key={section.id}
            >

          <figure class="flex flex-col p-4 lg:p-6  rounded-lg  h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
            <blockquote class="  text-gray-400">

                {/* <Image 
                // src={}
                w={450}
                h={450}
                className="h-14 w-14 bg-white"
                /> */}


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
{/* 
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <button
            style={{
              padding: '8px 16px',
              margin: '0 8px',
              borderRadius: '8px',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => handleChangeIndex((currentCard - 1 + cardData.length) % cardData.length)}
          >
            Previous
          </button>
          <button
            style={{
              padding: '8px 16px',
              margin: '0 8px',
              borderRadius: '8px',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => handleChangeIndex((currentCard + 1) % cardData.length)}
          >
            Next
          </button>
        </div> */}
      </div>
    </motion.div>
  )
}

export default Sliderclient