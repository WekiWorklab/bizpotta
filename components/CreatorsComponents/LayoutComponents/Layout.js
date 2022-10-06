import React, { useState } from 'react'
import BlueFooter from '../../BlueFooter'
import Header from '../../Header'
import Sidebar from './Sidebar'
import XSidebar from './XSidebar'

const Layout = ({children}) => {
    const [show, setShow] = useState(false)
    const [slideIn, setSlideIn] = useState(false)
  
    return (
      <div className='relative overflow-hidden'>
          <Header show = {show} setShow = {setShow} slideIn = {slideIn} setSlideIn={setSlideIn}/>
          {children}
          {/* <BlueFooter /> */}
          <Sidebar />

          {/* {show ? <XSidebar  show = {show} setShow = {setShow} slideIn = {slideIn} setSlideIn={setSlideIn} /> : null} * Sidebar with toggle functionality */}
          <XSidebar show={show} setShow={setShow} slideIn={slideIn} setSlideIn={setSlideIn} />
      </div>
    )
}

export default Layout