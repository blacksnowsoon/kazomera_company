import React from 'react'
import './indecatorStyle.css'
const Indecator = ({text='', size = '2.5em'}) => {
  return (
    <div className='indecator'>
      <div className='loader' style={{width: size, height: size}} ></div>
      {text}
    </div>
  )
}

export default Indecator