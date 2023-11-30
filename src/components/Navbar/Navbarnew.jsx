import React, { useState } from 'react';
import './navbar.css'
import Link from "next/link";

 

export default function Navbarnew() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };



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
      
      <div className=" text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:text-[15px]  p-4 text-white border-transparent hover:border-black block">
      <Link href='/Pages/Contactus'>
       
          Contact Us
        </Link>
      </div>
      

     
    </>
  );
}