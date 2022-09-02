import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { useSwiper } from 'swiper/react';
import { Router, useRouter } from 'next/router';

const ResourcesCarousel = ({data, screen}) => {

  const router = useRouter()

  const [paginate, setPaginate] = useState(1)

 

  return (
        <Swiper
        slidesPerView={1.5}
        spaceBetween={1}
        pagination={{
        clickable: true,
        type: "custom"
        }}
        modules={[Pagination]}
        style={{backgroundColor: "white", }}
        >
            
                <SwiperSlide  style={{width:"325px", backgroundColor: "white",paddingLeft: "-16px", cursor: "pointer"}} > 
                <div className={`text-[14px] flex flex-row items-center w-[250px] text-[18px] font-[600] ${paginate === 1 ? "border-b-2" : ""} border-darkBlue h-[40px]  justify-center`} onClick={() => setPaginate(1)}>
                    <p className=''>Introduction to Human Management</p>
                </div>
                </SwiperSlide> 
                <SwiperSlide  style={{width:"325px", backgroundColor: "white",paddingLeft: "-16px", cursor: "pointer"}} > 
                <div className={`text-[14px] flex flex-row items-center w-[250px] text-[18px] font-[600] ${paginate === 2 ? "border-b-2" : ""} border-darkBlue h-[40px]  justify-center`} onClick={() => setPaginate(2)}>
                    <p className=''>Introduction to Human Management</p>
                </div>
                </SwiperSlide> 
                <SwiperSlide  style={{width:"325px", backgroundColor: "white",paddingLeft: "-16px", cursor: "pointer"}} > 
                <div className={`text-[14px] flex flex-row items-center w-[250px] text-[18px] font-[600] ${paginate === 3 ? "border-b-2" : ""} border-darkBlue h-[40px]  justify-center`} onClick={() => setPaginate(3)}>
                    <p className=''>Introduction to Human Management</p>
                </div>
                </SwiperSlide> 
                
        </Swiper>
  )
}

export default ResourcesCarousel