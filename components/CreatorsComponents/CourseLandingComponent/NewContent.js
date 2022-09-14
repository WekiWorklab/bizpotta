import { useRouter } from 'next/router'
import React from 'react'
import { AiFillCaretDown, AiOutlineCloudUpload, AiOutlinePicture, AiOutlinePrinter } from 'react-icons/ai'
import { BiNote } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import { FiSave } from 'react-icons/fi'
import { HiOutlinePaperAirplane } from 'react-icons/hi'
import InputForm from './InstructorProfileComponent/InputForm'



const NewContent = () => {

    const router = useRouter()

    const handleSubmit = () => {
        router.push('/creators/courses')
    }

  return (
    <div className='relative w-full h-full bg-white flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-2 py80 text-darkGray mb-10'>
        <div className='w-full flex flex-col'>

        <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
                <p className='text-[15px] font-bold text-darkBlue'>Lets  get you set up</p>
                <p className='text-[12px]'>You can make edits at anytime</p>
            </div>

            <div className='flex flex-row justify-evenly items-center shadow-md w-[70px] h-[27px] rounded-md border cursor-pointer' onClick={() => router.push('/creators/courses')}>
                <p className='text-[13px]'>Skip</p>
                <BsArrowRight size={14} />
            </div>
        </div>

        <div className='w-full flex flex-row justify-between'>
            {/* form */}
            <div className='px-10 bg-white py-8 mt-10 rounded-md shadow-xl w-[700px]'>
                <p className='font-bold'>Instructor Profile</p>

                <div className=' mt-6'>
                    <p className='text-[13px] font-bold'>Name</p>
                    <div className='flex flex-row gap-x-8 mt-2'>
                    <InputForm width='300px' placeholder='First Name' type='text'/>
                    <InputForm width='300px' placeholder='Surname' type='text'/> 
                    </div>
                </div>

                <div className=' mt-6'>
                    <p className='text-[13px] font-bold'>Phone number</p>
                    <div className='flex flex-row mt-2 items-center w-[440px] rounded-md border border text-[14px]'>
                        <div className='w-[50px] h-full bg-white flex justify-center items-center'>
                            +234
                        </div>
                        <input 
                            type='number'
                            name='phone'
                            className={`h-[40px] w-[400px] bg-[#FCFDFE] border-0  text-gray-300 pl-4 text-[14px] focus:ring-0 focus:outline-none`}
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
                        <div className='w-[100px] h-[30px] bg-darkBlue text-white flex flex-row justify-center items-center rounded-md gap-x-4 ml-6'>
                            <p className='text-[12px]'>Browse</p>
                            <AiFillCaretDown color='white'/>
                        </div>
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
                    <textarea className='w-[600px] min-h-[200px] bg-[#FCFDFE] focus:ring-0 focus:outline-none border rounded-md text-[#C4C4C4] pl-4 text-[14px]'>

                    </textarea>
                    <p className='text-[13px] text-[#C4C4C4]'>Minimum of 1000 words</p>
                </div>

                
                <div className=' mt-16'>
                    <p className='text-[14px] font-bold mb-4'>About your course</p>
                    <p className='text-[12px] font-bold'> Give your course a name</p>
                    <p className='text-[11px] '>Its nothing to worry about, you can change it later</p>
                    <div className='flex flex-row  mt-2'>
                    <InputForm width='500px' placeholder='Example: Fundamentals of DSLR Photography' type='text'/>
                    </div>
                </div>

                <div className=' mt-10'>
                    <p className='text-[13px] font-bold'>What industry would you be teaching in</p>
                    <div className='flex flex-row  mt-2'>
                    <InputForm width='500px' placeholder='Select one' type='text'/>
                    </div>
                </div>

                <div className=' mt-10'>
                    <p className='text-[13px] font-bold'>How many years of experience do you have in this field?</p>
                    <div className='flex flex-row  mt-2'>
                    <InputForm width='300px' placeholder='Select' type='text'/>
                    </div>
                </div>

                <div className=' mt-10'>
                    <p className='text-[13px] font-bold'>How much training material do you have?</p>
                    <div className='flex flex-row  mt-2'>
                    <InputForm width='500px' placeholder='Select one' type='text'/>
                    </div>
                </div>

                <div className=' mt-10'>
                    <p className='text-[13px] font-bold'>How much do you make from teaching this course?</p>
                    <div className='flex flex-row  mt-2'>
                    <InputForm width='500px' placeholder='Select one' type='text'/>
                    </div>
                </div>

                <div className=' mt-10'>
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
                    <div className='w-[120px] h-[45px] flex items-center justify-center bg-darkBlue text-white text-[13px] font-bold rounded-md hover:cursor-pointer' onClick = {() => handleSubmit()}>
                        Save changes
                    </div>
                </div>



            </div>
            {/* form */}
{/* #121F4C */}

            
            <div className=' w-[260px] flex flex-col items-center mt-32 gap-y-8'>
                <div className='w-full h-[47px] flex flex-row justify-center items-center rounded-xl gap-x-10 text-white bg-darkBlue'>
                    <FiSave size={24}  color = 'white'/>
                    <p>Instructor Profile</p>
                </div>

                <div className='w-full h-[47px] flex flex-row justify-center items-center rounded-xl gap-x-10 text-white bg-gray-200'>
                    <AiOutlineCloudUpload size={24}  color = 'black'/>
                    <p className='text-black'>About course</p>
                </div>

                <div className='w-full h-[47px] flex flex-row justify-center items-center rounded-xl gap-x-10 text-white bg-gray-200'>
                    <AiOutlinePrinter size={24}  color = 'black'/>
                    <p className='text-black'>Payment plan</p>
                </div>

                <div className='w-full h-[47px] flex flex-row justify-center items-center rounded-xl gap-x-10 text-white bg-gray-200'>
                    <BiNote size={24}  color = 'black'/>
                    <p className='text-black'>Social links</p>
                </div>

                <div className='w-full h-[47px] flex flex-row justify-center items-center rounded-xl gap-x-10 text-white bg-gray-200'>
                    <HiOutlinePaperAirplane size={24}  color = 'black' className='rotate-45'/>
                    <p className='text-black'>Social links</p>
                </div>
            </div>


            <div>

            </div>
        </div>


        </div>
    </div>
  )
}

export default NewContent