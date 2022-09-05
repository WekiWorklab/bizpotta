import React, { Fragment, useEffect } from 'react'

//////////
import { useSelector, useDispatch } from 'react-redux'
import { Dialog, Transition } from "@headlessui/react";
import {MdAddCircleOutline} from 'react-icons/md'
import {AiOutlineHeart, AiOutlineLink, AiOutlineLoading3Quarters} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import { showUploadModal, showUploadSuccessModal } from '../../../store/courseSlice';

//////////


const NotesErrorModal = ({error, setError, success, setSuccess}) => {

  const closeModal = () => {
        setError(false)
  } 

  return (
    <Transition.Root show={error} as={Fragment}>
      <Dialog as="div" static className="fixed z-10 inset-0 overflow-y-auto" open={error} onClose={closeModal}>
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center block sm:p-0  ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity redBorder" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-top bg-white rounded-lg overflow-hidden shadow-xl transform transition-all">
              <div className='w-[230px] h-[230px] flex flex-col items-center justify-center'>
                    <p className=''>Oops</p>
                    <p className='text-[13px] mt-4 text-gray-500'>Video quality does not meet the standard</p>
                    <p className='text-[13px] mt-2 text-gray-500'>kindly read our <span className="text-seaBlue">Course quality requirements</span></p>
                    <div className='w-[80px] h-[30px] flex justify-center items-center text-[14px] text-white bg-darkBlue mt-4 rounded-md' onClick={() => {closeModal(); setSuccess(true)}}>
                        Continue
                    </div>
              </div>


              
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default NotesErrorModal




