import React from 'react'
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