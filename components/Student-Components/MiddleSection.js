import React, { forwardRef, useRef, useState } from 'react'

//////////
import StudentCard from './StudentCard'

////
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ProjCard from '../Student-Projects-Components/ProjCard';
import ProjectProfileModal from '../Modal-Components/ProjectProfileModal';

const MiddleSection = () => {

    const singleData = {
        name: "Emeka Samuel",
        image: "https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309__340.png",
        title: "design"
    }

    let data = Array(8).fill(singleData, 0)


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
    <div className='w-full px-4 xl:px-0 xl:w-[1000px] mt-28'>
        <div>
            <p>About</p>
            <div className='w-full h-1 bg-[#E5E5E5] mt-1'>
                <div className='w-[10%] bg-bizpotta-green h-full'></div>
            </div>
            <div className='mt-6'>
                <p className='text-xs text-[#222222]'>Hi,</p>
                <p className='text-xs text-[#222222]'>I am Samantha Oke, a graphic designer at google. I have over 18 years of experience, I can’t wait to meet you and show you how its done. Kindly watch my brief introduction video, so as to know me more.
                Lots of love
                </p>
            </div>
        </div>

        <div className='mt-8'>
            <p>Profile</p>
            <div className='w-full h-1 bg-[#E5E5E5] mt-1'>
                <div className='w-[10%] bg-bizpotta-green h-full'></div>
            </div>

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
                {/* Original Card grid */}
            {/* <div className=' mt-10 lg:w-[780px] xl:w-[1000px] flex flex-row flex-wrap gap-x-[20px] justify-center sm:justify-between gap-y-10 '>
                {data.map((el, index) => ( 
                <StudentCard key={index} data = {el} />
                )
                )}
        
            </div> */}


            {/* This section was borrowed from the Student-Projects-Components */}
            <div className=' mt-10 w-full flex flex-row flex-wrap gap-x-[20px] justify-center sm:justify-between gap-y-10 '>
                    {data.map((el, index) => ( 
                    <ProjCard key={index} data = {el} />
                    )
                    )}
                    <ProjectProfileModal />        
            </div>
        
        </div>
    </div>
  )
}

export default MiddleSection




/**
 * import React from 'react'
import StudentCard from './StudentCard'

const MiddleSection = () => {

    const singleData = {
        name: "Emeka Samuel",
        image: "https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309__340.png",
        title: "design"
    }

    let data = Array(8).fill(singleData, 0)

  return (
    <div className='w-[1000px] mt-28'>
        <div>
            <p>About</p>
            <div className='w-full h-1 bg-[#E5E5E5] mt-1'>
                <div className='w-[10%] bg-bizpotta-green h-full'></div>
            </div>
            <div className='mt-6'>
                <p className='text-xs text-[#222222]'>Hi,</p>
                <p className='text-xs text-[#222222]'>I am Samantha Oke, a graphic designer at google. I have over 18 years of experience, I can’t wait to meet you and show you how its done. Kindly watch my brief introduction video, so as to know me more.
                Lots of love
                </p>
            </div>
        </div>

        <div className='mt-8'>
            <p>Profile</p>
            <div className='w-full h-1 bg-[#E5E5E5] mt-1'>
                <div className='w-[10%] bg-bizpotta-green h-full'></div>
            </div>
            <div className=' mt-10 lg:w-[780px] xl:w-[1000px] flex flex-row flex-wrap gap-x-[20px] justify-center sm:justify-between gap-y-10 '>
                {data.map((el, index) => ( 
                <StudentCard key={index} data = {el} />
                )
                )}
        
            </div>
        
        </div>
    </div>
  )
}

export default MiddleSection
 */