import React, { useEffect, useRef } from "react";

import "./Slider2.css";

function Mobslider() {



 

  const slideData = [
    {
      title: "Game Development",
      description: "From casual mobile gaming to console adventure, we create all here.",
      image: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/game.png",
    },
    {
      title: "Immersive Development",
      description: "From casual mobile gaming to console adventure, we create all here.",
      image: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Immersive.png",
    },
    {
      title: "3D Development",
      description: "From casual mobile gaming to console adventure, we create all here.",
      image: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Cube.jpg",
    },
    {
      title: "AI Services",
      description: "From casual mobile gaming to console adventure, we create all here.",
      image: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/ai.jpg",
    },
    {
      title: "APP Development",
      description: "From casual mobile gaming to console adventure, we create all here.",
      image: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/appdev.jpg",
    },
    {
      title: "VR Training & Simulation",
      description: "From casual mobile gaming to console adventure, we create all here.",
      image: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/metaverse.jpg",
    },
    {
      title: "Web3 Development",
      description: "From casual mobile gaming to console adventure, we create all here.",
      image: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/blockchain.jpg",
    },
  ];

  return (
    <div
     
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontWeight: "bold",
       
      
      }}
      // className=" bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Ellipse8.png')] bg-no-repeat bg-contain "
    >
      <h1
        style={{
          width: "100vw",
          color: "white",
          display: "flex",
          justifyContent: "center",
        alignItems: "center",
          textAlign: "center",
          fontSize: "1.2rem",
          padding: "5vh",
          position: 'sticky',
          top: "5rem",
        }}
        className=" bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Ellipse8.png')] bg-no-repeat bg-cover "
      >
       Get All Emerging Tech Solutions Under One Roof

      </h1>
      <div className="container8">
        {slideData.map((slide, index) => (
          <div
            key={index}
            className="textdiv1"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div style={{ textAlign: "left", margin: "1rem" }}>
              <h1 style={{ fontSize: "1.4rem", color: "white" }}>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
            <img src={slide.image} alt={`slide_image_${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mobslider;
