import React from "react";
import Link from "next/link";


const checklist = [
  {
title:"3D Modelling",
  },
{
  title:"Game Development",
},
{
  title:"Digital Marketing",
},
];

const sections = [
  {
    title: "Introduction",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis blanditiis aut explicabo eveniet ex culpa suscipit rem. Minus ratione quibusdam voluptatum accusantium debitis saepe quasi autem, pariatur maiores dolorum aut? blanditiis aut explicaboeveniet ex culpa suscipit rem. Minus ratione quibusdam voluptatum accusantium debitis saepe quasi autem, pariatur maiores dolorum aut?",
  },
  {
    title: "Objective",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis blanditiis aut explicabo eveniet ex culpa suscipit rem. Minus ratione quibusdam voluptatum accusantium debitis saepe quasi autem, pariatur maiores dolorum aut? blanditiis aut explicaboeveniet ex culpa suscipit rem. Minus ratione quibusdam voluptatum accusantium debitis saepe quasi autem, pariatur maiores dolorum aut?",
  },
  {
    title: "Technology",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis blanditiis aut explicabo eveniet ex culpa suscipit rem. Minus ratione quibusdam voluptatum accusantium debitis saepe quasi autem, pariatur maiores dolorum aut? blanditiis aut explicaboeveniet ex culpa suscipit rem. Minus ratione quibusdam voluptatum accusantium debitis saepe quasi autem, pariatur maiores dolorum aut?",
  },
  {
    title: "Final Result",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis blanditiis aut explicabo eveniet ex culpa suscipit rem. Minus ratione quibusdam voluptatum accusantium debitis saepe quasi autem, pariatur maiores dolorum aut? blanditiis aut explicaboeveniet ex culpa suscipit rem. Minus ratione quibusdam voluptatum accusantium debitis saepe quasi autem, pariatur maiores dolorum aut?",
  },
];

const feedbackData = {
  feedback:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elitAperiam doloribus explicabo nihil tempore, fugit ex itaque sapiente alias iste nemo quod libero, voluptates natus quo vero maiores odio fuga ullam?",
  author: "Wade Warren",
  position: "Head of VP at Disney Hotstar",
};

const gridpg = [
  {
    imglink:"https://cdn.ndtv.com/tech/images/gadgets/gta_vice_city.jpg",
    text:"Gaming App For Kids",
    Link:"/",

  },
  {
    imglink:"https://cdn.ndtv.com/tech/images/gadgets/gta_vice_city.jpg",
    text:"FIFA Gaming App",
    Link:"/",

  },
  {
    imglink:"https://cdn.ndtv.com/tech/images/gadgets/gta_vice_city.jpg",
    text:"Gaming App For Kids",
    Link:"/",

  },
]

const Section = ({ title, content }) => (
  <div className="py-2">
    <h1 className="text-2xl lg:text-4xl font-bold">{title}</h1>
    <p className="py-4 text-sm lg:text-lg lg:w-[86%]">{content}</p>
  </div>
);

const ImageSection = () => (
  <div className="lg:h-[90vh] py-2 lg:py-2 w-full">
    <img
      // src={lab2}
      className="lg:h-[60vh] border-2 w-[100%] lg:w-[86%] h-[25vh] rounded-md shadow-2xl"
      alt="heybuddy"
    />
  </div>
);

const FeedbackSection = ({ feedback, author, position }) => (
  <div className="w-[100%] lg:w-[86%] py-8 lg:py-8 text-[#FFFFFF] lg:px-2">
    <h1 className="text-2xl lg:text-4xl pb-6 font-bold">Client Feedback</h1>

    <figure className="flex flex-col items-center justify-center p-2 lg:py-8 lg:px-8 text-center border-2 border-gray-500 rounded-lg h-full w-full bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
      <blockquote className="mx-auto text-gray-500 :text-gray-400">
        <p
          style={{ color: "white" }}
          className="text-left text-sm lg:text-xl lg:font-semibold lg:w-[86%]"
        >
          {feedback}
        </p>

        <h3
          style={{ color: "white" }}
          className="pt-8 text-right text-sm lg:text-lg font-semibold  text-gray-500"
        >
          {author}
        </h3>
        <h3 className="text-right text-white text-sm lg:text-lg">{position}</h3>
      </blockquote>
    </figure>
  </div>
);

const page = () => {
  return (
    <div>
      <div className="lg:w-[86%] mx-auto lg:pt-12">
        <div className="lg:h-[90vh]  lg:pt-24 pt-24 pb-4 lg:pb-24 w-full px-4 lg:px-24 ">
          <img
            // src={lab}
            className="lg:h-[70vh] border-2  h-[25vh] w-full rounded-md shadow-2xl"
            alt="heybuddy"
          />
        </div>

        <div className=" bg-[#222222] shadow-xl rounded-3xl py-4 lg:py-6 w-[90%] lg:w-[86%] mx-auto">
          <div className="text-xl text-white lg:pl-24 pl-2 lg:text-2xl font-bold py-6">
            {" "}
            Services We Provided
          </div>

          <div className=" lg:mx-auto lg:text-center w-full justify-center py-2 lg:py-2">
            <ol className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-2 gap-5 lg:gap-16">
              {/* <div className="lg:mx-auto flex items-center text-[#FFFFFF]  space-x-2.5 rtl:space-x-reverse">
                <san className="flex items-center justify-center w-8 h-8 text-gray-900 bg-[#6FCF97]  rounded-full shrink-0 ">
                  &#10004;
                </san>
                <span>
                  <h3 className="font-medium leading-tight">3D Modelling</h3>
                </span>
              </div> */}
              {checklist.map((section, index) => (
                <div className="lg:mx-auto flex items-center text-[#FFFFFF]  space-x-2.5 rtl:space-x-reverse">
                <san className="flex items-center justify-center w-8 h-8 text-gray-900 bg-[#6FCF97]  rounded-full shrink-0 ">
                  &#10004;
                </san>
                <span>
                  <h3 className="font-medium leading-tight">{section.title}</h3>
                </span>
              </div>
              ))}
            </ol>
          </div>
        </div>

        <div className="shadow-xl text-white my-4 py-8 lg:my-8 rounded-b-3xl w-[94%] lg:w-[86%] mx-auto">
          {sections.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
          <ImageSection />
          <FeedbackSection {...feedbackData} />
        </div>

<div className="text-white lg:w-[86%] mx-auto pb-16 lg:pb-24">

          <h1 className="text-2xl lg:text-4xl pb-6 font-bold">View Other Projects</h1>

        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-2 gap-5">
        {gridpg.map((section, index) => (
          <div className="">
              <img 
              src={section.imglink}
              className="border-2 border-gray-500 rounded-xl"
              />

              <h3 className="py-2 text-2xl font-semibold">{section.text}</h3>

              <Link href="/" className="text-[#3F8AE2] underline">
                View Project
              
              </Link>



              
              
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

