import React, { useState } from 'react'

////////////
import {BiSearchAlt} from 'react-icons/bi'

const TopSection = () => {
    const [state, setState] = useState({tutor: "", student:"", courses:''})

   
    const handleChange = () => {
        const {name, value} = event.target
        const newData = {[name]: value}
        setState((prev) => ({...prev.course, ...newData}))
    }

    

  return (
    <div className='lg:w-[780px] xl:w-[1100px] mt-10'>
        <p>Projects</p>
        <div className='flex flex-col w-full lg:flex-row mt-6 sm:justify-between '>
            {/* Search Input */}
            <div>
                <p className='text-sm lg:mb-[10px]'>Tutor</p>
                <div className='w-[335px] h-[50px] lg:w-[240px] lg:h-[50px] xl:w-[335px] xl:h-[60px] flex flex-row justify-evenly rounded-md items-center border-none bg-gray-50 sm:bg-white '>
                   <input
                    name="tutor"
                    value={state.tutor}
                    placeholder='Timothy Andrew'
                    onChange={handleChange}
                    className='h-full w-[260px] focus:outline-none bg-gray-50 sm:bg-white'
                    /> 
                    <BiSearchAlt size={20} color="#121F4C" className='' />
                </div>
            </div>


            {/* Search Input */}
            <div className='mt-6 lg:mt-0'>
                <p className='text-sm lg:mb-[10px]'>Student</p>
                <div className='w-[335px] h-[50px] lg:w-[240px] lg:h-[50px] xl:w-[335px] xl:h-[60px] flex flex-row justify-evenly rounded-md items-center border-none bg-gray-50 sm:bg-white  '>
                   <input
                    name="student"
                    value={state.student}
                    placeholder='Emeka Samuel'
                    onChange={handleChange}
                    className='h-full w-[260px] focus:outline-none bg-gray-50 sm:bg-white '
                    /> 
                    <BiSearchAlt size={20} color="#121F4C" className='' />
                </div>
            </div>

            {/* Select Input */}
            <div className='mt-6 lg:mt-0'>
                <p className='text-sm lg:mb-[10px]'>Course title</p>
                    <select value={state.course} onChange={handleChange} placeholder='' className='w-[335px] h-[50px] lg:w-[240px] lg:h-[50px] xl:w-[335px] xl:h-[60px] flex flex-row justify-evenly rounded-md items-center border-none bg-gray-50 sm:bg-white focus:outline-none appearance-none '>
                        <option value="3d illustration" >3D Illustration</option>
                        <option value="photography">Photography</option>
                        <option value="react js">React JS</option>
                        <option value="firebase">Firebase</option>                         
                    </select>        
            </div>
        </div>
    </div>
  )
}

export default TopSection