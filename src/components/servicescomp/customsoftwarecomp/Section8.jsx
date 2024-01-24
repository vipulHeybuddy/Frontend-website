"use client";

import React, { useEffect, useRef } from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./TabSelector";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const Pagenation = () => {
 
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

  const [selectedTab, setSelectedTab] = useTabs([
    "Technologies",
    "Tools",
    "Platforms",
    "ProgrammingLanguages",
    "Frameworks",
    "Databases",
    "DevelopmentMethodologies",
    "MobileDevelopment",
  ]);

  return (
    <motion.div 
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={textAnimation1}
    
    className="lg:py-8 text-white">
      <div className="py-6">
        <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
          Hey Buddy Tech Arsenal for best Game Solutions: <br /> Expertise on
          all fronts
        </h1>
        <p className="text-xl lg:text-2xl">
          Hey Buddy claim to the leading spot of a game development company in
          India emanates from its expert team. Our developers bring in advanced
          and profound expertise to deliver the best gaming solution for you.
        </p>
      </div>

      <nav className="flex border-b border-gray-300 overflow-auto">
        <TabSelector
          isActive={selectedTab === "Technologies"}
          onClick={() => setSelectedTab("Technologies")}
        >
          Technologies
        </TabSelector>

        <TabSelector
          isActive={selectedTab === "Tools"}
          onClick={() => setSelectedTab("Tools")}
        >
          Tools
        </TabSelector>

        <TabSelector
          isActive={selectedTab === "Platforms"}
          onClick={() => setSelectedTab("Platforms")}
        >
         Platforms
        </TabSelector>

        <TabSelector
          isActive={selectedTab === "ProgrammingLanguages"}
          onClick={() => setSelectedTab("ProgrammingLanguages")}
        >
          Programming Languages
        </TabSelector>

        <TabSelector
          isActive={selectedTab === "Frameworks"}
          onClick={() => setSelectedTab("Frameworks")}
        >
          Frameworks
        </TabSelector>

        <TabSelector
          isActive={selectedTab === "Databases"}
          onClick={() => setSelectedTab("Databases")}
        >
          Databases
        </TabSelector>

        <TabSelector
          isActive={selectedTab === "DevelopmentMethodologies"}
          onClick={() => setSelectedTab("DevelopmentMethodologies")}
        >
         Development Methodologies
        </TabSelector>

        <TabSelector
          isActive={selectedTab === "MobileDevelopment"}
          onClick={() => setSelectedTab("MobileDevelopment")}
        >
          Mobile Development
        </TabSelector>


      </nav>

      <div className="py-6 px-2">
        <TabPanel
          hidden={selectedTab !== "Technologies"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className=" grid  md:mb-12 grid-cols-5 gap-y-4 gap-x-2  ">
          <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/cloud+computing.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>

            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Internet+of+Things+(IoT).svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>

            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Artificial+Intelligence+(AI).svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>

            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Blockchain.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>

            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/AR+VR.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>

            {/* <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Decentraland.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div> */}

          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "Tools"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-5 gap-y-4 gap-x-2">
          <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Git.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>

            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Jira-.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>

            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Docker.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>

            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Jenkins.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>

            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Selenium.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>
            

          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "Platforms"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-5 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/AWS+(Amazon+Web+Services).svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>

            <div className="  mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Microsoft+Azure.svg"
                width={450}
                height={450}
                alt="9"
                
                />
                
            </div>

            <div className="  mx-auto text-center">
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Google+Cloud+Platform.svg"
                width={450}
                height={450}
                alt="9"
                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Heroku.svg"
                width={450}
                height={450}
                alt="9"
                
                />
               
            </div>

            <div className=" mx-auto text-center">
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/IBM+Cloud.svg"
                width={450}
                height={450}
                alt="9"
                
                />
                
            </div>

          

          </div>
        </TabPanel>


        <TabPanel
          hidden={selectedTab !== "ProgrammingLanguages"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
         <div className="grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-5 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Java.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Python.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Java+script.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/C%23.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/ruby.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            

          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "Frameworks"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
         <div className=" grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-5 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Django.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>
            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Ruby+on+Rails.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Angular.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center">
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/React.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"

                alt="9"
                
                />
               
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Laravel.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

          
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "Databases"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-5 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/MySQL.svg"
                width={450}
                height={450}
                alt="9"
                
                // className="h-[90%] w-[90%]"
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/PostgreSQL.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className="  mx-auto text-center">
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/MongoDB.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Oracle.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Microsoft+SQL+Server.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

          

          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "DevelopmentMethodologies"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-5 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Agile.svg"
                width={450}
                height={450}
                alt="9"
                
                // className="h-[90%] w-[90%]"
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Scrum.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className="  mx-auto text-center">
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/DevOps.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/waterfall.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"

                alt="9"
                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/kanban.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"

                alt="9"
                
                />
                
            </div>

          

          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "MobileDevelopment"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-5 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Flutter.svg"
                width={450}
                height={450}
                alt="9"
                
                // className="h-[90%] w-[90%]"
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/React+Native-01.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className="  mx-auto text-center">
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Swift.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"

                alt="9"
                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Xamarin.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Custom+Software+Development+Icons/Kotlin.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

          

          </div>
        </TabPanel>

      </div>
    </motion.div>
  );
};

export default Pagenation;
