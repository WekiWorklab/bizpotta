import React, { useState } from 'react'
import Content from '../../components/Content'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import XSidebar from '../../components/XSidebar'


const LearnersDashboard = () => {
  const [show, setShow] = useState(false)

  return (
    <div className='relative'>
      <Header show = {show} setShow = {setShow}/>
      <Content />
      <Sidebar />
      {show ? <XSidebar  show = {show} setShow = {setShow} /> : null} {/** Sidebar with toggle functionality */}
    </div>
  )
}

export default LearnersDashboard


