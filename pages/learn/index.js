import React, { useState } from 'react'
import Content from '../../components/Content'
import Header from '../../components/Header'
import Layout from '../../components/Layout-Components/Layout'
import Sidebar from '../../components/Sidebar'
import XSidebar from '../../components/XSidebar'


const LearnersDashboard = () => {
  const [show, setShow] = useState(false)

  return ( 
      <Layout>
        <Content />
      </Layout>
  )
}

export default LearnersDashboard



// <div className='relative'>
      {/* <Header show = {show} setShow = {setShow}/>
      <Content />
      <Sidebar /> */}
      {/* {show ? <XSidebar  show = {show} setShow = {setShow} /> : null} * Sidebar with toggle functionality */}
    // </div>