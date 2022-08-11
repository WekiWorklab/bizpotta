import React from 'react'
import InstructorCard from './InstructorCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { useSwiper } from 'swiper/react';

const ProgramCarousel = ({data}) => {

    return (
        <Swiper
        slidesPerView={1.2}
        spaceBetween={0}
        pagination={{
        clickable: true,
        }}
        modules={[Pagination]}
        className='swiperClass'
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className='w-[260px] bg-[#5FFC54] h-[125px] relative rounded-lg flex items-center text-sm pl-5 mb-10  '>
                    VOCATIONAL EDUCATION
                    <svg viewBox="-30 48 140 140" xmlns="http://www.w3.org/2000/svg" >
                    <path fill="#FDBC64" d="M41,-35.9C47.5,-24.6,43.1,-7.9,41.7,13.9C40.2,35.7,41.6,62.6,28.8,74.2C16.1,85.9,-10.9,82.3,-33.7,70.9C-56.4,59.6,-74.9,40.4,-71.1,25.3C-67.3,10.1,-41.4,-1.1,-25.8,-14.4C-10.3,-27.7,-5.1,-43.2,6.1,-48C17.3,-52.9,34.6,-47.1,41,-35.9Z" transform="translate(100 100)" />
                    </svg>
                    {/* Use this svg as the blueprint for the rest in this programcarousel component and the content component for the main screen */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-[260px] bg-[#2ABB1A] h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10'>CERTIFICATE PROGRAM</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-[260px] bg-[#2ABB1A] h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10'>MASTER CLASS</div>
            </SwiperSlide>
        </Swiper>
      );
}

export default ProgramCarousel


/**
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FA4D56" d="M41,-35.9C47.5,-24.6,43.1,-7.9,41.7,13.9C40.2,35.7,41.6,62.6,28.8,74.2C16.1,85.9,-10.9,82.3,-33.7,70.9C-56.4,59.6,-74.9,40.4,-71.1,25.3C-67.3,10.1,-41.4,-1.1,-25.8,-14.4C-10.3,-27.7,-5.1,-43.2,6.1,-48C17.3,-52.9,34.6,-47.1,41,-35.9Z" transform="translate(100 100)" />
</svg>
*/