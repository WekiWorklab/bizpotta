import React from 'react'
import { TextEditor } from '../TextEditor'

const Content = () => {

    
const API_KEY = process.env.NEXT_PUBLIC_TINY_API_KEY

  return (
    <div className='relative w-full h-full min-h-[100vh] bg-white sm:bg-gray-50 flex flex-col pt-[90px] md:pt-[120px]   md:translate-x-[200px]  md:w-[calc(100%-200px)] px-2 lg:pl-8 lg:pr-10 pb-10 text-darkBlue'>
        <div className='mt-10'>
            <p className='text-[15px] font-bold'>Message</p>
            <div className='w-full mt-8 bg-white rounded-md pt-8 pb-6'>
                <div className='flex flex-row text-[13px] pl-8 gap-x-24 border-b-2'>
                    <p className='border-b-[3px] border-darkBlue'>Inbox</p>
                    <p>Updates</p>
                    <p>Message</p>
                </div>

                <div className='w-[600px] mx-auto pt-16'>
                    <p>Search</p>
                    <textarea className='w-full h-[45px] bg-gray-50  rounded-md' ></textarea>

                    <div className='w-full max-h-[500px] overflow-y-scroll bg-gray-50 border-2 rounded-md px-4 py-4 mt-10 styled-scrollbar'>
                        <p className='flex flex-row w-full justify-end mb-4'>filter</p>
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                    </div>

                    <p className='mt-12 mb-2'> Message</p>
                    <div className='w-full bg-gray-50 border  rounded-md p-4'>
                        <div className='w-full min-h-[100px] bg-white  rounded-md'>
                            <TextEditor api_key = {API_KEY} />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}


const Notification = () => {
    return(
        <div className='flex flex-row mb-6 items-center gap-x-4 '>
            <input type='checkbox' className='w-4 h-4 text-darkBlue focus:ring-0' />
            <div className='bg-green-400 h-[25px] w-[60px]'></div>
            <div className='flex flex-col text-sm'>
                <p className='font-bold'>Bizpotta</p>
                <p className='text-[13px] leading-none'>Euismod quam risus, urna at gravida porta non nec. Vel non, justo</p>
            </div>
        </div>
    )
}

export default Content