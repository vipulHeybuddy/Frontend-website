"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./motionSlider.css";
import WorkItem from "./WorkItem";
import PhotoItem from "./PhotoItem";
import GamedevCard from "./GamedevCard";

const images = [0, 1, 2, 3, 4, 5,];
const texts = [

  {
    title: "Immersive VR Application Development",
    description:
      "We craft captivating virtual reality applications across diverse platforms. Be assured of a seamless and immersive user experience that aligns with your specific requirements.",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds1.jpg",
  },
  {
    title: "Engaging VR Game Development",
    description:
      "We have a dedicated team of game-crazy expert developers. They deliver complete virtual reality games with innovation, creativity, and cross-platform compatibility.",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds2.jpg",
  },
  {
    title: "Metaverse VR Development Services",
    description:
      "Discover the metaverse like never before with Hey Buddy's expert touch. Get tailored solutions for Roblox adventures to redefine social connections in Sansar.",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds3.jpg",
  },
  {
    title: "360° Video Production for VR Experiences",
    description:
      "We let you immerse your audience in captivating 360-degree videos. Our expertise in capturing and producing high-quality VR environments creates a new reality.",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds4.jpg",
  },
  {
    title: "Custom VR Simulation Development",
    description:
      "We develop realistic VR simulations, with real-world physics and maneuverability. Get custom training, education, and other industry applications for effective outcomes.",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds1.jpg",
  },
  {
    title: "VR Content Creation Expertise",
    description:
      "Want to enrich your VR applications? Our team is ready to deliver. Impress your audience with our visually stunning 3D models, animations, and multimedia content.",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/game.png",
  },
  {
    title: "Strategic VR Consulting",
    description:
      "Leverage our industry expertise for insightful advice and data-driven strategy on VR technology. We guide you through every step for a seamless integration.",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds3.jpg",
  },
  {
    title: "Seamless VR Hardware Integration",
    description:
      "Be assured of optimal performance for every VR headset, controller, and hardware component. We offer a unified and immersive experience with our virtual reality software.",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/game.png",
  },
  {
    title: "Dedicated VR Maintenance and Support",
    description:
      "Count on Hey Buddy for continuous support, updates, and maintenance. We are known for ensuring the longevity and optimal performance of your VR applications.",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds1.jpg",
  },
  // {
  //   title: "Dedicated VR Maintenance and Support",
  //   description:
  //     "Count on Hey Buddy for continuous support, updates, and maintenance. We are known for ensuring the longevity and optimal performance of your VR applications.",
  //   img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds3.png",
  // },
  {
    title: "Cross-Platform VR Development",
    description:
      "We ensure your broad accessibility with services across VR platforms and devices. Get maximized reach and impact of your VR applications with a consistent user experience.      ",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds4.png",
  },
  // {
  //   title: "Intuitive VR UI/UX Design",
  //   description:
  //     "We design user interfaces and experiences tailored to virtual reality applications. Here, we prioritize usability and user engagement for a high success rate.      ",
  //   img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds5.png",
  // },
  {
    title: "Rigorous VR App Testing",
    description:
      "Get complete quality assurance with high functionality, performance, and user satisfaction of your VR applications. Avail of our VR app testing services. ",
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
      stagger: 0.7,
      ease: "power1",
    });

    ScrollTrigger.create({
      trigger: ".work",
      start: "top top",
      end: "bottom bottom",
      animation: animation,
      scrub: 0.1,
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
      <div className="h-fit relative lg:bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev3.png')] bg-fixed bg-bottom ">
        <section className="work  hidden lg:flex flex-row justify-between">
          <div className="work__left">
            <div className="work__text flex flex-col items-center">
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
              <div className="work__photo flex flex-col items-center">
                <PhotoItem
                  title="0"

                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Vr_Development/Immersive+VR+application+dev.jpg"
                  }
                />
                <PhotoItem
                  title="1"

                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Vr_Development/Engaging+vr+game.jpg"
                  }
                />
                <PhotoItem
                  title="1"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Vr_Development/Metaverse+vr+development.jpg"
                  }
                />
                <PhotoItem
                  title="2"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Vr_Development/360%C2%B0+Video+Production.jpg"
                  }
                />
                <PhotoItem
                  title="3"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Vr_Development/Custom+VR+Simulation.jpg"
                  }
                />
                <PhotoItem
                  title="4"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Vr_Development/VR+Content+Creation.jpg"
                  }
                />
                <PhotoItem
                  title="5"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Vr_Development/Strategic+VR+Consulting.jpg"
                  }
                  
                />
                
                {/* <PhotoItem
                  title="7"
                  imgSrc={

                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Vr_Development/Seamless+VR+Hardware.jpg"
                  }
                />
                <PhotoItem
                  title="8"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Vr_Development/Dedicated+VR+Maintenance.jpg"
                  }
                />
                {/* <PhotoItem
                  title="10"
                  imgSrc={
      
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Vr_Development/Dedicated+VR+Maintenance.jpg"

                  }
                /> */}
                <PhotoItem
                  title="11"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Vr_Development/Cross-Platform+VR.jpg"

                    // "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Vr_Development/Rigorous+VR+App+Testing.jpg"
                  }
                />
                {/* <PhotoItem
                  title="12"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds5.jpg"
                  }
                /> */}
                <PhotoItem
                  title="12"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Vr_Development/Rigorous+VR+App+Testing.jpg"

                  }
                /> */}
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
