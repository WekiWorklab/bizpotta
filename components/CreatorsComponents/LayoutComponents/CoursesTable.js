import React from 'react'


//////////
import { GoSettings } from 'react-icons/go'
import { MdOutlineArrowUpward } from 'react-icons/md'
import moment from 'moment';
import { NoActivities } from '../../../public/vectors/svgs';
import { MainTableFooter, MainTableHeader } from './Main/Content';

const CoursesTable = () => {

  const data = [
    {
      item: 1,
      name: "Chibuike Umoh",
      price: "N12,000",
      course: "Introduction to fashion designing",
      type: "1st course",
      student: "234 students",
      coupon: "10%",
      date: Date.now(),
      status: false,
      code: '0001KJH'
  },
  {
      item: 2,
      name: "Chibuike Umoh",
      price: "N12,000",
      course: "Introduction to fashion designing",
      type: "full",
      student: "234 students",
      coupon: "10%",
      date: Date.now(),
      status: true,
      code: '0001KJH'
  },
  {
      item: 3,
      name: "Chibuike Umoh",
      price: "N12,000",
      course: "Introduction to fashion designing",
      type: "full",
      student: "234 students",
      coupon: "10%",
      date: Date.now(),
      status: true,
      code: '0001KJH'
  },
  {
      item: 4,
      name: "Chibuike Umoh",
      price: "N12,000",
      course: "Introduction to fashion designing",
      type: "1st course",
      student: "234 students",
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
      type: "full",
      student: "234 students",
      coupon: "10%",
      date: Date.now(),
      status: false,
      code: '0001KJH'
  },
  {
      item: 6,
      name: "Chibuike Umoh",
      course: "Introduction to fashion designing",
      price: "N12,000",
      type: "full",
      student: "234 students",
      coupon: "10%",
      date: Date.now(),
      status: true,
      code: '0001KJH'
  },
  ]


  const activities = true
  const courseFilter = ["All courses", "New added course", "Deleted courses"]

  return (
    <div className="flex flex-col mx-auto">
        {!activities && <div className='w-full h-[450px] centerFlex'>
          <NoActivities />
        </div>}
      
        { activities && <div className="my-2 horizontal-scrollbar overflow-x-scroll xl:overflow-x-hidden">

        <MainTableHeader filter = {courseFilter }/>

         <div className="py-2 align-middle inline-block min-w-[1050px] xl:w-full">

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
                    Creators name
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
                    Type
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
                    Coupon
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
                    
                    <td className="px-2 py-4 max-w-[200px] break-words text-sm text-gray-500 text-center">{el.course}</td>
                    <td className="px-2 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900 text-center">{el.type}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900 text-center">{el.price}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900 text-center">{el.coupon}</div>
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
                    
                  </tr>
                ))}
              </tbody>
            </table>}

        </div>
          
        <MainTableFooter />

      </div>}
    </div>
  )
}

export default CoursesTable