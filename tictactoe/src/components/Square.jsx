import React from 'react'
import './Square.css'
import { useState, useEffect } from 'react'

export default function Square(props) {
    
    const [value, setValue] = useState("");
    useEffect(()=> {
        setValue(props.value)
    },[props.value])

    return (
        <td className='Square' onClick={() => props.onClick(props.x, props.y, setValue)}>{value}</td>
    )
}
