import moment from 'moment'
import React from 'react'
import { useState } from 'react'
import { TableRowToggle } from '../../public';

import CreatorTable, {
  SelectColumnFilter,
  StatusPill,
} from "../Tables/CreatorTable";

const AdminHome = () => {
  
  const data1 = [
    {id: 1, value: "23k", title: "Registered Users"},
    {id: 2, value: "23k", title: "Active Users"},
    {id: 3, value: "3k", title: "Deactivated Users"},
  ]

  const [select, setSelect] = useState("")

  const tableData = new Array(10).fill({
    serial: 1,
    name: "David",
    email: "david@gmail.com",
    role: "Admin",
    last_login: moment(Date.now()).startOf('day').fromNow(), 
    // toggle: TableRowToggle() 
  })

  const columns = React.useMemo(
    () => [
      {
        Header: " ",
        accessor: "serial",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "Last Login",
        accessor: "last_login",
      },
    ],
    []
  );

  return (
    <div className='min-h-screen w-full py-10 px-6'>
      <div className='font-medium'>Student Admin</div>
      <div className = 'text-lightDark text-[12px]'>Review and manage all the users on this admin portal</div>

      <div className='w-full py-3 h-[120px] flex justify-center items-center bg-[#9B9FC6] bg-opacity-[0.12] rounded-lg mt-7  gap-x-5'>
        {data1.map((el, index) => (
          <div key={index} className={`flex flex-col items-center justify-center ${select === el.id ? "bg-[#D9D9D9] bg-opacity-[0.45]" : ""} rounded-lg px-6 py-4 cursor-pointer hover:bg-[#D9D9D9] hover:bg-opacity-[0.45]`} onClick = {() => setSelect(el.id)}>
              <p className='text-[32px] font-bold'>{el.value}</p>
              <p className='text-[12px]'>{el.title}</p>
          </div>
        ))}
      </div>

      <div className='mt-8 w-full'>
        <CreatorTable columns={columns} data={tableData} title="Admin Section" />
      </div>

    </div>
  )
}

export default AdminHome



