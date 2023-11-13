
"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import Img from "../../public/Images/img1.webp";
import Link from "next/link";
const Pagenation = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  let [tabOrientation, setTabOrientation] = useState("horizontal");

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
    <div className=" lg:w-[80%] p-4 bg-[url('../../public/Images/Ellipse1.png')] bg-no-repeat bg-auto bg-[center_top_1rem] ">
      <div className="py-20  mx-auto text-center justify-center  text-4xl lg:text-4xl font-bold text-white mb-6">
        <motion.h3 {...textAnimation1}>Featured Projects</motion.h3>
      </div>

      <Tab.Group>
        
        <Tab.List className="text-centre mx-auto justify-center text-white overflow-x-auto">
          <Tab className="px-12 mx-8 bg-blue-600 rounded-lg p-4">
            Real Estate
          </Tab>
          <Tab className="px-12 mx-8 bg-blue-600 rounded-lg p-4">
            Mobile/App Development
          </Tab>
          <Tab className="px-12 mx-8 bg-blue-600 rounded-lg p-4">Gaming</Tab>
          <Tab className="px-12 mx-8 bg-blue-600 rounded-lg p-4">
            Fashion & Lifestyle
          </Tab>
        </Tab.List>
        
        <Tab.Panels className="lg:py-16 lg:px-8 text-white">
          <Tab.Panel>
            <div className="grid sm:grid-1 gap-y-4 gap-x-16  md:mb-12 md:grid-cols-2 lg:grid-cols-2">
              <div className="border-2 rounded-3xl ">
                <Image
                  src={Img}
                  width={700}
                  height={700}
                  className="rounded-3xl w-[100vh] h-[60vh] "
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
                <button className="rounded-3xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-sm">
                  Read Case Study <span aria-hidden="true">→</span>{" "}
                </button>
                </Link>
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="grid sm:grid-1 gap-y-4 gap-x-16  md:mb-12 md:grid-cols-2 lg:grid-cols-2">
              <div className="border-2 rounded-3xl ">
                <Image
                  src={Img}
                  width={700}
                  height={700}
                  className="rounded-3xl w-[100vh] h-[60vh] "
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
                <button className="rounded-3xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-sm">
                  Read Case Study <span aria-hidden="true">→</span>{" "}
                </button>
                </Link>
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="grid sm:grid-1 gap-y-4 gap-x-16  md:mb-12 md:grid-cols-2 lg:grid-cols-2">
              <div className="border-2 rounded-3xl ">
                <Image
                  src={Img}
                  width={700}
                  height={700}
                  className="rounded-3xl w-[100vh] h-[60vh] "
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
                <button className="rounded-3xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-sm">
                  Read Case Study <span aria-hidden="true">→</span>{" "}
                </button>
                </Link>
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="grid sm:grid-1 gap-y-4 gap-x-16  md:mb-12 md:grid-cols-2 lg:grid-cols-2">
              <div className="border-2 rounded-3xl ">
                <Image
                  src={Img}
                  width={700}
                  height={700}
                  className="rounded-3xl w-[100vh] h-[60vh] "
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
                <button className="rounded-3xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-sm">
                  Read Case Study <span aria-hidden="true">→</span>{" "}
                </button>
                </Link>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Pagenation;
