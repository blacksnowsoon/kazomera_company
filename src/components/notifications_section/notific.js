import React from 'react'
import { GrClose } from 'react-icons/gr'
import './notific.css';

export default function Notifications() {
  return (
    <div className='notific'>
      <header className='notific__header'>
        <h3>الإشعارات</h3>
        <i><GrClose fontSize={20} style={{color:"var(--clr-brown)"}} /></i>
      </header>
      <div className='notific__body'>
        {
          Array(20).fill({src:'', name:'اسم المستخدم', bio:'معجب بمشروعك'}).map(({src, name, bio}, i) => {
            return (
              <div className='notific__box'>
                <div className='notific__box-photo'>
                  <img alt="U" src={src} />
                </div>
                <div className='notific__box-content'>
                  <h5>{name}</h5>
                  <p>{bio}</p>
                </div>
              </div>  
            )
          })
        }
      </div>
    </div>
  )
}
