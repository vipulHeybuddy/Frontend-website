import React from "react";
import Image from "next/image";
import Link from "next/link";
// import './page.css'
import "../../../../styles/button.css";

const data = [
  {
    id: "1",
    heading:"Games App for kids",
    para1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/",
    imgurl:
      "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/img1.webp",
  },
  {
    id: "1",
    heading:"Games App for kids",
    para1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/",
    imgurl:
      "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/img1.webp",
  },
  {
    id: "1",
    heading:"Games App for kids",
    para1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/",
    imgurl:
      "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/img1.webp",
  },
  {
    id: "1",
    heading:"Games App for kids",
    para1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/",
    imgurl:
      "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/img1.webp",
  },
];

const page = () => {
  return (
    <div className="px-2 pt-14">
      {data.map((sec, ind) => (
        <div
          key={ind}
          className="bg-black sticky  top-[6rem] lg:w-[80%] mx-auto "
        >
          {/* <h1 className="text-white  text-4xl px-4 lg:px-0 py-6 font-bold">
            Games App for kids
          </h1> */}

          <div className=" grid mb-8 mx-auto justify-center rounded-3xl border-2 shadow-sm md:mb-12 grid-cols- md:grid-cols-2 ">
            <div className="mx-auto text-center">
            <h1 className="text-white text-4xl px-4 lg:px-0 py-4 font-bold">
            {sec.heading}
          </h1>
            <div className="text-left rounded-3xl h-[57vh] my-4 p-4 lg:px-24 overflow-auto scrollbar-hide">

            {/* <h1 className="text-white text-4xl px-4 lg:px-0 py-6 font-bold">
            {sec.heading}
          </h1> */}

              <div className=" text-white">
                <h1 className="font-bold text-3xl float-left py-4 ">
                  Introduction
                </h1>
                <p className="py-4 float-left">{sec.para1}</p>
              </div>

              <div className=" text-white">
                <h1 className="font-bold text-3xl float-left py-4 ">
                  Objective
                </h1>
                <p className="py-4 float-left">{sec.para2}</p>
              </div>

              <div className=" text-white">
                <h1 className="font-bold text-3xl float-left py-4 ">
                  Technollogy
                </h1>
                <p className="py-4 float-left">{sec.para3}</p>
              </div>

              <div className=" text-white">
                <h1 className="font-bold text-3xl float-left py-4 ">
                  Final Result
                </h1>
                <p className="py-4 float-left">{sec.para4}</p>
              </div>
            </div>
            </div>


            <div>
              <div className=" h-[60vh] rounded-tl-3xl md:rounded-t-none md:rounded-tl-3xl lg:rounded-3xl px-4 py-8 overflow-hidden">
                <Image
                  width={700}
                  height={700}
                  src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/img1.webp"
                  className="lg:mr-6 h-[50vh] w-[52rem] lg:h-[70vh] lg:w-[52rem] "
                  alt="Hey Buddy"
                />
              </div>

              <Link href={sec.link}>
                {/* <div className="bg-red-300 lg:w-[50%] py-4 mx-auto my-8 px-24 text-center"> */}
                <div className="getintouch lg:w-[50%] text-center mx-auto rounded-3xl px-10  my-8 py-4 text-sm text-white shadow-sm hover:scale-[1.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Show More{" "}
                  <span aria-hidden="true" className="arrow">
                    ➜
                  </span>
                </div>
                {/* </div> */}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
