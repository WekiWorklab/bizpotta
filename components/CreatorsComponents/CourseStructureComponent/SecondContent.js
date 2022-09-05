import React from 'react'

import { TextEditor } from '../../TextEditor'


import { AiFillCaretDown } from 'react-icons/ai'
import { BsPencil, BsThreeDotsVertical, BsTrash } from 'react-icons/bs'
import {TiDocumentText} from 'react-icons/ti'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

const SecondContent = () => {
  return (
    <div className='relative w-full h-full bg-white flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-8 py-10 text-darkGray'>
        <div className='w-full '>
            <div className='flex flex-row gap-x-6 text-[15px] font-bold pl-10 ml-[10%]'>
                <p className={` border-bizpotta-green px-2`} onClick = {() => setSelect('instructor')}>Instructor&#39;s Profile</p>
                <p className={` border-bizpotta-green px-2`} onClick = {() => setSelect('landing')}>Course Landing Page</p>
                <p className={`border-b-4 border-bizpotta-green px-2`} onClick = {() => setSelect('structure')}>Course Structure</p>
                <p className={` border-bizpotta-green px-2`} onClick = {() => setSelect('pricing')}>Pricing</p>
            </div>

        </div>

        <div className='w-full border-[1px] rounded-sm border-gray-500 mt-8 py-10 pl-10'>
                <p className='text-[14px] font-bold'>Resources</p>
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
                    <div className='text-seaBlue border-b-2 border-seaBlue text-[14px]'>Tips to buildan outstanding course</div>
                </div>
                
            </div>


            <div className='w-full border-[1px] rounded-sm border-gray-500 mt-8 py-10 pl-10 px-4'>
                <div className='flex flex-row justify-between items-center'>
                    <div>Course Structure</div>
                    <div className='flex flex-row gap-x-2 items-center'>
                        <div className='w-[100px] h-[35px] flex justify-center items-center bg-darkBlue rounded-md text-white text-[13px]'>Pressure</div>
                        <BsThreeDotsVertical />
                    </div>
                </div>

                <div className='text-[13px] mt-8'>
                    The following descriptions will be publicly visible on your <span className='text-seaBlue'>Landing Page</span> and will have a direct impact on your course performance. These descriptions will help learners decide if your course is right for them.
                </div>
                <div className='text-[13px]'>
                    You can create minimum of <span className='text-seaBlue'>two section for short class</span> and maximum of <span className='text-seaBlue'>four sections for full class</span>. I advise you read the article on <span className='text-seaBlue'>getting started in teaching</span>
                </div>

                <div className='mt-8 flex flex-col gap-y-8'>   
                    <Section />
                    <Section />
                    <Section />
                    <Section />

                    <div className='w-[150px] h-[40px] flex justify-center items-center font-bold border rounded-md'> + Add Section</div>
                </div>

                <div className='flex justify-end'>
                    <div className='w-[150px] h-[40px] flex justify-center items-center text-[13px] text-white font-bold border rounded-md bg-darkBlue'>
                        Save changes
                    </div>
                </div>

            </div>
        
    </div>
  )
}

export default SecondContent





const Section = () => {

    return(
        <div className='w-[550px]'>
            <div className='flex w-full justify-between items-center'>
              <div>Section 1 <span className='text-gray-400 text-[14px]'>Week 1</span></div> 
              <BsTrash color='red' size={14}/> 
            </div>

            <div className='flex items-center gap-x-2 mt-4'>
                <TiDocumentText />
                <p>Introduction</p>
                <BsPencil  size={12}/>
                <AiFillCaretDown />
            </div>

            <div className='mt-6'>
                <TextEditor />
            </div>

            <div className='flex flex-col gap-y-2 mt-4'>
                <div className='flex flex-row items-center gap-x-3'>
                   <div className=' font-bold border rounded-md w-[350px] h-[50px] flex flex-row items-center gap-x-2 pl-2'>
                        <IoCheckmarkCircleOutline className='' size={26} color='#94F236'/>
                        <p>Video upload successful</p>
                    </div> 
                    <p className='text-red-300'>X</p>
                </div>

                <div className='flex flex-row items-center gap-x-3'>
                   <div className=' font-bold border rounded-md w-[350px] h-[50px] flex flex-row items-center gap-x-2 pl-2'>
                        <IoCheckmarkCircleOutline className='' size={26} color='#94F236'/>
                        <p>Content upload successful</p>
                    </div> 
                    <p className='text-red-300'>X</p>
                </div>
                
            </div>
            
        </div>
    )
}