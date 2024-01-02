'use client';

import { useLayoutEffect, useState } from "react";
// import { render } from "react-dom";
import classnames from "classnames";
import "../../../styles/slide.css";

const images = [0, 1, 2, 3, 4 , 5 , 6];
const texts = [
  {
          title: "Game Development",
          description:
            "From casual mobile gaming to console adventure, we create all here.",
         
        },
        {
          title: "Immersive Development",
          description:
            "From casual mobile gaming to console adventure, we create all here.",
         
        },
        {
          title: "3D Development",
          description:
            "From casual mobile gaming to console adventure, we create all here.",
         
        },
        {
          title: "AI Services",
          description:
            "From casual mobile gaming to console adventure, we create all here.",
         
        },
        {
          title: "APP Development",
          description:
            "From casual mobile gaming to console adventure, we create all here.",
          
        },
        {
          title: "VR Training & Simulation",
          description:
            "From casual mobile gaming to console adventure, we create all here.",
         
        },
        {
          title: "Web3 Development",
          description:
            "From casual mobile gaming to console adventure, we create all here.",
          
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
            Hey Buddy, Game On!! <br />
            Complete Game Development Services
          </h1>
          <p className="text-xl lg:text-2xl">
            Hey Buddy is your one-stop shop for end-to-end game development
            services. With AI on our side, we successfully clear levels of your
            game development needs.
          </p>
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