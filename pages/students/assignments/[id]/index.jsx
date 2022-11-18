import React from 'react'
import StudentAssignmentList from '../../../../components/Assignment-Components/StudentAssignmentList'
import NewLayout from '../../../../components/Layout-Components/NewLayout'


const AssignmentList = () => {

  return (
    <NewLayout>
        <StudentAssignmentList />
    </NewLayout>
  )
}

export default AssignmentList