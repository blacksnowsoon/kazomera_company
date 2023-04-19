import React from 'react';
import './adds.css'

export default function Adds() {
  return (
    <div className='adds'>
      {
        Array(5).fill().map((item, i) => (
            <div className='adds__add' key={i}>
              <div className='add__content'>
                1
              </div>
              <div className='add__base'>
                0
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )
        )
      }
    </div>
  )
}
