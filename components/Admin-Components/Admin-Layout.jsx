import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { AdminIcon, adminProfile, logo } from '../../public'
import { SidebarNav } from './AdminUtils'

const AdminLayout = ({children}) => {
  return (
    <div className='relative w-full min-h-screen'>
        {/* Sidebar toggle icon for mobile view */}

        <div>{children}</div>
        <AdminSideBar />

    </div>
  )
}

export default AdminLayout




const AdminSideBar = () => {

    const router = useRouter()
    const path = router.asPath

    return (
        <div className='fixed left-0 top-0 z-10 w-[250px] h-screen border border-r-2  py-5'>
            <div className='w-full centerFlex'>
                <img src={logo.src} className = 'w-3/4'/>
            </div>

            <div className='flex flex-col gap-y-3 mt-4'>
                {
                    SidebarNav.map((el, index) => (
                        <Link href={el.to} key={index} >
                            <div className='h-[50px] flex items-center gap-x-6 cursor-pointer'>
                                <div className={`h-full w-[4px] rounded-r-[20px] ${ path == el.to ? "bg-darkBlue" : "bg-transparent"}`} /> 
                                <div>
                                {el.icon}
                                </div>
                                <p className='text-[14px] font-medium'>{el.name}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>

            <div className='w-5/6 mx-auto h-[0.5px] bg-gray-500 mt-6' />

            <div className='w-full flex items-center gap-x-6 mt-10'>
                <div className='bg-transparent h-full w-[4px]' />
                <AdminIcon />
                <p className='text-[14px] font-medium'>Users Admin</p>
            </div>


            <div className='w-full px-3 py-2 flex items-center mt-10 bg-[#D9D9D9]'>
                <img src={adminProfile.src} className = 'w-[50px] h-[50px] rounded-full ' />
                <div className='ml-2'>
                    <p className='text-[13px] font-bold'>Shina Bxsn</p>
                    <p className='text-[12px] text-[#191919] text-opacity-50 '>sbxsn@circle.com</p>
                </div>
            </div>
            
        </div>
    )
}