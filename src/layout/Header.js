import React from 'react'
import { Icons } from '../components/Icons'
import { HeaderWrapper } from '../components/styled/Header.styled'

const Header = () => {
  return (
    <HeaderWrapper>
        <div className='header__container'>
            <span>{Icons.messageIcon}</span>
            <span>{Icons.notificationIcon}</span>
            <img className='header__profile' src="https://toppng.com/uploads/preview/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug.png" />
        </div>
    </HeaderWrapper>
  )
}

export default Header