import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import "../../styles/Slider1.css";
import Link from "next/link";

function Slider1() {
  const controls = useAnimation();
  const ref = useRef();
  let swiper = null; // Reference to the Swiper instance


  const variants = {
    hidden: { opacity: 0, y: "20%" },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
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

  const handleMouseEnter = () => {
    // Pause the autoplay when mouse enters the SwiperSlide
    if (swiper && swiper.autoplay) {
      swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    // Resume the autoplay when mouse leaves the SwiperSlide
    if (swiper && swiper.autoplay) {
      swiper.autoplay.start();
    }
  };

  const slide_image_1 =
    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/game.png";
  const slide_image_2 =
    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Immersive.png";
  const slide_image_3 =
    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Cube.jpg";
  const slide_image_4 =
    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/ai.jpg";
  const slide_image_5 =
    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/appdev.jpg";
  const slide_image_6 =
    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/metaverse.jpg";
  const slide_image_7 =
    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/blockchain.jpg";

  return (
    <motion.div
    id="services"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontWeight: "bold",
      }}
      className=" bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Ellipse8.png')] bg-no-repeat bg-contain "
    >
      <h1
        style={{
          width: "60vw",
          color: "white",
          textAlign: "center",
          fontSize: "2rem",
          padding: "5vh",
        }}
      >
        Get All Emerging Tech Solutions Under One Roof
      </h1>
      <div className="container7">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
          onSwiper={(swiperInstance) => {
            swiper = swiperInstance;
          }}
        >
          <SwiperSlide
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >
            <Link href="/Pages/services/gamedevelopment">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  overflow:"hidden",
                }}
              >
                <div style={{ textAlign: "left", margin: "1rem" }}>
                  <h1 style={{ fontSize: "1.7rem", color: "white" }}>
                    Game Development
                  </h1>
                  <p style={{ color: "#ffffff8f" }}>
                    We excel in developing games across diverse genres on
                    leading platforms like Unity and Unreal.
                  </p>
                </div>
                <img src={slide_image_1} alt="slide_image" />
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
            <Link href="/Pages/services/ardevelopment">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  overflow:"hidden",

                }}
              >
                <div style={{ textAlign: "left", margin: "1rem" }}>
                  <h1 style={{ fontSize: "1.7rem", color: "white" }}>
                    AR development
                  </h1>
                  <p style={{ color: "#ffffff8f" }}>
                    We create realistic immersive solutions that create a
                    convincing new reality to impress your user with AR, VR or
                    through Metaverse platforms.
                  </p>
                </div>
                <img src={slide_image_2} alt="slide_image" />
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
            <Link href="/Pages/services/3dmodeling">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ textAlign: "left", margin: "1rem" }}>
                  <h1 style={{ fontSize: "1.7rem", color: "white" }}>
                    3D modeling
                  </h1>
                  <p style={{ color: "#ffffff8f" }}>
                    We develop responsive, meticulous, and true-to-life 3D
                    models and use them for eye-catching 3D animations.
                  </p>
                </div>
                <img src={slide_image_3} alt="slide_image" />
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
            <Link href="/Pages/services/customsoftware">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ textAlign: "left", margin: "1rem" }}>
                  <h1 style={{ fontSize: "1.7rem", color: "white" }}>
                    Custom Software Development
                  </h1>
                  <p style={{ color: "#ffffff8f" }}>
                    We employ the best software development practices for
                    cross-device and cross-platform compatible, user-friendly
                    Android and iOS applications.
                  </p>
                </div>
                <img src={slide_image_5} alt="slide_image" />
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
            <Link href="/Pages/services/vrdevelopment">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ textAlign: "left", margin: "1rem" }}>
                  <h1 style={{ fontSize: "1.7rem", color: "white" }}>
                    VR Development
                  </h1>
                  <p style={{ color: "#ffffff8f" }}>
                    Help your trainees learn 4 times faster with 500% more focus
                    and 1.75% time more confidence.
                  </p>
                </div>
                <img src={slide_image_6} alt="slide_image" />
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
            <Link href="/Pages/services/">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ textAlign: "left", margin: "1rem" }}>
                  <h1 style={{ fontSize: "1.7rem", color: "white" }}>
                    Web3 Development
                  </h1>
                  <p style={{ color: "#ffffff8f" }}>
                    Seize the power of pathbreaking Web3 technologies like
                    blockchain with use and open new digital avenues of
                    financial streams.
                  </p>
                </div>
                <img src={slide_image_7} alt="slide_image" />
              </div>
            </Link>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <AiOutlineArrowLeft />
            </div>
            <div className="swiper-button-next slider-arrow">
              <AiOutlineArrowRight />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </motion.div>
  );
}

export default Slider1;
