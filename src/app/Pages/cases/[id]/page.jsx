"use client";

import Section1 from "@/components/casestudiescomp/realstatecomp/gamedev/Section1";
import Temp from "@/components/casestudiescomp/realstatecomp/gamedev/Temp";
import Section11 from "@/components/casestudiescomp/realstatecomp/gamedev/Section11";
import Section2 from "@/components/casestudiescomp/realstatecomp/gamedev/Section2";
import Section3 from "@/components/casestudiescomp/realstatecomp/gamedev/Section3";
import Section4 from "@/components/casestudiescomp/realstatecomp/gamedev/Section4";
import Section5 from "@/components/casestudiescomp/realstatecomp/gamedev/Section5";
import Section6 from "@/components/casestudiescomp/realstatecomp/gamedev/Section6";
import Section7 from "@/components/casestudiescomp/realstatecomp/gamedev/Section7";
import Section8 from "@/components/casestudiescomp/realstatecomp/gamedev/Section8";
import Section9 from "@/components/casestudiescomp/realstatecomp/gamedev/Section9";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const CaseStudyPage = () => {
  const searchParams = useSearchParams();
  const [caseId, setCaseId] = useState(null);
  const [json, setJson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This ensures that the code runs only on the client-side
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const id = url.pathname.split("/").pop(); // Extract the dynamic part of the URL
      setCaseId(id);
    }
  }, []);

  const fetchDataById = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://heybuddyapiadmin.azurewebsites.net/service/card/${id}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok ");
      }

      const result = await response.json();
      console.log("dynamic", result);
      setJson(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (caseId) {
      fetchDataById(caseId);
    }
  }, [caseId]);

  const data = [
    {
      title:
        "Hyper-realistic Animated Video showcasing innovative 3D CT Scanner to Augment Airport Security",
      description:
        "Our client is a leading CT scanner manufacturer in the UAE. They wanted a hyper-realistic explanatory video to showcase the innovative functionality of their latest state-of-the-art CT scan machine developed for airports. They needed a creative partner with a team that must possess skills to showcase their revolutionary but complex vision accurately. The video was going to be ultra-realistic animations requiring not just software skills but also hardware resources. Hey Buddy fits their criteria of the right partner with the right resources. To realize their project, we took the responsibility of designing a high-quality 3D animation video demonstrating the intricate details of the scanner using advanced technology.",
      category: "3D",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/card%20img.png",
      data: {
        id: "1",
        heading1: "Hyper-realistic Animated Video showcasing innovative",
        heading2: "3D CT Scanner to Augment Airport Security",
        url1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ct-scanner/1.png",
        para1:
          "Our client, a leading CT scanner manufacturer in the UAE, wanted a hyper-realistic explanatory video to showcase the innovative functionality of their latest CT scan machine developed for airport security.",
        para2:
          "Hey Buddy's 3D modelling team developed an ultra-realistic 3D video to showcase scanners' capability to create an impact.",
        url3: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ct-scanner/6.png",

        about:
          "Our client is a leading CT scanner manufacturer in the UAE. They wanted a hyper-realistic explanatory video to showcase the innovative functionality of their latest state-of-the-art CT scan machine developed for airports. They needed a creative partner with a team that must possess skills to showcase their revolutionary but complex vision accurately. The video was going to be ultra-realistic animations requiring not just software skills but also hardware resources. Hey Buddy fits their criteria of the right partner with the right resources. To realize their project, we took the responsibility of designing a high-quality 3D animation video demonstrating the intricate details of the scanner using advanced technology.",
        section5: {
          heading:
            "The Transformative Process of Using Captivating Visuals and Narrative for the Animated Video",
          requirement:
            "We understood the client's requirement and, to meet that, it was vital for our team to create a visually striking and functionally accurate 3D CT scanner model. The CT scanner was filled with unique features such as highly accurate scanning and high-quality visuals to help security personnel easily identify and differentiate objects.",
          execution:
            "Our expert 3D modelers worked hard using the latest development tools and techniques to develop the required 3D model. Moreover, they incessantly collaborated with the client for their continuous feedback and its incorporation. This project highlights our perfect fusion of creativity, technological expertise, and effective communication. Lastly, we used a render farm to achieve the highest standards in resolution and detail in a short time.",
          delivery:
            "This dedication to quality allowed us to showcase our extra professionalism to the project. In the end, the video perfectly demonstrated everything from baggage entering the scanner to generating accurate 3D images.",
          urlimg:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ct-scanner/airport2.png",
        },
        section6: {
          heading:
            "The Client's Mission of Revolutionizing Airport Security Transformed into a 3D Animated Video",
          para: "Our team developed a visually compelling 3D explanatory video that demonstrates the features and operational details of the CT scanner using advanced technologies. We infused the industry-standard tools, Blender, Zbrush, and Substance Painter to showcase the project's potential to revolutionize airport security measures.",
          list1:
            "The educational video simplifies complex concepts about the CT scanner.",
          list2:
            "This helped the client reinforce their pitch and convince airport authorities, their prospective buyers",
          list3:
            "Highly detailed close-up shots and visual effects to highlight the key features.",
          grid: {
            cell11: "4",
            cell1: "Months of Strategic Collaboration",
            cell21: "100",
            cell2: "Hours Saved in Post-Processing by Using a Rendering Farm",
            cell31: "20",
            cell3: "Days Early Delivery Before the Deadline",
            cell41: "30",
            cell4: "Closeup Shots to Highlight Details",
          },
        },
        section7: {
          heading1: "Get an Expert Team",
          heading2: "for Your Next Animation Project",
        },
        section8: {
          heading:
            "The client reached us to develop a realistic demonstrative video of their latest state-of-the-art CT scanner machine with 3D software.",
          requirement:
            "We collaborated with the client to understand their goals and vision. ",
          ideation:
            "Brainstormed creative concepts and innovative ways to showcase the 3D video.",
          designing:
            "Use of Blender, Zbrush, and Substance Painter for designing and texturing the model.",
          development:
            "Building animated sequences with industry-standard tools to show operational details.",
          deployment:
            "Successful deployment by using Render Farm for high-quality visuals and a polished product.",
        },
        section9: {
          heading1: "Immense Technical Complexity",
          heading2: "Educational Content Balance",
          heading3: "Render Resource Management",
          para1:
            "Achieving a high level of realism was necessary to animate the 3D CT scanner. It was only possible by using multiple tools and accurate representation of physical components. Our design team also had to learn the scanner's specifications and functionalities.",
          para2:
            "Our team had to create the perfect balance between visually engaging content and educational value through project development. Careful consideration was necessary to avoid overwhelming viewers with excessive technical information. We couldn't sacrifice accuracy for the sake of complex operational details.",
          para3:
            "It wasn't possible to render such a complex animated video in a short time. We relied on a Render Farm to meet project deadlines and deliver an exceptional final product. Our team had to balance the need for quality work with time and cost constraints. The data storage and transfer between the modeling and rendering stages were also challenging for Hey Buddy.",
        },
        testimonal:
          "We had the privilege of collaborating with the talented team of Hey Buddy. They made the animation almost life-like by bringing realism and accuracy to the final video. Now we can explain the complex features of our CT scanners to our customers and revolutionize airport security. I would give full marks to the design and execution team behind the project. The video perfectly balances complexity and accessibility.",
        section11: {
          para: "Do you want to design and develop 3D animated videos for your products or other projects? Demonstrate your expertise with the best animation. We create digital masterpieces with high accuracy and realism. ",
        },
        link: "/Pages/casestudies/3ddevelopment/[id]",
      },
    },
    // Add other case studies data here...
  ];

  // If caseId is not yet available, show loading
  if (!caseId) {
    return <div className="text-center py-20">Loading...</div>;
  }

  const Selected_data = data.filter((casestudy) => casestudy.id === caseId);

  // If no matching data is found, show a message
  if (Selected_data.length === 0) {
    return <div className="text-center py-20">Case study not found</div>;
  }

  const {
    heading1,
    heading2,
    url1,
    url3,
    para1,
    para2,
    about,
    section5,
    section9,
    section8,
    section6,
    testimonal,
    section11,
    section7,
  } = Selected_data[0];

  return (
    <div className="mx-auto">
      <Section1 heading1={heading1} heading2={heading2} url1={url1} />

      <div className="mx-auto">
        <Section2 about={about} />
      </div>

      <div className="mx-auto">
        <Section3
          heading1={heading1}
          heading2={heading2}
          para1={para1}
          para2={para2}
          url3={url3}
        />
      </div>

      <div className="mx-auto">
        <Section5 {...section5} />
      </div>
      <div className="mx-auto">
        <Section6 {...section6} />
      </div>

      <div className="mx-auto">
        <Section7 {...section7} />
      </div>

      <div className="mx-auto">
        <Section8 {...section8} />
      </div>
      <div className="mx-auto">
        <Section9 {...section9} />
      </div>

      <div className="pb-12 mx-auto">
        <Temp testimonal={testimonal} />
      </div>
      <div className="mx-auto">
        <Section11 {...section11} />
      </div>
    </div>
  );
};

export default CaseStudyPage;
