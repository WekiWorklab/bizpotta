import React from 'react'
import { hoverData } from '../Content-Components/Data'
import { searchData } from '../Content-Components/Data'

// <div className='fixed top-[82px] left-[37%] sm:left-[25%] md:left-[25%] lg:left-[29%] xl:left-[33.6%] bg-[#E5E5E5]  w-[200px] md:w-[350px]  rounded-md py-2 px-2'>
    {/* </div> */}

        {/* <Search searchData = {searchData} /> */}



const SearchMenu = ({showHover, showSearch, handleMouseOver, handleMouseOut}) => {

  return (
    <>
        {showSearch ? <Search searchData = {searchData} /> : null }
        { showHover ? <Hover hoverData={hoverData} handleMouseOver = {handleMouseOver} handleMouseOut = {handleMouseOut}/> : null}
    </>
   
  )
}

export default SearchMenu


const Search = ({searchData}) => {

    const imageSrc = 'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

    return(
    // <div className='w-full'>
    <div className='fixed top-[82px] left-[17%] sm:left-[25%] md:left-[25%] lg:left-[29%] xl:left-[33.6%] bg-gray-50 shadow-md w-[300px] md:w-[350px]  rounded-md py-2 px-2'>
        {searchData.map((el, index) => (
            <div key={index} className='flex flex-row h-[70px] items-center'>
                <div className='w-[45px] h-[45px] mr-6'>
                    <img src={imageSrc} alt='' className = ' h-full object-cover rounded-md' />
                </div>
                <div className='flex flex-col justify-center  '>
                    <p className='text-[15px]'> {el.title}</p>
                    <p className='text-[11px]'>{el.name}</p>
                </div>
            </div>
        ))}

    </div>)
}

const Hover = ({hoverData, handleMouseOver, handleMouseOut}) => {

    return(
        // <div className='w-full'>
        <div className='fixed top-[82px] left-[37%] sm:left-[25%] md:left-[25%] lg:left-[29%] xl:left-[33.6%] bg-gray-50 shadow-md w-[300px] md:w-[350px]  rounded-md py-2 px-2' onMouseOver={handleMouseOver} onMouseOut = {handleMouseOut}>
           { hoverData.map((el, index) => (
               <div key={index} className='h-10 text-xs  flex flex-col justify-center rounded-md hover:bg-[#7AA6FA] pl-4'>{el}</div>     
            ))}
        </div>
    )
}