import React, {useState} from 'react'
import BlueFooter from '../BlueFooter'


//////
import Header from '../Header'
import NewSidebar from '../NewSidebar'
import NewXSidebar from '../NewXSidebar'
import XSidebar from '../XSidebar'

import { motion } from 'framer-motion'

const NewLayout = ({children}) => {

  const [show, setShow] = useState(false)
  const [slideIn, setSlideIn] = useState(false)

  return (
    <div className='relative overflow-hidden'>
        <Header show = {show} setShow = {setShow} slideIn = {slideIn} setSlideIn={setSlideIn}/>
        <motion.div className = 'w-full' 
            initial={{ opacity: 0, x: '20%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ease: "easeOut", duration: 1 }}>
        {children}
          </motion.div>
        {/* <BlueFooter /> */}
        <NewSidebar />
        <NewXSidebar show = {show} setShow = {setShow} slideIn = {slideIn} setSlideIn={setSlideIn}/>
    </div>
  )
}

export default NewLayout