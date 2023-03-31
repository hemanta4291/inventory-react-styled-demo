import React from 'react'
import { SelectGlobalWrapper } from './styled/SelectGlobal.styled'

const SelectGlobal = (props) => {

    const {label="",value="",options=[],onChange} = props || {}
    return (
        <SelectGlobalWrapper>
            <label>{label}</label>
            <select value={value} onChange={onChange}>
                {
                    options.length > 0 &&
                    options.map((item)=>(
                        <option value={item.title} key={item.id}>{item.title}</option>
                    ))
                }
                {/* <option>Computer</option>
                <option>Latlop</option>
                <option>Food</option>
                <option>Car</option>
                <option>Mobile</option> */}
            </select>
        </SelectGlobalWrapper>
    )
}

export default SelectGlobal