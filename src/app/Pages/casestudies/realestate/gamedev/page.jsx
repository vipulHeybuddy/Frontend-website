"use client";
import Section1 from "@/components/casestudiescomp/realstatecomp/gamedev/Section1";
import Section10 from "@/components/casestudiescomp/realstatecomp/gamedev/Section10";
import Section11 from "@/components/casestudiescomp/realstatecomp/gamedev/Section11";
import Section2 from "@/components/casestudiescomp/realstatecomp/gamedev/Section2";
import Section3 from "@/components/casestudiescomp/realstatecomp/gamedev/Section3";
import Section4 from "@/components/casestudiescomp/realstatecomp/gamedev/Section4";
import Section5 from "@/components/casestudiescomp/realstatecomp/gamedev/Section5";
import Section6 from "@/components/casestudiescomp/realstatecomp/gamedev/Section6";
import Section7 from "@/components/casestudiescomp/realstatecomp/gamedev/Section7";
import Section8 from "@/components/casestudiescomp/realstatecomp/gamedev/Section8";
import Section9 from "@/components/casestudiescomp/realstatecomp/gamedev/Section9";
import React from "react";

const page = () => {
  return (
    <div className=" mx-auto">
      <Section1 />

      <div className="lg:w-[90%] mx-auto bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/csgame2.png')] bg-no-repeat  bg-[center_top_0rem]">
        <Section2 />
      </div>

      <div className=" mx-auto ">
        <Section3 />
      </div>

      <div className="lg:w-[80%] mx-auto ">
        <Section4 />
      </div>

      <div className=" mx-auto bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/csgame5.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
        <Section5 />
      </div>
      <div className="lg:w-[80%] mx-auto bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/csgame8.png')] bg-no-repeat  bg-[center_top_0rem]">
        <Section6 />
      </div>

      <div className="lg:w-[80%] mx-auto bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev4.png')] bg-no-repeat  bg-[center_top_0rem]">
        <Section7 /> 
      </div>

      <div className="lg:w-[80%] mx-auto bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/csgame9.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
        <Section8 />
      </div>
      <div className="lg:w-[80%] mx-auto bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/csgame10.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
        <Section9 />
      </div>

      <div className="lg:w-[80%] pb-12 mx-auto bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/csgame11.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
        <Section10 />
      </div>
      <div className="lg:w-[80%] mx-auto bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/csgame12.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
        <Section11 />
      </div>
    </div>
  );
};

export default page;
