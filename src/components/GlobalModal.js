import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { ButMediumPrimaryContained } from './styled/Button.Styled'
import { GlobalModalWrapper } from './styled/GlobalModal.styled'

const GlobalModal = ({ title="Add User",children,handleclose,open ,btnText,submit=()=>{}}) => {
    const [openModal,setOpenModal] = useState(open)
    // console.log({openModal})

    const handleModalClose = () => {
        setOpenModal(false)
        handleclose()
    }

    return (
        <GlobalModalWrapper openModalStatus={openModal}>
            <div className='overly' onClick={handleModalClose}></div>
            <div className='modal__container'>
                <div className='header'>
                    <h5 className='title'>{title}</h5>
                    <span className="close" onClick={handleModalClose} ><FontAwesomeIcon icon="fa-fas fa-xmark" /></span>
                </div>
                <div className='body'>
                    {
                        children
                    }
                </div>
                <div className='footer'>
                    <ButMediumPrimaryContained onClick={submit}> 
                        {btnText ? btnText : "Send"}
                    </ButMediumPrimaryContained>
                </div>


            </div>

            

        </GlobalModalWrapper>
    )
}

export default GlobalModal