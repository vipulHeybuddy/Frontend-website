'use client';

import { useLayoutEffect, useState } from "react";
// import { render } from "react-dom";
import classnames from "classnames";
import "../../../styles/slide1.css";

const images = [0, 1, 2, 3, 4, 5, 6];
const texts = [
  {
          title: "Game Development",
          description:
            "From casual mobile gaming to console adventure, we create all here.",
         
        },
        {
          title: "3D Character Development",
          description:
            "Our experienced, skilled and creative 3D artists and modellers produce visually impressive 3D characters just for your project, brand and storytelling",
         
        },
        {
          title: "3D Asset Development",
          description:
            "We develop meticulously detailed, accurate, and high-quality 3D assets that perfectly fulfil your project's visual and functional needs.",
         
        },
        {
          title: "3D Environment Development",
          description:
            "We create deeply immersive environments that captivate your audience with ultra-realistic visuals and perfectly fit your project needs.",
         
        },
        {
          title: "3D Hard Surface Modelling",
          description:
            "We create detailed 3D models of objects or structures following your specific guidelines and ensure timely delivery for uninterrupted project operations.",
          
        },
        {
          title: "3D Animation Services",
          description:
            "Our client-centric approach ensures our 3D animations and meticulous rigging convey your vision accurately while captivating the audience with high-quality visuals.",
         
        },
        {
          title: "3D MetaHuman Creation Services",
          description:
            "Get photorealistic digital humans with easy customisation, We create Metahumans for virtual productions, games, or all other applications.",
          
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
          Hey Buddy:<br />
          One-stop Destination for all 3D Modelling services
          </h1>
          <p className="text-xl lg:text-2xl">
            No tiring search for different vendors for different services, Hey Buddy’s comprehensive 3D modelling services get all you need. 
From AR/VR and CGI to product visualisation and animation, we offer complete 3D development services for every business and every project. Just partner and procure.

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