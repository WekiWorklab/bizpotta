import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
import { offer } from "../public";

export const StyleCarousel = ({ screen }) => {
  const arr = new Array(9).fill("");

  return (
    <Swiper
      slidesPerView={screen[0]}
      spaceBetween={screen[1]}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      style={{
        backgroundColor: "transparent",
        height: "520px",
        border: "none",
      }}
    >
      {arr.map((el, index) => (
        <SwiperSlide
          key={index}
          style={{
            backgroundColor: "transparent",
            height: "480px",
            border: "none",
            display: "flex",
            justifyContent: "start",
          }}
        >
          <div className="min-w-[330px]  max-w-[350px] max-h-[450px] min-h-[450px] relative">
            <div className="absolute top-3 w-[300px] h-[430px] border-2 border-darkBlue" />
            <div className="absolute top-0 left-3 w-[300px] h-[430px] border-2 border-bizpotta-green" />
            <div
              className="absolute top-5 left-5  w-[300px] h-[420px] bg-no-repeat bg-center bg-cover px-4 py-4 rounded-xl"
              style={{ backgroundImage: `url(${offer.src})` }}
            >
              <div className="w-[50px] h-[30px] text-[14px] bg-white rounded-sm centerFlex text-darkBlue ">
                New
              </div>
              <div className="flex flex-col justify-center items-center mt-[220px]">
                <p className="text-[22px] font-extrabold text-white mb-3">
                  Increase Sales in 30 Days
                </p>
                <div className="w-[70px] h-[4px] bg-white mb-2"></div>
                <p className="text-lg font-bold text-white mb-2">
                  Charles Mark
                </p>
                <div className="w-[120px] h-[35px] text-[14px] centerFlex bg-bizpotta-green rounded-md">
                  Set reminder
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
