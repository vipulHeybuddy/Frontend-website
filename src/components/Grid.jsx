"use client";
import React, { useEffect, useState } from "react";

const Grid = () => {
  
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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

  return (
    <div className="">
      {isSmallScreen ? (
        <div>
          <div class="p-2 lg:p-6 w-[90%] lg:w-[80%] bg-[url('../../public/Images/Ellipse6.png')] bg-no-repeat bg-cover  grid mb-8 mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-4 gap-y-4 gap-x-4">
            <figure class="lg:col-span-2 lg:row-span-2 flex flex-col p-2 lg:p-16 border-2 border-gray-500 rounded-3xl  h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="lg:text-6xl lg:pt-32 font-semibold text-gray-900 dark:text-white">
                  Why <br /> Choose Us?
                </h3>
              </blockquote>
            </figure>

            <figure class="flex flex-col  p-2 lg:p-4  border-b border-2 border-gray-500 rounded-3xl  h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <blockquote class="   dark:text-gray-400">
                <h3 class="text-left text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-gray-500 opacity-30">
                  01
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Expertise
                </p>
                <p className="text-left">
                  Hey Buddy excels in IT services, specializing in cutting-edge
                  technologies like AR, VR, Metaverse, Game Development, and App
                  Development.
                </p>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center border-2 border-gray-500 rounded-3xl  h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-left text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-gray-500 opacity-30">
                  02
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Immersive
                </p>
                <p className="text-left">
                  Hey Buddy excels in tailoring services to diverse industries
                  with a client-centric approach. They empower businesses with
                  innovative training solutions.
                </p>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center border-2 border-gray-500 rounded-3xl   h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <blockquote class="max-w-2xl mx-auto  text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-left text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-gray-500 opacity-30">
                  03
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Solutions
                </p>
                <p className="text-left">
                  Hey Buddy stands out by delivering seamless and immersive
                  experiences. They specialize in creating captivating VR games,
                  interactive.
                </p>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center border-2 border-gray-500 rounded-3xl   h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-left text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-gray-500 opacity-30">
                  04
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Futuristic
                </p>
                <p className="text-left">
                  Hey Buddy excels in tailoring services to diverse industries
                  with a client-centric approach. They empower businesses with
                  innovative training solutions.
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      ) : (
        <div>

          <div class="p-2 lg:p-6 w-[90%] lg:w-[80%] bg-[url('../../public/Images/Ellipse6.png')] bg-no-repeat bg-cover  grid mb-8 mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-4 gap-y-4 gap-x-4">
            <figure class="flex flex-col  p-2 lg:p-4  border-b border-2 border-gray-500 rounded-3xl  h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <blockquote class="   dark:text-gray-400">
                <h3 class="text-left text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-gray-500 opacity-30">
                  01
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Expertise
                </p>
                <p className="text-left">
                  Hey Buddy excels in IT services, specializing in cutting-edge
                  technologies like AR, VR, Metaverse, Game Development, and App
                  Development.
                </p>
              </blockquote>
            </figure>

            <figure class="lg:col-span-2 lg:row-span-2 flex flex-col p-2 lg:p-16 border-2 border-gray-500 rounded-3xl  h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="lg:text-6xl lg:pt-32 font-semibold text-gray-900 dark:text-white">
                  Why <br /> Choose Us?
                </h3>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center border-2 border-gray-500 rounded-3xl   h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <blockquote class="max-w-2xl mx-auto  text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-left text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-gray-500 opacity-30">
                  03
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Solutions
                </p>
                <p className="text-left">
                  Hey Buddy stands out by delivering seamless and immersive
                  experiences. They specialize in creating captivating VR games,
                  interactive.
                </p>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center border-2 border-gray-500 rounded-3xl  h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-left text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-gray-500 opacity-30">
                  02
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Immersive
                </p>
                <p className="text-left">
                  Hey Buddy excels in tailoring services to diverse industries
                  with a client-centric approach. They empower businesses with
                  innovative training solutions.
                </p>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center border-2 border-gray-500 rounded-3xl   h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-left text-4xl lg:text-6xl font-semibold text-gray-900 dark:text-gray-500 opacity-30">
                  04
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Futuristic
                </p>
                <p className="text-left">
                  Hey Buddy excels in tailoring services to diverse industries
                  with a client-centric approach. They empower businesses with
                  innovative training solutions.
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      )}
    </div>
  );
};

export default Grid;
