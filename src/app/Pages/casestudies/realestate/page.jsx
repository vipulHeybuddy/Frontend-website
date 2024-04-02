import React from "react";
import Image from "next/image";
import Link from "next/link";
// import './page.css'
import "../../../../styles/button.css";

const data = [
  {
    id: "1",
    heading:
      "Hyper-realistic Animated Video showcasing innovative 3D CT Scanner ",
    para1:
      "Our client, a leading CT scanner manufacturer in the UAE, wanted a hyper-realistic explanatory video to showcase the innovative functionality of their latest CT scan machine developed for airport security. Hey Buddy's 3D modelling team developed an ultra-realistic 3D video to showcase scanners’ capability to create an impact.",
    link: "/Pages/casestudies/realestate/gamedev/[id]",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ct-scanner/1.png",
  },
  {
    id: "2",
    heading: "AAA-Quality 3D Characters for a Korean Film Studio ",
    para1:
      "Our client, a well-known Korean film studio, known for its animated and drama films, required dynamic characters with AAA quality. They wanted them as per the decided theme of their upcoming short film. We developed 42 legendary warriors with the right texture, clothing, rigging, and animation to make the characters appear ultra-realistic.",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/realestate/gamedev/[id]",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/korean-studio/korean AAA game 2.png",
  },
  {
    id: "3",
    heading: "Hollywood Styled Semi-Realistic 3D Gaming Characters",
    para1:
      "Our client, a popular gaming publisher with multiple AAA and indie games needed a creative game development partner to design characters. They needed Hollywood-styled characters with meticulous detail for 4K resolution. We extensively used Blender and ZBrush to capture the signature looks of each singer and design them individually",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/realestate/gamedev/[id]",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/hollywood/Hollywood Style 1.png",
  },
  {
    id: "4",
    heading: "AAA 3D Characters for a Gaming Project",
    para1:
      "Our client, a gaming powerhouse, sought a dependable partner with the requisite expertise for their next 3D game development project. The potential partner should possess a sizeable team with skills matching their in-house team. We took up the task of developing 3D characters using Unreal Engine.",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/realestate/gamedev/[id]",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/onlyhand-1/3.png",
  },
];

const page = () => {
  return (
    <div className="px-2 pt-24">
      {data.map((sec, ind) => (
        <div
          key={sec.id}
          className="bg-black mb-10 sticky  top-[6rem] lg:w-[80%] mx-auto "
        >
          <div className=" grid mb-2 mx-auto justify-center rounded-3xl border-2 shadow-sm md:mb-12 grid-cols- md:grid-cols-2 ">
            <div className="mx-auto ">
              <h1 className="text-white text-2xl ml-14 px-8 lg:px-0 py-4 font-bold">
                {sec.heading}
              </h1>
              <div className="text-left rounded-3xl h-[52vh] my-4 p-4 lg:px-24 overflow-auto scrollbar-hide">
                {/* <h1 className="text-white text-4xl px-4 lg:px-0 py-6 font-bold">
            {sec.heading}
          </h1> */}

                <div className=" text-white lg:-ml-10">
                  <h1 className="font-bold text-3xl  float-left py-4 ">
                    Introduction
                  </h1>
                  <p className="py-2 float-left">{sec.para1}</p>
                </div>

                {/* <div className=" text-white">
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
              </div> */}
              </div>
            </div>

            <div className="-mt-36 md:-mt-0">
              <div className=" md:h-[60vh] rounded-tl-3xl md:rounded-t-none md:rounded-tl-3xl lg:rounded-3xl px-4 p-8  overflow-hidden">
                <Image
                  width={700}
                  height={700}
                  src={sec.imgurl}
                  className=" lg:mr-6 h-[20vh] w-[45rem] md:h-[50vh] md:w-[52rem] lg:h-[70vh] lg:w-[52rem] "
                  alt="Hey Buddy"
                />
              </div>

              <Link
                href={sec.link}
                as={`/Pages/casestudies/realestate/gamedev/${sec.id}`}
              >
                {/* <div className="bg-red-300 lg:w-[50%] py-4 mx-auto my-8 px-24 text-center"> */}
                <div className="getintouch lg:w-[50%] text-center mx-auto rounded-3xl px-10  my-8 py-4 text-sm text-white shadow-sm hover:scale-[1.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Read Full Story{" "}
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
