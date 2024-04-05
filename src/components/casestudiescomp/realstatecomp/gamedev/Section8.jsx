"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
// import './Timelinecomp.css'
import "../../../../styles/Timelinecomp.css";
import { motion, useAnimation } from "framer-motion";

const Timelinecomp = ({
  heading,
  requirement,
  ideation,
  designing,
  development,
  deployment,
}) => {
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
  const events = [
    {
      status: "Ordered",
      date: "15/10/2020 10:30",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      status: "Processing",
      date: "15/10/2020 14:00",
      icon: "pi pi-cog",
      color: "#673AB7",
    },
    {
      status: "Shipped",
      date: "15/10/2020 16:15",
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
    },
    {
      status: "Delivered",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },
  ];

  return (
    <div className=" bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/csgame9.png')] bg-no-repeat bg-contain lg:bg-cover bg-[center_top_0rem]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textAnimation1}
      >
        <div className="py-8 mx-4 text-white lg:w-[80%] mx-auto ">
          <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl text-center mx-auto">
            How we did it?
          </h1>
          <p className="text-xl lg:text-2xl text-center mx-auto text-gray-300 ">
            {heading}
          </p>
        </div>

        <div className="pb-24">
          <div className="grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-4">
            <div className="overflow-y-scroll scrollbar-hide md:scrollbar-default h-[60vh] w-full  ">
              <div className="">
                <div className="main ">
                  {/* <h3 class="head">Responsive Timeline</h3> */}
                  <div class="container text-white">
                    <ul>
                      <li>
                        <h3 className="font-bold text-2xl  ">
                          Requirement Gathering
                        </h3>
                        <p>{requirement}</p>
                      </li>
                      <li>
                        <h3 className="font-bold text-2xl ">Ideation</h3>
                        <p>{ideation}</p>
                      </li>
                      <li>
                        <h3 className="font-bold text-2xl ">Designing</h3>
                        <p>{designing}</p>
                      </li>
                      <li>
                        <h3 className="font-bold text-2xl ">Development </h3>
                        <p>{development}</p>
                      </li>

                      <li>
                        <h3 className="font-bold text-2xl ">Deployment</h3>
                        <p>{deployment}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[50vh] w-full  px-16">
              <div
                style={{
                  width: "100%",
                  height: 0,
                  paddingBottom: "100%",
                  position: "relative",
                }}
              >
                <Image
                  width={700}
                  height={700}
                  src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/wheel-unscreen.gif"
                  className="lg:mr-6 h-[50vh] w-[62rem] lg:h-auto lg:w-auto "
                  alt="Hey B"
                />
                {/* <Image
  src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/wheel-unscreen.gif"
  width={400} // Original width
  height={400} // Original height
  // layout="intrinsic"
  className="lg:mr-6"
  alt="Hey B"
/> */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Timelinecomp;
