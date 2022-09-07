import React from 'react'
import FirstContent from './FirstContent'
import SecondContent from './SecondContent'

const CourseStructure = () => {
    const first = true
    return (
      <div>
        {first ? <FirstContent /> : <SecondContent />}
      </div>
          
    )
}

export default CourseStructure