import React from 'react'
import BrowseCourse from './BrowseCourse'
import { Data, instructorData } from '../Content-Components/Data'
import ContentCarousel from '../Content-Components/ContentCarousel'
import InstructorCarousel from '../Content-Components/InstructorCarousel'

const MiddleSection = () => {
  return (
    // <div>
        <div className='bg-transparent w-full xl:w-full lg:mx-auto lg:mx-0'>
            
            <div className='pt-[50px] flex flex-col '>
                <p className="text-[14px] text-center lg:text-left lg:pl-4  mb-4 md:text-md font-semibold md:font-bold md:mb-8  ">Browse course based on your recent activities</p>
                <div className='block w-[360px] m-auto md:hidden w-full'>
                    <ContentCarousel data = {Data} screen = {[1.5, 10]} type = 'vocational'/>
                </div>
                <div className='hidden m-auto md:block lg:hidden w-full'>
                    <ContentCarousel data = {Data} screen = {[2, 20]} type = 'vocational'/>
                </div>
                <div className='hidden lg:block w-full'>
                    <ContentCarousel data = {Data} screen = {[4, 30]} type = 'vocational'/>
                </div> 
            </div>
            <div className='pt-[50px] flex flex-col '>
                <p className="text-[14px] text-center lg:text-left lg:pl-4  mb-4 md:text-md font-semibold md:font-bold md:mb-8  ">Popular courses on vocational programs</p>
                <div className='block w-[360px] m-auto md:hidden w-full'>
                    <ContentCarousel data = {Data} screen = {[1.5, 10]} type = 'vocational'/>
                </div>
                <div className='hidden m-auto md:block lg:hidden w-full'>
                    <ContentCarousel data = {Data} screen = {[2, 20]} type = 'vocational'/>
                </div>
                <div className='hidden lg:block w-full'>
                    <ContentCarousel data = {Data} screen = {[4, 30]} type = 'vocational'/>
                </div> 
            </div>
            <div className='pt-[50px] flex flex-col'>
                <p className="text-[14px] text-center lg:text-left lg:pl-4  mb-4 md:text-md font-semibold md:font-bold md:mb-8  ">Based on your recent activites</p>
                <div className='block w-[360px] m-auto md:hidden w-full'>
                    <ContentCarousel data = {Data} screen = {[1.5, 10]} type = 'vocational'/>
                </div>
                <div className='hidden m-auto md:block lg:hidden w-full'>
                    <ContentCarousel data = {Data} screen = {[2, 20]} type = 'vocational'/>
                </div>
                <div className='hidden lg:block w-full'>
                    <ContentCarousel data = {Data} screen = {[4, 30]} type = 'vocational'/>
                </div> 
            </div>
            <div className='pt-[50px] flex flex-col '>
                <p className="text-[14px] text-center lg:text-left lg:pl-4  mb-4 md:text-md font-semibold md:font-bold md:mb-8 ">Trending courses</p>
                <div className='block w-[360px] m-auto md:hidden w-full'>
                    <ContentCarousel data = {Data} screen = {[1.5, 10]} type = 'vocational'/>
                </div>
                <div className='hidden m-auto md:block lg:hidden w-full'>
                    <ContentCarousel data = {Data} screen = {[2, 20]} type = 'vocational'/>
                </div>
                <div className='hidden lg:block w-full'>
                    <ContentCarousel data = {Data} screen = {[4, 30]} type = 'vocational'/>
                </div> 
            </div>


            <div className='pt-[50px] flex flex-col'>
                <p className="text-[14px] text-center lg:text-left lg:pl-4 mb-4 md:text-md font-semibold md:font-bold md:mb-8">Instructors</p>
                <div className='block w-[360px] m-auto md:hidden w-full'>
                    <InstructorCarousel data = {instructorData} screen = {[1.5, 10]} type = 'instructor'/>
                </div>
                <div className='hidden m-auto md:block lg:hidden w-full'>
                    <InstructorCarousel data = {instructorData} screen = {[2, 20]} type = 'instructor'/>
                </div>
                <div className='hidden lg:block w-full'>
                    <InstructorCarousel data = {instructorData} screen = {[4, 30]} type = 'instructor'/>
                </div>  
            </div>


        </div>

       
  )
}

export default MiddleSection



/**
 * <div className='pt-[50px] flex flex-col '>
                <p className="text-[14px] text-center lg:text-left lg:pl-4  mb-4 md:text-md font-semibold md:font-bold md:mb-8  ">Popular courses on vocational programs</p>
                <div className='block w-[360px] m-auto md:hidden w-full'>
                    <ContentCarousel data = {Data} screen = {[1.5, 10]} type = 'vocational'/>
                </div>
                <div className='hidden m-auto md:block lg:hidden w-full'>
                    <ContentCarousel data = {Data} screen = {[2, 20]} type = 'vocational'/>
                </div>
                <div className='hidden lg:block w-full'>
                    <ContentCarousel data = {Data} screen = {[3, 40]} type = 'vocational'/>
                </div> 
            </div>
 */




