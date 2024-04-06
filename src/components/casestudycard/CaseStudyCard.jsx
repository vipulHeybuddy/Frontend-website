import React from "react";
import Link from "next/link";
// import 'src/app/Pages/casestudies/realestate/page.css'

const CaseStudyCard = ({ heading, para1, imgurl, link, id }) => {
  return (
    <div className="casestudy ">
      <Link href={link} as={`/Pages/casestudies/realestate/gamedev/${id}`}>
        <img src={imgurl} alt="" className=" h-[13rem] w-full rounded-lg" />
        <p className="font-extrabold my-4">{heading}</p>
        <p className="md:text-[1em]  text-[1.8vw] mb-2">{para1}</p>  
        <div className=" flex items-center justify-between my-2">
          <span className="flex items-center gap-2">
            {/* <img className='w-[1.7em] h-[1.7em]' src={'/Images/blog/blogUser.png'} alt="No-img" />
             */}
            <span
              className="h-4 w-4 rounded-full 
                  bg-[#FF001F]"
                  
              
            ></span>
            <p className="md:text-[.7em] sm:text-[1.3vw] text-[2.2vw] lg:text-[.9vw]">
              3D
            </p>
          </span>
          <p className="md:text-[.7em] sm:text-[1.3vw] text-[2.2vw] lg:text-[.9vw]">
            3min
          </p>
        </div>     
      </Link>
    </div>
  );
};

export default CaseStudyCard;
