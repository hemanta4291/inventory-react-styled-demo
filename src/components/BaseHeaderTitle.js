import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BaseHeaderWrapper } from './styled/BaseHeaderTitle.styled'
import { ButMediumPrimaryContained } from './styled/Button.Styled'

const BaseHeaderTitle = (props) => {
  const {btnText="Default Add",title='Default Title',subTitle='Default Subtitle',handleClick=()=>{}} = props || {}
  return (
    <BaseHeaderWrapper>
        <div className='header___left'>
            <h3 className='header___title'>{title}</h3>
            <p className='header___subtitle'>{subTitle}</p>
        </div>

        <ButMediumPrimaryContained onClick={handleClick}>
                <FontAwesomeIcon icon="fa-solid fa-plus" />
                {btnText}
        </ButMediumPrimaryContained>
    </BaseHeaderWrapper>
  )
}

export default BaseHeaderTitle