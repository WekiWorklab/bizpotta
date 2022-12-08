import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React from 'react'
import { useState } from 'react'
import useLiveSession from '../../hooks/useLiveSession';
import CreatorTable, {
    SelectColumnFilter,
    StatusPill,
  } from "../Tables/CreatorTable";
import { mockData } from './AdminUtils';

const AdminLiveSession = () => {


  const {getAllRequests} = useLiveSession()


  const {data, isLoading} = useQuery(["get-all-requests"], getAllRequests, {
    onSuccess: (data) => {
      console.log(data)
    }
  })


  console.log(data?.data?.pending)


    const data1 = [
        {id: 1, value: "300", title: "Pending requests"},
        {id: 2, value: "2200", title: "Approved requests"},
        {id: 3, value: "1000", title: "Rejected requests"},
      ]

  const [select, setSelect] = useState("")

  const PendingData = data?.data?.pending?.map((el, index) => {
    return {
      serial: index,
      name_of_mentor: `${el?.host?.firstName} ${el?.host?.lastName}`,
      email: el?.host?.email,
      title_of_event: el?.name,
      price: Number(el?.price).toLocaleString(),
      date_and_time: moment(`${el?.date} ${el?.time}`).format("LL")
    }
  })


  // const ApprovedData = data?.data?.approved?

  //moment(`${el?.date} ${el?.time}`).format("LL")

  // const PendingData = data?.data?.pending?.map((el, index) => {
  //   return {
  //     serial: 1,
  //     name_of_mentor: "Chinedu",
  //     email: "chinedu@gmail.com",
  //     title_of_event: "ICT",
  //     price: 42000,
  //     date_and_time: "Dec, 24th 2021"
  //   }
  // })
   


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
          <div  className={`flex flex-col items-center justify-center ${select === "pending" ? "bg-[#D9D9D9] bg-opacity-[0.45]" : ""} rounded-lg px-6 py-4 cursor-pointer hover:bg-[#D9D9D9] hover:bg-opacity-[0.45]`} onClick = {() => setSelect("pending")}>
              <p className='text-[32px] font-bold'>{data?.pending_count}</p>
              <p className='text-[12px]'>Pending Requests</p>
          </div>
          <div className={`flex flex-col items-center justify-center ${select === "approved" ? "bg-[#D9D9D9] bg-opacity-[0.45]" : ""} rounded-lg px-6 py-4 cursor-pointer hover:bg-[#D9D9D9] hover:bg-opacity-[0.45]`} onClick = {() => setSelect("approved")}>
              <p className='text-[32px] font-bold'>{data?.approved_count}</p>
              <p className='text-[12px]'>Approved requests</p>
          </div>
          <div className={`flex flex-col items-center justify-center ${select === "rejected" ? "bg-[#D9D9D9] bg-opacity-[0.45]" : ""} rounded-lg px-6 py-4 cursor-pointer hover:bg-[#D9D9D9] hover:bg-opacity-[0.45]`} onClick = {() => setSelect("rejected")}>
              <p className='text-[32px] font-bold'>{data?.rejected_count}</p>
              <p className='text-[12px]'>Rejected requests</p>
          </div>
      </div>
      </div>

      {data ? <div className='mt-8 w-full'>
        <CreatorTable columns={columns} data={PendingData} title="Admin Section" />
      </div> : null}

    </div>
  )
}

export default AdminLiveSession