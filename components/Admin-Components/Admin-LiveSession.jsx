import React from 'react'
import { useState } from 'react'
import CreatorTable, {
    SelectColumnFilter,
    StatusPill,
  } from "../Tables/CreatorTable";
import { mockData } from './AdminUtils';

const AdminLiveSession = () => {

    const data1 = [
        {id: 1, value: "300", title: "Pending requests"},
        {id: 2, value: "2200", title: "Approved requests"},
        {id: 3, value: "1000", title: "Rejected requests"},
      ]

  const [select, setSelect] = useState("")


    const columns = React.useMemo(() => [
        {
            Header: " ",
            accessor: "serial"
        },
        {
            Header: "Name of Mentor",
            accessor: "name_of_mentor"
        },
        {
            Header: "Email",
            accessor: "email"
        },
        {
            Header: "Title of event",
            accessor: "title_of_event"
        },
        {
            Header: "Price",
            accessor: "price"
        },
        {
            Header: "Date and time of event",
            accessor: "date_and_time"
        },
    ], []) 

  return (
    <div className='min-h-screen w-full py-10 px-3 sm:px-6'>
      <div className='font-medium'>Live event requests</div>
      <div className = 'text-lightDark text-[12px]'>Review and manage all the live event request on this admin portal</div>

      <div className='overflow-x-scroll horizontal-scrollbar pb-2'>
      <div className='min-w-[700px] xl:w-full py-3 h-[120px] flex justify-center items-center bg-[#9B9FC6] bg-opacity-[0.12] rounded-lg mt-7  gap-x-5'>
        {data1.map((el, index) => (
          <div key={index} className={`flex flex-col items-center justify-center ${select === el.id ? "bg-[#D9D9D9] bg-opacity-[0.45]" : ""} rounded-lg px-6 py-4 cursor-pointer hover:bg-[#D9D9D9] hover:bg-opacity-[0.45]`} onClick = {() => setSelect(el.id)}>
              <p className='text-[32px] font-bold'>{el.value}</p>
              <p className='text-[12px]'>{el.title}</p>
          </div>
        ))}
      </div>
      </div>

      <div className='mt-8 w-full'>
        <CreatorTable columns={columns} data={mockData} title="Admin Section" />
      </div>

    </div>
  )
}

export default AdminLiveSession