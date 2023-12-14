"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Gridsection from "./Gridsection";
import Faqsection from "./Faqsection";
import Pagenation from "./Pagenation";
import Mixsection from "./Mixsection";

const page = () => {
  const checklist1 = [
    {
      title: "Tablet/Mobile Game Development",
    },
    {
      title: "Metaverse Game Development",
    },
    {
      title: "Immersive AR/VR Game Development",
    },
    {
      title: "Unreal and Unity Game Development",
    },
  ];

  // --------------------grid section-1----------------------------------
  const List1 = [
    {
      id: "1",
      heading: "Enhanced Brand Engagement",
      imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "2",
      heading: "Enhanced Brand Engagement",
      imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "3",
      heading: "Enhanced Brand Engagement",
      imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "4",
      heading: "Enhanced Brand Engagement",
      imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "5",
      heading: "Enhanced Brand Engagement",
      imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "6",
      heading: "Enhanced Brand Engagement",
      imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
  ];

  const Text1 = [
    {
      heading:
        "Power up Your Brand and Press Start for Profit with Game Development -  Your Gamified Success Awaits!",
      subtext:
        "Investing in game development is not just about creating entertainment but a strategic move to brand expansion and market leadership. It is a strategic avenue for investing in innovation and engagement and staying ahead in today's dynamic business landscape.",
    },
  ];

  //   ------------------grid section-2----------------------------------
  const List2 = [
    {
      id: "1",
      heading: "Enhanced Brand Engagement",
      imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "2",
      heading: "Enhanced Brand Engagement",
      imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "3",
      heading: "Enhanced Brand Engagement",
      imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "4",
      heading: "Enhanced Brand Engagement",
      imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "5",
      heading: "Enhanced Brand Engagement",
      imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "6",
      heading: "Enhanced Brand Engagement",
      imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
  ];

  const Text2 = [
    {
      heading:
        "Score Big Wins With Hey Buddy: Your Trusted  Game Development Company",
      subtext:
        "Hey Buddy is a renowned name in the game development space. We have an experienced development team who know what works best for your business.",
    },
  ];
  //   ------------------grid section-3----------------------------------

  const List3 = [
    {
      id: "1",
      heading: "Enhanced Brand Engagement",
      imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "2",
      heading: "Enhanced Brand Engagement",
      imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "3",
      heading: "Enhanced Brand Engagement",
      imgurl: "",
      para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
  ];

  const Text3 = [
    {
      heading:
        "Digital Joysticks, Real Rewards: Success Stories with Hey Buddy",
      subtext:
        "Hey Buddy offers its services to clients working in different industries and different scales. Here are the success stories that make us the best gaming development company in India. ",
    },
  ];

  //   ------------------grid section-4----------------------------------
  const clientcardData = [
    {
      id: 1,
      content:
        "Here is my opinion based on my experience, I have really enjoyed working with the game development team. The team is amicable, creative and understanding.",
      position: "Head of VP at Disney Hotstar",
      name: "Zan Syed",
    },
    {
      id: 2,
      name: "Sarah",
      content:
        "Thank you very much! An amazing job done by buddies what I like to call the team that exceeds all expectations. I am glad that I trusted you guys with the work.",
      position: "Head of VP at Disney Hotstar",
    },
    {
      id: 3,
      name: "Ankit",
      content:
        "I loved working with Hey Buddy and the way my VR project was handled, I consider this company as one of the best metaverse and game company in India.",
      position: "Head of VP at Disney Hotstar",
    },
    {
      id: 4,
      name: "Riyahi",
      content:
        "OMG where to start, I have no idea! people are amazing here, very focused and client-oriented. Kudos to the team for delivering the game project on time.",
      position: "Head of VP at Disney Hotstar",
    },
    {
      id: 5,
      name: "Jeremy",
      content:
        "Best game development company in India, though I am from the United States but never felt that I had hired this company, it was like this is my in-house team.",
      position: "Head of VP at Disney Hotstar",
    },
    {
      id: 6,
      name: "Bhaskar",
      content:
        "If anyone has a futuristic idea in mind and not finding the way to turn the idea into reality, I would recommend to reach out to Hey buddy, they are the best technology partner.",
      position: "Head of VP at Disney Hotstar",
    },
  ];

  const clientcardText = [
    {
      heading: "How Clients Rate Our Game Development Services",
      subtext:
        "Feature testimonials from satisfied clients who have utilised your game development services.Include their feedback on your professionalism, creativity, and the quality of your work.",
    },
  ];
  // ----------------------------------------------------------------

  return (
    <div className="lg:w-[80%] mx-auto">
      <div>
        <div className="relative isolate px-6  pt-20 lg:px-8 ">
          {/* ----------------------hero section---------------------------------------- */}

          <div className="mx-auto rounded-lg py-32 sm:pt-48 lg:pt-56 h-[95vh] bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev1.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <div className="text-center mx-auto lg:w-[80%]">
              <h1 className="heading1 lg:text-6xl text-3xl lg:pb-8 font-bold tracking-tight text-white sm:text-6xl">
                Level up With AI: Best Game Development Company in India
              </h1>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/">
                  <div className="getintouch rounded-3xl px-10 py-4 text-sm text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Consult Our Experts
                    <span aria-hidden="true" className="arrow">
                      ➜
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* ----------------------para section---------------------------------------- */}
          <div className="py-8 text-xl ">
            <p>
              Get an AI-powered smart gaming solution that captivates with its
              hyper-realistic graphics and enthrals with its deeply engaging
              gameplay. Hey Buddy is India's leading game development company,
              maintaining a large team of gamer-first developers who know what
              works.
            </p>
          </div>

          {/* --------------------box section ------------------------------------------ */}

          <div className=" bg-gradient-to-r from-[#24C2F8] to-[#0B0DF4] shadow-xl rounded-3xl py-4 lg:py-6 mt-8 mx-auto">
            <div className=" lg:mx-auto lg:text-center w-full justify-center py-2 lg:py-2">
              <ol className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-2 gap-5 lg:gap-x-16">
                {checklist1.map((section, index) => (
                  <div className="px-2 lg:px-16 flex items-center text-[#FFFFFF]  space-x-2.5 rtl:space-x-reverse">
                    <san className="flex items-center justify-center w-8 h-8 text-[#0B0DF4] bg-[#6FCF97]  rounded-full shrink-0 ">
                      &#10004;
                    </san>
                    <span>
                      <h3 className="font-medium leading-tight">
                        {section.title}
                      </h3>
                    </span>
                  </div>
                ))}
              </ol>
            </div>

            {/* <div className=" lg:mx-auto lg:text-center w-full justify-center py-2 lg:py-2">
            <ol className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-2 gap-5 lg:gap-16 ">
              {checklist2.map((section, index) => (
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
          </div> */}
          </div>

          {/* -------------------------------------------------------------- */}

          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev2.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Gridsection listData={List1} textData={Text1} />
          </div>

          {/* ------------------------scroll component-------------------------------------- */}

          {/* ----------------------------mix section---------------------------------- */}
          <Mixsection />

          {/* ------------------------left side scroll timeline section-------------------------------------- */}

          {/* -------------------------------------------------------------- */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev6.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">

          <Gridsection listData={List2} textData={Text2} />
          </div>

          {/* -------------------------------------------------------------- */}
          {/* https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev7.png */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev7.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">

          <Gridsection listData={List3} textData={Text3} />
          </div>

          {/* ------------------------pagination section-------------------------------------- */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev8.png')] py-8 bg-no-repeat lg:bg-cover ">

          <Pagenation />
          </div>

          {/* -----------------------client section--------------------------------------- */}
          <div className="text-white lg:py-16 bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev9.png')] py-8 bg-no-repeat lg:bg-cover">
            <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
              How Clients Rate Our Game Development Services
            </h1>
            <p className="text-xl lg:text-2xl">
              Feature testimonials from satisfied clients who have utilised your
              game development services. Include their feedback on your
              professionalism, creativity, and the quality of your work.
            </p>
            <div class=" lg:py-12  grid mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
              {clientcardData.map((section, index) => (
                <figure class="flex flex-col  p-2 lg:p-6 border-2  border-gray-500 rounded-lg  h-full w-full bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
                  <blockquote class="  :text-gray-400">
                    <p style={{ color: "white" }} className="text-left">
                      {section.content}{" "}
                    </p>

                    <h3 className="pt-4 text-right font-semibold text-white text-xl">
                      {section.name}
                    </h3>

                    <h3
                      style={{ color: "white" }}
                      class="pt-2 text-right text-xl   text-gray-500 "
                    >
                      {section.position}
                    </h3>
                    {/* <h3 className="text-right text-white text-xl">{section.name}</h3> */}
                  </blockquote>
                </figure>
              ))}
            </div>
          </div>

          {/* -----------------------------FAQ section------------------------------------ */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev10.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">

          <Faqsection />
          </div>

        </div>
      </div>
    </div>
  );
};

export default page;
