import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { useSwiper } from 'swiper/react';
import CourseCard from './CourseCard';

const CourseCarousel = ({data, screen}) => {

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

  return (
        <Swiper
        slidesPerView={slidesPerView()}
        spaceBetween={spaceBtw()}
        pagination={{
        clickable: true,
        }}
        modules={[Pagination]}
        // style={{ backgroundColor: "#F9FAFB", marginLeft: "-10px"}, {(screen === "mobile") ? {backgroundColor: "white"} : {backgroundColor: "#F9FAFB"}}}
        style={screen === "mobile" ? {backgroundColor: "white", marginLeft: "-10px"} : {backgroundColor: "#F9FAFB", marginLeft: "-10px"} }
        >
          {/* style={{width:"325px", backgroundColor: "#F9FAFB",paddingLeft: "-16px"}} */}
            {data.map((el, index) => (
                <SwiperSlide key={index} style={screen==="mobile" ? {width:"325px", backgroundColor: "white",paddingLeft: "-16px"} : {width:"325px", backgroundColor: "#F9FAFB",paddingLeft: "-16px"}}> 
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