import React from 'react'
import HoverSearch from './HoverSearch'

const Input = () => {
  return (
    <>
    <input className='w-[160px] ml-2 sm:w-[200px] md:w-[350px] outline-none pl-2 text-xs sm:text-sm md:text-base border-2 rounded-l-md border-r-0' placeholder='What do you want to learn'/>
    <HoverSearch />
    </>
    
  )
}

export default Input



