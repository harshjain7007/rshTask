import React from 'react'
import './style.css'
import { RotatingLines } from 'react-loader-spinner'

export const RotatingLine = ({color = "var(--Primary_Color)"}) => <RotatingLines
strokeColor={color}
strokeWidth="5"
animationDuration="0.75"
width="20"
visible={true}
/>


export const TableLoader = ({color = "var(--Primary_Color)"}) => <div className='Center_Div'> <RotatingLines
strokeColor={color}
strokeWidth="5"
animationDuration="0.75"
width="50"
visible={true}
/> </div>

export const DivLoader = ({color = "var(--Primary_Color)"}) => <div className='Center_Div DivLoad'> <RotatingLines
strokeColor={color}
strokeWidth="5"
animationDuration="0.75" 
width="50"
visible={true} 
/> </div>


export const DivLoaderCreate = ({color = "var(--Primary_Color)"}) => <div className='Center_Div DivLoad'> <RotatingLines
strokeColor={color}
strokeWidth="5"
animationDuration="0.75" 
width="30"
visible={true}
/> </div>