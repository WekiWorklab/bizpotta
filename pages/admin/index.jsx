import { useQuery } from '@tanstack/react-query'
import React from 'react'
import AdminHome from '../../components/Admin-Components/Admin-Home'
import AdminLayout from '../../components/Admin-Components/Admin-Layout'
import AdminLiveSession from '../../components/Admin-Components/Admin-LiveSession'

const Admin = () => {

  


  return (
    <AdminLayout>
      <AdminLiveSession />
    </AdminLayout>
  )
}

export default Admin