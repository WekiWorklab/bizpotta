import moment from 'moment'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'

const TestContent = () => {
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
    <div className='relative w-full h-full bg-[#FEFEFE] flex flex-col mt-[90px] md:mt-[120px] md:justify-center items-start md:translate-x-[250px] md:w-[calc(100%-250px)] px-2 xl:px-8 py-10 text-darkGray '>
        
        <div className = 'flex items-center gap-x-1 text-[#999999] text-[14px] cursor-pointer'> 
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
                  <th
                    scope="col"
                    className="px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider"
                  >
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
                    <td className="px-2 py-4 whitespace-nowrap text-center">
                      <div className="relative text-sm text-gray-900 text-center">
                        <div className = "bg-[#F3F3FF] rounded-2xl py-2 px-[2px] cursor-pointer flex flex-col items-center gap-y-1">
                          <div className='w-[8px] h-[8px]  rounded-full bg-darkBlue' />
                          <div className='w-[8px] h-[8px]  rounded-full bg-darkBlue' />
                           <div className = "absolute top-10 bg-[#FEFEFE] dashboard-card-shadow left-[-57px] py-3 px-2 border z-20 ">
                            <p className='text-[14px] '>Edit course</p>
                           </div>

                        </div>
                      </div>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>}

        </div>

      </div>
    </div>

    


    </div>
  )
}

export default TestContent