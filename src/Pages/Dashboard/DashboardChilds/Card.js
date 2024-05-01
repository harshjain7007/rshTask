import React from 'react'
import "./style.css"


const Card = (props) => {
     const { value, dataType } = props
  return (
    <div className='myCard'>
    <h4>{value}</h4>
    <p>{dataType}</p>
    </div>
  )
}

export default Card