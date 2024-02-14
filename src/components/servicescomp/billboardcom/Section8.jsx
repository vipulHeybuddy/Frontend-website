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
    "task1",
    "task2",
    "task3",
    "task4",
    "task5",
    
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
        Hey Buddy 3D Billboard Development Tech Stack
        </h1>
        <p className="text-xl lg:text-2xl">
          It takes skills and experience to develop traffic-pausing 3D visuals. Here is our tech stack for the same.

        </p>
      </div>

      <nav className="flex border-b border-gray-300 scrollbar-hide overflow-auto">
        <TabSelector
          isActive={selectedTab === "task1"}
          onClick={() => setSelectedTab("task1")}
        >

          3D Modeling and Animation

        </TabSelector>
        <TabSelector
          isActive={selectedTab === "task2"}
          onClick={() => setSelectedTab("task2")}
        >

Graphics Rendering Engines

        </TabSelector>
        <TabSelector
          isActive={selectedTab === "task3"}
          onClick={() => setSelectedTab("task3")}
        >

Programming Languages

        </TabSelector>
        <TabSelector
          isActive={selectedTab === "task4"}
          onClick={() => setSelectedTab("task4")}
        >

Interactive Development

        </TabSelector>
        <TabSelector
          isActive={selectedTab === "task5"}
          onClick={() => setSelectedTab("task5")}
        >
  Shader Programming
        </TabSelector>




      </nav>

      <div className="py-6 px-2">
        <TabPanel
          hidden={selectedTab !== "task1"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-5 gap-y-4 gap-x-2  ">
          <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/blender.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>

            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/Autodesk+Maya.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>

            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/3ds+max.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>

            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/Z+brush.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>

            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/Cinema+4D.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>

         

          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "task2"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-5 gap-y-4 gap-x-2">
          <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/Houdini.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>

            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/Substance+Painter.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>

            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/Mudbox.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>

            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/SketchUp.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>

            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/Rhinoceros+3D.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>
          

          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "task3"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-5 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/Unity3D.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div>

            <div className="  mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/Unreal+Engine.svg"
                width={450}
                height={450}
                alt="9"
                
                />
                
            </div>

            <div className="  mx-auto text-center">
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/Photoshop.svg"
                width={450}
                height={450}
                alt="9"
                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/Marvelous+Designer.svg"
                width={450}
                height={450}
                alt="9"
                
                />
               
            </div>

            <div className=" mx-auto text-center">
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/3D+coat.svg"
                width={450}
                height={450}
                alt="9"
                
                />
                
            </div>

       

          </div>
        </TabPanel>


        <TabPanel
          hidden={selectedTab !== "task4"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
         <div className="grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-5 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/Marmoset+Toolbag.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/KeyShot.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/SolidWorks.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/Modo.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/Daz+3D.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            

          </div>
        </TabPanel>


        <TabPanel
          hidden={selectedTab !== "task5"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
         <div className="grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-5 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center"> 
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/Marmoset+Toolbag.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/KeyShot.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/SolidWorks.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/Modo.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image 
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/3D+Development+Icons/Daz+3D.svg"
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
