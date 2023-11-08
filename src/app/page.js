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
import OrbitingCircles from "@/components/OrbitingCircles";
// import Showslider from "@/components/Sliderc/Showslider";
// import Solarcomp from "@/components/Solarcomp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Landingpg />
      {/* <Solarcomp/> */}
        <OrbitingCircles />
      <Company/>
      <Slider/>
      <Grid1 />
      <Grid />
      <Pagenation/>
      <Grid2 />
      <Ourclients/>
      <Bottomsec />
    </main>
  );
}
