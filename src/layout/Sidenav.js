import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Icons } from '../components/Icons'
import SidebarMenu from '../components/SidebarMenu'
import { SidenavWrapper } from '../components/styled/Sidenav.styled'
import { sidebar } from '../demo-data/DemoData'

const Sidenav = ({handleToggle,toggleOpen}) => {
    const [sidebarData, setSidebarData] = useState(sidebar)
   
    return (
        <SidenavWrapper toggleOpenAt={toggleOpen}>
            <div className={"side__logo " + (toggleOpen ? "toggle__active" : "toggle__deactive")}>
                <span className='side__collapse__logo'>{Icons.saleIcon}</span>
                 <h4 className='side__collapse_title'>Inventory</h4>
                
                <span className='toggle__btn' onClick={handleToggle}><FontAwesomeIcon width='25px' icon="fa-solid fa-angle-left" /></span>
            </div>
            <ul>
                {
                    sidebarData?.map((item,i)=>(
                        <SidebarMenu item={item}/>
                    ))
                }
            </ul>
        </SidenavWrapper>
    )
}

export default Sidenav