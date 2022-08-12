import React from 'react'
import Modal from 'react-modal'
import { useSelector, useDispatch } from 'react-redux'
import { showCourseModal } from '../../store/courseSlice'

import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";

import Button from '../Auth-Components/Button'

// import { showCourseModal } from '../../store/courseSlice'

const SelectCoursesModal = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.course.show_course_modal)
  
  const closeModal = () => {
    dispatch(showCourseModal(false))
  } 

  

  console.log('kjhgfdckhgfcvbnjki')

  return (
    <Dialog as='div' className='fixed z-50 left-0 bottom-0 sm:inset-0 overflow-y-auto' open={open} onClose={() => {}}>
      <div className='flex items-end justify-center min-h-screen text-center sm:block sm:p-0'>
        <Dialog.Overlay className='fixed inset-0 bg-cuddle-purple-500 backdrop-blur-sm bg-opacity-75 transition-opacity' />

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
          &#8203;
        </span>
        {/* This element is to trick the browser into centering the modal contents. */}
        
        {later == 1 && (
          <div className='inline-block align-bottom bg-white rounded-tl-xl rounded-tr-xl h-max md:h-auto sm:rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle md:max-w-lg sm:max-w-sm sm:w-full sm:p-6'>
            <>
              <div className='w-full'>
                <h3 className='text-cuddle-gray-800 font-bold text-heading-2-mobile mt-2 px-4 text-left w-4/5 items-start leading-8'>How it works</h3>
              </div>
              <p className='text-cuddle-gray-800 text-sm my-4 mx-4'>
                It is simple to start earning money as an affiliate with Cuddle affiliate program
              </p>
              {/* image */}
              <div className='w-full flex justify-center items-center p-8 mb-10'>
                <img src='/images/modal2.png' alt='affiliate-modal' className='w-full h-full' />
              </div>
              <div className='w-full mt-7 mb-10 mx-4 px-4'>
                <div className='w-full flex justify-between items-center'>
                  <a
                    onClick={() => {
                      setLater(0);
                    }}
                    className='cursor-pointer text-cuddle-gray-800 font-normal text-heading-4-mobile mt-2 px-4 text-left w-2/3 items-start leading-6'
                  >
                    Back
                  </a>
                  {/* <Button/>
                    title={"I'm in"}
                    onClick={() => {
                      handleLater();
                    }}
                    isLoading={loading}
                    containerStyle='w-1/3'
                  /> */}
                </div>
              </div>
            </>
          </div>
        )}
        
      </div>
    </Dialog>
  )
}

export default SelectCoursesModal