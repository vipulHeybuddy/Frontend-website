import React from "react";
import Link from "next/link";
import Image from "next/image";

const Gridsection = ({listData,textData}) => {

//   const List = [
//     {
//       id: "1",
//       heading: "Enhanced Brand Engagement",
//       imgurl: "",
//       para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
//     },
//     {
//       id: "2",
//       heading: "Enhanced Brand Engagement",
//       imgurl: "",
//       para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
//     },
//     {
//       id: "3",
//       heading: "Enhanced Brand Engagement",
//       imgurl: "",
//       para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
//     },
//     {
//       id: "4",
//       heading: "Enhanced Brand Engagement",
//       imgurl: "",
//       para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
//     },
//     {
//       id: "5",
//       heading: "Enhanced Brand Engagement",
//       imgurl: "",
//       para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
//     },
//     {
//       id: "6",
//       heading: "Enhanced Brand Engagement",
//       imgurl: "",
//       para: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
//     },
//   ];

//   const Text = [
//     {
//         heading: "Power up Your Brand and Press Start for Profit with Game Development -  Your Gamified Success Awaits!",
//         subtext:"Investing in game development is not just about creating entertainment but a strategic move to brand expansion and market leadership. It is a strategic avenue for investing in innovation and engagement and staying ahead in today's dynamic business landscape.",
//     }
//   ]

  return (
    <div className="lg:py-4 text-white">

        <div>
        {textData.map((section, index) => (
          <div className="py-12" key={index}>
            <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">{section.heading}</h1>
            <p className="text-xl lg:text-2xl">{section.subtext}</p>
          </div>
        ))}
        </div>
      <div class="p-2 lg:py-4  grid mx-auto  justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
        {listData.map((section, index) => (
          <figure class="flex flex-col  p-2 lg:p-6  rounded-lg  h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
            <blockquote class="  text-gray-400">

                <Image 
                // src={}
                w={450}
                h={450}
                className="h-14 w-14 bg-white"
                />


              <h3
                style={{ color: "white" }}
                class="py-4 text-xl font-semibold  text-gray-500 "
              >
                {section.heading}
              </h3>

              <p style={{ color: "white" }} className="text-left">
                {section.para}
              </p>
            </blockquote>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Gridsection;
