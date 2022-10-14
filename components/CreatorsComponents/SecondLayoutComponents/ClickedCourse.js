import React, {useState, Fragment} from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { GoSettings } from 'react-icons/go'
import { MdOutlineArrowUpward, MdOutlineCancel } from 'react-icons/md'
import moment from 'moment';
import {useRouter } from 'next/router';
import { Dialog, Transition } from "@headlessui/react";
import { TableFooter, TableHeader } from './Content';
import { Confirmation } from '../../../public';

const ClickedCourse = () => {
  
  const router = useRouter()
  const [isActive, setIsActive] = useState(true)
  const [showModal, setShowModal] = useState(false)

    const data = [
        {
          item: 1,
          name: "Chibuike Umoh",
          price: "N12,000",
              subscription: 'Full',
          date: Date.now(),
          status: false,
          code: '0001KJH'
      },
      {
          item: 2,
          name: "Chibuike Umoh",
          price: "N12,000",
          subscription: 'Full',
          date: Date.now(),
          status: true,
          code: '0001KJH'
      },
      {
          item: 3,
          name: "Chibuike Umoh",
          price: "N12,000",
          subscription: 'Full',
          date: Date.now(),
          status: true,
          code: '0001KJH'
      },
      {
          item: 4,
          name: "Chibuike Umoh",
          price: "N12,000",
          subscription: 'Full',
          date: Date.now(),
          status: true,
          code: '0001KJH'
      },
      {
          item: 5,
          name: "Chibuike Umoh",
          price: "N12,000",
          subscription: 'Full',
          date: Date.now(),
          status: false,
          code: '0001KJH'
      },
      {
          item: 6,
          name: "Chibuike Umoh",
          price: "N12,000",
          subscription: 'Full',
          date: Date.now(),
          status: true,
          code: '0001KJH'
      },
      ]



  return (
    <div className='relative w-full h-full bg-[#FEFEFE] flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-2 xl:px-8 py-10 text-darkGray'>
        
        <div className = 'flex items-center gap-x-1 text-[#999999] text-[14px] cursor-pointer' onClick={() => router.back()}> 
            <AiOutlineLeft />
            <p>Back</p>
        </div>
        
        <div className='mt-10 text-[#999999] text-[13px]'>
            Course title
        </div>

        <div className='flex justify-between w-full mt-4'>
            <div>
                <p className='text-[18px] text-darkBlue font-bold'>Introduction to Fashion designing</p>
                <p className='italic text-[14px] font-light '>234 students</p>
            </div>
            <div className={`w-[120px] h-[30px] centerFlex rounded-md text-[12px] cursor-pointer ${ !isActive ? "bg-[#2DE200] bg-opacity-[0.15] text-[#26B403] " : "bg-[#FC4A4A] bg-opacity-[0.15] text-[#B40303]" }`} onClick = {() => {isActive && setShowModal(true)}}>
                {!isActive ?  "Activate course" : "Deactivate course"}
            </div>
        </div>

        <div className="flex flex-col w-full">
        <div className="my-2 horizontal-scrollbar overflow-x-scroll xl:overflow-x-visible">

        <TableHeader />

        <div className="py-2 align-middle inline-block min-w-[1050px] xl:w-full">
            {/* Table */}
            {<table className=" min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider"
                  >
                    #
                  </th>
                  
                  <th
                    scope="col"
                    className="px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider"
                  >
                    Subscription
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider"
                  >
                    Referral code
                  </th>
                  
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((el) => (
                  <tr key={el.item}>
                    <td className="px-2 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{el.item}</div>
                    </td>
                    
                    <td className="px-2 py-4 max-w-[200px] break-words text-sm text-gray-500 text-center">{el.name}</td>
                    
                    <td className="px-2 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900 text-center">{el.subscription}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900 text-center">{el.price}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900 text-center">{moment(el.date).format('MMM Do YYYY')}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap centerFlex">
                      <div className={`text-sm text-gray-900 text-[12px] text-center w-[125px] py-1 centerFlex rounded-md ${el.status ? "bg-[#FFC700] bg-opacity-[0.25] text-[#55450D]" : "bg-[#1200E2] bg-opacity-[0.15] text-[#141526]"} `}>{el.status ? "Course completed" : "On-going course"}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900 text-center">{el.code}</div>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>}

          {/* </div> */}
        </div>

        <TableFooter />
      </div>
    </div>

    
      {/* Activate or deactivate modal */}
      <ActivateCourseModal isActive = {isActive} showModal = {showModal} setShowModal={setShowModal} />


    </div>
  )
}

export default ClickedCourse








const ActivateCourseModal = ({isActive, showModal, setShowModal}) => {
  
  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <Transition.Root show={showModal} as={Fragment}>
      <Dialog as="div" static className="fixed z-10 inset-0 overflow-y-auto" open={showModal} onClose={() => {}}>
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-10 text-left block sm:p-0  ">
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
              <div className='w-full flex flex-col items-center sm:w-[400px] px-3 py-4 bg-white'>
                <div className='w-10 h-10 self-end centerFlex' onClick = {() => closeModal()}>
                  <MdOutlineCancel color='#191919' size={22} />
                </div>
                {/* <div className='w-[70px] h-[70px]  rounded-full bg-gray-500'></div> */}
                <Confirmation />
                <p className='font-bold mt-3 '>Are you sure you want to deactivate this course?</p>
                <p className='text-[13px] mt-4'>Deactivating this course means this course would no longer be available for purchase and it would be completely deactivated after 60 days for currently enrolled learner.</p>

                <div className='px-3 py-2 bg-darkBlue rounded-md text-[13px] text-white mt-4 cursor-pointer'> Yes, deactivate course</div>

                <div className = 'text-[13px] mt-4 underline cursor-pointer' >No, Cancel</div>

              </div>

            

            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

