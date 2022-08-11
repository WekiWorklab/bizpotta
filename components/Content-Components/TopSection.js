import React from 'react'
import ProgramCarousel from './ProgramCarousel'
import AreaChart from './AreaChart'
import {BsHeart, BsPersonPlus, BsChatDots} from 'react-icons/bs'
import {BiTransfer} from 'react-icons/bi'
import { card_image } from '../../public'

const TopSection = () => {
  return (
    <div className=' pl-0 lg:pl-5 lg:pt-5 flex flex-col xl:flex-row w-full'>
            <div className=' w-full m-auto md:w-[650px] lg:w-[850px]'>
                <div className='bg-white pl-4 pr-2 flex flex-col items-center '>
                    <h1 className='text-sm font-semibold mt-8 mb-8 w-full '>Programs</h1>

                    <div className='hidden items-center md:flex  flex-row flex-wrap w-full md:w-[90%] lg:w-[70%] xl:w-full justify-between pl-0 '>
                        <div className='w-[260px] bg-[#5FFC54] h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10 '>VOCATIONAL EDUCATION</div>
                        <div className='w-[260px] bg-[#2ABB1A] h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10  '>CERTIFICATE PROGRAM</div>
                        <div className='w-[260px] bg-[#2ABB1A] h-[125px] rounded-lg flex items-center text-sm pl-5 mb-10'>MASTER CLASS</div>
                    </div>

                    <div className='w-[360px] ml-[-10px] md:hidden '>
                       <ProgramCarousel/>  
                    </div>


                    <div className=' hidden md:flex flex-col items-center w-full xl:flex-row xl:justify-between '>
                        <div className='flex flex-col '>
                            <div className='mb-10 '>
                                <p className='text-sm font-semibold mb-6'>Analytics</p>
                                <div className='w-[320px] h-[100px] bg-darkBlue text-white rounded shadow-lg flex flex-row'>
                                    <div className='border-r-2 border-gray-500 h-2/3 w-1/2 my-auto flex flex-col justify-evenly items-center'>
                                        <p className='text-sm'>Weekly Target</p>
                                        <p className='text-xs text-gray-500'>25% achieved</p>
                                    </div>

                                    <div className='m-auto  h-[90%]'>
                                        {/* <CircleChart /> */}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='text-sm font-semibold mb-6'>Daily views</p>
                                <div className='w-[350px] h-[180px] sm:w-[380px] sm:h-[200px]  md:w-[530px] md:h-[270px] bg-gray-200 rounded-lg shadow-lg'>
                                    <AreaChart />
                                </div>
                            </div>
                        </div>

                        <div className=' flex flex-col w-[280px] sm:w-[500px]'>

                            <p className='text-sm mt-10 font-semibold mb-6  text-center mb-[50px] sm:mt-10 xl:mt-0'>Course Activities</p>

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

                {/* Mobile View for the charts */}

                <div className='border bg-white w-full  md:hidden'>
                    <div className='flex flex-row px-2 justify-between py-4 bg-gray-50'>
                        <div className='flex flex-col flex-2 w-[55%] '>
                            <div className=' w-full flex flex-col items-center bg-white justify-center rounded-[8px]  shadow-lg mb-2 py-4'>
                                <h1 className='text-[12px] font-bold mb-3 text-center'>What is your current job description?</h1>
                                <p className='text-[12px] mb-5 text-center'>Business Analysis</p>

                                <h1 className='text-[12px] font-bold mb-3 text-center'>What would you like to learn?</h1>
                                <p className='text-[12px] text-center'>Project Management</p>
                            </div>
                            
                            <div className='w-full h-[80px] bg-white text-[darkBlue] rounded-[8px] shadow-lg flex flex-row'>
                                    <div className='h-2/3 w-1/2 my-auto flex flex-col justify-evenly items-center'>
                                        <p className='text-[11px] text-darkBlue font-bold'>Weekly Target</p>
                                        <p className='text-[11px] text-gray-500'>25% achieved</p>
                                    </div>

                                    <div className='m-auto  h-[90%]'>
                                        {/* <CircleChart /> */}
                                    </div>
                            </div>
                        </div>

                        <div className=' border bg-white w-[44%] rounded-[8px] shadow-lg'>
                            <div className=' flex flex-col w-full   '>
                                <div className=' w-full flex flex-col items-center justify-center mt-4 px-2'>
                                    <div>
                                        <p className='text-[11px] flex justify-center text-center font-semibold mb-[10px] sm:mb-8'>Last 30 Days Perfomance</p>
                                        <div className='w-[100px] h-[100px] bg-gray-200 mx-auto mb-[10px]'>
                                            ...
                                        </div> 
                                    </div>
                                

                                <div className='w-full flex flex-col'>
                                <p className='text-xs flex justify-center mb-2 font-bold'>Activity</p>
                                <div className=' w-full flex flex-col justify-center mx-auto '>
                                    <div className='flex flex-row justify-evenly'>
                                        <div className='flex justify-center items-center mb-2 '>
                                            <div className='w-[20px] h-[20px] bg-[#F9896B] rounded-full flex justify-center items-center'>
                                                <BsHeart color='white' size={14}/>
                                            </div>
                                            <p className='text-[11px] font-semibold ml-1'>Mentors</p>
                                        </div>
                                    
                                        <div className='flex justify-center items-center mb-2 '>
                                            <div className='w-[20px] h-[20px] bg-[#84E8F4] rounded-full flex justify-center items-center rotate-90'>
                                                <BiTransfer color='white' size={14} />
                                            </div>
                                            <p className='text-[11px] font-semibold ml-1'>Exams </p>
                                        </div>
                                    </div>
                                    
                                    <div className='flex flex-row justify-evenly'>
                                        <div className='flex justify-center items-center mb-2  '>
                                            <div className='w-[20px] h-[20px] bg-[#FDBC64] rounded-full flex justify-center items-center'>
                                                <BsPersonPlus color='white' size={14}/>
                                            </div>
                                            <p className='text-[11px] font-semibold ml-1'>Connect</p>
                                        </div>

                                        <div className='flex justify-center items-center mb-2 '>
                                            <div className='w-[20px] h-[20px] bg-[#9655FF] rounded-full flex justify-center items-center'>
                                                <BsChatDots color='white' size={14}/>
                                            </div>
                                            <p className='text-[11px] font-semibold ml-1'>Grades</p>
                                        </div>
                                    </div>

                                </div>
                                </div>

                                </div> 

                            </div>


                        </div>
                    </div>
                </div>
            </div>


        <div className=' bg-white w-full md:w-[650px] lg:w-[850px] flex flex-col sm:flex-row xl:flex-col items-center justify-center mx-auto pt-8 '>
            <div className='hidden md:block text-center w-[300px] xl:w-[250px] px-3 py-8 mx-auto border rounded-md '>
                <h1 className='text-sm font-bold mb-3'>What is your current job description?</h1>
                <p className='text-xs mb-5'>Business Analysis</p>

                <h1 className='text-sm font-bold'>What would you like to learn?</h1>
                <p className='text-xs'>Project Management</p>

                <div className='flex flex-row w-[2 0px] m-auto text-[13px] text-darkBlue justify-between mt-10'>
                    <div className='text-white bg-darkBlue h-10 w-[100px] flex justify-center items-center rounded-md hover:text-darkBlue hover:bg-white hover:border hover:border-darkBlue cursor-pointer'>View Profile</div>
                    <div className='h-10 w-[100px] flex justify-center items-center border border-darkBlue rounded-md hover:text-white hover:bg-darkBlue cursor-pointer'>Edit Profile</div>
                </div>
            </div>


            <div className=' hidden w-full xl:flex flex-col flex-wrap justify-evenly items-center xl:w-[252px] xl:mt-2  mx-auto '>
            <h1 className='mt-10 mx-auto'>Newly added</h1>

                
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

export default TopSection