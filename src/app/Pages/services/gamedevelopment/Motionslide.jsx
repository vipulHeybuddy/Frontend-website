'use client';
// import Image from 'next/image';
// import React, { useLayoutEffect, useState, useRef, useEffect } from "react";
// import './slide.css';

// const Motionslide = () => {
//   const slideData = [
//     {
//       title: "Game Development",
//       description:
//         "From casual mobile gaming to console adventure, we create all here.",
//       image:
//         "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/game.png",
//     },
//     {
//       title: "Immersive Development",
//       description:
//         "From casual mobile gaming to console adventure, we create all here.",
//       image:
//         "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Immersive.png",
//     },
//     {
//       title: "3D Development",
//       description:
//         "From casual mobile gaming to console adventure, we create all here.",
//       image:
//         "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Cube.jpg",
//     },
//     {
//       title: "AI Services",
//       description:
//         "From casual mobile gaming to console adventure, we create all here.",
//       image:
//         "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/ai.jpg",
//     },
//     {
//       title: "APP Development",
//       description:
//         "From casual mobile gaming to console adventure, we create all here.",
//       image:
//         "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/appdev.jpg",
//     },
//     {
//       title: "VR Training & Simulation",
//       description:
//         "From casual mobile gaming to console adventure, we create all here.",
//       image:
//         "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/metaverse.jpg",
//     },
//     {
//       title: "Web3 Development",
//       description:
//         "From casual mobile gaming to console adventure, we create all here.",
//       image:
//         "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/blockchain.jpg",
//     },
//   ];

//   const [visibleSlides, setVisibleSlides] = useState(1);

//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     const windowHeight = window.innerHeight;

//     // Calculate the number of slides to display based on scroll position
//     const newVisibleSlides = Math.ceil(scrollPosition / windowHeight) + 1;

//     // Set the state to update the visible slides
//     setVisibleSlides(Math.min(newVisibleSlides, slideData.length));
//   };

//   useEffect(() => {
//     // Attach the scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     // Remove the event listener when the component is unmounted
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const slides = slideData.slice(0, visibleSlides).map((slide, index) => (
//     <div  style={{position: 'sticky' ,  top: '15rem'  }} key={index} className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev3.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem] flex items-center justify-between my-8">
//       <div  className="flex-1 ">
//         <h1 className="py-4 text-white lg:w-[80%] text-2xl lg:text-4xl">
//           {slide.title}
//         </h1>
//         <p className="text-white text-xl lg:text-2xl">{slide.description}</p>
//       </div>
//       <div className="flex-1">
//         <Image
//           src={slide.image}
//           alt={slide.title}
//           width={500}
//           height={500}
//           objectFit="cover"
//         />
//       </div>
//     </div>
//   ));

//   return (
//     <div>
//       <div className="py-8 text-white">
//         <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
//           Hey Buddy, Game On!! <br />
//           Complete Game Development Services
//         </h1>
//         <p className="text-xl lg:text-2xl">
//           Hey Buddy is your one-stop shop for end-to-end game development
//           services. With AI on our side, we successfully clear levels of your
//           game development needs.
//         </p>
//       </div>

//       <div className="container8 bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev3.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
//         {slides}
//       </div>
//     </div>
//   );
// };

// export default Motionslide;


import { useLayoutEffect, useState } from "react";
import { render } from "react-dom";
import classnames from "classnames";
import "./slide.css";

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