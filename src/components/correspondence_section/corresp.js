import React from 'react'
import { GrClose } from 'react-icons/gr';
import { FaSearch } from 'react-icons/fa';
import './corresp.css';

export default function Correspondence() {
  return (
    <div className='corresp notific'>
      <header className='corresp__header'>
        <div>
          <h3>المراسلات</h3>
          <i><GrClose fontSize={20} style={{color:"var(--clr-brown)"}} /></i>
        </div>
        <div>
          <i><FaSearch /></i>
          <input type="search" placeholder='بحث في المراسلات' />
        </div>
        <ul>
          <li className='active'><span>ضمن علاقاتي</span></li>
          <li><span>خارج علاقاتي</span></li>
        </ul>
      </header>
      <div className='notific__body'>
        {
          Array(20).fill({src:'', name:'اسم المستخدم', message:'نص الرسالة'}).map(({src, name, message}, i) => {
            return (
              <div className='notific__box'>
                <div className='notific__box-photo'>
                  <img alt="U" src={src} />
                </div>
                <div className='notific__box-content'>
                  <h5>{name}</h5>
                  <p>{message}</p>
                </div>
              </div>  
            )
          })
        }
      </div>
    </div>
  )
}
