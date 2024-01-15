'use client';

import { useLayoutEffect, useState } from "react";
// import { render } from "react-dom";
import classnames from "classnames";
import "../../../styles/slide1.css";

const images = [0, 1, 2, 3 ];  //,4, 5, 6
const texts = [
  {
          title: "Game Development",
          description:
            "From casual mobile gaming to console adventure, we create all here.",
         
        },
        {
          title: "Real-Estate:Property Visualization for Better Customer Engagement",
          description:
            "Our client, a real-estate firm, required realistic 3D models for their new residential project. We used Autodesk 3ds Max and VRay to deliver highly detailed interior and exterior renders to aid them in presentations and marketing materials. This enhanced the customer’s engagement and understanding of our client's real-estate project, leading to faster sales and a more effective and streamlined sales process.",
         
        },
        {
          title: "E-Commerce:Showcase Products in the Best Light",
          description:
            "An online furniture retailer wanted high-quality 3D models for their product listings.We used Blender to produce photorealistic 3D models of their furniture collection to enhance the online shopping experience of their customers and reduce the need for physical prototypes.As a result, our client attained increased customer satisfaction, reduced returns, and improved online sales through visually appealing and accurate representations of products.",
         
        },
        {
          title: "Gaming:High-quality Character Modeling for Unforgettable Gaming experience",
          description:
            "One of our clients, a game development studio, needed diverse 3D character models for their upcoming gaming title We employed ZBrush and Maya for character design and animation, delivering unique and visually appealing assets that enhanced the game's overall aesthetic.Thus, we proudly contributed to the game's success by providing captivating characters, that garnered positive reviews and commercial success.",
         
        },
        // {
        //   title: "APP Development",
        //   description:
        //     "From casual mobile gaming to console adventure, we create all here.",
          
        // },
        // {
        //   title: "VR Training & Simulation",
        //   description:
        //     "From casual mobile gaming to console adventure, we create all here.",
         
        // },
        // {
        //   title: "Web3 Development",
        //   description:
        //     "From casual mobile gaming to console adventure, we create all here.",
          
        // },
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
          Success Stories <br />
          with Hey Buddy 3D Modelling Services
          </h1>
          {/* <p className="text-xl lg:text-2xl">
            Hey Buddy is your one-stop shop for end-to-end game development
            services. With AI on our side, we successfully clear levels of your
            game development needs.
          </p> */}
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