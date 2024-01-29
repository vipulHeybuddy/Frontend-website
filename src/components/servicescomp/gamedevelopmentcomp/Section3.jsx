"use client";

import { useEffect, useLayoutEffect, useState } from "react";

import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import "../../../styles/slide.css";
import WorkItem from "./WorkItem";
import PhotoItem from "./PhotoItem";
import GamedevCard from "./GamedevCard";


const images = [0, 1, 2, 3, 4, 5, 6];
const texts = [
  {
    title: "Game Development",
    description:
      "We develop highly functional mobile game solutions with cross-platform compatibility. So whether it is iOS or Android, smartphone or console, you name it and we, as your trusted Mobile game development company, will do it ",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/game.png",
  },
  {
    title: "Mobile Game Development",
    description:
      "We develop highly functional mobile game solutions with cross-platform compatibility. So whether it is iOS or Android, smartphone or console, you name it and we, as your trusted Mobile game development company, will do it ",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds1.jpg",
  },
  {
    title: "Unreal Game Development",
    description:
      "Unreal engine is known to deliver powerful and dynamic games that stun gamers with its visuals and realism. Our developers love to work on this platform and get you a game with realistic game physics and animation and AI’s smart interactivity.",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds2.jpg",
  },
  {
    title: "Unity 3D Game Development",
    description:
      "We use the robust Unity engine to develop immersive, high-performing, and visually stunning games for your target audience. Unity is known for its powerful tools and features and we, as Unity Game development company use it to the fullest for 2D and 3D games.",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds3.jpg",
  },
  {
    title: "Metaverse Game Development",
    description:
      "Get ready to teleport your gaming audience into a new reality of Metaverse games. We are a renowned Metaverse game development company that knows community-building, utilisation of user-generated content, and capitalise on social connectivity.",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds4.jpg",
  },
  {
    title: "Web3 Game Development",
    description:
      "Ready to explore decentralised gaming for untapped business opportunities, we have an offer. Our team develops decentralised and secure Web3 gaming solutions utilising leading technologies like AI, blockchain, smart contracts, NFTs, and much more. ",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds1.jpg",
  },
  {
    title: "AR/VR Game Development",
    description:
      "We create immersive AR and VR games that merge with gamers' real world and alter their gaming experience for good. The high-fidelity games blur the line between the real and the gaming world and create a gaming experience that gamers can never get enough of.",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/game.png",
  },
];

const Motionslide = () => {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let workInfoItems = document.querySelectorAll(".work__photo-item");
    workInfoItems.forEach(function (item, index) {
      item.style.zIndex = workInfoItems.length - index;
    });

    gsap.set(".work__photo-item", {
      clipPath: function () {
        return "inset(0px 0px 0px 0px)";
      },
    });

    const animation = gsap.to(".work__photo-item:not(:last-child)", {
      clipPath: function () {
        return "inset(0px 0px 100% 0px)";
      },
      stagger: 0.5,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: ".work",
      start: "top top",
      end: "bottom bottom",
      animation: animation,
      scrub: 1,
    });
  }, []);

  return (
    <div>
      <div className="py-8 text-white">
        <div className="text-content lg:w-[80%]">
          <h1 className="py-4 text-2xl lg:text-4xl">
          Hey Buddy, Game On!! - Complete Game Development Services 
          </h1>
          <p className="text-sm lg:text-lg">
            Hey Buddy is your one-stop shop for end-to-end game development
            services. With AI on our side, we successfully clear levels of your
            game development needs.
          </p>
        </div>
      </div>
      <div className="h-fit relative bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev3.png')] bg-fixed bg-bottom ">
        <section className="work  hidden lg:flex flex-row justify-between">
          <div className="work__left">
            <div className="work__text">
              {texts.map((text, index) => (
                <WorkItem
                  key={index}
                  title={text.title}
                  description={text.description}
                />
              ))}
            </div>
          </div>
          <div className="work__right">
            <div className="work__right-b1">
              <div className="work__photo">
                <PhotoItem
                  title="1"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/game.png"
                  }
                />
                <PhotoItem
                  title="2"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds1.jpg"
                  }
                />
                <PhotoItem
                  title="3"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds2.jpg"
                  }
                />
                <PhotoItem
                  title="4"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds3.jpg"
                  }
                />
                <PhotoItem
                  title="5"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds4.jpg"
                  }
                />
                <PhotoItem
                  title="6"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds5.jpg"
                  }
                />
                <PhotoItem
                  title="7"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds3.jpg"
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-10 lg:hidden">
          {texts.map((text, index) => (
            <GamedevCard
              key={index}
              imageUrl={text.img}
              description={text.description}
              title={text.title}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Motionslide;
