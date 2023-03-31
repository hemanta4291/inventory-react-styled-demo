import React from 'react'
import { TextFieldWrapper } from './styled/TextFiled.styled'

const TextField = (props) => {

    const {label,type,placeholder,name,value, onChange} = props || {}

    return (
        <TextFieldWrapper>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange}/>
        </TextFieldWrapper>
    )
}

export default TextField