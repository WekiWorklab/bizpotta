import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { useSwiper } from 'swiper/react';
import { Router, useRouter } from 'next/router';

const MastersCourseCarousel = ({data, screen}) => {

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
//    router.push("/students/courses/course")
  }

  return (
        <Swiper
        slidesPerView={slidesPerView()}
        spaceBetween={spaceBtw()}
        pagination={{
        clickable: true,
        }}
        modules={[Pagination]}
        style={screen === "mobile" ? {backgroundColor: "white", marginLeft: "-10px", paddingTop: "10px"} : {backgroundColor: "transparent", marginLeft: "-10px", paddingTop: "15px"} }
        >
            {data.map((el, index) => (
                <SwiperSlide key={index} style={screen==="mobile" ? {width:"325px", backgroundColor: "white",paddingLeft: "-16px", cursor: "pointer"} : {width:"325px", backgroundColor: "transparent",paddingLeft: "-16px", cursor: "pointer"}} onClick = {() => handleClick()}> 
                    <CourseCard data = {el} length={data.length}/>
                </SwiperSlide> 
                )
              )
            }

        <div className='h-[45px]'></div>
        </Swiper>
  )
}

export default MastersCourseCarousel














const CourseCard = ({data: {title, name, ID, time:{total, completed}}, length}) => {

    const imageSrc = 'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

    // const time = {total: 100, completed: 60}

  return (
    <div className='border sm:border-0 min-w-[325px] h-[185px] rounded-md bg-white relative flex flex-col pl-4 pr-2 pt-4 box-overflow masters-card'>
        <p className='absolute top-[5px] right-[10px] text-[11px]'>Lesson {ID} out of {length}</p>
        <div className='w-[100px] h-[55px]'>
          <img src={imageSrc} alt = '' className='w-full h-full object-cover rounded-md'/>  
        </div>
        
        <p className='mt-4 text-[15px] box-overflow'>{title}</p>
        <p className='text-[12px] mt-1 box-overflow'>{name}</p>
        <div className='flex flex-row items-center justify-between mt-3'>
            <ProgressBar time={{completed, total}}/>
            <span className='text-xs'>{total-completed} mins left</span>
        </div>
        
    </div>
  )
}


const ProgressBar = ({time:{total, completed}}) => {
    
    

    return (
      <div className='w-[225px] h-[10px] bg-[#C4C4C4] rounded-[10px]'>
          <div className='h-full bg-[green] rounded-[10px]' style={{width: `${(completed/total) * 100}%`}}></div>
      </div>
    )
  }