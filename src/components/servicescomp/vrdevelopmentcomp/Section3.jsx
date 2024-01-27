'use client';

import { useLayoutEffect, useState } from "react";
// import { render } from "react-dom";
import classnames from "classnames";
import "../../../styles/slide3.css";

const images = [0, 1, 2, 3, 4 , 5 , 6];
const texts = [
        {
          title: "Immersive VR Application Development",
          description:
            "Leverage our extensive experience in VR development. Get the best solution for your specific business and industry needs as our VR experts use cutting-edge technology.",
        },
        {
          title: "Immersive VR Application Development",
          description:
            "We craft captivating virtual reality applications across diverse platforms. Be assured of a seamless and immersive user experience that aligns with your specific requirements.",
           
        },
        {
          title: "Engaging VR Game Development",
          description:
            "We have a dedicated team of game-crazy expert developers. They deliver complete virtual reality games with innovation, creativity, and cross-platform compatibility.",
         
        },
        {
          title: "Metaverse VR Development Services",
          description:
            "Discover the metaverse like never before with Hey Buddy's expert touch. Get tailored solutions for Roblox adventures to redefine social connections in Sansar.",
         
        },
        {
          title: "360° Video Production for VR Experiences",
          description:
            "We let you immerse your audience in captivating 360-degree videos. Our expertise in capturing and producing high-quality VR environments creates a new reality.",
          
        },
        {
          title: "Custom VR Simulation Development",
          description:
            "We develop realistic VR simulations, with real-world physics and maneuverability. Get custom training, education, and other industry applications for effective outcomes.",
         
        },
        {
          title: "VR Content Creation Expertise",
          description:
            "Want to enrich your VR applications? Our team is ready to deliver. Impress your audience with our visually stunning 3D models, animations, and multimedia content.",
          
        },
        {
          title: "Strategic VR Consulting",
          description:
            "Leverage our industry expertise for insightful advice and data-driven strategy on VR technology. We guide you through every step for a seamless integration.",
          
        },
        {
          title: "Seamless VR Hardware Integration",
          description:
            "Be assured of optimal performance for every VR headset, controller, and hardware component. We offer a unified and immersive experience with our virtual reality software.",
          
        },
        {
          title: "Dedicated VR Maintenance and Support",
          description:
            "Count on Hey Buddy for continuous support, updates, and maintenance. We are known for ensuring the longevity and optimal performance of your VR applications.",
        },
        {
          title: "Dedicated VR Maintenance and Support",
          description:
            "Count on Hey Buddy for continuous support, updates, and maintenance. We are known for ensuring the longevity and optimal performance of your VR applications.",
        },
        {
          title: "Dedicated VR Maintenance and Support",
          description:
            "Count on Hey Buddy for continuous support, updates, and maintenance. We are known for ensuring the longevity and optimal performance of your VR applications.",
        },
        
];

const Motionslide = () => {
  const [visibleImagesMap, setVisibleImagesMap] = useState(
    images.reduce((map, image) => {
      map[image] = false;
      return map;
    }, {})

  );

  const [currentText, setCurrentText] = useState(null);


  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight*2;

      const newVisibleImagesMap = images.reduce((map, image) => {
        map[image] = scrollTop >= image * viewportHeight;
        return map;
      }, {});

      setVisibleImagesMap(newVisibleImagesMap);

    // Find the index of the currently visible image
    const currentImageIndex = Math.floor(scrollTop / viewportHeight);

    // Update the current text based on the currently visible image
    setCurrentText(texts[currentImageIndex]?.title);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <div className="py-8 text-white">
        <div className="text-content lg:w-[80%]">
          <h1 className="py-4 text-2xl lg:text-4xl">
          360 Degree Virtual Reality Services With One Click

          </h1>
          Redefine possibilities with Hey Buddy’s comprehensive Virtual Reality development services. Immerse your audience in unparalleled digital experiences that elevate your brand and stay at the forefront of technological innovation.
        </div>
      </div>
      <div className="sticky">
        <div className="frame bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev3.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
          {images.map((image, index) => (
            <div key={image} className={`image-container ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
              {currentText && (
                <div className="text">{currentText}</div>
              )}
              <div
                className={classnames("image", `image_${image}`, {
                  image_visible: visibleImagesMap[image],
                })}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Motionslide;