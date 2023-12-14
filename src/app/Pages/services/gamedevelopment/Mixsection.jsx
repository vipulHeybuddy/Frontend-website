import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";


const Mixsection = () => {
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



  const [currentCard, setCurrentCard] = useState(0);

  const handleChangeIndex = (index) => {
    setCurrentCard(index);
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
    <div>
      <div className="py-4 text-white">
        <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
          Our AI Gaming Solutions for the <br /> Future of Gaming
        </h1>
        <p className="text-xl lg:text-2xl">
          As the leading game development company in India, AI Gaming is one of
          our strongest suits. Our dedicated AI Gaming team develops your games
          with innovative AI-based features for a highly personalised and
          immersive gaming experience. Our industry-leading AI-gaming services
          delivered phenomenal gaming solutions revolutionising not just our
          client’s gaming business but the gaming industry altogether.
        </p>
      </div>
      {/* --------------------box section ------------------------------------------ */}
      <div className=" bg-gradient-to-r from-[#FFA7A7] via-[#A30CB5] to-[#0B0DF4] shadow-xl rounded-3xl py-4 lg:py-4 mt-8 mx-auto">
        <div className=" lg:mx-auto lg:text-center w-full justify-center py-2 lg:py-2">
          <ol className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-2 gap-5 lg:gap-x-16">
            {checklist1.map((section, index) => (
              <div className="px-2 lg:px-16 flex items-center text-[#FFFFFF]  space-x-2.5 rtl:space-x-reverse">
                <san className="flex items-center justify-center w-8 h-8 text-[#0B0DF4] bg-[#6FCF97]  rounded-full shrink-0 ">
                  &#10004;
                </san>
                <span>
                  <h3 className="font-medium leading-tight">{section.title}</h3>
                </span>
              </div>
            ))}
          </ol>
        </div>
      </div>

      {/* ------------------slider-------------------------------- */}
   

      

 

      


    </div>
  );
};

export default Mixsection;
