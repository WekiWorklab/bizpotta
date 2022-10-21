import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import { AiOutlineFilePdf, AiOutlineVideoCamera } from 'react-icons/ai'
import { TextEditor } from '../../../TextEditor'
import { TextEditorNotesModal } from './TextEditorNotesModal'

const EditWeek = () => {

    const router = useRouter()
    const API_KEY = process.env.NEXT_PUBLIC_TINY_API_KEY


  return (
    <div className='relative w-full min-h-screen bg-[#FDFDFD] flex flex-col mt-[90px] md:mt-[120px] md:justify-start items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-2 xl:px-16 py-10 text-darkGray'>


        {router.query.type === "lecture" && <LectureEdit API_KEY = {API_KEY}/>}
        {router.query.type === "assignment" && <AssignmentEdit API_KEY = {API_KEY}/>}
        {router.query.type === "resource" && <ResourceEdit API_KEY = {API_KEY} />}

    </div>
  )
}

export default EditWeek



const ResourceEdit = ({API_KEY}) => {


    return(
        <div className='w-full'>
            <p className='text-[14px] font-bold'>Resources</p>
            
            <div className='min-h-400px mt-7'>
                <TextEditorNotesModal api_key={API_KEY}/>
            </div>   

            <label htmlFor='file' className='mt-5 flex w-[300px] h-[40px] inputField items-center gap-x-3 px-2 cursor-pointer'>
                <AiOutlineFilePdf color='gray' size={24}/>
                <p className='mt-[0.5px] text-[13px] text-[#999999]'>Click to upload multiple resource files</p>
                <input type='file' id='file' multiple accept='.pdf, .docx, .pptx, .xslx, .png, .jpeg' className='hidden' />
            </label>    


            <p className='text-[#999999] text-[13px] mt-8'>Links to other resources go here</p>
            <div className = ''>
                <input type = "text" className="inputField w-[320px] sm:min-w-[400px] mt-6" value = {inputValue.value1} name = 'value1' onChange={(e) => handleChange(e)} placeholder = 'paste link here'/>

                {counter > 1 && <input type = "text" className="inputField w-[320px] sm:min-w-[400px] mt-6" value = {inputValue.value2} name = 'value2' onChange={(e) => handleChange(e)} placeholder = 'paste link here'/> }

                {counter > 2 && <input type = "text" className="inputField w-[320px] sm:min-w-[400px] mt-6" value = {inputValue.value3} name = 'value3' onChange={(e) => handleChange(e)} placeholder = 'paste link here'/> }

                {counter > 3 && <input type = "text" className="inputField w-[320px] sm:min-w-[400px] mt-6" value = {inputValue.value4} name = 'value4' onChange={(e) => handleChange(e)} placeholder = 'paste link here'/> }

                {counter > 4 && <input type = "text" className="inputField w-[320px] sm:min-w-[400px] mt-6" value = {inputValue.value5} name = 'value5' onChange={(e) => handleChange(e)} placeholder = 'paste link here'/> }

                <div className="text-darkBlue text-[13px] cursor-pointer mt-3" onClick={() => handleAddLinks()}>+ add another link</div>

            </div>


            <button className='w-[120px] h-[40px] centerFlex bg-darkBlue text-white text-[13px] font-bold rounded-md cursor-pointer mt-16'>
                Save Changes
            </button>
        </div>
    )
}


const AssignmentEdit = ({API_KEY}) => {


    return(
        <div className='w-full'>
            <p className='text-[14px] font-bold'>Assignment</p>
            <div className='min-h-400px mt-7'>
                <TextEditorNotesModal api_key={API_KEY}/>
            </div>
            

            <button className='w-[120px] h-[40px] centerFlex bg-darkBlue text-white text-[13px] font-bold rounded-md cursor-pointer mt-16'>
                Save Changes
            </button>
        </div>
    )
}


const LectureEdit = ({API_KEY}) => {


    return(
        <div className='w-full'>
            <p className='text-[14px] font-bold'>Lecture</p>
            <div className='min-h-400px mt-7'>
                <TextEditorNotesModal api_key={API_KEY}/>
            </div>
            <label htmlFor='file' className='mt-5 flex w-[300px] h-[40px] inputField items-center gap-x-3 px-2 cursor-pointer'>
                <AiOutlineVideoCamera color='gray' size={24}/>
                <p className='mt-[0.5px] text-[13px] text-[#999999]'>Upload the lecture video</p>
                <input type='file' id='file' className='hidden' />
            </label>

            <button className='w-[120px] h-[40px] centerFlex bg-darkBlue text-white text-[13px] font-bold rounded-md cursor-pointer mt-16'>
                Save Changes
            </button>
        </div>
    )
}