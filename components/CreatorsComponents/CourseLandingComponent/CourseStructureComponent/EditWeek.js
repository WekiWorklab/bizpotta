import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import { AiOutlineFilePdf, AiOutlineVideoCamera } from 'react-icons/ai'
import { TextEditor } from '../../../TextEditor'
import { TextEditorNotesModal } from './TextEditorNotesModal'

const EditWeek = () => {

    // const [params, setParams] = useState({})
    const router = useRouter()
    // useEffect(() => {
    //     const []
    // }, [router])

  return (
    <div className='relative w-full h-full bg-[#FDFDFD] flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-2 xl:px-16 py-10 text-darkGray'>

        {router.query.type === "lecture" && <LectureEdit />}
        {router.query.type === "assignment" && <AssignmentEdit />}
        {router.query.type === "resource" && <ResourceEdit />}

    </div>
  )
}

export default EditWeek









const ResourceEdit = () => {

    const API_KEY = process.env.NEXT_PUBLIC_TINY_API_KEY

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

            <div className='w-[120px] h-[40px] centerFlex bg-darkBlue text-white text-[13px] font-bold rounded-md cursor-pointer mt-16'>
                Save Changes
            </div>
        </div>
    )
}

/**
<div className='min-h-400px mt-7'>
                <TextEditorNotesModal api_key={API_KEY}/>
            </div>
 */

const AssignmentEdit = () => {

    const API_KEY = process.env.NEXT_PUBLIC_TINY_API_KEY

    return(
        <div className='w-full'>
            <p className='text-[14px] font-bold'>Assignment</p>
            <div className='min-h-400px mt-7'>
                <TextEditorNotesModal api_key={API_KEY}/>
            </div>
            

            <div className='w-[120px] h-[40px] centerFlex bg-darkBlue text-white text-[13px] font-bold rounded-md cursor-pointer mt-16'>
                Save Changes
            </div>
        </div>
    )
}


const LectureEdit = () => {

    const API_KEY = process.env.NEXT_PUBLIC_TINY_API_KEY

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

            <div className='w-[120px] h-[40px] centerFlex bg-darkBlue text-white text-[13px] font-bold rounded-md cursor-pointer mt-16'>
                Save Changes
            </div>
        </div>
    )
}