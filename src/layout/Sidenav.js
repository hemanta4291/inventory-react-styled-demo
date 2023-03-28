import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icons } from '../components/Icons'
import SidebarMenu from '../components/SidebarMenu'
import { SidenavWrapper } from '../components/styled/Sidenav.styled'
import { sidebar } from '../demo-data/DemoData'

const Sidenav = () => {
    const [sidebarData, setSidebarData] = useState(sidebar)

    return (
        <SidenavWrapper>
            <div className='side__logo'>
                <h2>Inventory</h2>
                <span>{Icons.toggleIcon}</span>
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