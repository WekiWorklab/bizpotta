import React, { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { logo, home_page } from '../../../../public'
import UploadingSuccessModal from '../InstructorProfileComponent/UploadingSuccessModal'
import ScheduleSection from './ScheduleSection'
import UploadModal from './UploadModal'

const OngoingCourses = () => {

    const [files, setFiles] = ([])
    const [showModal, setShowModal] = useState(false)

  return (
    <div className='w-full  min-h-screen  pt-8 '>
        <div className='w-full pl-10 pr-6'>
            <div className='flex flex-row items-center gap-x-4'>
                <BsArrowLeft />
                <p className='text-[13px] text-gray-500'>Go back</p>
            </div>

            <div className='w-[750px] h-[300px] border border-gray-400 rounded-md centerFlex mt-6'>
                <label htmlFor='file' className='border border-gray-400 w-[100px] h-[35px] rounded-sm text-[13px] centerFlex'>
                    <p>Add video</p>
                    <input
                        type="file"
                        id='file'
                        className='hidden'
                        accept='.png,.jpeg,.jpg,.mp4'
                        onChange={(e) => {
                          setFiles(e.target.files)}}
                    />
                </label>
            </div>

            <div className='w-full flex justify-between items-center mt-10'>
                <div className=''>
                    <div className='text-lg font-bold'>Fundamentals of DLSR Photography</div>
                    <div className='flex items-center gap-x-4 justify-start mt-2'>
                        <img src={home_page.src} alt= '' className='w-[40px] h-[40px] rounded-full border'/>
                        <p className='text-[12px] text-gray-500'>by Thomas Mat (Phd, Msc)</p>
                    </div>
                </div>

                <div className='w-[100px] h-[35px] centerFlex border rounded-sm text-[12px] '>
                    Edit
                </div>

            </div>

            <div className='w-[650px] '>
                <div className='flex items-center justify-between'>
                    <p className='text-[13px] font-bold'>About this course</p>
                    <div className='w-[100px] h-[35px] centerFlex border rounded-sm text-[12px] '>
                        Edit session
                    </div>
                </div>

                <div className='w-full mt-8'>
                    <p className='text-[13px] font-bold'>Description</p>
                    <div className='grid grid-cols-2 gap-x-4 gap-y-2 mt-4'>
                        <div className='flex flex-row gap-x-2 text-[13px]'>
                            <p className='font-bold'>Skill level:</p>
                            <div></div>
                        </div>
                        <div className='flex flex-row gap-x-2 text-[13px]'>
                            <p className='font-bold'>Audio:</p>
                            <div></div>
                        </div>
                        <div className='flex flex-row gap-x-2 text-[13px]'>
                            <p className='font-bold'>Caption:</p>
                            <div></div>
                        </div>
                        <div className='flex flex-row gap-x-2 text-[13px]'>
                            <p className='font-bold'>Language:</p>
                            <div></div>
                        </div>
                        <div className='flex flex-row gap-x-2 text-[13px]'>
                            <p className='font-bold'>Video:</p>
                            <div></div>
                        </div>
                        <div className='flex flex-row gap-x-2 text-[13px]'>
                            <p className='font-bold'>Estimated course time:</p>
                            <div></div>
                        </div>
                    </div>
                </div>

                <div className='w-full mt-8'>
                    <div className='text-[13px] font-bold'>Certificate</div>
                    <p className='text-[11px]'>Certificate is issued on completion</p>
                </div>

                <div className='w-full mt-8'>
                    <div className='text-[14px] font-bold'>What you will learn</div>
                    <div className='flex flex-row justify-between items-end mt-6'>
                        <div>
                            <div className='flex flex-row items-center'>
                                <div className='w-[10px] h-[10px] border rounded bg-black mr-4 text-[2px]'>d</div>    
                                <p className='text-[13px] font-bold'>Add sub topic</p>     
                            </div>
                            <div className='min-h-[50px]'>

                            </div>
                        </div>

                        <div className='w-[100px] h-[35px] centerFlex border rounded-sm text-[12px] '>
                            Edit session
                        </div>
                    </div>

                    <div className='flex flex-row justify-between items-end mt-6'>
                        <div>
                            <div className='flex flex-row items-center'>
                                <div className='w-[10px] h-[10px] border rounded bg-black mr-4 text-[2px]'>d</div>    
                                <p className='text-[13px] font-bold'>Add sub topic</p>     
                            </div>
                            <div className='min-h-[50px]'>

                            </div>
                        </div>

                        <div className='w-[100px] h-[35px] centerFlex border rounded-sm text-[12px] '>
                            Edit session
                        </div>
                    </div>

                    <div className='flex flex-row justify-between items-end mt-6'>
                        <div>
                            <div className='flex flex-row items-center'>
                                <div className='w-[10px] h-[10px] border rounded bg-black mr-4 text-[2px]'>d</div>    
                                <p className='text-[13px] font-bold'>Add sub topic</p>     
                            </div>
                            <div className='min-h-[50px]'>

                            </div>
                        </div>

                        <div className='w-[100px] h-[35px] centerFlex border rounded-sm text-[12px] '>
                            Edit session
                        </div>
                    </div>

                    <div className='flex flex-row justify-between items-end mt-6'>
                        <div>
                            <div className='flex flex-row items-center'>
                                <div className='w-[10px] h-[10px] border rounded bg-black mr-4 text-[2px]'>d</div>    
                                <p className='text-[13px] font-bold'>Add sub topic</p>     
                            </div>
                            <div className='min-h-[50px]'>

                            </div>
                        </div>

                        <div className='w-[100px] h-[35px] centerFlex border rounded-sm text-[12px] '>
                            Edit session
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-full flex flex-row justify-start pl-10 mt-10'>
                <div className='flex flex-col items-center'>
                    <div className='w-[24px] h-[24px] rounded-full border-2 border-darkBlue'></div>
                    <p className='text-[14px] '>Week 1</p>
                </div>
                <div className='font-bold'>----------------</div>
                <div className='flex flex-col items-center'>
                    <div className='w-[24px] h-[24px] rounded-full border-2 border-darkBlue'></div>
                    <p className='text-[14px] '>Week 2</p>
                </div>
                <div className='font-bold'>----------------</div>
                <div className='flex flex-col items-center'>
                    <div className='w-[24px] h-[24px] rounded-full border-2 border-darkBlue'></div>
                    <p className='text-[14px] '>Week 3</p>
                </div>
                <div className='font-bold'>----------------</div>
                <div className='flex flex-col items-center'>
                    <div className='w-[24px] h-[24px] rounded-full border-2 border-darkBlue'></div>
                    <p className='text-[14px] '>Week 4</p>
                </div>
            </div>

            <div className='w-full mt-20'>
                <ScheduleSection />
                <ScheduleSection />
            </div>

            <div className='flex flex-row justify-center mt-10'>
                <div className='w-[100px] h-[35px] centerFlex border rounded-sm text-[12px] '>
                    Add section
                </div>   
            </div>
            
        </div>

        {/* This is borrowed from the instructors profile section */}
        <UploadModal showModal = {showModal} setShowModal = {setShowModal}/>
    </div>

  )
}

export default OngoingCourses