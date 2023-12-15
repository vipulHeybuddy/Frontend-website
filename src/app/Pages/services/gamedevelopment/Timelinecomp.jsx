import React from "react";
import Image from "next/image";

const Timelinecomp = () => {
  return (
    <div>
      <div className="py-8 text-white">
        <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
          Our Perfected Game Development Process - <br />
          Level by level
        </h1>
        <p className="text-xl lg:text-2xl">
          Over years of experience as a game app development company, we have
          refined, streamlined and aligned our game development process to serve
          you better.
        </p>
      </div>

      <div className="pb-24">
        <div className="grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-4">
          <div className="h-[50vh] w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 ">
            1
          </div>
          <div className="h-[50vh] w-full  px-16">
          <Image 
                // src={}
                w={700}
                h={700}
                className="h-full w-full rounded-lg  bg-gray-800"
                />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timelinecomp;
