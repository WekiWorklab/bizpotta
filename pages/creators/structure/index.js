import React from 'react'
import FirstContent from '../../../components/CreatorsComponents/CourseStructureComponent/FirstContent'
import SecondContent from '../../../components/CreatorsComponents/CourseStructureComponent/SecondContent'

import Layout from '../../../components/CreatorsComponents/LayoutComponents/Layout'


const index = () => {
    const first = false
  return (
    <Layout>
        {first ? <FirstContent /> : <SecondContent />}
    </Layout>
  )
}

export default index