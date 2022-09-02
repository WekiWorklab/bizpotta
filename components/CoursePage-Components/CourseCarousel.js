import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { useSwiper } from 'swiper/react';
import CourseCard from './CourseCard';
import { Router, useRouter } from 'next/router';

const CourseCarousel = ({data, screen}) => {

  const router = useRouter()

  const slidesPerView = () => {
    if (screen === 'big'){
      return 3.2
    }
    else if (screen === 'medium'){
      return 2.4
    }

    else if (screen === 'small'){
      return 1.6
    }

    else if (screen === 'mobile'){
      return 1
    }
  }

  const spaceBtw = () => {
    if (screen === 'big'){
      return 30
    }
    else if (screen === 'medium'){
      return 10
    }

    else if (screen === 'small'){
      return 5
    }

    else if (screen === 'mobile'){
      return 2
    }
  }

  const handleClick = () => {
   router.push("/students/courses/course")
  }

  return (
        <Swiper
        slidesPerView={slidesPerView()}
        spaceBetween={spaceBtw()}
        pagination={{
        clickable: true,
        }}
        modules={[Pagination]}
        style={screen === "mobile" ? {backgroundColor: "white", marginLeft: "-10px"} : {backgroundColor: "#F9FAFB", marginLeft: "-10px"} }
        >
            {data.map((el, index) => (
                <SwiperSlide key={index} style={screen==="mobile" ? {width:"325px", backgroundColor: "white",paddingLeft: "-16px", cursor: "pointer"} : {width:"325px", backgroundColor: "#F9FAFB",paddingLeft: "-16px", cursor: "pointer"}} onClick = {() => handleClick()}> 
                    <CourseCard data = {el} length={data.length}/>
                </SwiperSlide> 
                )
              )
            }

        <div className='h-[45px]'></div>
        </Swiper>
  )
}

export default CourseCarousel