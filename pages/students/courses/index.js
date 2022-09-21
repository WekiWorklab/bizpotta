import React, {useState} from 'react'
import Content from '../../../components/CoursePage-Components/Content'
import NoContent from '../../../components/CoursePage-Components/NoContent'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout-Components/Layout'
import Sidebar from '../../../components/Sidebar'
import XSidebar from '../../../components/XSidebar'

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const enrolled = false

  return (
    <Layout>
        {enrolled === true ? <Content /> : <NoContent />}
    </Layout>
      
      
  )
}

export default index