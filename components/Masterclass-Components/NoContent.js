import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { offer } from "../../public";
import ProgramCarousel from "../CoursePage-Components/ProgramCarousel";
import ClassCards, { ClassCardsMobile } from "../ClassCards";
import { MasterclassCourseSection, StyleCarousel } from "../StyleCarousel";
import ContentCarousel, { ContentCardSection } from "../Content-Components/ContentCarousel";
import { Data as data } from "../Content-Components/Data";

const NoContent = () => {
  return (
    <div className="relative w-full h-full bg-white flex flex-col pt-[90px] md:pt-[120px] md:translate-x-[200px] md:w-[calc(100%-200px)] px-2 pb-10 ">
      <p className="text-sm text-darkBlue font-semibold  mt-10">Live session</p>

      <div className="hidden xl:flex xl:w-full ">
        <RoundProfileCarousel screen={[12, 2]} />
      </div>
      <div className="hidden lg:flex lg:w-full xl:hidden">
        <RoundProfileCarousel screen={[8, 4]} />
      </div>
      <div className="hidden sm:flex sm:flex-nowrap sm:w-full lg:hidden">
        <RoundProfileCarousel screen={[6, 4]} />
      </div>
      <div className="flex w-full sm:hidden">
        <RoundProfileCarousel screen={[4, 4]} />
      </div>

      <div className="pt-6 mx-auto md:mx-0">
        <p className=" font-semi-bold sm:font-bold sm:mb-[20px]">
          Hi Naomi, you are currently not enrolled at the moment
        </p>
        <div className="mb-[20px]">
          <p className="text-gray-400 text-[13px] mt-2">
            Explore our various courses
          </p>
        </div>
        <div className="w-full">
          <ClassCards />
        </div>
        <div className="w-[370px] md:hidden">
          <ClassCardsMobile />
        </div>
      </div>

      <div className="mt-9">
        <MasterclassCourseSection contentTitle = 'Up-coming live session' />
      </div>

      <div className="mt-9">
        <MasterclassCourseSection contentTitle = 'Top business acceleration program' />
      </div>

      <div className="w-full mt-[50px]">
        <ContentCardSection data = {data} courseType = "masterclass" contentTitle="Take your business to the next level by exploring any of this course" />
      </div>

      <div className="w-full mt-[50px]">
        <ContentCardSection data = {data} courseType = "masterclass" contentTitle="Take your business to the next level by exploring any of this course" />
      </div>

      <div className="w-full mt-[50px]">
        <ContentCardSection data = {data} courseType = "masterclass" contentTitle="Take your business to the next level by exploring any of this course" />
      </div>
    </div>
  );
};

export default NoContent;




const RoundProfileCarousel = ({ screen }) => {
  const arr = new Array(20).fill("");

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
          }}
        >
          <div className="flex flex-col items-center gap-y-2  ">
            <div className="w-[71px] h-[71px]  bg-gradient-to-br rounded-full from-[#FF9A9A] to-[#0E9CC4] flex centerFlex">
              <img
                src={offer.src}
                alt=""
                className="max-w-[66px] max-h-[66px] border border-white rounded-full"
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
