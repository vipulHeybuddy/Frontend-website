"use client"
import Bottomsec from "@/components/Bottomsec";
import Image from "next/image";
import Grid from "@/components/Grid";
import Grid1 from "@/components/Grid1";
import Grid2 from "@/components/Grid2";
import Company from "@/components/Company";
import Landingpg from "@/components/Landingpg";
import Ourclients from "@/components/Ourclients";
import Pagenation from "@/components/Pagenation";
import Slider from "@/components/Slider1";
// import Tab1 from "@/components/Tab1";
import OrbitingCircles from "@/components/OrbitingCircles";

import { motion } from "framer-motion"

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
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <Landingpg /> */}
      <motion.div {...fadeInAnimation}>
        <Landingpg />
      </motion.div>

      <OrbitingCircles />
      <Company />
      <Slider />

      <motion.div {...fadeInAnimation2}>
      <Grid1 />
      </motion.div>

      <Grid />

      {/* <motion.div {...fadeInAnimation2}> */}
      <Pagenation />
      {/* </motion.div> */}

      {/* <Tab1/> */}
      
      <Grid2 />
      <Ourclients />
      <Bottomsec />
    </main>
  );
}
