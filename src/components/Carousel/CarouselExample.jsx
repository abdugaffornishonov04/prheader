// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src="/hero-carousel-img-2.png" alt="" />  
        </SwiperSlide>
        <SwiperSlide>
        <img src="/public/hero-carousel-img-2.png" alt="" />  
        </SwiperSlide>
        <SwiperSlide>
        <img src="/public/hero-carousel-img-2.png" alt="" /> 
        </SwiperSlide>
        <SwiperSlide>
        <img src="/public/hero-carousel-img-2.png" alt="" />  
        </SwiperSlide>
      </Swiper>
    </>
  );
}
