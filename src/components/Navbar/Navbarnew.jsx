
import React from 'react';

export default function Navbarnew() {


  return (
    <>
  
      {/* <div className="w-full  ">
        <a href="/" className='lg:text-[15px] border-b-[1px] text-white border-transparent hover:border-black block'>Home</a>
      </div> */}
      <div className=" ">
        <a href="#projects" className=' lg:text-[15px]  p-4 text-white border-transparent hover:border-black block'>Projects</a>
      </div>
      <div className=" ">
        <a href="#whyus" className=' lg:text-[15px]  p-4 text-white border-transparent hover:border-black block'>Why Us</a>
      </div>
      <div className=" ">
        <a href="#testimonials" className='lg:text-[15px]  p-4 text-white border-transparent hover:border-black block'>Testimonials</a>
      </div>
      <div className="">
        <a href="#aboutus" className='lg:text-[15px]  p-4 text-white border-transparent hover:border-black block'>About Us</a>
      </div>
      <div className=" ">
        <a href="/" className='lg:text-[15px]  py-4 px-8 rounded-3xl bg-blue-600 text-white border-transparent hover:border-black block'>Get In Touch</a>
      </div> 
     
    </>
  );
}