import React from 'react'
import ContentCarousel from './ContentCarousel'
import InstructorCarousel from './InstructorCarousel'
import { Data, instructorData } from './Data'
import { card_image } from '../../public'

const BottomSection = () => {


   

  return (
    <div className='pl-0 lg:pl-5 flex flex-col xl:flex-row  w-full'>
                <div className='bg-white w-full m-auto  '>
                    
                <div className='pt-[50px] flex flex-col bg-white'>
                        <p className="text-[14px] text-center lg:text-left lg:pl-4  mb-4 md:text-md font-semibold md:font-bold md:mb-8  ">Popular Courses</p>
                        <div className='block w-[360px] m-auto md:hidden w-full'>
                            <ContentCarousel data = {Data} screen = {[1.5, 10]} />
                        </div>
                        <div className='hidden m-auto md:block lg:hidden w-full'>
                            <ContentCarousel data = {Data} screen = {[2, 20]} />
                        </div>
                        <div className='hidden lg:block w-full'>
                            <ContentCarousel data = {Data} screen = {[4, 30]} />
                        </div> 
                    </div>
                    <div className='pt-[50px] flex flex-col bg-white'>
                        <p className="text-[14px] text-center lg:text-left lg:pl-4  mb-4 md:text-md font-semibold md:font-bold md:mb-8  ">Trending Courses</p>
                        <div className='block w-[360px] m-auto md:hidden w-full'>
                            <ContentCarousel data = {Data} screen = {[1.5, 10]} />
                        </div>
                        <div className='hidden m-auto md:block lg:hidden w-full'>
                            <ContentCarousel data = {Data} screen = {[2, 20]} />
                        </div>
                        <div className='hidden lg:block w-full'>
                            <ContentCarousel data = {Data} screen = {[4, 30]} />
                        </div> 
                    </div>
                    <div className='pt-[50px] flex flex-col'>
                        <p className="text-[14px] text-center lg:text-left lg:pl-4  mb-4 md:text-md font-semibold md:font-bold md:mb-8">Instructors</p>
                        <div className='block w-[360px] m-auto md:hidden w-full'>
                            <InstructorCarousel data = {instructorData} screen = {[1.5, 10]} />
                        </div>
                        <div className='hidden m-auto md:block lg:hidden w-full'>
                            <InstructorCarousel data = {instructorData} screen = {[2, 20]} />
                        </div>
                        <div className='hidden lg:block w-full'>
                            <InstructorCarousel data = {instructorData} screen = {[4, 30]} />
                        </div>  
                    </div> 
                </div>


                

            </div>
  )
}

export default BottomSection

