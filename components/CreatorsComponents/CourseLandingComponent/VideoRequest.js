import React from 'react'
import { AiOutlinePicture } from 'react-icons/ai'
import TailwindSelect from '../../TailwindSelect'
import InputForm from './InstructorProfileComponent/InputForm'

const VideoRequest = () => {


    const handleSubmit = () => {

    }

    const data1 = [
        {id: 1, name: "Entrepreneurial Leadership"},
        {id: 2, name: "Foundational Structure for Effective Business Management"},
        {id: 3, name: "The Discipline of Execution"},
        {id: 4, name: "Disruptive Business Models "},
        {id: 5, name: "Resource Mobilization and Allocation for Start-Ups"},
        {id: 6, name: "Brand Management and Creative Globalization"},
        {id: 7, name: "Maximizing Social Tools for Business Success"},
        {id: 8, name: "Foundational Accounting for SMEs"},
        {id: 9, name: "Understanding Sales and Marketing"},
        {id: 10, name: "Business Plan Development"},

    ]

    const data2 = [
        {id: 1, name: "Free"},
        {id: 2, name: "Less than #50,000"},
        {id: 3, name: "More than #50,000 "},
        {id: 4, name: "Set custom price"},
    ]

  return (
    <div className='w-full'>
        <div className='w-full border-[1px] rounded-sm border-gray-500 mt-8 pb-10 px-4 md:pl-10'>
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

        <div className='px-4 md:px-10 bg-white py-8 mt-10 rounded-sm shadow-xl border'>
            <p className='font-bold'>Landing Page</p>

            <div className='text-[13px] mt-6'>
            The following description will be publicly visible on your  <span className='text-seaBlue'>Landing Page</span> and will have a direct impact on your course performance. These descriptions will help learners decide if your course is right for them. You can create minimum of  <span className='text-seaBlue'>two section for short class</span> and maximum of <span className='text-seaBlue'>four sections for full class</span>, I advise you read the article on <span className='text-seaBlue'>Getting started in teaching </span> 
            </div>

            <div className=' mt-14'>
                <p className='text-[13px] font-bold'>Title</p>
                <textarea className='mt-5 w-full min-h-[170px] border rounded-md focus:ring-0 focus:outline-none'>

                </textarea>
            </div>

            <div className='mt-14'>
                <p className='text-[13px] font-bold'>Description</p>
                <textarea className='mt-5 w-full min-h-[170px] border rounded-md focus:ring-0 focus:outline-none'>

                </textarea>
            </div>

            <div className='mt-14 flex flex-col gap-y-5 lg:flex-row gap-x-10'>
                <div>
                    <p className='text-[13px] font-bold'>Date</p>
                    <input type='date' className='mt-3 w-[300px] h-[50px] rounded-md focus:ring-0 focus:outline-none' />
                </div>
                <div>
                    <p className='text-[13px] font-bold'>Time</p>
                    <input type='time' className='mt-3 w-[200px] h-[50px] rounded-md focus:ring-0 focus:outline-none' />
                </div>
            </div>

            <div className=' mt-10 '>
                <p className='text-[13px] font-bold'>Choose course category</p>
                <div className='mt-4 w-[300px]'>
                    <TailwindSelect data = {data1} initial = 'select one'/>
                </div>
            </div>


            <div className=' mt-10 '>
                <p className='text-[13px] font-bold'>Set your course price range</p>
                <div className='mt-4 w-[300px]'>
                    <TailwindSelect data = {data2} initial = 'select one'/>
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

export default VideoRequest