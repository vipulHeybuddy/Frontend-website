'use client';

import { useLayoutEffect, useState } from "react";
// import { render } from "react-dom";
import classnames from "classnames";
import "../../../styles/slide3.css";

const images = [0, 1, 2, 3, 4 , 5 , 6];
const texts = [
  {
          title: "Game Development",
          description:
            "We develop highly functional mobile game solutions with cross-platform compatibility. So whether it is iOS or Android, smartphone or console, you name it and we, as your trusted Mobile game development company, will do it ",
         
        },
        {
          title: "Capitalize on Expertise",
          description:
            "Leverage our extensive experience in VR development. Get the best solution for your specific business and industry needs as our VR experts use cutting-edge technology. ",
         
        },
        {
          title: "Achieve Quality in Time",
          description:
            "Count on Hey Buddy’s streamlined VR development process for prompt project completion. Get high-quality VR solutions delivered in your timelines with precision.",
         
        },
        {
          title: "Take Control",
          description:
            "Experience transparent and effective communication with Hey Buddy and command full control. Our dedicated SPOC keeps you informed throughout the development process.",
         
        },
        {
          title: "Be the Trendsetter",
          description:
            "Surpass industry standards with high-quality Virtual Reality software solutions. Our expert team delivers consistently with industry-leading expertise and a streamlined process.",
          
        },
        {
          title: "Outsmart Competition",
          description:
            "Capitalise on the power of innovation with Hey Buddy's creative VR solutions. Set your brand apart with a memorable and engaging user experience and high visual quality.",
         
        },
        {
          title: "Lead Your Domain",
          description:
            "We offer VR development services with an in-depth understanding of your industry. Get bespoke VR experiences aligned perfectly with your unique requirements.",
         
        },
        {
          title: "Stay Agile",
          description:
            "Overcome challenges seamlessly with Hey Buddy's agile methodology. We rapidly adjust strategies to meet evolving project requirements and ensure success.",
         
        },
        {
          title: "Your Investment Yields",
          description:
            "Optimize your returns with Hey Buddy's cost-effective VR development services. We offer competitive pricing structures and zero compromise on quality.",
         
        },
        {
          title: "Stay Confident",
          description:
            "Sail easy with our strong commitment to post-service support and maintenance. We ensure your VR experience remains functional and up-to-date for sustained success.",
         
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
  const [currentText1, setCurrentText1] = useState(null);


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
    setCurrentText1(texts[currentImageIndex]?.description);
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
          Benefits of our Custom Virtual Reality Development Services

          </h1>
          {/* <p className="text-sm lg:text-lg">
            Hey Buddy is your one-stop shop for end-to-end game development
            services. With AI on our side, we successfully clear levels of your
            game development needs.
          </p> */}
        </div>
      </div>
      <div className="sticky">
        <div className="frame relative">
          <img src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev3.png" alt="bg_image" className="absolute bottom-0" loading="lazy" />
          {images.map((image, index) => (
            <div key={image} className={`image-container ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
              {currentText && (
                <div style={{display: 'flex' ,flexDirection: 'column'}}>
                <div className="text font-semibold text-2xl text-white">{currentText}</div>
                <div  className="text-desctiption text-white">{currentText1}</div>
                </div>
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