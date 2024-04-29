import Image from "next/image";
import React from "react";
// import Image from "next/image";
// import { useState, useEffect } from "react";
const Section1 = () => {
  // const [isMobile, setIsMobile] = useState(false);
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  //   };

  //   // Initial check on mount
  //   handleResize();

  //   // Listen for window resize events
  //   window.addEventListener("resize", handleResize);

  //   // Cleanup on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Ellipse1.png')] bg-no-repeat bg-contain bg-[center_top_0rem]   mx-auto">
      <div className="relative">
        <div className=" absolute top-12 left-[15%]  w-[70%]">
          <Image
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Hero%20img2.png"
            alt="bg_img"
            width={200}
            height={200}
            className="w-full"
          />
        </div>
        <div className="relative">
          <div className="pt-36 lg:pt-48">
            <div className="w-[90%] lg:w-[70%] mx-auto p-2 lg:p-8 lg:-pb-8 bg-[#FFFFFF] bg-opacity-10 backdrop-blur-lg  rounded-3xl lg:px-24 ">
              <h1 className="mx-auto px-2 lg:px-0 text-center text-white text-xl  lg:text-2xl mt-10 font-bold ">
                HEY BUDDY - THE TECHNOLOGY BUDDY YOU NEED
              </h1>

              <div className="mt-10 mx-auto ">
                <p className="text-center text-white  mt-4">
                  It all started when two buddies working day in and out with
                  global clients found one common problem affecting all - poor
                  collaboration. Their technology partners were giving them a
                  hard time in the timely delivery of projects and maintaining
                  effective communication. Such uncooperative behaviour was not
                  only detrimental to the brand they were associated with but
                  was also undermining the reputation of the whole IT service
                  industry in India.
                </p>

                <p className="text-center text-white  mt-6">
                  The buddies - Avdhesh and Kapil decided to do something about
                  it. They reached out to many like-minded people, shared
                  experiences, and brainstormed ideas. Thus formed a team of
                  hardworking talents who cared about their clients.
                </p>
                <p className="text-center text-white  mt-6">
                  They preferred themselves as buddies instead of partners,
                  hence the name
                </p>
                <div className="flex justify-center  gap-x-2 mt-8 mb-14">
                  <div className="">
                    <Image
                      src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/colon.png"
                      alt="colon_img"
                      width={700}
                      height={700}
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className="   text-xl lg:text-5xl mt-2     text-center text-white ">
                    Hey Buddy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="h-full w-full mt-14">
           {isMobile ? (
            <Image
              loading="lazy"
              width={450}
              height={450}
              className=" w-[90%] mx-auto rounded-lg "
              src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/main%20imgmob.png"
              alt="Background"
            />
          ) : (
            <Image
              loading="lazy"
              width={450}
              height={450}
              className=" w-[90%] mx-auto rounded-lg "
              src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/main%20img.png"
              alt="Background"
            />
          )} 
        </div> */}
      </div>

      {/* <div className="grid grid-cols-3 w-[70%]  mx-auto gap-2 mt-20">
        <div className="row-span-2">
          <Image
            loading="lazy"
            width={450}
            height={450}
            className=" w-auto h-auto "
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Subtract.png"
            alt="Background"
          />
        </div>
        <div className=" rounded-xl w-[60%] h-28 px-4 py-4 flex flex-col items-center justify-center  bg-gradient-to-b from-gray-500 to-gray-800 ">
          <p className="text-white">Let's Build Better</p>
          <p className="text-white">Products Together</p>
        </div>

        <div className="">
          <Image
            loading="lazy"
            width={450}
            height={450}
            className=" w-auto h-auto rounded-xl border-2 border-blue-500 "
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/image%209.png"
            alt="Background"
          />
        </div>
        <div
          // style={{ width: "fit-content" }}
          className="  h-[90%] w-[60%]     rounded-xl bg-[#3F8AE2] px-10 py-2 text-lg   text-white  shadow-sm   flex flex-col items-start  gap-y-4"
        >
          <p>100+ Happy Clients</p>
          <div>
            <Image
              loading="lazy"
              width={450}
              height={450}
              className=" w-auto h-auto "
              src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Frame%201.png"
              alt="Background"
            />
          </div>
        </div>
        <div className="  rounded-xl h-28 px-6 py-4 flex flex-col items-center justify-center  bg-gradient-to-b from-gray-500 to-gray-800 ">
          <p className="text-white">400 Millions</p>
          <p className="text-white">people already using Metaverse</p>
        </div>
      </div> */}

      <div className="mt-8 lg:mt-20 p-4 mx-auto">
        <div className="mx-auto">
          <Image
            loading="lazy"
            width={450}
            height={450}
            className=" w-auto h-auto mx-auto "
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Group%2018.png"
            alt="Background"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;

//
