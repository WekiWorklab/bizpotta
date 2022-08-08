import React from 'react'
import ContentCard from './ContentCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { useSwiper } from 'swiper/react';

const ContentCarousel = ({data}) => {

  return (
        <Swiper
        slidesPerView={3}
        spaceBetween={40}
        pagination={{
        clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            {data.map((el) => (
                <SwiperSlide> 
                    <ContentCard key={data.indexOf(el)} data={el} /> 
                </SwiperSlide>
                )
              )
            }

        <div className='h-10'></div>
        </Swiper>
    
    
    // <div>
    //     <ContentCard />
    // </div>
  )
}

export default ContentCarousel