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

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
    >
      <div className="py-8 text-white">
        <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
          Web3 development Roadmap For Revolutionary Outcome
        </h1>
        <p className=" text-base md:text-lg lg:text-2xl">
          We follow a strategic and time-tested Web3 development process to
          catapult your project into the decentralized era.
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
                    <li>
                      <h3 className="font-bold text-2xl  ">
                        1. Strategic Consultation
                      </h3>

                      <p>
                        Our experts dive deep into your vision and carve out a
                        roadmap, aligning Web 3.0 power to your business’s long
                        and short-term goals and objectives.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        2. Decentralized Architecture Design
                      </h3>

                      <p>
                        We architect a decentralized framework as per your
                        project's needs. Our designs lay the foundation for a
                        Scalable, secure, and cutting-edge web3 development
                        solutions.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        3. Smart Contract Development
                      </h3>
                      <p>
                        Our team develops code for Smart Contracts, automating
                        processes and ensuring a trustless ecosystem for your
                        transactions and operations on the blockchain.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        4. Interoperability Integration
                      </h3>
                      <p>
                        Further, our interoperability solutions connect your
                        project with diverse blockchain networks seamlessly, for
                        higher connectivity and collaboration.
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">
                        5. Security Audits and Testing
                      </h3>

                      <p>
                        Our rigorous security audits and testing ensure
                        resiliency in your project, protecting your platform and
                        user data from threats of every form.
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">
                        6. User-Centric DApp Development
                      </h3>

                      <p>
                        Consequently, your DApp starts to take its final shape
                        with seamless and intuitive user interaction with
                        blockchain and engaging them in a great digital
                        experience.
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">
                        7. Launch and Optimization
                      </h3>

                      <p>
                        Lastly, your project gets launched after continuous
                        optimization and refinement ingrained in our process for
                        a dynamic and competitive Web3 solution.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[50vh] w-full  px-16">
            <div
              style={{
                width: "100%",
                height: 0,
                paddingBottom: "100%",
                position: "relative",
              }}
            >
              <Image
                loading="lazy"
                width={700}
                height={700}
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/wheel-unscreen.gif"
                className="lg:mr-6 h-[40vh] w-[52rem] lg:h-[60vh] lg:w-[92rem] "
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
