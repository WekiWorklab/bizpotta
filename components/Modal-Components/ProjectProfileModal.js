import React, { Fragment, useEffect } from 'react'
// import Modal from 'react-modal'
import { useSelector, useDispatch } from 'react-redux'
import { showCourseModal, showProfileModal } from '../../store/courseSlice'

import { Dialog, Transition } from "@headlessui/react";
import {MdAddCircleOutline} from 'react-icons/md'
import {AiOutlineHeart, AiOutlineLink} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
// import { showCourseModal } from '../../store/courseSlice'

const ProjectProfileModal = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.course.show_profile_modal)

  const image = 'https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309__340.png'

  const closeModal = () => {
    dispatch(showProfileModal(false))
  } 

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" static className="fixed z-10 inset-0 overflow-y-auto" open={show} onClose={closeModal}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
            <div className="inline-block align-bottom bg-gray-50 rounded-lg pl-4 pt-4  pb-1 text-left overflow-y-scroll shadow-xl transform transition-all sm:my-8 sm:align-middle w-[800px] max-h-[400px]  styled-scrollbar">
                <div className='w-full min-h-[400px] flex flex-row'>
                    <div className='flex flex-col w-[500px] '>
                        <div className='h-6 w-[150px] bg-white text-xs flex justify-evenly items-center self-end rounded-[6px]'>
                          <AiOutlineLink size={17} />
                          <p>Copy Projects Link</p>
                          </div>
                        <p className='text-[14px] font-[600]'>Savy Monkey</p>
                        <div className='w-[100%] h-[180px] rounded-[6px] bg-no-repeat bg-cover bg-center shadow-xl' style={{backgroundImage: `url(${image})`}}>

                        </div>
                        <p className='text-[14px] mt-6'>Description</p>
                        <p className='text-xs mt-2'>
                        Up until version 1.8.0, this package was using Moment.js. Starting v2.0.0, we switched to using date-fns, which uses native Date objects, to reduce the size of the package. If youre switching from 1.8.0 to 2.0.0 or higher, please see the updated example above of check out the examples site for up to date examples.
                        Up until version 1.8.0, this package was using Moment.js. Starting v2.0.0, we switched to using date-fns, which uses native Date objects, to reduce the size of the package. If youre switching from 1.8.0 to 2.0.0 or higher, please see the updated example above of check out the examples site for up to date examples.
                        Up until version 1.8.0, this package was using Moment.js. Starting v2.0.0, we switched to using date-fns, which uses native Date objects, to reduce the size of the package. If youre switching from 1.8.0 to 2.0.0 or higher, please see the updated example above of check out the examples site for up to date examples.
                        Up until version 1.8.0, this package was using Moment.js. Starting v2.0.0, we switched to using date-fns, which uses native Date objects, to reduce the size of the package. If youre switching from 1.8.0 to 2.0.0 or higher, please see the updated example above of check out the examples site for up to date examples.
                        Up until version 1.8.0, this package was using Moment.js. Starting v2.0.0, we switched to using date-fns, which uses native Date objects, to reduce the size of the package. If youre switching from 1.8.0 to 2.0.0 or higher, please see the updated example above of check out the examples site for up to date examples.
                        Up until version 1.8.0, this package was using Moment.js. Starting v2.0.0, we switched to using date-fns, which uses native Date objects, to reduce the size of the package. If youre switching from 1.8.0 to 2.0.0 or higher, please see the updated example above of check out the examples site for up to date examples.
                        Up until version 1.8.0, this package was using Moment.js. Starting v2.0.0, we switched to using date-fns, which uses native Date objects, to reduce the size of the package. If youre switching from 1.8.0 to 2.0.0 or higher, please see the updated example above of check out the examples site for up to date examples.
                        Up until version 1.8.0, this package was using Moment.js. Starting v2.0.0, we switched to using date-fns, which uses native Date objects, to reduce the size of the package. If youre switching from 1.8.0 to 2.0.0 or higher, please see the updated example above of check out the examples site for up to date examples.
                        </p>
                    </div>

                    <div className='w-[calc(100%-500px)] min-h-full  flex flex-col pt-6'>
                        <div className='flex flex-row  items-center justify-evenly'>
                            <img src={image} alt="" className='h-[70px] w-[70px] rounded-full'  />
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-[15px] font-[600]'>Emeka Samuel</p>
                                <div className='flex flex-row gap-x-2'>
                                    <MdAddCircleOutline size={16} color='#999999'  />
                                    <p className='text-[12px] text-blue-600'>Follow</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-row  items-center justify-between pl-6 pr-2 mt-4'>
                            <div className='flex flex-row justify-center items-center'>
                                <AiOutlineHeart size={14}/>
                                <p className='text-[11px] ml-1'>12 likes</p>
                            </div>
                            <div className='flex flex-row justify-center items-center'>
                                <AiOutlineHeart size={14}/>
                                <p className='text-[11px] ml-1'>12 likes</p>
                            </div>
                            <div className='flex flex-row justify-center items-center'>
                                <AiOutlineHeart size={14}/>
                                <p className='text-[11px] ml-1'>0 comments</p>
                            </div>
                        </div>

                        <div className='flex flex-col pl-6 pr-2 mt-4  '>
                            
                            <div className='border-t-[1px] border-b-[1px] border-gray-400 pt-2 pb-2 '>
                                <p className='text-[14px] font-[600]'>Class</p>
                              <div className='text-[11px]'>
                                  <span className='text-blue-800'>Course title:</span>
                                  <span className='ml-1'>3D illustration</span>
                              </div>
                              <div className='text-[11px]'>
                                  <span className='text-blue-800'>Tutor:</span>
                                  <span className='ml-1'>Frank Vogel</span>
                              </div>
                            </div>
                            
                        </div>

                        <div className='flex flex-col pl-6 pr-2  pt-4'>
                            <p className='text-[15px] font-[600]'>Comment</p>
                            <div className='flex flex-row justify-center'>
                              <BsPerson size={20} color="#222222"/>
                              <textarea className='w-[200px] h-[100px] shadow-xl focus:outline-none focus:ring-0 text-[12px] styled-scrollbar'>

                              </textarea>
                            </div>
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

export default ProjectProfileModal





/**
 * <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
                    </p>
                  </div>
                </div>
              </div>
 */