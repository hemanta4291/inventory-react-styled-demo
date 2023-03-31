import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import BarChart from '../components/BarChart'
import CardTitleWithIcon from '../components/CardTitleWithIcon'
import { DashboardProductQuantity, DashboardTop, DashboardWrapper } from '../components/styled/Dashboard.styled'

const Dashboard = () => {
  return (
    <DashboardWrapper>
        <DashboardTop>
          <div className='top__left'>
            <h2>Hi Devid,Good Morning..</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
          </div>
          <div className='top__right'>
            <CardTitleWithIcon 
              icon={<FontAwesomeIcon icon="fa-solid fa-users" />}
              type="primary"
              title="Total Admin" 
              total="540"
            />
            <CardTitleWithIcon
              icon={<FontAwesomeIcon icon="fa-solid fa-baseball" />}
              type="secondary"
              title="Total Products" 
              total="540"
            />
            <CardTitleWithIcon
              icon={<FontAwesomeIcon icon="fa-light fa-satellite" />}
              type="success"
              title="Total Sales" 
              total="541000"
            />
          </div>
        </DashboardTop>

        <DashboardProductQuantity>
            <BarChart/>
        </DashboardProductQuantity>
        
        
    </DashboardWrapper>
  )
}

export default Dashboard