import React from 'react'

// import { TextEditor } from '../../TextEditor'


import { AiFillCaretDown, AiOutlineLink } from 'react-icons/ai'
import { BsPencil, BsThreeDotsVertical, BsTrash } from 'react-icons/bs'
import {TiDocumentText} from 'react-icons/ti'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import { TextEditor } from '../../../TextEditor'
import NotesSuccessModal from './NotesSuccessModal'
import { useState } from 'react'

const FirstContent = () => {

    // const [initialState, setInitialState] = useState({section1: "", section2: '', section3: "", section4: ""})
    // const [initialState, setInitialState] = useState({
    //      one:[{lecture: "a"}, {resources: "b"}, {project: "c"}, {test: 'd'}, {assignment: "e"}],
    //      two:[{lecture: ""}, {resources: ""}, {project: ""}, {test: ''}, {assignment: ""}]
    // }
    // )

    const [initialState, setInitialState] = useState([
        {lecture: 'a', resources: 'b', project: "c", test: "d", assignment: "e"},
        {lecture: 'a', resources: 'b', project: "c", test: "d", assignment: "e"}
    ]
   )

    const [success, setSuccess] = useState(false)
    const [currentValue, setCurrentValue] = useState(null)
    const [week, setWeek] = useState(null)
    const [type, setType] = useState(null)

  return (
    <div className=''>
{/* w-full border-[1px] rounded-sm border-gray-500 mt-8 pb-10 px-4 md:pl-10 */}
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
                    <Section value = {initialState[0]} setSuccess = {setSuccess} setCurrentValue = {setCurrentValue} week = {1} setWeek = {setWeek} type = {type} setType = {setType} />
                    

                    <div className='w-[150px] h-[40px] flex justify-center items-center font-bold border rounded-md'> + Add Section</div>
                </div>

                <div className='flex justify-end'>
                    <div className='w-[150px] h-[40px] flex justify-center items-center text-[13px] text-white font-bold border rounded-md bg-darkBlue'>
                        Save changes
                    </div>
                </div>
            </div>


            <NotesSuccessModal success = {success}  setSuccess = {setSuccess}  value = {currentValue} setCurrentValue = {setCurrentValue} week = {week} type = {type} initialState = {initialState} setInitialState = {setInitialState}/>

    </div>
  )
}

export default FirstContent





const Section = ({value, setSuccess, setCurrentValue, week, setWeek, type, setType}) => {

    const handleClick = (clickedType) => {
        setCurrentValue(value[type])
        
        setWeek(week)
        setType(clickedType)
        // setTimeout(() => {
            setSuccess(true)
        // }, 1000);

        // This setTimeout was used because the setstate is asyncronous and setCurrentValue takes time
    }

    return(
        <div className='w-full'>
            <div className='w-full'>
                <div className='flex w-full justify-between items-center'>
                <div>Week 1 <span className='text-gray-400 text-[14px]'>Introduction</span></div> 
                <BsTrash color='red' size={14}/> 
                </div>
 
                {/* Lecture */}
                <div>
                <div className='flex items-center gap-x-2 mt-4'>
                    <TiDocumentText />
                    <p>Lecture</p>
                    <BsPencil  size={12}/>
                    <AiFillCaretDown />
                </div>

                <div className='mt-6'>
                    {/* <TextEditor /> */}
                    <div className=' min-h-[150px] w-full md:w-[480px] sm:w-full border  break-all p-2' onClick={() => handleClick('lecture')}>
                        {value.lecture}
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
                            {/* <BsPencil  size={12}/> */}
                            <AiFillCaretDown />
                        </div>
                        <BsTrash color='red' size={14}/> 
                    </div>

                <div className='mt-6'>
                    {/* <TextEditor /> */}
                    <div className='min-h-[150px] w-full md:w-[480px] sm:w-full border break-all p-2' onClick={() => handleClick('resources')}>
                    {value.resources}
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



                {/* Projects */}
                <div className='mt-20'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-2 mt-4'>
                            <TiDocumentText />
                            <p>Project</p>
                            {/* <BsPencil  size={12}/> */}
                            <AiFillCaretDown />
                        </div>
                        <BsTrash color='red' size={14}/> 
                    </div>

                    <div className='mt-6'>
                        {/* <TextEditor /> */}
                        <div className='min-h-[150px] w-full md:w-[480px] sm:w-full border break-all p-2' onClick={() => handleClick('project')}>
                        {value.project}
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-2 mt-4'>
                        <div className='flex flex-row items-center gap-x-3'>
                        <div className=' font-bold border rounded-md w-full md:w-[480px] h-[50px] flex flex-row items-center gap-x-2 pl-2'>
                                <AiOutlineLink className='' size={26} color='#999999'/>
                                <p>Paste link to resources</p>
                            </div> 
                            
                        </div>

                        <div className='flex flex-row items-center gap-x-3'>
                        <div className=' font-bold border rounded-md w-full md:w-[480px] h-[50px] flex flex-row items-center gap-x-2 pl-2'>
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
                            {/* <BsPencil  size={12}/> */}
                            <AiFillCaretDown />
                        </div>
                        <BsTrash color='red' size={14}/> 
                    </div>

                <div className='mt-6'>
                    {/* <TextEditor /> */}
                    <div className='min-h-[150px] w-full md:w-[480px] sm:w-full border break-all p-2' onClick={() => handleClick('test')}>
                    {value.test}
                    </div>
                </div>

            
                </div>


                {/* Assignment */}
                <div className='mt-20'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-2 mt-4'>
                            <TiDocumentText />
                            <p>Assignment</p>
                            {/* <BsPencil  size={12}/> */}
                            <AiFillCaretDown />
                        </div>
                        <BsTrash color='red' size={14}/> 
                    </div>

                <div className='mt-6'>
                    {/* <TextEditor /> */}
                    <div className='min-h-[150px] w-full md:w-[480px] sm:w-full border break-all p-2' onClick={() => handleClick('assignment')}>
                    {value.assignment}
                    </div>
                </div>

               
                </div>


                
            </div>
        </div>
    )
}



