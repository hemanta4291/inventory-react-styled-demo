import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Icons } from './Icons'

const SidebarMenu = ({ item }) => {
    const { id, title, icon,to,dropdownItems,dropdown } = item
    const [expand,setExpand] = useState(false)
    let activeStyle = {
        textDecoration: "",
    };

    const handleToggle = () => {
        // alert("okk")
        setExpand(!expand)
    }

    // let activeClassName = "underline";
    return (
        <li>
            <NavLink
                onClick={dropdown ? handleToggle : ()=>{}}
                to={to}
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined} >

                <span className='nav_left'>
                    {icon}
                    <span className='nav__title'>{title}</span>
                </span>
                {dropdown && 
                    <span className='expand'>{Icons.expandIcon}</span>
                }
                
            </NavLink>
            {dropdown && dropdownItems.length > 0 && 
                <ul className={"droup__down " + (expand ? "drop__expand" : 'drop__collapse')}>
                    {dropdownItems?.map((menu)=>(
                        <li>
                            <NavLink to={menu.to}>

                                <span className=''>
                                    {menu.icon}
                                    <span className="">{menu.title}</span>
                                </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            }
            
        </li>
    )
}

export default SidebarMenu