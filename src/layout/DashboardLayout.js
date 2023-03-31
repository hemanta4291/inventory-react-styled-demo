import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { DashboardMiddleContainer } from '../components/styled/Dashboard.styled'
import Header from './Header'
import Sidenav from './Sidenav'

const DashboardLayout = ({children}) => {
  const [toggleOpen, setToggleOpen] = useState(false)

  const handleToggle = () =>{
      setToggleOpen(!toggleOpen)
  }
  return (
    <>
    <Header toggleOpen={toggleOpen} />
    <Sidenav toggleOpen={toggleOpen} handleToggle={handleToggle}/>
    <DashboardMiddleContainer toggleOpen={toggleOpen}>
      <Outlet/>
    </DashboardMiddleContainer>
    
    </>
  )
}

export default DashboardLayout