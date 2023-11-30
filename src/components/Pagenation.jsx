
"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";



const Pagenation = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // let [tabOrientation, setTabOrientation] = useState("horizontal");

  const [openTab, setOpenTab] = React.useState(1);

  const controls = useAnimation();
  const ref = useRef();

  const variants = {
    hidden: { opacity: 0, y: "20%" },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
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

  const textAnimation1 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 2.2 },
  };


  return (
    <>
     <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={variants}className="flex flex-wrap lg:w-[80%] p-4 bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Ellipse8.png')] bg-no-repeat bg-auto bg-[center_top_1rem] " >
       
      <div className="py-20  mx-auto text-center justify-center  text-4xl lg:text-4xl font-bold text-white mb-6">
        <motion.h3 {...textAnimation1}>Featured Projects</motion.h3>
      </div>
       

          
          <div
          style={{color: 'white'}}
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <div style={{color: 'white'}} className="px-12 mx-4 rounded-lg p-4">
              <a
              style={{color: 'white'}}
                className={
                  " px-4 py-3  rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg" + "-600 bg-[#3F8AE2] bg-opacity-[50%]" 
                    : "text" + "600 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Real Estate
              </a>
            </div>

            <div className="px-12 mx-4 rounded-lg p-4">
              <a
                className={
                  "px-4 py-3  rounded block leading-normal" +
                  (openTab === 2
                    ? "text-white bg-" + "-600 bg-[#3F8AE2] bg-opacity-[50%]"
                    : "text-" + "-600 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Mobile/App Development
              </a>
            </div>

            <div className="px-12 mx-4 rounded-lg p-4">
              <a
                className={
                  "px-4 py-3  rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + "-600 bg-[#3F8AE2] bg-opacity-[50%]"
                    : "text-" + "-600 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Gaming
              </a>
            </div>

            <div className="px-12 mx-4 rounded-lg p-4">
              <a
                className={
                  "px-4 py-3  rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-" +  "-600 bg-[#3F8AE2] bg-opacity-[50%]"
                    : "text-" + "-600 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Fashion & Lifestyle
              </a>
            </div>
         
          </div>
           

          <div className="relative flex flex-col min-w-0 break-words text-white w-full mb-6 shadow-lg rounded">
            <div className=" lg:px-4 py-5 flex-auto">

              <div className="tab-content tab-space">

                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="grid sm:grid-1 gap-y-4 gap-x-16  md:mb-12 md:grid-cols-2 lg:grid-cols-2">
              <div className="border-2 rounded-3xl ">
                <Image
                  src='https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/img1.webp'
                  width={700}
                  height={700}
                  className="rounded-3xl w-[100vh] h-[40vh] lg:w-[100vh] lg:h-[50vh] "
                />
              </div>
              <div className="lg:pt-20">
                <h1 className="py-4 font-semibold text-3xl">
                  Housing Landing Page 1
                </h1>
                <p>
                  Lorem, ipsum dolor sit ame earum delectus. Sit explicabo
                  repellendus ullam, nesciunt illo ipsam doloremque consectetur
                  nisi temporibus suscipit architecto aut quaerat. Corrupti,
                  nulla?
                </p>
                <p className="py-4">
                  Used Technology :{" "}
                  <span className="font-bold">3D, AR Design</span>
                </p>
                <Link href='/Pages/sliderpages'>
                <button className="rounded-3xl bg-[#3F8AE2] px-6 py-4 text-sm font-semibold text-white shadow-sm">
                  Read Case Study <span aria-hidden="true">→</span>{" "}
                </button>
                </Link>
              </div>
            </div>

                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="grid sm:grid-1 gap-y-4 gap-x-16  md:mb-12 md:grid-cols-2 lg:grid-cols-2">
              <div className="border-2 rounded-3xl ">
                <Image
                  src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/img1.webp"
                  width={700}
                  height={700}
                  className="rounded-3xl w-[100vh] h-[40vh] lg:w-[100vh] lg:h-[50vh] "
                />
              </div>

              <div className="lg:pt-20">
                <h1 className="py-4 font-semibold text-3xl">
                  Housing Landing Page 2
                </h1>
                <p>
                  Lorem, ipsum dolor sit ame earum delectus. Sit explicabo
                  repellendus ullam, nesciunt illo ipsam doloremque consectetur
                  nisi temporibus suscipit architecto aut quaerat. Corrupti,
                  nulla?
                </p>
                <p className="py-4">
                  Used Technology :{" "}
                  <span className="font-bold">3D, AR Design</span>
                </p>
                <Link href='/Pages/sliderpages'>
                <button className="rounded-3xl bg-[#3F8AE2] px-6 py-4 text-sm font-semibold text-white shadow-sm">
                  Read Case Study <span aria-hidden="true">→</span>{" "}
                </button>
                </Link>
              </div>
            </div>
                </div>

                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="grid sm:grid-1 gap-y-4 gap-x-16  md:mb-12 md:grid-cols-2 lg:grid-cols-2">
              <div className="border-2 rounded-3xl ">
                <Image
                  src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/img1.webp"
                  width={700}
                  height={700}
                  className="rounded-3xl w-[100vh] h-[40vh] lg:w-[100vh] lg:h-[50vh] "
                />
              </div>
              <div className="lg:pt-20">
                <h1 className="py-4 font-semibold text-3xl">
                  Housing Landing Page 3
                </h1>
                <p>
                  Lorem, ipsum dolor sit ame earum delectus. Sit explicabo
                  repellendus ullam, nesciunt illo ipsam doloremque consectetur
                  nisi temporibus suscipit architecto aut quaerat. Corrupti,
                  nulla?
                </p>
                <p className="py-4">
                  Used Technology :{" "}
                  <span className="font-bold">3D, AR Design</span>
                </p>
                <Link href='/Pages/sliderpages'>
                <button className="rounded-3xl bg-[#3F8AE2] px-6 py-4 text-sm font-semibold text-white shadow-sm">
                  Read Case Study <span aria-hidden="true">→</span>{" "}
                </button>
                </Link>
              </div>
            </div>
                </div>

                <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                <div className="grid sm:grid-1 gap-y-4 gap-x-16  md:mb-12 md:grid-cols-2 lg:grid-cols-2">
              <div className="border-2 rounded-3xl ">
                <Image
                  src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/img1.webp"
                  width={700}
                  height={700}
                  className="rounded-3xl w-[100vh] h-[40vh] lg:w-[100vh] lg:h-[50vh] "
                />
              </div>
              <div className="lg:pt-20">
                <h1 className="py-4 font-semibold text-3xl">
                  Housing Landing Page 4
                </h1>
                <p>
                  Lorem, ipsum dolor sit ame earum delectus. Sit explicabo
                  repellendus ullam, nesciunt illo ipsam doloremque consectetur
                  nisi temporibus suscipit architecto aut quaerat. Corrupti,
                  nulla?
                </p>
                <p className="py-4">
                  Used Technology :{" "}
                  <span className="font-bold">3D, AR Design</span>
                </p>
                <Link href='/Pages/sliderpages'>
                <button className="rounded-3xl bg-[#3F8AE2] px-6 py-4 text-sm font-semibold text-white shadow-sm">
                  Read Case Study <span aria-hidden="true">→</span>{" "}
                </button>
                </Link>
              </div>
            </div>
                </div>


              </div>
            </div>
          </div>

        </motion.div>
      
    </>
  );
};

export default Pagenation;
