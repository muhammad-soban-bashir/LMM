import React from 'react'
import { Outlet } from 'react-router-dom'

const StudentCommonLayout = () => {
  return (
    <div>StudentCommonLayout
        <Outlet/>
    </div>
  )
}

export default StudentCommonLayout