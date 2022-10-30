import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useSwiper } from "swiper/react";
import { BsStarFill } from "react-icons/bs";

import { instructorData } from "./Data";




export const InstructorSection = () => {


  return(
    <div className="pt-[50px] flex flex-col">
        <p className="text-[14px] text-start mb-4 md:text-md font-semibold md:font-bold md:mb-8  ">
          Instructors
        </p>
        <div className="block w-full sm:w-[400px] md:hidden w-full">
          <InstructorCarousel
            data={instructorData}
            screen={[1.5, 10]}
            type="instructor"
          />
        </div>
        <div className="hidden md:block lg:hidden w-full">
          <InstructorCarousel
            data={instructorData}
            screen={[2, 20]}
            type="instructor"
          />
        </div>
        <div className="hidden lg:block w-full">
          <InstructorCarousel
            data={instructorData}
            screen={[4, 30]}
            type="instructor"
          />
        </div>
      </div>
  )
}








const InstructorCarousel = ({ data, screen }) => {
  return (
    <Swiper
      slidesPerView={screen[0]}
      spaceBetween={screen[1]}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {data.map((el, index) => (
        <SwiperSlide key={index} style={{display: "flex", justifyContent:"start", backgroundColor: "transparent" }}>
          <InstructorCard data={el} />
        </SwiperSlide>
      ))}

      <div className="h-[55px]"></div>
    </Swiper>
  );
};

export default InstructorCarousel;



const InstructorCard = ({data}) => {
  const imageSrc = 'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  

return (
 
  <div className='w-[220px] h-[220px] rounded-md bg-no-repeat bg-cover bg-center pt-[80px]' style={{backgroundImage: `url(${imageSrc})`}}>
      <div className='clip-card-path2 bg-[#333333] text-[white]  h-full flex flex-col justify-end px-2 pb-2 rounded-b-md'>
          <div className='text-[13px] mt-[3px] xl:text-[14px]  box-overflow'>{data.name}</div>

          <div className='flex flex-row justify-between'>
              <div className='flex flex-col  max-w-[60%]'>
                  <p className='text-[11px] box-overflow'>{data.title}</p>
                  <p className='text-[10px] mt-[2px]'>{data.courseNo} courses</p>
              </div>

              <div className='flex flex-col'>
              <div className='flex flex-row mt-[3px] xl:mt-[3px] md:mt-[3px]'>
                  <BsStarFill size={14} color='#FFC700'/>
                  <BsStarFill size={14} color='#FFC700'/>
                  <BsStarFill size={14} color='#FFC700'/>
                  <BsStarFill size={14} color='#FFC700'/>
                  <BsStarFill size={14} color='#FFC700'/>
              </div>
              <p className='text-[10px] mt-[3px]'>{data.studentNo} students</p>
              </div>
          </div>
      </div>
  </div>
)
}
