import React from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { MdOutlineCancel } from 'react-icons/md';
import { Fragment } from 'react';



const ComposeModal = ({show, setShow}) => {

    const closeModal = () => {
        setShow(false)
    }

    return (
        <Transition.Root show={show} as={Fragment}>
          <Dialog as="div" static className="fixed z-10 inset-0 overflow-y-auto" open={show} onClose={() => {}}>
            <div className="flex items-center justify-center min-h-screen pt-4 px-2 sm:px-4 pb-10 text-left block sm:p-0  ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
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
                <div className=" relative inline-block align-top mt-24 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all">
    
                  <div className='w-[350px] sm:w-[500px] pb-8 h-[500px] overflow-y-scroll styled-scrollbar bg-white'>
                    <div className='absolute w-10 h-10 top-0 right-2 z-20 centerFlex' onClick = {() => closeModal()}>
                        <MdOutlineCancel color='#7A7575' size={20} />
                    </div>
                    <div className='w-full px-2 sm:px-20 mt-6'>
                        <p className='text-darkBlue text-center darkBlue font-bold text-[14px]'>Send Message</p>

                        <div className='mt-5 '>
                            <p className='text-[12px] font-bold'>To</p>
                            <input className='inputField w-full text-[13px] h-[40px] pl-3' placeholder = 'Click to see agent list'  />
                        </div>

                        <div className='mt-5 '>
                            <p className='text-[12px] font-bold'>Subject</p>
                            <input className='inputField w-full text-[13px] h-[40px] pl-3' placeholder = '' />
                        </div>

                        <div className='mt-5 '>
                            <p className='text-[12px] font-bold'>Subject</p>
                            <input type='date' className='inputField w-full text-[13px] h-[40px] pl-3' placeholder = '' />
                        </div>

                        <div className='mt-5 '>
                            <p className='text-[12px] font-bold'>Subject</p>
                            <textarea type='date' className='inputField w-full text-[13px] min-h-[80px] pl-3' placeholder = 'Type here...' >

                            </textarea>
                        </div>

                        <div className='mt-5 flex justify-end'>
                            <div className='w-[120px] h-[40px] centerFlex text-[13px] bg-darkBlue text-white rounded-md'>Send message</div>
                        </div>


                    </div>
                    
                        
                  </div>
    
    
                  
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      )
  
}

export default ComposeModal