import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { HiMenu } from 'react-icons/hi'
import { MdOutlineCancel } from 'react-icons/md'
import { AdminIcon, AdminMenuDots, adminProfile, logo } from '../../public'
import { SidebarNav } from './AdminUtils'

const AdminLayout = ({children}) => {

    const [show, setShow] = useState(false)
    const [slideIn, setSlideIn] = useState(false)

  return (
    <div className='relative w-full min-h-screen'>
        {/* Sidebar toggle icon for mobile view */}
        
        <AdminHeader show = {show} setShow = {setShow} slideIn = {slideIn} setSlideIn = {setSlideIn} />
        <div className='w-full md:translate-x-[250px] md:w-[calc(100%-250px)] '>
            {children}
        </div>
        <AdminSideBar show = {show} setShow = {setShow} />
        <MobileAdminSideBar show = {show} setShow = {setShow} slideIn = {slideIn} setSlideIn = {setSlideIn} />

    </div>
  )
}

export default AdminLayout



const AdminHeader = ({show, setShow, slideIn, setSlideIn}) => {
    
    return (
        <div className='sticky top-0 w-full bg-white flex justify-end px-6 h-6 z-10'>
            {!show ? <HiMenu className='block md:hidden text-[24px] text-darkBlue cursor-pointer' onClick={() => {setShow(true); setSlideIn(true)}}/> : null}
        </div>
    )
}


const MobileAdminSideBar = ({show, setShow, slideIn, setSlideIn}) => {

    const router = useRouter()
    const path = router.asPath

    return (
        <div className={`${slideIn ? "SideBar" : "NoSideBar" } fixed block md:hidden left-0 top-0 z-30 w-[300px] h-screen rounded-r-xl dropdown-shadow bg-white pt-2`}>
            <div className='w-full flex justify-between items-center px-3 '>
                <img src={logo.src} className = 'w-1/2'/>
                <MdOutlineCancel className='text-gray-500 text-[24px] cursor-pointer'  onClick={() => {setShow(false); setSlideIn(false) } }/>
            </div>

            <div className='flex flex-col gap-y-3 mt-2'>
                {
                    SidebarNav.map((el, index) => (
                        <Link href={el.to} key={index} >
                            <div className='h-[48px] flex items-center gap-x-6 cursor-pointer hover:bg-gray-300'>
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

            <div className='w-full flex items-center gap-x-6 mt-8'>
                <div className='bg-transparent h-full w-[4px]' />
                <AdminIcon />
                <p className='text-[14px] font-medium'>Users Admin</p>
            </div>


            <div className='w-full px-3 py-2 flex items-center mt-7 bg-[#D9D9D9]'>
                <img src={adminProfile.src} className = 'w-[50px] h-[50px] rounded-full ' />
                <div className='ml-2 mr-20'>
                    <p className='text-[13px] font-bold'>Shina Bxsn</p>
                    <p className='text-[12px] text-[#191919] text-opacity-50 '>sbxsn@circle.com</p>
                </div>
                <AdminMenuDots className="" />

            </div>
            
        </div>
    )
}




const AdminSideBar = () => {

    const router = useRouter()
    const path = router.asPath

    return (
        <div className='fixed hidden md:block bg-white left-0 top-0 z-30 w-[250px] h-screen border border-r-2  pt-2'>
            <div className='w-full centerFlex'>
                <img src={logo.src} className = 'w-3/4'/>
            </div>

            <div className='flex flex-col gap-y-2 mt-2'>
                {
                    SidebarNav.map((el, index) => (
                        <Link href={el.to} key={index} >
                            <div className='h-[48px] flex items-center gap-x-6 cursor-pointer hover:bg-gray-300'>
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
                <div className='ml-2 mr-10'>
                    <p className='text-[13px] font-bold'>Shina Bxsn</p>
                    <p className='text-[12px] text-[#191919] text-opacity-50 '>sbxsn@circle.com</p>
                </div>
                <AdminMenuDots className="" />
            </div>
            
        </div>
    )
}







