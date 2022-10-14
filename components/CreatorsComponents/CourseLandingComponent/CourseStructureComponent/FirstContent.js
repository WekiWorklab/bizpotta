import React from 'react'

// import { TextEditor } from '../../TextEditor'


import { AiFillCaretDown, AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineCheck, AiOutlineLink } from 'react-icons/ai'
import { BsPencil, BsThreeDotsVertical, BsTrash } from 'react-icons/bs'
import {TiDocumentText} from 'react-icons/ti'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import { TextEditor } from '../../../TextEditor'
import NotesSuccessModal from './NotesSuccessModal'
import { useState } from 'react'

const FirstContent = () => {
    const [state, setState] = useState({lecture: "", resources: "", projects: "", })

    const arr = new Array(1).fill("")
    
  return (
    <div className=''>
        <div className='w-full border-[1px] rounded-sm border-gray-500 mt-8 py-10 px-4 md:pl-10'>
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

            <div className='w-full border-[1px] rounded-sm border-gray-500 mt-8 py-10 md:pl-10 px-4'>
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
                    {
                        arr.map((el, index) => (
                            <WeekSection key = {index} week_no={index + 1} />
                        ))
                    }

                    {/* <div className='w-[150px] h-[40px] flex justify-center items-center font-bold border rounded-md'> + Add Section</div> */}
                </div>

                <div className='flex justify-end mt-8'>
                    <div className='w-[150px] h-[40px] flex justify-center items-center text-[13px] text-white font-bold border rounded-md bg-darkBlue'>
                        Save changes
                    </div>
                </div>
            </div>

    </div>
  )
}

export default FirstContent



const WeekSection = ({week_no}) => {

    const [editWeekTitle, setEditWeekTitle] = useState(false) //controls the ability to change the title of the week
    const [collapseWeek, setCollapseWeek] = useState(week_no > 1 && true)  //controls collapse and expansion of week
    
    return (
        <div className='w-full py-2'>
            <div className='w-full'>
                <div className='flex w-full justify-between items-center'>
                    <div className='flex items-center gap-x-5'>
                        <div>Week {week_no} </div>
                        {!editWeekTitle && <div className='flex items-center gap-x-2 text-gray-400 text-[14px] '>
                            <p>Introduction</p>
                            <BsPencil size={12} className = 'cursor-pointer' onClick = {() => {setEditWeekTitle(true); }}/>
                        </div>}
                        {editWeekTitle && <div className='flex items-center text-[14px] gap-x-2'>
                            <input type = 'text' placeholder='introduction' className='focus:ring-0 outline-none rounded-sm h-[24px]'  />
                            <div className='text-[#FF0000] cursor-pointer' onClick={() => {setEditWeekTitle(false)}}>X</div>
                            <AiOutlineCheck color='green' className = 'cursor-pointer' onClick={() => {setEditWeekTitle(false)}}/>
                        </div>
                        }
                        <BsTrash color='red' size={14}/> 
                    </div>

                    <div className=''>
                        {collapseWeek && <AiOutlineCaretDown className='text-[#999999] text-[20px] font-bold cursor-pointer' onClick={() => setCollapseWeek(false)} />}
                        {!collapseWeek && <AiOutlineCaretUp className='text-[#999999] text-[20px] font-bold cursor-pointer' onClick={() => setCollapseWeek(true)} />}
                    </div>

                    
                </div>
 
                {!collapseWeek && 
                    <div>
                    {/* Lecture */}
                    <div>
                        <div className='flex items-center gap-x-2 mt-4'>
                            <TiDocumentText />
                            <p>Lecture</p>
                            <BsPencil  size={12}/>
                            <AiFillCaretDown />
                        </div>

                        <div className='mt-6'>
                            <div className=' min-h-[150px] w-full border break-all p-2' onClick={() => {/**Take the user to the lecture edit page */}}>
                                
                            </div>
                        </div>

                        <div className='flex flex-col gap-y-2 mt-4'>
                            <div className='flex flex-row items-center gap-x-3'>
                            <div className=' font-bold border rounded-md w-full md:w-[350px] h-[50px] flex flex-row items-center gap-x-2 pl-2'>
                                    <IoCheckmarkCircleOutline className='' size={26} color='#94F236'/>
                                    <p>Video upload successful</p>
                                </div> 
                                <p className='text-red-300'>X</p>
                            </div>

                            <div className='flex flex-row items-center gap-x-3'>
                            <div className=' font-bold border rounded-md w-full md:w-[350px] h-[50px] flex flex-row items-center gap-x-2 pl-2'>
                                    <IoCheckmarkCircleOutline className='' size={26} color='#94F236'/>
                                    <p>Content upload successful</p>
                                </div> 
                                <p className='text-red-300'>X</p>
                            </div>
                        </div>
                    </div>


                {/* Resources */}
                <div className='mt-20'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-2 mt-4'>
                            <TiDocumentText />
                            <p>Resources</p>
                            <AiFillCaretDown />
                        </div>
                        <BsTrash color='red' size={14}/> 
                    </div>

                <div className='mt-6'>
                    {/* <TextEditor /> */}
                    <div className=' min-h-[150px] w-full border break-all p-2' >
                    </div>
                </div>

                <div className='flex flex-col gap-y-2 mt-4'>
                    <div className='flex flex-row items-center gap-x-3'>
                    <div className=' font-bold border rounded-md w-full md:w-[350px] h-[50px] flex flex-row items-center gap-x-2 pl-2'>
                            <AiOutlineLink className='' size={26} color='#999999'/>
                            <p>Paste link to resources</p>
                        </div> 
                        
                    </div>

                    <div className='flex flex-row items-center gap-x-3'>
                    <div className=' font-bold border rounded-md w-full md:w-[350px] h-[50px] flex flex-row items-center gap-x-2 pl-2'>
                            <AiOutlineLink className='' size={26} color='#999999'/>
                            <p>Paste link to resources</p>
                        </div> 
                        
                    </div>
                    
                </div>
                </div>

                {/* Quiz/Test/Exam */}
                <div className='mt-20'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-2 mt-4'>
                            <TiDocumentText />
                            <p>Quiz/Test/Exam</p>
                            <AiFillCaretDown />
                        </div>
                        <BsTrash color='red' size={14}/> 
                    </div>

                    <div className='mt-6'>
                        <div className=' min-h-[150px] w-full border break-all p-2' >

                        </div>
                    </div>
                </div>

                {/* Assignment */}
                <div className='mt-20'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-2 mt-4'>
                            <TiDocumentText />
                            <p>Assignment</p>
                            <AiFillCaretDown />
                        </div>
                        <BsTrash color='red' size={14}/> 
                    </div>
                    <div className='mt-6'>
                        <div className=' min-h-[150px] w-full border break-all p-2'>

                        </div>
                    </div>
               
                </div>
                </div>}
                
            </div>
        </div>
    )

}



{/* <NotesSuccessModal success = {success}  setSuccess = {setSuccess}  value = {currentValue} setCurrentValue = {setCurrentValue} week = {week} type = {type} initialState = {initialState} setInitialState = {setInitialState}/> */}