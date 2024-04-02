import React from "react";

const Section2 = ({ about }) => {
  return (
    <div className=" p-2 md:p-8 text-white ">
      <div className="">
        <div className="px-2 md:px-4">
          <h1 className="font-bold text-2xl lg:text-4xl px-6 py-6">
            About Project
          </h1>
          <p className="text-gray-400 px-6 h-36 md:h-[50%] overflow-auto scrollbar-hide">
            {about}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
