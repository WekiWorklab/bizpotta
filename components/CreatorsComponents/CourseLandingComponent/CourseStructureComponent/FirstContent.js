import React from 'react'

// import { TextEditor } from '../../TextEditor'


import { AiFillCaretDown } from 'react-icons/ai'
import { BsPencil, BsThreeDotsVertical, BsTrash } from 'react-icons/bs'
import {TiDocumentText} from 'react-icons/ti'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import { TextEditor } from '../../../TextEditor'
import NotesSuccessModal from './NotesSuccessModal'
import { useState } from 'react'

const FirstContent = () => {

    const [initialState, setInitialState] = useState({section1: "a", section2: 'b', section3: "c", section4: "d"})

    const [success, setSuccess] = useState(false)
    const [currentValue, setCurrentValue] = useState(null)
    const [section, setSection] = useState(null)

  return (
    <div className='w-[100%] '>

        <div className='w-full border-[1px] rounded-sm border-gray-500 mt-8 py-10 pl-10'>
                <p className='text-[14px] font-bold'>Resources</p>
                <p className='text-[13px] mt-4'>We have shared helpful of resources, if you need more assistance, kindly contact us on our Helpline or you can ask for help in <span className='text-seaBlue'>Bizpotta Instructor&#39;s Community</span></p>
                
                <div className='flex flex-row gap-x-4 items-center mt-8 '>
                    <div className='text-seaBlue border-b-2 border-seaBlue text-[14px]'>Get started with teaching vocational skills</div>
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
                    <div className='text-seaBlue border-b-2 border-seaBlue text-[14px]'>Get started in teaching master class </div>
                </div>
                <div className='flex flex-row gap-x-4 items-center mt-8'>
                    <div className='text-seaBlue border-b-2 border-seaBlue text-[14px]'>Get started in teaching certificate program </div>
                </div>
            </div>


            <div className='w-full border-[1px] rounded-sm border-gray-500 mt-8 py-10 pl-10 px-4'>
                <div className='flex flex-row justify-between items-center'>
                    <div>Course Structure</div>
                    <div className='flex flex-row gap-x-2 items-center'>
                        <div className='w-[100px] h-[35px] flex justify-center items-center bg-darkBlue rounded-md text-white text-[13px]'>Preview</div>
                        <BsThreeDotsVertical />
                    </div>
                </div>

                <div className='text-[13px] mt-8'>
                The following descriptions will be publicly visible on your <span className='text-seaBlue'>Landing Page</span> and will have a direct impact on your course performance. These descriptions will help learners decide if your course is right for them.
                </div>

                <div className='mt-8 flex flex-col gap-y-8'>   
                    <Section value = {initialState.section1} setSuccess = {setSuccess} setCurrentValue = {setCurrentValue} section = "section1" setSection = {setSection}/>
                    <Section value = {initialState.section2} setSuccess = {setSuccess} setCurrentValue = {setCurrentValue} section = "section2" setSection = {setSection}/>
                    <Section value = {initialState.section3} setSuccess = {setSuccess} setCurrentValue = {setCurrentValue} section = "section3" setSection = {setSection}/>
                    <Section value = {initialState.section4} setSuccess = {setSuccess} setCurrentValue = {setCurrentValue} section = "section4" setSection = {setSection}/>

                    <div className='w-[150px] h-[40px] flex justify-center items-center font-bold border rounded-md'> + Add Section</div>
                </div>

                <div className='flex justify-end'>
                    <div className='w-[150px] h-[40px] flex justify-center items-center text-[13px] text-white font-bold border rounded-md bg-darkBlue'>
                        Save changes
                    </div>
                </div>
            </div>


            <NotesSuccessModal success = {success}  setSuccess = {setSuccess}  value = {currentValue} setCurrentValue = {setCurrentValue} section = {section} initialState = {initialState} setInitialState = {setInitialState}/>

    </div>
  )
}

export default FirstContent





const Section = ({value, setSuccess, setCurrentValue, section, setSection}) => {

    const handleClick = () => {
        setCurrentValue(value)
        setSection(section)
        setSuccess(true)
    }

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
                {/* <TextEditor /> */}
                <div className='min-w-[400px] min-h-[150px] border' onClick={() => handleClick()}>
                    {value}
                </div>
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



