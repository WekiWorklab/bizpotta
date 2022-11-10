import React from 'react'
import Layout from '../../../../components/Layout-Components/Layout'
import Content from '../../../../components/Masterclass-Components/Content'
import NoContent from '../../../../components/Masterclass-Components/NoContent'

const index = () => {
  
  const enrolled = true

  return (
    <Layout>
        {enrolled ? <Content /> : <NoContent />}
    </Layout>
  )
}

export default index