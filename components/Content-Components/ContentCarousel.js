import React from 'react'
import ContentCard from './ContentCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { useSwiper } from 'swiper/react';

const ContentCarousel = ({data, smallScreen, bottom}) => {

  return (
        <Swiper
        slidesPerView={smallScreen ? 1.5 : (bottom ? 4 : 3)}
        spaceBetween={smallScreen ? 10 : 40}
        pagination={{
        clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper '
        >
            {data.map((el, index) => (
                <SwiperSlide key={index}  style={{backgroundColor: "transparent"}}> 
                    <ContentCard data={el} bottom = {bottom}/> 
                </SwiperSlide>
                )
              )
            }

        <div className='h-14'></div>
        </Swiper>
  )
}

export default ContentCarousel