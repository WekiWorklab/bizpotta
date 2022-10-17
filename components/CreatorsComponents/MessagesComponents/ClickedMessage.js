import React from 'react'
import { specialization } from '../../../public'

const Content = () => {


  return (
    <div className='relative w-full h-full bg-[#FEFEFE] flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-2 xl:px-8 py-12 text-darkGray'>

    <p className='text-darkBlue font-bold'>Messages</p>

    <div className='w-full border-[1px] border-[#CCCCCC] border-opacity-[0.45] rounded-md py-8 px-6 mt-10'>

        <div className='flex items-center justify-start gap-x-2'>
            <img src={specialization.src} alt='' className='w-[60px] h-[60px] rounded-full' />
            <div className='text-[13px]'>
                <p className='font-bold'>Emeka Jesus</p>
                <p className=''>DHLExpress@gmail.com</p>
            </div>
        </div>

        <div className='mt-10 break-words text-[14px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada sit lacus, eget consectetur sapien pretium duis. Amet, tellus purus ipsum in. Lobortis sagittis quis malesuada consequat. Turpis tempor est vel tristique. Lobortis sagittis quis malesuada consequat. Turpis tempor est vel tristique. Lobortis sagittis quis malesuada consequat. Turpis tempor est vel tristique. Lobortis sagittis quis malesuada consequat. Turpis tempor est vel tristique. Lobortis sagittis quis malesuada consequat. Turpis tempor est vel tristique. Lobortis sagittis quis malesuada consequat. Turpis tempor est vel tristique.  <br></br> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada sit lacus, eget consectetur sapien pretium duis. Amet, tellus purus ipsum in. Lobortis sagittis quis malesuada consequat. Turpis tempor est vel tristique. Lobortis sagittis quis malesuada consequat. Turpis tempor est vel tristique. Lobortis sagittis quis malesuada consequat. Turpis tempor est vel tristique. Lobortis sagittis quis malesuada consequat. Turpis tempor est vel tristique. Lobortis sagittis quis malesuada consequat. Turpis tempor est vel tristique. Lobortis sagittis quis malesuada consequat. Turpis tempor est vel tristique.  <br></br> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada sit lacus, eget consectetur sapien pretium duis. Amet, tellus purus ipsum in. Lobortis sagittis quis malesuada consequat. Turpis tempor est vel tristique. Lobortis sagittis quis malesuada consequat. Turpis tempor est vel tristique. Lobortis sagittis quis malesuada consequat. Turpis tempor est vel tristique. Lobortis sagittis quis malesuada consequat. Turpis tempor est vel tristique. Lobortis sagittis quis malesuada consequat. Turpis tempor est vel tristique. Lobortis sagittis quis malesuada consequat. Turpis tempor est vel tristique.
        </div>


        <div className='text-darkBlue font-bold mt-10'>Attachments</div>

    </div>


    </div>
  )
}

export default Content