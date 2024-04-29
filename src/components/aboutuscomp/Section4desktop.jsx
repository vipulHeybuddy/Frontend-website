"use client";
import React from "react";
import { motion } from "framer-motion";

const Section4desktop = () => {
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

  const textAnimation1 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2 },
  };

  return (
    <div
      className="pt-16 bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Ellipse4.png')] bg-no-repeat bg-auto bg-[center_top_1rem]"
      id="testimonials"
    >
      <div className="py-2 lg:py-8  mx-auto text-center justify-center  text-2xl lg:text-4xl font-bold text-white mb-6">
        <h3>Listen from our clients</h3>
      </div>
      <motion.div
        class="p-2 lg:p-12  w-[90%] lg:w-[80%]  grid mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4"
        {...textAnimation1}
      >
        {list.map((section, index) => (
          <figure class="flex flex-col  p-2 lg:p-4 border-gray-500 rounded-lg  h-full w-full bg-gray-900 hover:bg-yellow-600 hover:bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
            <blockquote class="  :text-gray-400">
              <p style={{ color: "white" }} className="text-left">
                {section.para}{" "}
              </p>

              <h3
                style={{ color: "white" }}
                class="pt-4 text-right text-xl font-semibold  text-gray-500 "
              >
                {section.num}
              </h3>
              <h3 className="text-right text-white text-xl">{section.name}</h3>
            </blockquote>
          </figure>
        ))}
      </motion.div>
    </div>
  );
};

export default Section4desktop;
