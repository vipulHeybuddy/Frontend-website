'use client'
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Slider1 from "@/components/Slider1";
import MobSlider from "@/components/Slider2";
import Bottomsec from "@/components/Bottomsec";
import Grid from "@/components/Grid";
import Grid1 from "@/components/Grid1";
import Grid2 from "@/components/Grid2";
import Company from "@/components/Company";
import Landingpg from "@/components/Landingpg";
import Ourclients from "@/components/Ourclients";
import Pagenation from "@/components/Pagenation";
import OrbitingCircles from "@/components/OrbitingCircles";


const fadeInAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

const fadeInAnimation2 = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 4.5 },
};

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      
      <motion.div {...fadeInAnimation}>
        <Landingpg />
      </motion.div>

      <OrbitingCircles />
      <Company />

      {isMobile ? <MobSlider /> : <Slider1 />}

      <motion.div {...fadeInAnimation2}>
        <Grid1 />
      </motion.div>

      <Grid />
      <Pagenation />
      <Grid2 />
      <Ourclients />
      <Bottomsec />
    </main>
  );
}
