import React from "react";

import { offer } from "../../../public";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";

export const ExpertsCarousel = ({screen}) => {
  const arr = new Array(9).fill("");

  return (
    <Swiper
      slidesPerView={screen[0]}
      spaceBetween={screen[1]}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      style={{ backgroundColor: "transparent"}}
    >
      {arr.map((el, index) => (
        <SwiperSlide
          key={index}
          style={{
            display: "flex",
            justifyContent: "start",
            backgroundColor: "transparent",
          }}
        >
          <div className="w-[350px] py-3 flex flex-row gap-x-4">
            <div
              className="bg-no-repeat bg-cover bg-center w-[50px] h-[50px] rounded-full"
              style={{ backgroundImage: `url(${offer.src})` }}
            />

            <div className=" w-[250px]">
              <p className="text-darkBlue font-bold">Bello Hassan M.sc</p>
              <p className="text-[14px] text-bizpotta-green">
                Product Designer
              </p>
              <p className="text-gray-500 text-[13px] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat mauris id malesuada commodo mattis.
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className="h-14"></div>
    </Swiper>
  );
};

export const MainCarousel = ({screen}) => {
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
        height: "540px",
        border: "none",
       
      }}
    >
      {arr.map((el, index) => (
        <SwiperSlide
          key={index}
          style={{
            display: "flex",
            justifyContent: "start",
            backgroundColor: "transparent",
            height: "530px",
            // border: "1px solid red",
          }}
        >
          <div className="min-w-[330px] max-w-[330px] sm:max-w-[350px] max-h-[450px] min-h-[450px] relative ">
            <div className="absolute top-3  w-[280px] sm:w-[300px] h-[430px] border-2 border-darkBlue" />
            <div className="absolute top-0 left-1 sm:left-3  w-[280px] sm:w-[300px] h-[430px] border-2 border-bizpotta-green" />
            <div
              className="absolute top-5 left-3 sm:left-5 w-[280px] sm:w-[300px] h-[420px] bg-no-repeat bg-center bg-cover px-4 py-4 rounded-xl flex flex-col justify-between"
              style={{ backgroundImage: `url(${offer.src})` }}
            >
              <div className="w-[50px] h-[30px] text-[14px] bg-white rounded-sm centerFlex text-darkBlue ">
                New
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-[20px] text-center sm:text-[22px] font-extrabold text-white mb-3">
                  Increase Sales in 30 Days
                </p>
                <div className="w-[70px] h-[4px] bg-white mb-2"></div>
                <p className="text-lg font-bold text-white mb-2">
                  Charles Mark
                </p>
                <div className="w-[120px] h-[35px] text-[14px] centerFlex bg-bizpotta-green rounded-md">
                  Get started
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const TestimonialCarousel = ({screen}) => {
  const arr = new Array(8).fill("");

  return (
    <Swiper
      slidesPerView={screen[0]}
      spaceBetween={screen[1]}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      style={{ backgroundColor: "transparent", height: "400px" }}
      className="swiper"
    >
      {arr.map((el, index) => (
        <SwiperSlide
          key={index}
          style={{ display: "flex",
          justifyContent: "start",
          backgroundColor: "transparent", 
          padding: "0px" }}
        >
          <div className=" w-[330px] md:w-[400px] h-[320px] relative  centerFlex ">
            <div className=" w-[330px] md:w-[380px] h-[250px] bg-white border rounded-md">
              <div className="flex flex-row gap-x-1 mt-16 ml-8 mr-2">
                <AiFillStar color="#94F236" size={18} />
                <AiFillStar color="#94F236" size={18} />
                <AiFillStar color="#94F236" size={18} />
                <AiFillStar color="#94F236" size={18} />
                <AiOutlineStar color="#94F236" size={18} />
              </div>
              <div className="mt-4 ml-8 mr-2 text-[14px] md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat mauris id malesuada commodo mattis.
              </div>
              <div className="w-full h-[2px] bg-[#EAEFF3] mt-2" />
              <div className="ml-8 mr-2 flex flex-row items-center gap-x-3 mt-2">
                {/* <img src={offer.src} alt='' className='w-[40px] h-[40px] rounded-full '/> */}
                <div
                  className="w-[40px] h-[40px] bg-cover bg-no-repeat bg-center rounded-full"
                  style={{ backgroundImage: `url(${offer.src})` }}
                ></div>
                <div className="text-[13px] ">
                  <p className="font-bold">Serhiy Hipskyy</p>
                  <p className="text-[12px]">CEO Universal</p>
                </div>
              </div>
            </div>
            <div className="w-[50px] h-[50px] centerFlex absolute top-3 left-14 bg-darkBlue z-10 rounded-full">
              <FaQuoteLeft color="white" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const TestimonialCard = () => {
  return (
    <div className="w-[400px] h-[320px] relative redBorder centerFlex ">
      <div className="w-[350px] h-[240px] bg-white redBorder">
        <div className="flex flex-row gap-x-1 mt-16 ml-8 mr-2">
          <AiFillStar color="#94F236" size={18} />
          <AiFillStar color="#94F236" size={18} />
          <AiFillStar color="#94F236" size={18} />
          <AiFillStar color="#94F236" size={18} />
          <AiOutlineStar color="#94F236" size={18} />
        </div>
        <div className="mt-4 ml-8 mr-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mauris id malesuada commodo mattis.
        </div>
        <div className="w-full h-[2px] bg-[#EAEFF3] mt-2" />
        <div className="ml-8 mr-2 flex flex-row items-center gap-x-3 mt-2">
          <img
            src={offer.src}
            alt=""
            className="w-[40px] h-[40px] rounded-full "
          />
          <div className="text-[13px] ">
            <p className="font-bold">Serhiy Hipskyy</p>
            <p className="text-[12px]">CEO Universal</p>
          </div>
        </div>
      </div>
      <div className="w-[50px] h-[50px] centerFlex absolute top-3 left-14 bg-darkBlue z-10  redBorder rounded-full">
        <FaQuoteLeft color="white" />
      </div>
    </div>
  );
};

