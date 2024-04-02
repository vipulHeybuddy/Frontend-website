import React from "react";
import Image from "next/image";
const Section3 = ({ heading1, heading2, para1, para2, url3 }) => {
  return (
    <div className=" py-4 sm:py-16 text-white">
      <div className="py-6 lg:w-[90%] mx-auto grid grid-cols-2 md:grid-cols-2">
        <div>
          <h1 className="font-bold  sm:text-2xl lg:text-4xl px-2 sm:px-6 py-4 sm:py-6">
            {heading1 + " " + heading2}
          </h1>
        </div>
        <div className="h-36 sm:h-full overflow-auto scrollbar-hide">
          <p className="text-gray-400 px-2 sm:px-6 py-4 sm:py-6">{para1}</p>
          <p className="text-gray-400 px-2 sm:px-6 py-4 sm:py-6">{para2} </p>
        </div>
      </div>

      <div
        className={` h-[1024px] w-full  bg-contain bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${url3})` }}
      ></div>

      {/* <div className=" ">
        <div className="w-[100%] h-[100%]">
          <Image
            width={800}
            height={800}
            className="h-[30%] w-[100%] bg-white mt-4"
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ct-scanner/2.png"
            alt="Background"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Section3;
