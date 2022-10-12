import React from 'react'


//////////
import { GoSettings } from 'react-icons/go'
import { MdOutlineArrowUpward } from 'react-icons/md'
import moment from 'moment';
import { useRouter } from 'next/router';
import { useState } from 'react';

const PublishedCourses = () => {

  const router = useRouter()

  const data = [
    {
      item: 1,
      name: "Chibuike Umoh",
      price: "N12,000",
      course: "Introduction to fashion designing Introduction to fashion designing",
      subscription: "Monthly",
      student: 30,
      coupon: "10%",
      date: Date.now(),
      status: false,
      code: '0001KJH'
  },
  {
      item: 2,
      name: "Chibuike Umoh",
      price: "N12,000",
      course: "Marketing and finance",
      subscription: "Monthly",
      student:30,
      coupon: "10%",
      date: Date.now(),
      status: true,
      code: '0001KJH'
  },
  {
      item: 3,
      name: "Chibuike Umoh",
      price: "N12,000",
      course: "Introduction to tech",
      subscription: "Monthly",
      student: 30,
      coupon: "10%",
      date: Date.now(),
      status: true,
      code: '0001KJH'
  },
  {
      item: 4,
      name: "Chibuike Umoh",
      price: "N12,000",
      course: "Getting started in fashion designing",
      subscription: "Monthly",
      student: 30,
      coupon: "10%",
      date: Date.now(),
      status: true,
      code: '0001KJH'
  },
  {
      item: 5,
      name: "Chibuike Umoh",
      price: "N12,000",
      course: "Introduction to fashion designing",
      subscription: "Monthly",
      student: 30,
      coupon: "10%",
      date: Date.now(),
      status: false,
      code: '0001KJH'
  },
  {
      item: 6,
      name: "Chibuike Umoh",
      price: "N12,000",
      course: "Introduction to fashion designing",
      subscription: "Monthly",
      student: 30,
      coupon: "10%",
      date: Date.now(),
      status: true,
      code: '0001KJH'
  },
  ]

  const [showFilter, setShowFilter] = useState(false)
  const [showExport, setShowExport] = useState(false)

  return (
    <div className="flex flex-col w-full">
      <div className="my-2 horizontal-scrollbar overflow-x-scroll xl:overflow-x-hidden">

        <div className="min-w-[1050px] xl:w-full h-[50px] mt-6 mb-2 bg-[#9B9FC6] bg-opacity-[0.12] rounded-md flex items-center justify-center px-3">
          <input className="w-[400px] text-[13px] rounded-sm italic h-[35px] pl-4 outline-none focus:ring-0" placeholder="Search income by entering keywords, name, or course"/>
          <div className="h-[35px] relative centerFlex  w-[120px] text-[#191919] text-[14px] gap-x-3 bg-white rounded-md ml-20 cursor-pointer" onClick={() => {setShowFilter(prev => !prev); setShowExport(false)}}>
            <GoSettings  className=""/>
            <p className="font-bold">Filter</p>
            {/* filter dropdown */}
            {showFilter && <div className='absolute top-[40px] w-[180px] py-4 gap-y-2 flex flex-col justify-center items-center bg-white rounded-md'>
                <p className='w-full text-center py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>This Week</p>
                <p className='w-full text-center py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>This Year</p>
            </div>}
          </div>

          <div className="h-[35px] centerFlex relative w-[120px] text-[#191919] text-[14px] gap-x-3 bg-white rounded-md ml-7 cursor-pointer" onClick={() => {setShowFilter(false); setShowExport(prev => !prev)}}>
            <div className="w-[17px] h-[17px] centerFlex rounded-full border border-[#191919]">
              <MdOutlineArrowUpward color="#191919"/>
            </div>
            <p className="font-bold">Export</p>
            {/* export dropdown */}
            {showExport && <div className='absolute top-[40px] w-[180px] py-4 gap-y-2 flex flex-col justify-center items-center bg-white rounded-md'>
                <p className='w-full text-center py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>Export as CSV</p>
                <p className='w-full text-center py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>Export as .xlsx</p>
            </div>}
          </div>

        </div>


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
                    Course Title
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
                    Students
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
                    
                    <td className="px-2 py-4 max-w-[200px] break-words text-sm text-gray-500 text-center" onClick={() => router.push(`/creators/courses/${el.item}`)}>{el.course}</td>
                    
                    <td className="px-2 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900 text-center">{el.subscription}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900 text-center">{el.price}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900 text-center">{el.student}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900 text-center">{moment(el.date).format('MMM Do YYYY')}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-center">
                      <div className={`text-sm text-gray-900 text-[12px] text-center p-1 rounded-md ${el.status ? "bg-[#2DE200] bg-opacity-[0.15] text-[#26B403]" : "bg-[#FC4A4A] bg-opacity-[0.15] text-[#B40303]"} `}>{el.status ? "Active" : "Inactive"}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900 text-center">{el.code}</div>
                    </td>
                    <td className="px-1 py-2 whitespace-nowrap text-center">
                        <div className="flex flex-col items-center justify-center gap-y-2 bg-[#F3F3FF] px-[3px] py-1 rounded-full ">
                          <div className='w-[7px] h-[7px] rounded-full bg-[#121F4C] ' />
                          <div className='w-[7px] h-[7px] rounded-full bg-[#121F4C] ' />
                        </div>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>}

          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default PublishedCourses

