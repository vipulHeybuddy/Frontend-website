"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
// import './Timelinecomp.css'
import "../../../styles/Timelinecomp.css";
import { motion, useAnimation } from "framer-motion";

const Timelinecomp = () => {
  const controls = useAnimation();
  const ref = useRef();

  const textAnimation1 = {
    hidden: { opacity: 0, y: "20%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const onScreen = async () => {
    const element = ref.current;
    if (element) {
      const isVisible = await controls.start("visible");
      if (isVisible) {
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onScreen();
        }
      },
      { threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  const events = [
    {
      status: "Ordered",
      date: "15/10/2020 10:30",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      status: "Processing",
      date: "15/10/2020 14:00",
      icon: "pi pi-cog",
      color: "#673AB7",
    },
    {
      status: "Shipped",
      date: "15/10/2020 16:15",
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
    },
    {
      status: "Delivered",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },
  ];

  const text = [
    {
      id: "1",
      head: "1. Requirement Gathering",
      para: "The process starts with the pre-production phase. Here, we settle the dust around the basics of the games such as the game narrative, gameplay rules, game level, and basic structure. All this is documented securely in the Game Development Document (GDD).    ",
    },
    {
      id: "2",
      head: "2. Concept Art",
      para: "Then, based on GDD, the story, the intended theme, and the characters, we work on the concept art of the game. Here, we give shape to the characters, environments, and other in-game objects to set the ball running for 3D visualization and upcoming processes.",
    },
    {
      id: "3",
      head: "3. Assets Creation",
      para: "Once the concept art takes the final shape that you approve of, we start with the 3D & 2D modeling of the game assets. Using the latest software applications, we give your game the look and feel that attracts gamers in huge numbers     ",
    },
    {
      id: "4",
      head: "4. Animation",
      para: "Now comes the most important yet challenging part. We animated your game assets with different techniques as per requirement such as human body animation for game characters and inorganic animation for game objects to make it not just convincing, but captivating.",
    },
    {
      id: "5",
      head: "5. Game Level Designing",
      para: "Now that the characters and assets are ready, it's time to put them on the battlefield. Hence, we design game levels, player abilities, obstacles, and all other elements required for a perfect game. Our main focus - is a great gaming experience by all means.     ",
    },
    {
      id: "6",
      head: "6. Building Mechanics ",
      para: "Now, onto some serious tasks, we program the game mechanics that govern how players progress, interact, and experience the game. We ensure intuitive, balanced, and adaptive game mechanics for a meaningful gaming experience.",
    },
    {
      id: "7",
      head: "7. AI Infusion",
      para: "Yet another critical factor is the AI integration into the game. This infuses intelligent behaviors into the non-player characters (NPCs), the game environment, and the game assets for hyper-realistic in-game interaction and dynamics.",
    },
    {
      id: "8",
      head: "8. Graphic Optimization",
      para: "We understand that visuals are the first thing that gamers notice and it is the key to attracting an audience. Hence, we optimize the graphics to maintain consistency and the highest visual experience through the devices and platform. ",
    },
    {
      id: "9",
      head: "9. Rigorous Testing",
      para: "We rigorously test your game on every aspect of the process to identify bugs and issues in the game actively. We make your game market-ready and ensure that you gamers get a smooth and enjoyable gaming experience without hiccups.",
    },
    {
      id: "10",
      head: "10. Launch",
      para: "This whole process results in a game in which you aspire for your endeavor. Now, we help launch the game on the targeted platform(s). Post that we stay on our toes to troubleshoot issues post-launch, nipping them in the bud.",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
    >
      <div className="py-8 text-white">
        <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
          Our Perfected Game Development Process - <br />
          Level by level
        </h1>
        <p className="text-xl lg:text-lg">
          Over years of experience as a game app development company, we have
          refined, streamlined and aligned our game development process to serve
          you better.
        </p>
      </div>

      <div className="pb-24">
        <div className="grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-4">
          <div className="overflow-y-scroll scrollbar-hide md:scrollbar-default h-[60vh] w-full  ">
            <div className="">
              <div className="main ">
                {/* <h3 class="head">Responsive Timeline</h3> */}
                <div class="container text-white">
                  <ul>
                    {/* {text.map((section,index) => {
                      <li>
                        <h3 className="font-bold text-2xl heading">{section.head} </h3>
                        <p>{section.para} </p>
                      </li>
                    })} */}
                    {/* <li>
                        <h3 className="font-bold text-2xl heading"></h3>
                        <p> </p>
                    </li> */}

                    <li>
                      <h3 className="font-bold text-2xl heading">
                        1. Requirement Gathering
                      </h3>
                      <p>
                        The process starts with the pre-production phase. Here,
                        we settle the dust around the basics of the games such
                        as the game narrative, gameplay rules, game level, and
                        basic structure. All this is documented securely in the
                        Game Development Document (GDD).
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl heading">
                        2. Concept Art
                      </h3>
                      <p>
                        Then, based on GDD, the story, the intended theme, and
                        the characters, we work on the concept art of the game.
                        Here, we give shape to the characters, environments, and
                        other in-game objects to set the ball running for 3D
                        visualization and upcoming processes.{" "}
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl heading">
                        3. Assets Creation
                      </h3>
                      <p>
                        Once the concept art takes the final shape that you
                        approve of, we start with the 3D & 2D modeling of the
                        game assets. Using the latest software applications, we
                        give your game the look and feel that attracts gamers in
                        huge numbers{" "}
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl heading">
                        4. Animation
                      </h3>
                      <p>
                        Now comes the most important yet challenging part. We
                        animated your game assets with different techniques as
                        per requirement such as human body animation for game
                        characters and inorganic animation for game objects to
                        make it not just convincing, but captivating.{" "}
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl heading">
                        5. Game Level Designing
                      </h3>
                      <p>
                        Now that the characters and assets are ready, it's time
                        to put them on the battlefield. Hence, we design game
                        levels, player abilities, obstacles, and all other
                        elements required for a perfect game. Our main focus -
                        is a great gaming experience by all means.{" "}
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl heading">
                        6. Building Mechanics
                      </h3>
                      <p>
                        Now, onto some serious tasks, we program the game
                        mechanics that govern how players progress, interact,
                        and experience the game. We ensure intuitive, balanced,
                        and adaptive game mechanics for a meaningful gaming
                        experience.{" "}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl heading">
                        7. AI Infusion
                      </h3>
                      <p>
                        Yet another critical factor is the AI integration into
                        the game. This infuses intelligent behaviors into the
                        non-player characters (NPCs), the game environment, and
                        the game assets for hyper-realistic in-game interaction
                        and dynamics.{" "}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl heading">
                        8. Graphic Optimization
                      </h3>
                      <p>
                        We understand that visuals are the first thing that
                        gamers notice and it is the key to attracting an
                        audience. Hence, we optimize the graphics to maintain
                        consistency and the highest visual experience through
                        the devices and platform.{" "}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl heading">
                        9. Rigorous Testing
                      </h3>
                      <p>
                        We rigorously test your game on every aspect of the
                        process to identify bugs and issues in the game
                        actively. We make your game market-ready and ensure that
                        you gamers get a smooth and enjoyable gaming experience
                        without hiccups.{" "}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl heading">10. Launch</h3>
                      <p>
                        This whole process results in a game in which you aspire
                        for your endeavor. Now, we help launch the game on the
                        targeted platform(s). Post that we stay on our toes to
                        troubleshoot issues post-launch, nipping them in the
                        bud.{" "}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[50vh] w-full  px-16">
          

            <div style={{ width: '100%', height: 0, paddingBottom: '100%', position: 'relative' }}>
              
               <Image
              width={700}
              height={700}
              src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/wheel-unscreen.gif"
              className="lg:mr-6 h-[50vh] w-[52rem] lg:h-[70vh] lg:w-[92rem] "
              alt="Hey B"
              />
            </div>
            
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Timelinecomp;
