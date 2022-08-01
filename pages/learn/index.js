import React, { useState } from 'react'
import Content from '../../components/Content'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import XSidebar from '../../components/XSidebar'


const LearnersDashboard = () => {
  const [show, setShow] = useState(true)

  return (
    <div className='relative'>
      <Header show = {show} setShow = {setShow}/>
      <Content />
      <Sidebar />
      {show ? <XSidebar /> : null} {/** Sidebar with toggle functionality */}
    </div>
  )
}

export default LearnersDashboard


