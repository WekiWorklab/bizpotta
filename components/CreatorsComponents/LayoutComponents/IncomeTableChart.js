import { useState } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight, AiOutlineLineChart, AiOutlineMenu } from "react-icons/ai";
import LChart from "./Line-Chart";
import { GoSettings } from "react-icons/go";
import { MdOutlineArrowUpward } from "react-icons/md";
import moment from "moment";
import { AffiliateSection, MainTableFooter } from "./Main/Content";
import { Filter, NoActivities } from "../../../public";
import CreatorTable from "../../Tables/CreatorTable";

const IncomeTableChart = () => {
  const data = [
    {
      item: 1,
      name: "Chibuke Umoh",
      course: "Introduction to fashion designing",
      type: "full",
      price: "N12,000,000",
      coupon: "10%",
      date: Date.now(),
      ID: "0001KJH",
    },
    {
      item: 2,
      name: "Chibuke Umoh",
      course: "Introduction to fashion designing",
      type: "full",
      price: "N12,000,000",
      coupon: "10%",
      date: Date.now(),
      ID: "0001KJH",
    },
    {
      item: 3,
      name: "Chibuke Umoh",
      course: "Introduction to fashion designing",
      type: "full",
      price: "N12,000,000",
      coupon: "10%",
      date: Date.now(),
      ID: "0001KJH",
    },
    {
      item: 4,
      name: "Chibuke Umoh",
      course: "Introduction to fashion designing",
      type: "full",
      price: "N12,000,000",
      coupon: "10%",
      date: Date.now(),
      ID: "0001KJH",
    },
    {
      item: 5,
      name: "Chibuke Umoh",
      course: "Introduction to fashion designing",
      type: "full",
      price: "N12,000,000",
      coupon: "10%",
      date: Date.now(),
      ID: "0001KJH",
    },
    {
      item: 6,
      name: "Chibuke Umoh",
      course: "Introduction to fashion designing",
      type: "full",
      price: "N12,000,000",
      coupon: "10%",
      date: Date.now(),
      ID: "0001KJH",
    },
  ];

  const [select, setSelected] = useState("table");
  const [showFilter, setShowFilter] = useState(false);
  const [showExport, setShowExport] = useState(false);

  const activities = true;

  return (
    <div className='flex flex-col mx-auto'>
      {!activities && (
        <div className='w-full h-[450px] centerFlex'>
          <NoActivities />
        </div>
      )}

      {activities && <CreatorTable data={data} title='Income' showFilter={showFilter} showExport={showExport} />}

      {/*
       {activities && (
        <div className='my-2 horizontal-scrollbar overflow-x-scroll xl:overflow-x-visible'>
          <div className='min-w-[1050px] xl:w-full h-[55px] mt-6 mb-2 bg-[#9B9FC6] bg-opacity-[0.12] rounded-md flex items-center justify-between px-8'>
            <input
              className='w-[500px] text-[13px] text-[#191919] rounded-sm h-[35px] pl-4 outline-none focus:ring-0'
              placeholder='Search income by entering keywords, name, or course'
            />

            <div className='flex items-center gap-x-4'>
              <div
                className='h-[35px] relative centerFlex  w-[120px] text-[#191919] text-[14px] gap-x-3 bg-white rounded-md cursor-pointer'
                onClick={() => {
                  setShowFilter((prev) => !prev);
                  setShowExport(false);
                }}
              >
                <Filter />
                <p className='font-bold'>Filter</p>
                {showFilter && (
                  <div className='absolute top-[40px] w-[180px] py-4 gap-y-2 flex flex-col justify-center items-start dropdown-shadow bg-white rounded-md'>
                    <p className='w-full text-left px-3 py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>All earning</p>
                    <p className='w-full text-left px-3 py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>Last month earning</p>
                    <p className='w-full text-left px-3 py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>Last six month earnings</p>
                  </div>
                )}
              </div>

              <div
                className='h-[35px] centerFlex relative w-[120px] text-[#191919] text-[14px] gap-x-3 bg-white rounded-md cursor-pointer'
                onClick={() => {
                  setShowFilter(false);
                  setShowExport((prev) => !prev);
                }}
              >
                <div className='w-[17px] h-[17px] centerFlex rounded-full border border-[#191919]'>
                  <MdOutlineArrowUpward color='#191919' />
                </div>
                <p className='font-bold'>Export</p>

                {showExport && (
                  <div className='absolute top-[40px] w-[180px] py-4 gap-y-2 flex flex-col justify-center dropdown-shadow items-center bg-white rounded-md'>
                    <p className='w-full text-center py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>Export as CSV</p>
                    <p className='w-full text-center py-2 cursor-pointer text-[13px] hover:bg-[#858585]'>Export as .xlsx</p>
                  </div>
                )}
              </div>

              {select === "chart" && (
                <div
                  className='cursor-pointer w-[30px] h-[30px] flex justify-center items-center rounded-sm bg-white'
                  onClick={() => setSelected("table")}
                >
                  <AiOutlineMenu size={16} color='#121F4C' />
                </div>
              )}
              {select === "table" && (
                <div
                  className='cursor-pointer w-[30px] h-[30px] flex justify-center items-center rounded-sm bg-white'
                  onClick={() => setSelected("chart")}
                >
                  <AiOutlineLineChart size={16} color='#121F4C' />
                </div>
              )}
            </div>
          </div>

          <div className='py-2 align-middle inline-block min-w-[1050px] xl:w-full'>
            {select === "table" && (
              <table className=' min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th scope='col' className='px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider'>
                      #
                    </th>
                    <th scope='col' className='px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider'>
                      ID
                    </th>

                    <th scope='col' className='px-2 py-3 text-center text-xs font-medium text-gray-500 tracking-wider'>
                      Name
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
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {data.map((el) => (
                    <tr key={el.item}>
                      <td className='px-2 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-900'>{el.item}</div>
                      </td>
                      <td className='px-2 py-4 whitespace-nowrap text-center'>
                        <div className='text-sm text-gray-900 text-center'>{el.ID}</div>
                      </td>
                      <td className='px-2 py-4 max-w-[200px] break-words text-sm text-gray-500 text-center'>{el.name}</td>

                      <td className='px-2 py-4 max-w-[200px] break-words text-sm text-gray-500 text-center'>{el.course}</td>
                      <td className='px-2 py-4 whitespace-nowrap text-center'>
                        <div className='text-sm text-gray-900 text-center'>{el.type}</div>
                      </td>
                      <td className='px-2 py-4 whitespace-nowrap text-center'>
                        <div className='text-sm text-gray-900 text-center'>{el.price}</div>
                      </td>
                      <td className='px-2 py-4 whitespace-nowrap text-center'>
                        <div className='text-sm text-gray-900 text-center'>{moment(el.date).format("MMM Do YYYY")}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {select === "chart" && <LChart />}
          </div>

          <MainTableFooter />
        </div>
      )} */}
    </div>
  );
};

export default IncomeTableChart;
