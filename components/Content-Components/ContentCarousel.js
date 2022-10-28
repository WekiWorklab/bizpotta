import React from "react";
import ContentCard from "./ContentCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { useSwiper } from "swiper/react";

const ContentCarousel = ({ data, type, screen }) => {
  return (
    <Swiper
      slidesPerView={screen[0]}
      spaceBetween={screen[1]}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper "
    >
      {data?.map((el, index) => (
        <SwiperSlide key={index} style={{display: "flex", justifyContent:"start", backgroundColor: "transparent" }}>
          <ContentCard data={el} type={type} />
        </SwiperSlide>
      ))}

      <div className="h-14"></div>
    </Swiper>
  );
};

export default ContentCarousel;
