import React, {useState} from 'react'
import BrowseCourse from './BrowseCourse'
import { Data, instructorData } from '../Content-Components/Data'
import ContentCarousel from '../Content-Components/ContentCarousel'
import InstructorCarousel from '../Content-Components/InstructorCarousel'
import SelectCourses from '../SelectCourses'
import ContentCard from '../Content-Components/ContentCard'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useEffect } from 'react'
import { Pagination } from '@mantine/core'

const MiddleSection = () => {

     

    const dummyCourses = new Array(20).fill({
        name: "Fashion Design",
        category: "Design, styling",
        total_students: 500,
        rating: 4,
        academy: "Dth academy"
    })

    const [selectCourse, setSelectCourse] = useState('')



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

            <div className = 'flex'>
                <SelectCourses selectCourse = {selectCourse} setSelectCourse = {setSelectCourse} />
            </div>

            {
                selectCourse && (
                    <div className='mt-10 w-full'>
                        <div className='w-full mx-auto grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12'>
                            {dummyCourses.map((el, index) => (
                            <div className = 'mx-auto' key={index}>
                                <ContentCard data={el} type = 'vocational'/> 
                            </div>
                            ))}
                        </div>

                        <div className='w-full flex justify-end mr-4 mt-6'>
                            <Pagination total={10} position='center' styles={(theme) => ({
                                item: {
                                    '&[data-active]': {
                                        backgroundColor: '#121F4C'
                                    } 
                                }
                            })} />
                        </div>
                    </div>
                )
            }


        </div>

       
  )
}

export default MiddleSection











                                // <div className='w-[40px] h-[40px] rounded-l-md centerFlex bg-white'><AiOutlineLeft /></div>
                                //     {
                                //         pageNum.map((el, index) => (
                                //             <div key={index} className = 'w-[40px] h-[40px] centerFlex bg-white text-[18px] font-bold centerFlex'>
                                //                 {el}
                                //             </div>
                                //         ))
                                //     }
                                
                                // <div className='w-[40px] h-[40px] rounded-r-md centerFlex bg-white'><AiOutlineRight /></div>




















































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




