import React from "react";

const Section3 = ({ heading1, heading2, para1, para2 }) => {
  return (
    <div className="px-8 py-4 sm:py-16 text-white">
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

      <div className=" h-[442px] bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/csgame3.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]"></div>
    </div>
  );
};

export default Section3;
