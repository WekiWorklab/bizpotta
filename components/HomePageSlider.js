import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Card from "./Card";

export default function HomePageSlider() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Card clip={true} />
      </SwiperSlide>
      <SwiperSlide>
        <Card clip={true} />
      </SwiperSlide>
      <SwiperSlide>
        <Card clip={true} />
      </SwiperSlide>
      <SwiperSlide>
        <Card clip={true} />
      </SwiperSlide>
    </Swiper>
  );
}
