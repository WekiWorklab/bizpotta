import React, {useState} from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout-Components/Layout'
import Sidebar from '../../components/Sidebar'
import XSidebar from '../../components/XSidebar'
import Content from '../../components/Content'
import NoContent from '../../components/Content-Components/NoContent'

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const content = false

  return (
    <Layout>
      {content ? <Content /> : <NoContent />}
    </Layout>
      
        
  )
}

export default index