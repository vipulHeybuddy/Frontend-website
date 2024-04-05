import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../../../../styles/Font.css";

import "../../../../styles/button.css";
import "./page.css";
import CaseStudyCard from "@/components/casestudycard/CaseStudyCard";

const data = [
  {
    id: "1",
    heading:
      "Hyper-realistic Animated Video showcasing innovative 3D CT Scanner ",
    para1:
      "Our client, a leading CT scanner manufacturer in the UAE, wanted a hyper-realistic explanatory video to showcase the innovative functionality of their latest CT scan machine developed for airport security. Hey Buddy's...",
    link: "/Pages/casestudies/realestate/gamedev/[id]",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/card%20img.png",
  },
  {
    id: "2",
    heading: "AAA-Quality 3D Characters for a Korean Film Studio ",
    para1:
      "Our client, a well-known Korean film studio, known for its animated and drama films, required dynamic characters with AAA quality. They wanted them as per the decided theme of their upcoming short film...",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/realestate/gamedev/[id]",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/card%20img%20(4).png",
  },

  {
    id: "3",
    heading: "Hollywood Styled Semi-Realistic 3D Gaming Characters",
    para1:
      "Our client, a popular gaming publisher with multiple AAA and indie games needed a creative game development partner to design characters. They needed Hollywood-styled characters with meticulous detail for 4K...",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/realestate/gamedev/[id]",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/card%20img%20(2).png",
  },
  {
    id: "4",
    heading: "AAA 3D Characters for a Gaming Project",
    para1:
      "Our client, a gaming powerhouse, sought a dependable partner with the requisite expertise for their next 3D game development project. The potential partner should possess a sizeable team with skills matching...",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/realestate/gamedev/[id]",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/card%20img%20(3).png",
  },
];

const page = () => {
  return (
    <div className="px-2 ">
      <div className="casestudyContainer">
        <div className="readOurcasestudy">
          <p className="text-[4vw] font-semibold">3D Development</p>
          <p className="text-[2vw] w-[65vw]">
            See how our innovation, creativity, and the right expertise rendered
            the best results for our clients.
          </p>
        </div>
        <img className="read-casestudy-svg" alt="No-img" src="/read-blog.svg" />
        <div className="casestudyWithCategories mt-16">
          <div className="allcasestudy">
            {data.map((sec, ind) => (
              <CaseStudyCard key={sec.id} {...sec} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
