import React, { useEffect } from 'react'

//////////
import { useSelector, useDispatch } from 'react-redux'
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";

/////////
import Button from '../Auth-Components/Button'
import { showCourseModal } from '../../store/courseSlice'

const SelectCoursesModal = ({courses}) => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.course.show_course_modal)
  const total = useSelector(state => state.course.total_courses)


  const closeModal = () => {
    dispatch(showCourseModal(false))
  } 

  return (
    <Dialog as='div' className='fixed w-screen z-50 left-0 bottom-0 sm:inset-0 overflow-y-auto ' open={show} onClose={closeModal}>
      <div className='flex items-end justify-center min-h-screen text-center sm:block sm:p-0 '>
        <Dialog.Overlay className='fixed inset-0 bg-cuddle-purple-500 backdrop-blur-sm bg-opacity-75 transition-opacity ' />

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
          &#8203;
        </span>
        {/* This element is to trick the browser into centering the modal contents. */}
        
        {/* inline-block align-bottom bg-white rounded-tl-xl rounded-tr-xl h-max md:h-auto sm:rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle md:max-w-lg sm:max-w-sm sm:w-full border border-red-300  */}

        {(
          <div className='w-full inline-block align-bottom bg-white rounded-tl-xl rounded-tr-xl h-max md:h-auto sm:rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle  sm:w-full sm:w-[350px] '>
            {
              (courses < 6)
                   ? 
                // If no. of selected courses is less than 6
                (<div className='w-full py-16 flex flex-col items-center justify-content'>

                  <h3 className='text-[18px] font-[500]'>{`You selected ${courses} out of 5`}</h3>

                  <p className='mb-6 text-[#CDCDCD] text-[13px]'>Help us customize your search</p>
                  
                  { courses > 0 ?
                    (<>
                      <div className='flex items-center text-[18px] justify-center bg-[#E8ECFF] mb-4 w-full py-2 cursor-pointer' onClick={closeModal}>Continue</div>
                      <div className='flex items-center text-[18px] justify-center bg-[#E8ECFF] w-full py-2 cursor-pointer' onClick={closeModal}>Go back</div>
                      </>
                    ) : 
                    (<div className='flex items-center text-[18px] justify-center bg-[#E8ECFF] w-full py-2 cursor-pointer' onClick={closeModal}>Go back</div>)
                  }
                </div>)  
                  : 
                  // If no of selected course is more than 5 
                (<div className='w-full py-20 flex flex-col items-center justify-content'>
                  <h3 className='text-[18px] font-[500] text-red-400'>Please select a maximum of 5 courses</h3>

                  <div className='flex items-center text-[18px] justify-center bg-[#E8ECFF] w-full py-2 cursor-pointer' onClick={closeModal}>Go back</div>
                </div>)
          }
          </div>
        )}
        
      </div>
    </Dialog>
  )
}

export default SelectCoursesModal