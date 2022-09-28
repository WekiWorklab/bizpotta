import React from 'react'
import { useState } from 'react'
import { AiFillCaretDown, AiOutlinePicture } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { showUploadModal } from '../../../../store/courseSlice'
import InputForm from './InputForm'
import UploadingModal from './UploadingModal'
import UploadingSuccessModal from './UploadingSuccessModal'

const InstructorProfile = () => {

    const [select, setSelect] = useState('instructor')
    const [files, setFiles] = useState([])

    const dispatch = useDispatch()


    const handleSubmit = () => {
        dispatch(showUploadModal(true))
    }


  return (

    <div className='w-full'>

        <div className='w-full border-[1px] rounded-sm border-gray-500 mt-8 pb-10 px-4 md:pl-10'>
            <p className='text-[14px] font-bold mt-10'>Resources</p>
            <p className='text-[13px] mt-4'>We have shared helpful of resources, if you need more assistance, kindly contact us on our Helpline or you can ask for help in <span className='text-seaBlue'>Bizpotta Instructor&#39;s Community</span></p>
            
            <div className='flex flex-row gap-x-4 items-center mt-8'>
                <div className='w-[7px] h-[7px] rounded-full bg-seaBlue'></div>
                <div className='text-seaBlue'>Get started with teaching</div>
            </div>
            <div className='flex flex-row gap-x-4 items-center mt-8'>
                <div className='w-[7px] h-[7px] rounded-full bg-seaBlue'></div>
                <div className='text-seaBlue'>Video setup &#38; equipment</div>
            </div>
            <div className='flex flex-row gap-x-4 items-center mt-8'>
                <div className='w-[7px] h-[7px] rounded-full bg-seaBlue'></div>
                <div className='text-seaBlue'>Course quality requirement</div>
            </div>
            <div className='flex flex-row gap-x-4 items-center mt-8'>
                <div className='w-[7px] h-[7px] rounded-full bg-seaBlue'></div>
                <div className='text-seaBlue'>Audio and video editing</div>
            </div>
            <div className='flex flex-row gap-x-4 items-center mt-8'>
                <div className='w-[7px] h-[7px] rounded-full bg-seaBlue'></div>
                <div className='text-seaBlue'>Tips on building outstanding courses</div>
            </div>

        </div>


        {/* Instructor Profile Form */}

        <div className='px-4 md:px-10 bg-white py-8 mt-10 rounded-md shadow-xl '>
            <p className='font-bold'>Instructor Profile</p>

            <div className=' mt-6'>
                <p className='text-[13px] font-bold'>Name</p>
                <div className='flex flex-col gap-y-5 sm:flex-row gap-x-8 mt-2'>
                   <InputForm width='300px' placeholder='First Name' type='text'/>
                   <InputForm width='300px' placeholder='Surname' type='text'/> 
                </div>
            </div>

            <div className=' mt-6'>
                <p className='text-[13px] font-bold'>Phone number</p>
                <div className='flex flex-row mt-2 items-center w-[300px] sm:w-[440px] rounded-md border border text-[14px]'>
                    <div className='w-[50px] h-full bg-white flex justify-center items-center'>
                        +234
                    </div>
                    <input 
                        type='number'
                        name='phone'
                        className={`h-[40px] w-full bg-[#FCFDFE] border-0 text-gray-600 pl-4 text-[14px] focus:ring-0 focus:outline-none`}
                    /> 
                </div>
            </div>

            <div className=' mt-6'>
                <p className='text-[13px] font-bold'>Address</p>
                <div className='flex flex-row  mt-2'>
                   <InputForm width='500px' placeholder='' type='text'/>
                </div>
            </div>

            <div className=' mt-6'>
                <p className='text-[13px] font-bold'>Date of Birth</p>
                <div className='flex flex-row text-base mt-2'>
                   <InputForm width='300px' placeholder='' type='date'/>
                </div>
            </div>

            <div className='flex flex-row items-center gap-x-6 mt-8'>
                <div className='flex items-center px-4 py-4 border rounded-lg shadow-md' >
                    <AiOutlinePicture />
                    <p className='text-[12px] ml-2'>Upload Instructors photo</p>
                    <label htmlFor='file' className='w-[100px] h-[30px] bg-darkBlue text-white flex flex-row justify-center items-center rounded-md gap-x-4 ml-6 cursor-pointer'>
                        <input type='file' id='file' accept='.png, .jpeg, .jpg' onChange={() => setFiles(e.target.value)} className = 'hidden'/>
                        <p className='text-[12px]'>Browse</p>
                        <AiFillCaretDown color='white'/>
                    </label>
                </div>
            </div>

            <div className=' mt-6'>
                <p className='text-[13px] font-bold'>Headline</p>
                <div className='flex flex-row  mt-2'>
                   <InputForm width='500px' placeholder='Example: Engineer, Barrister' type='text'/>
                </div>
            </div>


            <div className=' mt-6'>
                <p className='text-[13px] font-bold'>Instructor Bio</p>
                <textarea className='w-full md:w-[600px] min-h-[200px] bg-[#FCFDFE] focus:ring-0 focus:outline-none border rounded-md text-gray-600 pl-4 text-[14px]'>

                </textarea>
                <p className='text-[13px] text-[#C4C4C4]'>Minimum of 1000 words</p>
            </div>

            
            <div className=' mt-16'>
                <p className='text-[13px] font-bold'>Address</p>
                <p className='text-[12px] font-bold'> Give your course a name</p>
                <p className='text-[11px] '>Its nothing to worry about, you can change it later</p>
                <div className='flex flex-row  mt-2'>
                   <InputForm width='500px' placeholder='Example: Fundamentals of DSLR Photography' type='text'/>
                </div>
            </div>

            <div className=' mt-6'>
                <p className='text-[13px] font-bold'>What industry would you be teaching in</p>
                <div className='flex flex-row  mt-2'>
                   <InputForm width='500px' placeholder='Select one' type='text'/>
                </div>
            </div>

            <div className=' mt-6'>
                <p className='text-[13px] font-bold'>How many years of experience do you have in this field?</p>
                <div className='flex flex-row  mt-2'>
                   <InputForm width='300px' placeholder='Select' type='text'/>
                </div>
            </div>

            <div className=' mt-6'>
                <p className='text-[13px] font-bold'>How much training material do you have?</p>
                <div className='flex flex-row  mt-2'>
                   <InputForm width='500px' placeholder='Select one' type='text'/>
                </div>
            </div>

            <div className=' mt-6'>
                <p className='text-[13px] font-bold'>How much do you make from teaching this course?</p>
                <div className='flex flex-row  mt-2'>
                   <InputForm width='500px' placeholder='Select one' type='text'/>
                </div>
            </div>

            <div className=' mt-6'>
                <p className='text-[13px] font-bold'>How much time do you have in creating your course weekly?</p>
                <p className='text-[12px] '>It is nothing to worry about, we will help you acheive your goals</p>
                <div className='flex flex-row  mt-2'>
                   <InputForm width='500px' placeholder='Select one' type='text'/>
                </div>
            </div>


            <div className=' mt-16'>
                <p className='text-[13px] font-bold'>Social Handles</p>
                <p className='text-[12px] font-semibold mt-2'>Websites</p>
                <div className='flex flex-row  mt-2'>
                   <InputForm width='500px' placeholder='Select one' type='text'/>
                </div>
            </div>


            <div className='text-center text-[13px] text-bg-gray-300 mt-6'>
                Add social links + 
            </div>


            <div className='flex justify-end mt-6'>
                <div className='w-[120px] h-[45px] flex items-center justify-center bg-darkBlue text-white text-[13px] font-bold rounded-md cursor-pointer' onClick = {() => handleSubmit()}>
                    Save changes
                </div>
            </div>



        </div>


        {/* Uploading modal  */}

        <UploadingModal />
        <UploadingSuccessModal />

        

        {/* Success modal  */}


        </div>
    
  )
}

export default InstructorProfile