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
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className='w-[260px] bg-[#5FFC54] h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10 '>VOCATIONAL EDUCATION</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-[260px] bg-[#2ABB1A] h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10  '>CERTIFICATE PROGRAM</div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-[260px] bg-[#2ABB1A] h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10'>MASTER CLASS</div>
            </SwiperSlide>
        </Swiper>
      );
}

export default ProgramCarousel