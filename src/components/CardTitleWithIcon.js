import React from 'react'
import { Icons } from './Icons'
import { CardTitleWithIconWrapper } from './styled/CardTitleWithIcon.styled'

const CardTitleWithIcon = (props) => {
  const {icon,type,title="",total=""} = props || {}
  return (
    <CardTitleWithIconWrapper type={type}>
        <div className='card__left'>
            {icon}
        </div>
        <div className='card__right'>
            <span>{title}</span>
            <h5>{total}</h5>
        </div>
    </CardTitleWithIconWrapper>
  )
}

export default CardTitleWithIcon