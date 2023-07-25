import React from 'react'

const Indecator = ({text='', size = '4rem'}) => {
  return (
    <div className='indecator'>
      <div className='loader' style={{width: size, height: size}}></div>
      {text}
    </div>
  )
}

export default Indecator