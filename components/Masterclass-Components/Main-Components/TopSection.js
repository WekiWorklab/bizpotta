import React from "react";

import Header from "./Header";
import {
  CurvyUnderline,
  DownCurvyArrow,
  LeftEllipse,
  offer,
  RightEllipse,
  UpCurvyArrow,
} from "../../../public";

import { BiSearchAlt } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { AiOutlineDown } from "react-icons/ai";
import Navbars from "../../Navbars";

const TopSection = () => {
  return (
    <div className="w-full rad-gradient pb-10">
      <Header />
      {/* <Navbars /> */}
      <div className="px-3 sm:px-10 xl:px-24">
        <div className="mt-10">
          <p className="text-darkBlue font-semibold">Master Program</p>
          <CurvyUnderline />
        </div>
        <p className="text-sm text-darkBlue font-semibold mt-10 mb-8">
          Live session
        </p>
        <CircularProfileCarousel />

        <div className="w-full flex flex-col items-center justify-center gap-y-6 relative h-[630px]">
          <div className="w-full md:px-14 xl:px-[190px] flex flex-col items-center justify-center gap-y-6 ">
            <p className="font-bold text-lg md:text-xl xl:text-3xl uppercase text-center">
              Meet and connect with world best business expert
            </p>
            <p className="text-sm md:text-lg xl:text-xl text-center ">
              Learn, grow, and connect with established entrepreneurs with
              results to show in their business journey
            </p>
            {/* <div className='w-[190px] h-[55px] mt-4 centerFlex rounded-md bg-darkBlue text-white'>
                    Watch Triller
                </div> */}
            <div className="w-full md:w-[470px] h-[50px] pl-4 flex justify-end items-center gap-x-2 border border-[#b1adad] rounded-md">
              <BiSearchAlt size={20} color="#b1adad" />
              <input
                className="w-[35%] outline-none bg-transparent"
                placeholder="Search by name, role, or company"
              />
              <div className="w-[30%] flex items-center justify-center gap-x-1 text-darkBlue border-l-2 border-[#b1adad]">
                <p className="font-bold ">Expertise</p>
                <AiOutlineDown />
              </div>
              <div className="centerFlex text-white bg-darkBlue h-full w-[30%] rounded-r-md">
                Search
              </div>
            </div>
          </div>

          <div className="absolute top-[25px] left-[50%] ">
            <UpCurvyArrow />
          </div>
          <div className="absolute top-[70%] left-[44%] ">
            <DownCurvyArrow />
          </div>
          <div className="absolute top-[120px] right-[2px] ">
            <RightEllipse />
          </div>
          <div className="absolute top-[120px] left-[2px] ">
            <LeftEllipse />
          </div>
          <div className="absolute top-[130px] left-[90px] w-[80px] h-[80px] rounded-full bg-[#94F236] opacity-40" />
          <div className="absolute top-[380px] left-[90px] w-[40px] h-[40px] rounded-full bg-[#FF65D4] opacity-40" />
          <div className="absolute top-[400px] left-[200px] w-[60px] h-[60px] rounded-full bg-[#6ECDFF] opacity-40" />
        </div>
      </div>
    </div>
  );
};

export default TopSection;

const CircularProfileCarousel = () => {
  const arr = new Array(20).fill("");

  return (
    <Swiper
      slidesPerView={12}
      spaceBetween={10}
      // pagination={{
      //   clickable: true,
      // }}
      // modules={[Pagination, Scrollbar]}
      modules={[Scrollbar]}
      style={{
        backgroundColor: "transparent",
        height: "140px",
        border: "none",
      }}
    >
      {arr.map((el, index) => (
        <SwiperSlide
          key={index}
          style={{
            backgroundColor: "transparent",
            height: "100px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            justifyContent: "start",
            backgroundColor: "transparent",
          }}
        >
          <div className="flex flex-col items-center gap-y-2  ">
            <div className="w-[71px] h-[71px]  bg-gradient-to-br rounded-full from-[#FF9A9A] to-[#0E9CC4] flex centerFlex">
              <img
                src={offer.src}
                alt=""
                className="max-w-[66px] max-h-[66px] border border-white  rounded-full"
              />
            </div>
            <div className="text-xs text-gray-500">Johnny</div>
          </div>
        </SwiperSlide>
      ))}

      {/* <div className='h-[45px]'></div> */}
    </Swiper>
  );
};
