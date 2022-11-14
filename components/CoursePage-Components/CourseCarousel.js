import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { useSwiper } from "swiper/react";
import CourseCard from "./CourseCard";
import { Router, useRouter } from "next/router";

const CourseCarousel = ({ data, screen, type }) => {
  const router = useRouter();

  const slidesPerView = () => {
    if (screen === "big") {
      return 2.5;
    } else if (screen === "medium") {
      return 2.4;
    } else if (screen === "small") {
      return 1.6;
    } else if (screen === "mobile") {
      return 1.2;
    }
  };

  const spaceBtw = () => {
    if (screen === "big") {
      return 10;
    } else if (screen === "medium") {
      return 10;
    } else if (screen === "small") {
      return 10;
    } else if (screen === "mobile") {
      return 10;
    }
  };


  console.log(data)

  return (
    <Swiper
      slidesPerView={slidesPerView()}
      spaceBetween={spaceBtw()}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Scrollbar]}
      style={{ backgroundColor: "transparent" }}
    >
      {data?.map((el, index) => (
        <SwiperSlide
          key={index}
          style={{
            minWidth: "325px",
            maxWidth: "325px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "start",
            backgroundColor: "transparent",
          }}
          className=" "
          
        >
          <CourseCard data={el} length = {data.length} ID = {index + 1} />
        </SwiperSlide>
      ))}

      <div className="h-[45px] "></div>
    </Swiper>
  );
};

export default CourseCarousel;


