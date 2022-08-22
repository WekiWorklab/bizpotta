import React, { useState, useRef, forwardRef } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// import dynamic from "next/dynamic";
// const DatePicker = dynamic(() => import('react-date-picker/dist/entry.nostyle'), {ssr: false})


const TopSection = () => {

   const ref = useRef({})
   console.log(ref)

    

   const [startDate, setStartDate] = useState(new Date());
   // eslint-disable-next-line react/display-name
   const ExampleCustomInput = forwardRef(({value, onClick }, ref) => (
    <div className="w-[335px] h-[50px] outline-none rounded-md flex pl-6 items-center bg-gray-50 sm:bg-white text-gray-500" onClick={onClick} ref={ref}>
        {value}
    </div>
  ));

const handleChange = (value) => {
    setStartDate(value)
    console.log(value)
}

  return (
    <div className='w-full xl-w-[1000px] pt-10'>

        <p className='text-center lg:text-justify'>My Projects</p>    

        <div className='flex flex-col items-center lg:flex-row pt-8 lg:justify-start'>

            <div className='lg:mr-20 '>
                <p className='mb-2'>Date</p>
               <DatePicker 
                selected={startDate} 
                onChange={(date) => handleChange(date)}
                customInput= {<ExampleCustomInput />}
                /> 
            </div>
            
            <div>
                <p className='mb-2 mt-8 lg:mt-0'>Course title</p>
                <div className='w-[335px] h-[50px] lg:w-[240px] lg:h-[50px] xl:w-[335px] xl:h-[50px] flex flex-row justify-evenly rounded-md items-center border-none bg-gray-50 sm:bg-white '>
                
                <input
                name="tutor"
                // value={state.tutor}
                placeholder='3D Illustration '
                // onChange={handleChange}
                className='h-full w-full focus:outline-none bg-gray-50 sm:bg-white rounded-md pl-4'
                /> 
                </div>
            </div>

            

        </div>
    </div>
  )
}

export default TopSection