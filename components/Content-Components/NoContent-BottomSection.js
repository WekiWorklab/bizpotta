import React from 'react'
import ContentCarousel from './ContentCarousel'
import InstructorCarousel from './InstructorCarousel'
import { Data, instructorData } from './Data'
import { card_image } from '../../public'

const BottomSection = () => {


   

  return (
    <div className='pl-0 lg:pl-5 flex flex-col xl:flex-row  w-full'>
                <div className='bg-white w-full m-auto  '>
                    
                    <div className='pt-[50px] flex flex-col'>
                            <p className="text-[14px] mb-4 md:text-md font-semibold md:mb-8 ml-4">Popular Courses</p>
                            <div className='block w-[360px] m-auto md:hidden'>
                                <ContentCarousel data = {Data} smallScreen = {true} />
                            </div>
                            <div className='hidden md:block'>
                                <ContentCarousel data = {Data} smallScreen = {false} bottom={true}/>
                            </div> 
                    </div>
                    <div className='pt-[50px] flex flex-col'>
                            <p className="text-[14px] mb-4 md:text-md font-semibold md:mb-8 ml-4">Trending Courses</p>
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


                

            </div>
  )
}

export default BottomSection

