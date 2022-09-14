import React from 'react'
import { offer } from '../../public'
import TailwindSelect from '../TailwindSelect'

const Content = () => {

    const data = [
        {id: 1, name: "Male"},
        {id: 2, name: "Female"},
    ]

    const data2 = [
        {id: 1, name: "Male"},
        {id: 2, name: "Female"},
    ]

    const initial = {
        name: "Select Gender"
    }

    const initial2 = {
        name: "Select level"
    }

  return (
    <div className='relative w-full h-full bg-[#E5E5E5]  flex flex-col mt-[90px] md:mt-[120px]  md:translate-x-[200px] md:w-[calc(100%-200px)] pl-8 pr-6 py-10'>
        
        <p className='font-bold text-[18px] text-darkBlue'>Profile</p>

        <img src={offer.src} className = 'w-[180px] h-[180px] rounded-full mx-auto mt-24' />

        <div className='flex flex-row gap-x-5 justify-center mt-20'>
            <div className='w-[130px] h-[35px] rounded-md centerFlex bg-darkBlue text-[13px] text-white'>Upload Picture</div>
            <div className='w-[130px] h-[35px] rounded-md centerFlex bg-white text-[13px] text-darkBlue'>Upload Picture</div>
        </div>

        <div className='text-[18px] text-darkBlue font-bold mx-auto mt-8'>Naomi Bell</div>
        <div className='text-[14px] text-darkBlue mx-auto mt-2'>Student, Entreprenuer and Business Associate </div>

        <div className='grid grid-cols-3 mt-10 gap-y-10 items-end'>
            <div>
                <p className='mb-2 text-[14px] text-darkBlue font-bold'>First Name</p>
                <input className='w-[250px] h-[50px] bg-white centerFlex outline-none pl-4 border border-gray-700 rounded-sm' value='Naomi' />
            </div>

            <div>
                <p className='mb-2 text-[14px] text-darkBlue font-bold'>Middle Name</p>
                <input className='w-[250px] h-[50px] bg-white centerFlex outline-none pl-4 border border-gray-700 rounded-sm' value='Naomi' />
            </div>

            <div>
                <p className='mb-2 text-[14px] text-darkBlue font-bold'>Last Name</p>
                <input className='w-[250px] h-[50px] bg-white centerFlex outline-none pl-4 border border-gray-700 rounded-sm' value='Naomi' />
            </div>

            <div>
                <p className='mb-2 text-[14px] text-darkBlue font-bold'>Change Password</p>
                <input className='w-[250px] h-[50px] bg-white centerFlex outline-none pl-4 text-gray-500 border border-gray-700 rounded-sm' value='Old password' />
            </div>

            <div>
                <p className='mb-2 text-[14px] text-darkBlue font-bold'> </p>
                <input className='w-[250px] h-[50px] bg-white centerFlex outline-none pl-4 text-gray-500 border border-gray-700 rounded-sm' value='New Password' />
            </div>

            <div>
                <p className='mb-2 text-[14px] text-darkBlue font-bold'> </p>
                <input className='w-[250px] h-[50px] bg-white centerFlex outline-none pl-4 text-gray-500 border border-gray-700 rounded-sm' value='Re-enter Password' />
            </div>

            <div>
                <p className='mb-2 text-[14px] text-darkBlue font-bold '>Change Password</p>
                <div className='w-[250px]'>
                    <TailwindSelect data = {data} initial = {initial} />
                </div>
            </div>

            <div>
                <p className='mb-2 text-[14px] text-darkBlue font-bold'>Birthday</p>
                <input type="date" className='w-[250px] h-[50px] bg-white centerFlex outline-none pl-4 text-gray-500' value='New Password' />
            </div>

            <div>
                <p className='mb-2 text-[14px] text-darkBlue font-bold'>Country</p>
                <div className='w-[250px]'>
                    <TailwindSelect data = {data} initial = {initial} />
                </div>
            </div>

        </div>

        <div className='text-[14px] text-darkBlue font-bold mt-10'>Work Experience and Education</div>
        <div className='text-[12px] text-darkBlue font-bold'>Tell us about your experience and education to get a personalized learning experience with course recommendations</div>

        <div className='mt-10'>
            <p className='mb-2 text-[14px] text-darkBlue font-bold'>Select your highest level of education</p>
            <div className='w-[250px]'>
                <TailwindSelect data = {data2} initial = {initial2} />
            </div>
        </div>

        <div className='mt-10'>
            <p className='mb-2 text-[14px] text-darkBlue font-bold'> How many years of experience</p>
            <input className='w-[250px] h-[50px] bg-white centerFlex outline-none pl-4 text-gray-500 border border-gray-700 rounded-sm' value='3 years' />
        </div>


        <div className='text-[14px] text-darkBlue font-bold mt-10'>About Me</div>
        <div className='text-[12px] text-darkBlue font-bold mt-2'>Tell us about yourself, such as what you do, what your interests are, and what you hope to get out of your courses.</div>
        <textarea className='w-full min-h-[200px] outline-none shadow-xl rounded-md mt-6'>

        </textarea>

        <div className='flex flex-row gap-x-5 justify-end pr-10 mt-6'>
            <div className='w-[130px] h-[35px] rounded-md centerFlex bg-white text-[13px] border border-darkBlue text-darkBlue'>Edit</div>
            <div className='w-[130px] h-[35px] rounded-md centerFlex bg-darkBlue text-[13px] text-white'>Save</div>
        </div>


    </div>
  )
}

export default Content