import React, {useState} from 'react'
import Content from '../../components/CoursePage-Components/Content'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import XSidebar from '../../components/XSidebar'

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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

export default index