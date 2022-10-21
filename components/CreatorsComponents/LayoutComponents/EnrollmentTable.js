import React from "react";

//////////
import moment from "moment";
import { MainTableFooter, MainTableHeader } from "./Main/Content";
import { NoActivities } from "../../../public";

const EnrollmentTable = () => {
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
      code: "0001KJH",
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
      code: "0001KJH",
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
      code: "0001KJH",
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
      code: "0001KJH",
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
      code: "0001KJH",
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
      code: "0001KJH",
    },
  ];

  const activities = true;
  const enrollFilter = ["All enrollment", "Newly enrolled students"];

  return (
    <div className='flex flex-col mx-auto'>
      {!activities && (
        <div className='w-full h-[450px] centerFlex'>
          <NoActivities />
        </div>
      )}

      {activities && (
        <div className='my-2 horizontal-scrollbar overflow-x-scroll xl:overflow-x-visible'>
          <MainTableHeader filter={enrollFilter} placeholder='Search enrollment by entering keywords, name, or course' />

          <div className='py-2 align-middle inline-block min-w-[1050px] xl:w-full'>
            {
              <table className=' min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th scope='col' className='px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider'>
                      #
                    </th>
                    <th scope='col' className='px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider'>
                      Course Title
                    </th>
                    <th scope='col' className='px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider'>
                      Type
                    </th>
                    <th scope='col' className='px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider'>
                      Price
                    </th>
                    <th scope='col' className='px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider'>
                      Coupon
                    </th>
                    <th scope='col' className='px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider'>
                      Student
                    </th>
                    <th scope='col' className='px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider'>
                      Date
                    </th>
                    <th scope='col' className='px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider'>
                      ID
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {data.map((el) => (
                    <tr key={el.item}>
                      <td className='px-2 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-900'>{el.item}</div>
                      </td>
                      <td className='px-2 py-4 max-w-[200px] break-words text-sm text-gray-500 text-center'>{el.course}</td>
                      <td className='px-2 py-4 whitespace-nowrap text-center'>
                        <div className='text-sm text-gray-900 text-center'>{el.type}</div>
                      </td>
                      <td className='px-2 py-4 whitespace-nowrap text-center'>
                        <div className='text-sm text-gray-900 text-center'>{el.price}</div>
                      </td>
                      <td className='px-2 py-4 whitespace-nowrap text-center'>
                        <div className='text-sm text-gray-900 text-center'>{el.coupon}</div>
                      </td>
                      <td className='px-2 py-4 whitespace-nowrap text-center'>
                        <div className='text-sm text-gray-900 text-center'>{el.student}</div>
                      </td>
                      <td className='px-2 py-4 whitespace-nowrap text-center'>
                        <div className='text-sm text-gray-900 text-center'>{moment(el.date).format("MMM Do YYYY")}</div>
                      </td>
                      <td className='px-2 py-4 whitespace-nowrap text-center'>
                        <div className='text-sm text-gray-900 text-center'>{el.code}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            }
          </div>

          <MainTableFooter />
        </div>
      )}
    </div>
  );
};

export default EnrollmentTable;

/**
 * <div className="flex flex-col mx-auto">
      <div className="my-2 styled-scrollbar overflow-x-scroll xl:overflow-x-hidden">
        <div className="py-2 align-middle inline-block min-w-[1000px] sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden pb-4 border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Item
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Course
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((el) => (
                  <tr key={el.ID}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className={`w-[20px] h-[20px]  border-2 ${el.item === true ? "bg-darkBlue" : "bg-white"}`}>

                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{el.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{el.course}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${el.status === true ? "bg-green-100 text-green-800" : "bg-red-100 text-red-900"} `}>
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{el.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{el.ID}</div>
                    </td>
                    
                  </tr>
                ))}
              </tbody>

                
            </table>

            <div className='w-full  flex flex-row justify-between items-center mt-4 px-4'>
                <div className='flex flex-row gap-x-4 '>
                    <div className='w-[40px] h-[40px] flex justify-center items-center bg-darkBlue rounded-sm'>
                        <AiOutlineMenu size={20} color = 'white'/>
                    </div>
                    <div className='w-[40px] h-[40px] flex justify-center items-center border border-gray-500 rounded-sm'>
                        <AiOutlineLineChart size={20} color = '#121F4C'/> 
                    </div>
                </div>

                <div className = 'flex flex-row justify-start items-center'>
                    <p className='text-[13px] mr-4'>Page 1</p>
                    <div className='w-[40px] h-[40px] bg-gray-500 rounded-sm border flex justify-center items-center'>
                        <AiOutlineCaretLeft color='#121F4C'/>
                    </div>
                    <div className='w-[40px] h-[40px] bg-gray-500 rounded-sm border flex justify-center items-center'>
                        <AiOutlineCaretRight color='#121F4C'/>
                    </div>
                    
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
 */
