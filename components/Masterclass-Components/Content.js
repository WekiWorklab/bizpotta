import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { offer } from '../../public';
import ProgramCarousel from '../CoursePage-Components/ProgramCarousel';
import ClassCards, { ClassCardsMobile } from '../ClassCards';
import { StyleCarousel } from '../StyleCarousel';
import MastersCourseCarousel from './MastersCourseCarousel';
import { Data } from '../CoursePage-Components/Data';

const Content = () => {
  return (
    <div className='relative w-full h-full bg-white flex flex-col pt-[90px] md:pt-[120px] md:translate-x-[200px] md:w-[calc(100%-200px)] pl-4 pb-10 '>
        
        <p className='text-sm text-darkBlue font-semibold  mt-10'>Live session</p>

        <RoundProfileCarousel />

        <div className='w-full bg-transparent mt-10 '>

            {/* Big screens */}
            <div className='hidden xl:flex xl:w-full '>
            <MastersCourseCarousel screen='big' data={Data} />
            </div>
            

            {/* Medium screens */}
            <div className='hidden lg:flex lg:w-full xl:hidden'>
            <MastersCourseCarousel screen='medium' data={Data} />
            </div>
            

            {/* Small screens */}

            <div className='hidden sm:flex sm:flex-nowrap sm:w-full lg:hidden'>
            <MastersCourseCarousel screen='small' data={Data} />
            </div>

            {/* Mobile */}

            <div className='flex w-full sm:hidden'>
            <MastersCourseCarousel screen='mobile' data={Data} />
            </div>

        </div>

        
        <div className='pt-6'>
            <p className=' hidden sm:block sm:font-[600] sm:mb-[20px]'>Welcome back Naomi, continue from where you stopped</p>
            <div className='mb-[20px]'>
                <p className='text-gray-400 text-[13px] mt-2'>Explore our various courses</p>
            </div>
            <div className='hidden md:block w-full'>
                <ClassCards />
            </div>
            <div className='w-[370px] ml-[-10px] md:hidden'>
                <ClassCardsMobile />  
            </div>
        </div>

        <p className='text-[14px] text-center lg:text-left lg:pl-4  mb-4 md:text-md font-semibold md:font-bold md:mb-8 mt-10'>Up-coming live session</p>
        <div className='block w-[360px] m-auto md:hidden w-full'>
            <StyleCarousel screen = {[1, 10]}/>
        </div>
        <div className='hidden m-auto md:block lg:hidden w-full'>
            <StyleCarousel screen = {[1.7, 10]}/>
        </div>
        <div className='hidden lg:block lg:w-full xl:w-[90%] '>
            <StyleCarousel screen = {[2.4, 10]}/>
        </div>


        <p className='text-[14px] text-center lg:text-left lg:pl-4  mb-4 md:text-md font-semibold md:font-bold md:mb-8 mt-10'>Top business acceleration program</p>
        <div className='block w-[360px] m-auto md:hidden w-full'>
            <StyleCarousel screen = {[1, 10]}/>
        </div>
        <div className='hidden m-auto md:block lg:hidden w-full'>
            <StyleCarousel screen = {[1.7, 10]}/>
        </div>
        <div className='hidden lg:block lg:w-full xl:w-[90%] '>
            <StyleCarousel screen = {[2.4, 10]}/>
        </div>


        <p className='text-[14px] text-center lg:text-left lg:pl-4  mb-4 md:text-md font-semibold md:font-bold md:mb-8 mt-10'>How to monetize your idea</p>
        <div className='block w-[360px] m-auto md:hidden w-full'>
            <StyleCarousel screen = {[1, 10]}/>
        </div>
        <div className='hidden m-auto md:block lg:hidden w-full'>
            <StyleCarousel screen = {[1.7, 10]}/>
        </div>
        <div className='hidden lg:block lg:w-full xl:w-[90%] '>
            <StyleCarousel screen = {[2.4, 10]}/>
        </div>


        <p className='text-[14px] text-center lg:text-left lg:pl-4  mb-4 md:text-md font-semibold md:font-bold md:mb-8 mt-10'>Business acceleration program</p>
        <div className='block w-[360px] m-auto md:hidden w-full'>
            <StyleCarousel screen = {[1, 10]}/>
        </div>
        <div className='hidden m-auto md:block lg:hidden w-full'>
            <StyleCarousel screen = {[1.7, 10]}/>
        </div>
        <div className='hidden lg:block lg:w-full xl:w-[90%] '>
            <StyleCarousel screen = {[2.4, 10]}/>
        </div>

    </div>
  )
}

export default Content








const RoundProfileCarousel = () => {
    const arr = new Array(20).fill("")

  return(
    <Swiper
    slidesPerView={12}
    spaceBetween={10}
    pagination={{
    clickable: true,
    }}
    modules={[Pagination]}
    style={{backgroundColor: "transparent",  height: "140px", border:"none"}}
    >

      {
        arr.map((el, index) => (
        <SwiperSlide key={index} style={{backgroundColor:"transparent", height: "100px", border:"none"}}>
            <div className='flex flex-col items-center gap-y-2  '>
              <div className='w-[71px] h-[71px]  bg-gradient-to-br rounded-full from-[#FF9A9A] to-[#0E9CC4] flex centerFlex'>
                <img src = {offer.src} alt = '' className='max-w-[66px] max-h-[66px] border border-white  rounded-full'/>
              </div>
              <div className='text-xs text-gray-500'>Johnny</div>
            </div>
        </SwiperSlide>
        ))
      }

    {/* <div className='h-[45px]'></div> */}

    </Swiper>
  )
}