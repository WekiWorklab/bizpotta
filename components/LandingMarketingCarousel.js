import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import {RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

import { useSwiper } from 'swiper/react';

const LandingMarketingCarousel = () => {
    const data = [
        {
            imageUrl:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            bio: "Hi, I am Tolu Oluyemi, I am a Project Management  with over 15+ years of experience. I have helped over 5,000 student get started in tech.",
          },
          {
            imageUrl:
              "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
            bio: "Hi, I am Tolu Ghena, I am a Project Management  with over 15+ years of experience. I have helped over 5,000 student get started in tech.",
          },
          {
            imageUrl:
              "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
            bio: "Hi, I am Tolu Ghena, I am a Project Management  with over 15+ years of experience. I have helped over 5,000 student get started in tech.",
          },
          {
            imageUrl:
              "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
            bio: "Hi, I am Tolu Ghena, I am a Project Management  with over 15+ years of experience. I have helped over 5,000 student get started in tech.",
          },
          {
            imageUrl:
              "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
            bio: "Hi, I am Tolu Ghena, I am a Project Management  with over 15+ years of experience. I have helped over 5,000 student get started in tech.",
          },
    ]
     

  return (
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
        clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className='mySwiper'
        > 
            {data.map((el, index) => (
                <SwiperSlide key={index}> 
                     <MarketingCard el = {el}/>
                </SwiperSlide>
                )
              )
            }

        <div className='h-10'></div>
        </Swiper>
  )
}

export default LandingMarketingCarousel


export const MarketingCard = ({el:{imageUrl, bio}}) => {
    return (
        <div className='♠ h-[250px] flex flex-row items-center gap-x-3 bg-gray-50 px-2' >
            <div className='min-w-[180px] h-[170px] bg-no-repeat bg-cover bg-center rounded-md' style={{backgroundImage:`url(${imageUrl})`}}>

            </div>
            <div className='text-[12px] flex flex-col'>
                <div className=' flex flex-row justify-start'>
                    <RiDoubleQuotesL />
                </div>
                    <p>{bio}</p>
                <div className=' flex flex-row justify-end pr-4'>
                    <RiDoubleQuotesR />
                </div>
                
            </div>
        </div>
    )
}