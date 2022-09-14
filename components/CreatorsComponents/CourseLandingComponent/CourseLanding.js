import React from 'react'
import { AiOutlinePicture } from 'react-icons/ai'
import InputForm from './InstructorProfileComponent/InputForm'

const CourseLanding = () => {


    const handleSubmit = () => {

    }

  return (
    <div className='w-full'>
        <div className='w-full border-[1px] rounded-sm border-gray-500 mt-8 pb-10 pl-10'>
                <p className='text-[14px] font-bold mt-10'>Resources</p>
                <p className='text-[13px] mt-4'>We have shared helpful of resources, if you need more assistance, kindly contact us on our Helpline or you can ask for help in <span className='text-seaBlue'>Bizpotta Instructor&#39;s Community</span></p>
                
                <div className='flex flex-row gap-x-4 items-center mt-8 '>
                    <div className='text-seaBlue border-b-2 border-seaBlue text-[14px]'>Get started with teaching</div>
                </div>
                <div className='flex flex-row gap-x-4 items-center mt-8'>
                    <div className='text-seaBlue border-b-2 border-seaBlue text-[14px]'>Video setup &#38; equipment</div>
                </div>
                <div className='flex flex-row gap-x-4 items-center mt-8'>
                    <div className='text-seaBlue border-b-2 border-seaBlue text-[14px]'>Course quality requirement</div>
                </div>
                <div className='flex flex-row gap-x-4 items-center mt-8'>
                    <div className='text-seaBlue border-b-2 border-seaBlue text-[14px]'>Audio and video editing</div>
                </div>
                <div className='flex flex-row gap-x-4 items-center mt-8'>
                    <div className='text-seaBlue border-b-2 border-seaBlue text-[14px]'>Tips to build an outstanding course</div>
                </div>
                
            </div>


        {/* Landing Page Form */}

        <div className='px-10 bg-white py-8 mt-10 rounded-sm shadow-xl border'>
            <p className='font-bold'>Landing Page</p>

            <div className='text-[13px] mt-6'>
            The following descriptions will be publicly visible on your <span className='text-seaBlue'>Landing Page</span> and will have a direct impact on your course performance. These descriptions will help learners decide if your course is right for them.
            </div>

            <div className=' mt-10'>
                <p className='text-[13px] font-bold'>Course Title</p>
                <p className='text-[12px]'>Give your course a clear title that will explain what the course is all about. Max of 100 words.</p>
                <div className='flex flex-row gap-x-8 mt-2'>
                   <InputForm width='500px' placeholder='' type='text'/>
                </div>
            </div>

            <div className=' mt-10'>
                <p className='text-[13px] font-bold'>Course Subtitle</p>
                <p className='text-[12px]'>Give your course a clear title that will explain what the course is all about. Max of 100 words.</p>
                <div className='flex flex-row gap-x-8 mt-2'>
                   <InputForm width='500px' placeholder='' type='text'/>
                </div>
            </div>

            <div className=' mt-10'>
                <p className='text-[13px] font-bold'>Course Hastags</p>
                <p className='text-[12px]'>Give your course a clear title that will explain what the course is all about. Max of 100 words.</p>
                <div className='flex flex-row gap-x-8 mt-2'>
                   <InputForm width='500px' placeholder='' type='text'/>
                </div>
            </div>

            <div className=' mt-10'>
                <p className='text-[13px] font-bold'>Course Description</p>
                <p className='text-[12px] mt-2 '>Kindly give a detailed decription of your course. Minimum 1000 words</p>
                <textarea className='w-[600px] min-h-[200px] bg-[#FCFDFE] focus:ring-0 focus:outline-none border rounded-md text-[#C4C4C4] pl-4 text-[14px] mt-2'>
                </textarea>
            </div>


            <div className=' mt-10'>
                <p className='text-[13px] font-bold'>Language</p>
                <div className='flex flex-row gap-x-8 mt-2'>
                   <InputForm width='500px' placeholder='' type='text'/>
                </div>
            </div>

            <div className=' mt-10'>
                <p className='text-[13px] font-bold'>Level</p>
                <div className='flex flex-row gap-x-8 mt-2'>
                   <InputForm width='500px' placeholder='' type='text'/>
                </div>
            </div>

            <div className=' mt-10'>
                <p className='text-[13px] font-bold'>Course Category</p>
                <div className='flex flex-row gap-x-8 mt-2'>
                   <InputForm width='500px' placeholder='' type='text'/>
                </div>
            </div>

            <div className=' mt-10'>
                <p className='text-[13px] font-bold'>Course Image</p>
                <p className='text-[12px]'>Image quality 750x422 pixel. jpg, jpeg, gif or png</p>

                <div className='h-[40px] w-[500px] bg-[#FCFDFE] focus:ring-0 focus:outline-none border rounded-md text-[#C4C4C4] pl-4 text-[15px] flex flex-row items-center gap-x-4'>
                    <AiOutlinePicture size={18} />
                    <input type='file' name='image' className='text-[12px] ml-2 focus:ring-0 focus:outline-none' />
                </div>
                
            </div>

            <div className=' mt-10'>
                <p className='text-[13px] font-bold'>Promotional Video</p>
                <p className='text-[12px]'>Video quality 750x422 pixel. jpg, jpeg, gif or png</p>

                <div className='h-[40px] w-[500px] bg-[#FCFDFE] focus:ring-0 focus:outline-none border rounded-md text-[#C4C4C4] pl-4 text-[15px] flex flex-row items-center gap-x-4'>
                    <AiOutlinePicture size={18} />
                    <input type='file' name='image' className='text-[12px] ml-2 focus:ring-0 focus:outline-none' />
                </div>
                
            </div>




            <div className='flex justify-end mt-6'>
                <div className='w-[120px] h-[45px] flex items-center justify-center bg-darkBlue text-white text-[13px] font-bold rounded-md cursor-pointer' onClick = {() => handleSubmit()}>
                    Save changes
                </div>
            </div>



        </div>

    </div>
  )
}

export default CourseLanding