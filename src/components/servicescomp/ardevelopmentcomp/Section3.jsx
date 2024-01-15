'use client';

import { useLayoutEffect, useState } from "react";
// import { render } from "react-dom";
import classnames from "classnames";
import "../../../styles/slide2.css";

const images = [0, 1, 2, 3];
const texts = [
  {
          title: "Game Development",
          description:
            "From casual mobile gaming to console adventure, we create all here.",
         
        },
        {
          title: "Immersive Retail Experience with AR Tryon for Fashion Enthusiasts",
          description:
            "Our client, a fashion retailers, aimed to enhance the shopping experience of their online shoppers. They knew the power of immersive AR experience. Hence, they wanted to offer their customers AR-based virtual try-on experiences for their clothing collection. So before making a purchase, users get a better idea of the product and make faster purchases. AR tryons are also known to reduce returns by up to 40% and increase customer satisfaction.Hey Buddy designed a custom AR application for the fashion retailer. The application allowed users to visualize how different clothing would look on them in real-time. The AR fitting room enhanced user engagement and increased conversion rates by 20%.",
         
        },
        {
          title: "Interactive Educational Tools for Faster and Better Learning",
          description:
            "Our client, an educational learning solution provider wanted to revolutionize its educational materials by incorporating augmented reality. They wanted to improve the learning experience and achieve better outcomes. Along with that, they sought interactive and engaging tools to make complex subjects more accessible to students. Hey Buddy developed AR-based educational modules that brought textbooks to life. And the results were astonishing. With interactive learning, students could explore 3D models of complex concepts. This led to a 25% increase in engagement and a better understanding of the same. As well, students could conduct virtual experiments, and explore the concepts from different perspectives for a complete understanding",
         
        },
        {
          title: "AR-Enabled Gamified Marketing Campaign for Cosmetics Products",
          description:
            "Nothing can beat gamified software solutions when it comes to marketing. One of our clients wanted to use this potential of AR experiences and run a memorable marketing campaign to promote their latest cosmetic product launch. They collaborated with multiple AR development companies but could not get the desired outcome. Hey Buddy devised an amazing gamified AR-driven marketing campaign. Users can scan product images in print advertisements and instantly access interactive games where they can apply and try different cosmetic products, try different looks, including some inspired by popular fantasies. As expected, the campaign generated huge buzz with a phenomenal 40% increase in traffic and unmatched positive social media engagement.",
         
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
          Success Stories with Hey Buddy AR Software Solutions
          </h1>
          <p className="text-xl lg:text-2xl">
          Hey Buddy maintains leadership amongst AR development companies. All credit to its team of high-skilled AR professionals, streamlined development process, and client-centric approach. We have delivered various disruptive AR development solutions that helped our clients reach new success levels.

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