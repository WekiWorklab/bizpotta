import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

// import required modules
import { Pagination, Navigation } from "swiper";
import Card from "./Card";

export default function HomePageSlider() {
  return (
    <>
      <Swiper slidesPerView={3} spaceBetween={0} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} navigation={true} className='mySwiper'>
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
    </>
  );
}
