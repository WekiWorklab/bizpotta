import React from 'react'
import {BsHeart, BsPersonPlus, BsChatDots} from 'react-icons/bs'
import {BiTransfer} from 'react-icons/bi'
import { card_image } from '../public'





const Content = () => {

    const pieData = [
        {
            "name": "a",
            "value": 25
        }, 
        {
            "name": "b",
            "value": 75
        }
    ]

    

  return (
    <div className='relative w-full flex flex-col xl:flex-row pt-[120px] md:justify-start md:translate-x-[200px] md:w-[calc(100%-200px)] text-darkBlue'>
        <div className='bg-gray-50 pt-8 pl-0 lg:pl-5 w-full md:w-[580px] lg:w-[850px] '>
            <div className='bg-white flex flex-col items-center'>
                <h1 className='text-sm font-semibold mb-8 '>Programs</h1>
                <div className='flex flex-row flex-wrap w-full justify-evenly pl-0 '>
                    <div className='w-[260px] bg-[#5FFC54] h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10 '>VOCATIONAL EDUCATION</div>
                    <div className='w-[260px] bg-[#2ABB1A] h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10  '>CERTIFICATE PROGRAM</div>
                    <div className='w-[260px] bg-[#2ABB1A] h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10'>MASTER CLASS</div>

                </div>
                <div className='flex flex-col items-center w-full  xl:flex-row xl:justify-between '>
                    <div className='flex flex-col '>
                        <div className='mb-10 '>
                            <p className='text-sm font-semibold mb-6'>Analytics</p>
                            <div className='w-[320px] h-[100px] bg-darkBlue text-white rounded shadow-lg'>
                                polar chart here
                            </div>
                        </div>
                        <div>
                            <p className='text-sm font-semibold mb-6'>Daily views</p>
                            <div className='w-[350px] h-[180px] sm:w-[380px]  md:w-[530px] md:h-[215px] bg-gray-200 rounded-lg shadow-lg'>
                                Area chart here
                            </div>
                        </div>
                    </div>

                    <div className=' flex flex-col w-[280px] sm:w-[500px]  '>

                        <p className='text-sm mt-10 font-semibold mb-6  mb-[50px] sm:mt-10 xl:mt-0'>Course Activities</p>

                        <div className=' w-full flex flex-col sm:flex-row xl:flex-col'>
                            <div>
                                <p className='text-xs flex justify-center font-semibold mb-[70px] sm:mb-8'>Last 30 Days Perfomance</p>
                                <div className='w-[125px] h-[125px] bg-gray-200 mx-auto mb-[40px]'>
                                    ...
                                </div> 
                            </div>
                        

                        <div className='w-full flex flex-col'>
                        <p className='text-xs flex justify-center mb-8 font-bold'>Activity</p>
                        <div className=' w-[250px] flex flex-col justify-center mx-auto '>
                            <div className='flex flex-row justify-evenly'>
                                <div className='flex justify-center items-center mb-5 '>
                                    <div className='w-[50px] h-[50px] bg-[#F9896B] rounded-full flex justify-center items-center'>
                                        <BsHeart color='white' size={24}/>
                                    </div>
                                    <p className='text-xs font-semibold ml-2'>Mentors</p>
                                </div>
                            
                                <div className='flex justify-center items-center mb-5 '>
                                    <div className='w-[50px] h-[50px] bg-[#84E8F4] rounded-full flex justify-center items-center rotate-90'>
                                        <BiTransfer color='white' size={24} />
                                    </div>
                                    <p className='text-xs font-semibold ml-2'>Exams </p>
                                </div>
                            </div>
                            
                            <div className='flex flex-row justify-evenly'>
                                <div className='flex justify-center items-center mb-5  '>
                                    <div className='w-[50px] h-[50px] bg-[#FDBC64] rounded-full flex justify-center items-center'>
                                        <BsPersonPlus color='white' size={24}/>
                                    </div>
                                    <p className='text-xs font-semibold ml-2'>Connect</p>
                                </div>

                                <div className='flex justify-center items-center mb-5 '>
                                    <div className='w-[50px] h-[50px] bg-[#9655FF] rounded-full flex justify-center items-center'>
                                        <BsChatDots color='white' size={24}/>
                                    </div>
                                    <p className='text-xs font-semibold ml-2'>Grades</p>
                                </div>
                            </div>

                        </div>
                        </div>

                        </div> 

                    </div>
                </div>
            </div>
        </div>

        <div className='w-full xl-[280px] flex-col items-center justify-center mx-auto  '>
            <div className='text-center w-[250px] px-3 py-8 mx-auto border rounded-md'>
                <h1 className='text-sm font-bold mb-3'>What is your current job description?</h1>
                <p className='text-xs mb-5'>Business Analysis</p>

                <h1 className='text-sm font-bold'>What would you like to learn?</h1>
                <p className='text-xs'>Project Management</p>

                <div className='flex flex-row text-[13px] text-darkBlue justify-between mt-10'>
                    <div className='text-white bg-darkBlue h-10 w-[100px] flex justify-center items-center rounded-md hover:text-darkBlue hover:bg-white hover:border hover:border-darkBlue cursor-pointer'>View Profile</div>
                    <div className='h-10 w-[100px] flex justify-center items-center border border-darkBlue rounded-md hover:text-white hover:bg-darkBlue cursor-pointer'>Edit Profile</div>
                </div>
            </div>

            <h1 className='mt-10 mx-auto text-center xl:text-justify xl:pl-6'>Newly added</h1>
            <div className=' w-full flex flex-row flex-wrap justify-evenly xl:w-[250px] xl:mt-2  mx-auto'>
                
                <div className='w-[250px] h-[96px] bg-[#F9FFF3] relative rounded-md flex flex-row justify-evenly items-center mt-5'>
                    <img src={card_image.src} className = 'h-12 w-12 rounded-md'/>
                    <div className='flex flex-col'>
                        <p className='text-[13px]'>Cut and sew tops for women </p>
                        <p className='text-[11px]'>By Queen Paul</p>
                    </div>
                    <p className='text-[9px] absolute top-[78px] right-2'>Monday 9pm</p>
                </div>

                <div className='w-[250px] h-[96px] bg-[#F9FFF3] relative rounded-md flex flex-row justify-evenly items-center mt-5'>
                    <img src={card_image.src} className = 'h-12 w-12 rounded-md'/>
                    <div className='flex flex-col'>
                        <p className='text-[13px]'>Cut and sew tops for women </p>
                        <p className='text-[11px]'>By Queen Paul</p>
                    </div>
                    <p className='text-[9px] absolute top-[78px] right-2'>Monday 9pm</p>
                </div>

                <div className='w-[250px] h-[96px] bg-[#F9FFF3] relative rounded-md flex flex-row justify-evenly items-center mt-5'>
                    <img src={card_image.src} className = 'h-12 w-12 rounded-md'/>
                    <div className='flex flex-col'>
                        <p className='text-[13px]'>Cut and sew tops for women </p>
                        <p className='text-[11px]'>By Queen Paul</p>
                    </div>
                    <p className='text-[9px] absolute top-[78px] right-2'>Monday 9pm</p>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Content







