import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import './Slider1.css';

function Slider1() {
  const controls = useAnimation();
  const ref = useRef();

  const variants = {
    hidden: { opacity: 0, y: '20%' },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const onScreen = async () => {
    const element = ref.current;
    if (element) {
      const isVisible = await controls.start('visible');
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

  const slide_image_1 =
    'https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/game.png';
  const slide_image_2 =
    'https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Immersive.png';
  const slide_image_3 =
    'https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Cube.jpg';
  const slide_image_4 =
    'https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/ai.jpg';
  const slide_image_5 =
    'https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/appdev.jpg';
  const slide_image_6 =
    'https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/metaverse.jpg';
  const slide_image_7 =
    'https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/blockchain.jpg';

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontWeight: 'bold',
      }}
      className=" bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Ellipse8.png')] bg-no-repeat bg-contain "
    >
      <h1
        style={{
          width: '60vw',
          color: 'white',
          textAlign: 'center',
          fontSize: '2rem',
          padding: '10vh',
        }}
      >
        Need to enhance your business online? We’ve got you covered
      </h1>
      <div className="container7">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
        <SwiperSlide>
        <div className='textdiv' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ textAlign: 'left', margin: '1rem' }}>
          <h1 style={{ fontSize: '1.4rem', color: 'white' }}>Game Development</h1>
            <p>From casual mobile gaming to console adventure, we create all here.</p>
          </div>
           <img src={slide_image_1} alt="slide_image" />
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='textdiv' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ textAlign: 'left', margin: '1rem' }}>
          <h1 style={{ fontSize: '1.4rem', color: 'white' }}>Immersive Development</h1>
            <p>From casual mobile gaming to console adventure, we create all here.</p>
          </div>
           <img src={slide_image_2} alt="slide_image" />
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='textdiv' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ textAlign: 'left', margin: '1rem' }}>
          <h1 style={{ fontSize: '1.4rem', color: 'white' }}>3D Development</h1>
            <p>From casual mobile gaming to console adventure, we create all here.</p>
          </div>
           <img src={slide_image_3} alt="slide_image" />
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='textdiv' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ textAlign: 'left', margin: '1rem' }}>
          <h1 style={{ fontSize: '1.4rem', color: 'white' }}>AI Services</h1>
            <p>From casual mobile gaming to console adventure, we create all here.</p>
          </div>
           <img src={slide_image_4} alt="slide_image" />
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='textdiv' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ textAlign: 'left', margin: '1rem' }}>
          <h1 style={{ fontSize: '1.4rem', color: 'white' }}>APP Development</h1>
            <p>From casual mobile gaming to console adventure, we create all here.</p>
          </div>
           <img src={slide_image_5} alt="slide_image" />
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='textdiv' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ textAlign: 'left', margin: '1rem' }}>
          <h1 style={{ fontSize: '1.4rem', color: 'white' }}>VR Training & Simulation</h1>
            <p>From casual mobile gaming to console adventure, we create all here.</p>
          </div>
           <img src={slide_image_6} alt="slide_image" />
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='textdiv' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ textAlign: 'left', margin: '1rem' }}>
          <h1 style={{ fontSize: '1.4rem', color: 'white' }}>Web3 Development</h1>
            <p>From casual mobile gaming to console adventure, we create all here.</p>
          </div>
           <img src={slide_image_7} alt="slide_image" />
          </div>
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
