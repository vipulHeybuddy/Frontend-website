"use client"
import React, { Component } from "react";
import './Slider1.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Sl1 from '../../public/Images/sl1.png'
import Sl2 from '../../public/Images/sl2.png'
import Sl3 from '../../public/Images/sl3.png'

import Image from "next/image";

function Slider1() {


  const [progressWidth, setProgressWidth] = useState(20);

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    swipeToSlide: true,
    // nextArrow: <NextIcon />,
    // prevArrow: <PrevIcon />,
    // afterChange: (index) => {
    //   setProgressWidth((100 / 5) * (index + 1));
    // },
  };
  return (
    <>

   
    <div className="w-[80%]  lg:mt-16 bg-[url('../../public/Images/Ellipse0.png')] bg-no-repeat bg-auto bg-[center_top_1rem]">

<div className="text-center mx-auto justify-center py-12 " > 
  <h1 className="text-2xl lg:text-4xl font-bold text-white ">Need to enhance your business online? </h1>
  <h1 className="text-2xl lg:text-4xl font-bold text-white mb-6">We got you covered</h1>
</div>

      <Slider {...settings}>

        <div className="w-[60vh] h-[60vh] mx-2 rounded-3xl border-2 border-gray-200  bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
        <div className="px-6 py-2 ">
                <h3 className=" mt-2 text-2xl py-2 font-semibold leading-8 tracking-tight text-white">
                  Game Development
                </h3>
                <p className=" text-base py-2 leading-7 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem tempora deleniti debitis nemo inventore.
                </p>
                </div>
          <Image
          width={300} height={300}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem tempora deleniti debitis nemo inventore.
                </p>
                </div>
                <Image
          width={300} height={300}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem tempora deleniti debitis nemo inventore.
                </p>
                </div>
                <Image
          width={300} height={300}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem tempora deleniti debitis nemo inventore.
                </p>
                </div>
                <Image
          width={300} height={300}
            src={Sl2}
            alt="Sl1"
            className=" rounded-b-3xl w-[60vh] h-[36vh] object-cover"

          />
        </div>

 


        {/* <div className="w-full h-full mx-2 rounded-3xl border-2 border-gray-200  bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
        <div className="px-6 py-2 ">
                <h3 className=" mt-2 text-2xl py-2 sm:text-md font-semibold leading-8 tracking-tight text-white">
                  AI Services
                </h3>
                <p className=" text-base py-2 leading-7 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem tempora deleniti debitis nemo inventore.
                </p>
                </div>
          <img
            src="https://www.mrdustbin.com/en/wp-content/uploads/2021/03/Vikram.jpg"
            alt=""
            className=" rounded-b-3xl"

          />
        </div> */}


      </Slider>

      {/* <div className="progress">
        <div
          style={{ width: `${progressWidth}%` }}
          className="progress--fill"
        ></div>
      </div> */}
    </div>
      
    </>

  );
}

// const PrevIcon = ({ onClick }) => {
//   return (
//     <div className="slick-icons slick-icons--left ">
//       <RiArrowLeftSLine className="slick-icons--left" onClick={onClick} />
//     </div>
//   );
// };

// const NextIcon = ({ onClick }) => {
//   return (
//     <div className="slick-icons slick-icons--right">
//       <RiArrowRightSLine className="slick-icons--right" onClick={onClick} />
//     </div>
//   );
// };

export default Slider1;