import React, { useEffect, useRef } from 'react'


import {  offer, PinkRing } from '../../../public'
import {MainCarousel, TestimonialCard, TestimonialCarousel,  } from './MainCarousel'

import {HiOutlineArrowLongRight} from 'react-icons/hi'
import {BsArrowRight, BsDashLg} from 'react-icons/bs'
import { useState } from 'react'

const SecondSection = () => {


  return (
    <div className='w-full  bg-gradient-to-b from-[#E5E5E5] to-[#E5E5E5] pb-20'>
        <p className='text-lg font-bold px-24'>Up-coming</p>
        <div className='w-full px-24'>
          <MainCarousel />
        </div>

        <div className='w-full  bg-[#F6FFE9] relative flex flex-col items-center mt-10 py-20 gap-y-4 middle-path'>
            <div className='text-[20px] font-bold'>Expand your skillset, gain insights, and get support from world class mentors </div>
            <p className='text-[15px] text-[#909090]'>Choose a category that interest you</p>
            <div className='w-[190px] h-[55px] centerFlex bg-darkBlue rounded-md text-white'>Discover</div>
            <div></div>
            <div className='absolute top-[30px] left-[50px]'>
              <DotComp />
            </div>
            <div className='absolute top-[30px] right-[50px]'>
              <DotComp />
            </div>
            <div className='absolute top-[20px] right-[250px]'>
              <PinkRing />
            </div>
        </div>


        <p className='text-lg font-bold mt-14 px-24'>Based on your recent activities</p>
        <div className='w-full px-24 '>
          <MainCarousel />
        </div>


        <div className='w-full  bg-[#F6FFE9] relative flex flex-col items-center mt-10 py-10 gap-y-4 middle-path'>
            <div className='flex flex-row justify-center gap-x-6 items-center'>
              <div className='flex flex-col z-10'>
                <div className='text-[20px] font-bold'>Expand your skillset, gain insights, and get support from world class mentors </div>
                <p className='text-[15px] text-[#909090]'>Choose a category that interest you</p>
              </div>

              <img src={offer.src} alt='' className='w-[250px] h-[340px] rounded-md z-10 '/>

            </div>

            <div className='absolute top-[100px] left-[50px]'>
              <DotComp />
            </div>
            <div className='absolute top-[100px] right-[50px]'>
              <DotComp />
            </div>
            <div className='absolute top-[100px] right-[30%]'>
              <PinkRing />
            </div>
        </div>


        <p className='text-lg font-bold mt-14 px-24'>Trending sessions</p>
        <div className='w-full px-24 '>
          <MainCarousel />
        </div>


        <div className='w-full text-darkBlue redBorder py-20'>
            <div className=' bg-[#F6FFE9] h-[150px] centerFlex gap-x-4 font-bold'>
              <p className=''>Get access to 150+ classes accross 11 categories</p>
              <p className=''>$20 bill annually</p>
              <div className='bg-darkBlue centerFlex text-white w-[120px] h-[34px] text-[13px] rounded-md font-semibold'> Get started </div>
            </div>

            <div className='w-full px-24 py-24'>
              <div className='text-3xl font-bold'>What our learners have to say</div>              
              <div className='w-full'>  
                <TestimonialCarousel />
              </div>
            </div>

            <div className=' bg-[#F6FFE9] h-[100px] flex justify-end items-center px-32'>
              <div className='bg-darkBlue centerFlex text-white w-[120px] h-[34px] text-[13px] rounded-md font-semibold'> View plans </div>
            </div>

            <div className='w-full px-24 py-20 flex flex-row items-center justify'>
              <div>
                  <p className='text-[30px] font-bold'>Any questions ?</p>
                  <p className='text-[30px] font-bold'>We got you</p>
                  <p className='text-[14px] mt-10'>Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>

                  <div className='flex flex-row items-center gap-x-4 mt-8 text-blue-500'>
                    <p>More FAQs</p>
                    <BsArrowRight  />
                  </div>
              </div>

              <div className='min-w-[600px] '>
                  <QuestionDropdown   title = 'How this work?' />
                  <QuestionDropdown   title = 'How this work?' />
                  <QuestionDropdown   title = 'How this work?' />
                  <QuestionDropdown   title = 'How this work?' />

              </div>

            </div>

        </div>


        

    </div>
  )
}

export default SecondSection









const QuestionDropdown = ({title}) => {

  const childRef = useRef({})
  const parentRef = useRef({})
  const [show, setShow] = useState(false)
  const [height, setHeight] = useState(0)


  const ClickHandler = () => {
    if (!show) {
      setHeight(parentRef.current?.firstChild.offsetHeight)
    }
    else if (show) {
      setHeight(0)
    } 
    setShow((prev) => (!prev))
  }

  return(
    <div className='w-full pb-4 border-b-2 border-gray-700 mt-4 '>
      <div className='flex flex-row items-center justify-between darkBlue mb-4'>
        <p className='font-bold'>{title}</p>
        <BsDashLg onClick={ClickHandler}/>
      </div>

      <div className=' overflow-y-hidden parent-drop' style={{height: `${height}px` }} ref={parentRef}>
        <div className={`${(show ? "show-drop": "no-drop")}`} ref={childRef}>
          Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment come and go health yesterday morning inclusion.
        </div>
      </div>

    </div>
  )
}






const DotComp = () => {
const arr = new Array(35).fill('')
  return (
    <div className='grid grid-cols-5 gap-9'>
        {
          arr.map((el, index) => (
            <div key = {index} className='w-[5px] h-[5px] rounded-full bg-[#FDBC64]' />
          ))
        }
    </div>
  )
}