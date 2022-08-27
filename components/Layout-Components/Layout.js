import React, {useState} from 'react'
import BlueFooter from '../BlueFooter'


//////
import Header from '../Header'
import Sidebar from '../Sidebar'
import XSidebar from '../XSidebar'

const Layout = ({children}) => {

  const [show, setShow] = useState(false)

  return (
    <div className='relative'>
        <Header show = {show} setShow = {setShow}/>
        {children}
        <BlueFooter />
        <Sidebar />
        {show ? <XSidebar  show = {show} setShow = {setShow} /> : null} {/** Sidebar with toggle functionality */}
    </div>
  )
}

export default Layout