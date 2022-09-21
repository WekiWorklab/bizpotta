import React from 'react'
import BrowseCourse from './BrowseCourse'
import { Data, instructorData } from '../Content-Components/Data'
import ContentCarousel from '../Content-Components/ContentCarousel'
import InstructorCarousel from '../Content-Components/InstructorCarousel'

const MiddleSection = () => {
  return (
    // <div>
        <div className='bg-transparent'>
            
            <div className='pt-[50px] flex flex-col '>
                <p className="text-[14px] mb-4 md:text-md font-semibold md:mb-8 ml-4">Browse courses based on your recent activities</p>
                <div className='block w-[360px] m-auto md:hidden'>
                    <ContentCarousel data = {Data} smallScreen = {true} />
                </div>
                <div className='hidden md:block '>
                    <ContentCarousel data = {Data} smallScreen = {false} bottom={true}/>
                </div> 
            </div>
            <div className='pt-[50px] flex flex-col'>
                <p className="text-[14px] mb-4 md:text-md font-semibold md:mb-8 ml-4">Popular courses on vacational programs</p>
                <div className='block w-[360px] m-auto md:hidden'>
                    <ContentCarousel data = {Data} smallScreen = {true} />
                </div>
                <div className='hidden md:block'>
                    <ContentCarousel data = {Data} smallScreen = {false} bottom={true}/>
                </div> 
            </div>
            <div className='pt-[50px] flex flex-col'>
                <p className="text-[14px] mb-4 md:text-md font-semibold md:mb-8 ml-4">Based on your recent activities</p>
                <div className='block w-[360px] m-auto md:hidden'>
                    <ContentCarousel data = {Data} smallScreen = {true} />
                </div>
                <div className='hidden md:block'>
                    <ContentCarousel data = {Data} smallScreen = {false} bottom={true}/>
                </div> 
            </div>
            <div className='pt-[50px] flex flex-col'>
                <p className="text-[14px] mb-4 md:text-md font-semibold md:mb-8 ml-4">Trending courses</p>
                <div className='block w-[360px] m-auto md:hidden'>
                    <ContentCarousel data = {Data} smallScreen = {true} />
                </div>
                <div className='hidden md:block'>
                    <ContentCarousel data = {Data} smallScreen = {false} bottom={true}/>
                </div> 
            </div>


            <div className='pt-[50px] flex flex-col'>
                <p className="text-[14px] mb-4 md:text-md font-semibold md:mb-8 ml-4 ">Instructors</p>
                <div className='block w-[360px] m-auto md:hidden'>
                    <InstructorCarousel data = {instructorData} smallScreen = {true} />
                </div>
                <div className='hidden md:block'>
                    <InstructorCarousel data = {instructorData} smallScreen = {false} bottom={true}/>
                </div> 
            </div>


        </div>

       
  )
}

export default MiddleSection






