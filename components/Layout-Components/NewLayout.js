import React, {useState} from 'react'
import BlueFooter from '../BlueFooter'


//////
import Header from '../Header'
import NewSidebar from '../NewSidebar'
import NewXSidebar from '../NewXSidebar'
// import Sidebar from '../Sidebar'
import XSidebar from '../XSidebar'

const NewLayout = ({children}) => {

  const [show, setShow] = useState(false)
  const [slideIn, setSlideIn] = useState(false)

  return (
    <div className='relative overflow-hidden'>
        <Header show = {show} setShow = {setShow} slideIn = {slideIn} setSlideIn={setSlideIn}/>
        {children}
        {/* <BlueFooter /> */}
        <NewSidebar />
        <NewXSidebar show = {show} setShow = {setShow} slideIn = {slideIn} setSlideIn={setSlideIn}/>
    </div>
  )
}

export default NewLayout