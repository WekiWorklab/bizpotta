import { useState } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight, AiOutlineLineChart, AiOutlineMenu } from "react-icons/ai";
import LChart from "./Line-Chart";
import {GoSettings} from 'react-icons/go'
import { MdOutlineArrowUpward } from "react-icons/md";
import moment from 'moment';


 const IncomeTableChart = () => {
    const data = [
        {
            item: 1,
            name: 'Chibuke Umoh',
            course: "Introduction to fashion designing",
            type: "full",
            price: "N12,000,000",
            coupon: "10%",
            date: Date.now(),
            ID: '0001KJH'
        },
        {
            item: 2,
            name: 'Chibuke Umoh',
            course: "Introduction to fashion designing",
            type: "full",
            price: "N12,000,000",
            coupon: "10%",
            date: Date.now(),
            ID: '0001KJH'
        },
        {
            item: 3,
            name: 'Chibuke Umoh',
            course: "Introduction to fashion designing",
            type: "full",
            price: "N12,000,000",
            coupon: "10%",
            date: Date.now(),
            ID: '0001KJH'
        },
        {
            item: 4,
            name: 'Chibuke Umoh',
            course: "Introduction to fashion designing",
            type: "full",
            price: "N12,000,000",
            coupon: "10%",
            date: Date.now(),
            ID: '0001KJH'
        },
        {
            item: 5,
            name: 'Chibuke Umoh',
            course: "Introduction to fashion designing",
            type: "full",
            price: "N12,000,000",
            coupon: "10%",
            date: Date.now(),
            ID: '0001KJH'
        },
        {
            item: 6,
            name: 'Chibuke Umoh',
            course: "Introduction to fashion designing",
            type: "full",
            price: "N12,000,000",
            coupon: "10%",
            date: Date.now(),
            ID: '0001KJH'
        },
    ]

    const [select, setSelected] = useState('table')

    return(

<div className="flex flex-col mx-auto">
      <div className="my-2 horizontal-scrollbar overflow-x-scroll xl:overflow-x-hidden">

        <div className="w-full xl:w-[96%] h-[100px] bg-[#94F236] bg-opacity-[0.06] flex flex-col gap-y-2 sm:flex-row justify-center sm:justify-between items-center rounded-md px-16 ">
          <div className="text-[#222222] text-[14px] centerFlex gap-x-2">
            <p className="">Available balance</p>
            <p className="text-[18px]">N405,000</p> 
          </div>

          <div className="w-[120px] h-[38px] text-[14px] rounded-md font-bold bg-bizpotta-green centerFlex">
            Withdraw
          </div>
        </div>

        <div className="w-[1050px] h-[50px] mt-6 mb-2 bg-[#9B9FC6] bg-opacity-[0.12] rounded-md flex items-center justify-center px-3">
          <input className="w-[400px] text-[13px] rounded-sm italic h-[35px] pl-4 outline-none focus:ring-0" placeholder="Search income by entering keywords, name, or course"/>
          <div className="h-[35px] centerFlex  w-[120px] text-[#191919] text-[14px] gap-x-3 bg-white rounded-md ml-20">
            <GoSettings  className=""/>
            <p className="font-bold">Filter</p>
          </div>

          <div className="h-[35px] centerFlex  w-[120px] text-[#191919] text-[14px] gap-x-3 bg-white rounded-md ml-7">
            <div className="w-[17px] h-[17px] centerFlex rounded-full border border-[#191919]">
              <MdOutlineArrowUpward color="#191919"/>
            </div>
            <p className="font-bold">Export</p>
          </div>

            {select === "chart" &&  <div className='ml-6 w-[30px] h-[30px] flex justify-center items-center rounded-sm bg-white' onClick={() => setSelected('table')}>
                <AiOutlineMenu size={16} color = '#121F4C'/>
            </div>}
            {select === "table" &&  <div className='ml-6 w-[30px] h-[30px] flex justify-center items-center rounded-sm bg-white' onClick={() => setSelected('chart')}>
                <AiOutlineLineChart size={16} color = '#121F4C'/>
            </div>}

          {/* MdOutlineArrowUpward */}
        </div>


        <div className="py-2 align-middle inline-block min-w-[1050px] px-1">
            {/* Table */}

            { (select === 'table') && <table className=" min-w-full divide-y divide-gray-200">
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
                    ID
                  </th>
                  <th scope="col" className="relative px-2 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((el) => (
                  <tr key={el.item}>
                    <td className="px-2 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{el.item}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900 text-center">{el.name}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{el.course}</td>
                    
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
                      <div className="text-sm text-gray-900 text-center">{el.ID}</div>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>}
            {/* table */}


            {/* Chart */}
            {(select === "chart") && <LChart />}

            

          {/* </div> */}
        </div>
      </div>
    </div>

    )

}


export default IncomeTableChart






{/* <div className='min-w-full  flex flex-row justify-between items-center mt-4 px-4'>
                <div className='flex flex-row gap-x-4 '>
                    <div className='w-[40px] h-[40px] flex justify-center items-center bg-darkBlue rounded-sm' onClick={() => setSelected('table')}>
                        <AiOutlineMenu size={20} color = 'white'/>
                    </div>
                    <div className='w-[40px] h-[40px] flex justify-center items-center border border-gray-500 rounded-sm' onClick={() => setSelected('chart')}>
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
            </div> */}




{/* <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className={`w-[20px] h-[20px]  border-2 ${el.item === true ? "bg-darkBlue" : "bg-white"}`}>

                          </div>
                        </div>
                      </div>
                    </td> */}


                    {/* <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${el.status === true ? "bg-green-100 text-green-800" : "bg-red-100 text-red-900"} `}>
                        Active
                      </span>
                    </td> */}