"use client";
import React, { Component } from "react";
import "./Slider1.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import Sl1 from "../../public/Images/sl1.png";
import Sl2 from "../../public/Images/sl2.png";
import Sl3 from "../../public/Images/sl3.png";

import Image from "next/image";

function Slider1() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [progressWidth, setProgressWidth] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    swipeToSlide: true,
  };

  return (
    <>
    <div className="lg:w-[80%]  lg:mt-16 bg-[url('../../public/Images/Ellipse0.png')] bg-no-repeat bg-auto bg-[center_top_1rem]">

    <div className="text-center mx-auto justify-center py-12 ">
            <h1 className="text-2xl lg:text-4xl font-bold text-white ">
              Need to enhance your business online?{" "}
            </h1>
            <h1 className="text-2xl lg:text-4xl font-bold text-white mb-6">
              We got you covered
            </h1>
          </div>


      {isSmallScreen ? (
        <div className="h-[80vh] px-4 carousel carousel-vertical rounded-box">

          <div className="carousel-item h-full">
           
            <div className="px-2 w-[40vh] lg:w-[60vh] lg:h-[60vh] mx-2 rounded-3xl border-2 border-gray-200  bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <div className="px-6 py-2 ">
                <h3 className=" mt-2 text-2xl py-2 font-semibold leading-8 tracking-tight text-white">
                  Game Development
                </h3>
                <p className=" text-base py-2 leading-7 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  quidem tempora deleniti debitis nemo inventore.
                </p>
              </div>
              <Image
                width={300}
                height={300}
                src={Sl1}
                alt="Sl1"
                className=" rounded-b-3xl w-[60vh] h-[36vh]"
              />
            </div>
          </div>

          <div className="carousel-item h-full">
           
            <div className="px-6 w-[40vh] lg:w-[60vh] lg:h-[60vh] mx-2 rounded-3xl border-2 border-gray-200  bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <div className="px-6 py-2 ">
                <h3 className=" mt-2 text-2xl py-2 sm:text-md font-semibold leading-8 tracking-tight text-white">
                  Immersive Development
                </h3>
                <p className=" text-base  py-2 leading-7 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  quidem tempora deleniti debitis nemo inventore.
                </p>
              </div>
              <Image
                width={300}
                height={300}
                src={Sl2}
                alt="Sl1"
                className=" rounded-b-3xl w-[60vh] h-[36vh]"
              />
            </div>
          </div>

          <div className="carousel-item h-full">
          <div className="px-6 w-[40vh] lg:w-[60vh] lg:h-[60vh] mx-2 rounded-3xl border-2 border-gray-200  bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <div className="px-6 py-2 ">
                <h3 className=" mt-2 text-2xl py-2 sm:text-md font-semibold leading-8 tracking-tight text-white">
                  Tryon Services
                </h3>
                <p className=" text-base py-2 leading-7 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  quidem tempora deleniti debitis nemo inventore.
                </p>
              </div>
              <Image
                width={300}
                height={300}
                src={Sl3}
                alt="Sl1"
                className=" rounded-b-3xl object-fill w-[60vh] h-[36vh]"
              />
            </div>
          </div>

          <div className="carousel-item h-full">
          <div className="px-2 w-[40vh] lg:w-[60vh] lg:h-[60vh] mx-2 rounded-3xl border-2 border-gray-200  bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <div className="px-6 py-2 ">
                <h3 className=" mt-2 text-2xl py-2 sm:text-md font-semibold leading-8 tracking-tight text-white">
                  3D Modelling
                </h3>
                <p className=" text-base py-2 leading-7 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  quidem tempora deleniti debitis nemo inventore.
                </p>
              </div>
              <Image
                width={300}
                height={300}
                src={Sl2}
                alt="Sl1"
                className=" rounded-b-3xl w-[60vh] h-[36vh] object-cover"
              />
            </div>
          </div>

          <div className="carousel-item h-full">
           
            <div className="px-2 w-[40vh] lg:w-[60vh] lg:h-[60vh] mx-2 rounded-3xl border-2 border-gray-200  bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <div className="px-6 py-2 ">
                <h3 className=" mt-2 text-2xl py-2 font-semibold leading-8 tracking-tight text-white">
                  Game Development
                </h3>
                <p className=" text-base py-2 leading-7 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  quidem tempora deleniti debitis nemo inventore.
                </p>
              </div>
              <Image
                width={300}
                height={300}
                src={Sl1}
                alt="Sl1"
                className=" rounded-b-3xl w-[60vh] h-[36vh]"
              />
            </div>
          </div>

          

        </div>
       ) : ( 
         <div className="">
          {/* <div className="text-center mx-auto justify-center py-12 ">
            <h1 className="text-2xl lg:text-4xl font-bold text-white ">
              Need to enhance your business online?{" "}
            </h1>
            <h1 className="text-2xl lg:text-4xl font-bold text-white mb-6">
              We got you covered
            </h1>
          </div> */}

          <Slider {...settings}>
            <div className="w-[60vh] h-[60vh] mx-2 rounded-3xl border-2 border-gray-200  bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <div className="px-6 py-2 ">
                <h3 className=" mt-2 text-2xl py-2 font-semibold leading-8 tracking-tight text-white">
                  Game Development
                </h3>
                <p className=" text-base py-2 leading-7 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  quidem tempora deleniti debitis nemo inventore.
                </p>
              </div>
              <Image
                width={300}
                height={300}
                src={Sl1}
                alt="Sl1"
                className=" rounded-b-3xl w-[60vh] h-[36vh]"
              />
            </div>

            <div className="w-[60vh] h-[60vh] mx-2 rounded-3xl border-2 border-gray-200  bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <div className="px-6 py-2 ">
                <h3 className=" mt-2 text-2xl py-2 sm:text-md font-semibold leading-8 tracking-tight text-white">
                  Immersive Development
                </h3>
                <p className=" text-base  py-2 leading-7 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  quidem tempora deleniti debitis nemo inventore.
                </p>
              </div>
              <Image
                width={300}
                height={300}
                src={Sl2}
                alt="Sl1"
                className=" rounded-b-3xl w-[60vh] h-[36vh]"
              />
            </div>

            <div className="w-[60vh] h-[60vh] mx-2 rounded-3xl border-2 border-gray-200  bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <div className="px-6 py-2 ">
                <h3 className=" mt-2 text-2xl py-2 sm:text-md font-semibold leading-8 tracking-tight text-white">
                  Tryon Services
                </h3>
                <p className=" text-base py-2 leading-7 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  quidem tempora deleniti debitis nemo inventore.
                </p>
              </div>
              <Image
                width={300}
                height={300}
                src={Sl3}
                alt="Sl1"
                className=" rounded-b-3xl object-fill w-[60vh] h-[36vh]"
              />
            </div>

            <div className="w-[60vh] h-[60vh] mx-2 rounded-3xl border-2 border-gray-200  bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <div className="px-6 py-2 ">
                <h3 className=" mt-2 text-2xl py-2 sm:text-md font-semibold leading-8 tracking-tight text-white">
                  3D Modelling
                </h3>
                <p className=" text-base py-2 leading-7 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  quidem tempora deleniti debitis nemo inventore.
                </p>
              </div>
              <Image
                width={300}
                height={300}
                src={Sl2}
                alt="Sl1"
                className=" rounded-b-3xl w-[60vh] h-[36vh] object-cover"
              />
            </div>
          </Slider>
        </div>
       )}

       </div> 
    </>
  );
}

export default Slider1;
