import React from 'react'
import { Row, Col } from 'react-bootstrap'


const SecondChild = (props) => {
     const { value, dataType, head, value2, dataType2 } = props
     return (
          <div className='myCard'>
               <div className='myCardChild'>
                    <div>
                         <h2> {head} </h2>
                    </div>
                    <div>
                         <p> jounary 2022 </p>
                    </div>
               </div>
               <div className='myInsideData'>
               <div>
                    <h4>{value}</h4>
                    <p>{dataType}</p>
               </div>
               <div>
                    <h4>{value2}</h4>
                    <p>{dataType2}</p>
               </div>
               </div>
          </div>
     )
}
export default SecondChild