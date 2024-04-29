// Slider.js

import React, { useState } from "react";
// import Ourclients from "./Section8large";
import SwipeableViews from "react-swipeable-views-react-18-fix";

const Section4mob = () => {
  const list = [
    {
      id: "1",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero fugiat minus eligendi? Necessitatibus aliquam provident tempore eligendi quas, magni perspiciatis maxime non accusamus eos alias hic, dolorem consequatur. Repellendus, expedita.",
      num: "01",
      name: "Zan Syed",
    },
    {
      id: "2",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero fugiat minus eligendi? Necessitatibus aliquam provident tempore eligendi quas, magni perspiciatis maxime non accusamus eos alias hic, dolorem consequatur. Repellendus, expedita.",

      num: "02",
      name: "Sarah",
    },
    {
      id: "3",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero fugiat minus eligendi? Necessitatibus aliquam provident tempore eligendi quas, magni perspiciatis maxime non accusamus eos alias hic, dolorem consequatur. Repellendus, expedita.",
      num: "03",
      name: "Ankit",
    },
    {
      id: "4",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero fugiat minus eligendi? Necessitatibus aliquam provident tempore eligendi quas, magni perspiciatis maxime non accusamus eos alias hic, dolorem consequatur. Repellendus, expedita.",
      num: "04",
      name: "Riyahi",
    },
    {
      id: "5",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero fugiat minus eligendi? Necessitatibus aliquam provident tempore eligendi quas, magni perspiciatis maxime non accusamus eos alias hic, dolorem consequatur. Repellendus, expedita.",
      num: "05",
      name: "Jeremy",
    },

    {
      id: "6",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero fugiat minus eligendi? Necessitatibus aliquam provident tempore eligendi quas, magni perspiciatis maxime non accusamus eos alias hic, dolorem consequatur. Repellendus, expedita.",
      num: "06",
      name: "Bhaskar",
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);

  const handleChangeIndex = (index) => {
    setCurrentCard(index);
  };

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="pt-16 bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse4.png')] bg-no-repeat bg-auto bg-[center_top_1rem]"
        id="testimonials"
      >
        <div className="py-2 lg:py-8  mx-auto text-center justify-center  text-2xl lg:text-4xl font-bold text-white mb-6">
          <h3>Listen from our clients</h3>
        </div>

        <SwipeableViews
          index={currentCard}
          onChangeIndex={handleChangeIndex}
          style={{
            width: "60%", // Set initial width to 60%
            margin: "auto", // Center the container
          }}
        >
          {list.map((section, index) => (
            <figure class="flex flex-col mx-auto  p-2 lg:p-4 border-gray-500 rounded-lg  h-full w-[80%] bg-gray-900 hover:bg-yellow-600 hover:bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              <blockquote class="">
                <p style={{ color: "white" }} className="text-left text-white">
                  {section.para}{" "}
                </p>

                <h3
                  style={{ color: "white" }}
                  class="pt-4 text-right text-xl font-semibold  text-white "
                >
                  {section.num}
                </h3>
                <h3 className="text-right text-white text-xl">
                  {section.name}
                </h3>
              </blockquote>
            </figure>
          ))}
        </SwipeableViews>

        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <button
            style={{
              padding: "8px 16px",
              margin: "0 8px",
              borderRadius: "8px",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() =>
              handleChangeIndex((currentCard - 1 + list.length) % list.length)
            }
          >
            Previous
          </button>
          <button
            style={{
              padding: "8px 16px",
              margin: "0 8px",
              borderRadius: "8px",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => handleChangeIndex((currentCard + 1) % list.length)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section4mob;
