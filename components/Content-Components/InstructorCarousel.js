import React from 'react'
import InstructorCard from './InstructorCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { useSwiper } from 'swiper/react';

const InstructorCarousel = ({data, screen}) => {

  return (
        <Swiper
        slidesPerView={screen[0]}
        spaceBetween={screen[1]}
        pagination={{
        clickable: true,
        }}
        modules={[Pagination]}
        // className='mySwiper'
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            {data.map((el, index) => (
                <SwiperSlide key={index} style={{backgroundColor: "transparent"}}> 
                    <InstructorCard data = {el}/>
                </SwiperSlide>
                )
              )
            }

        <div className='h-[55px]'></div>
        </Swiper>
  )
}

export default InstructorCarousel