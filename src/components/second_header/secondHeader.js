import React from 'react'
import { RiCustomerService2Line} from 'react-icons/ri'
import './secondHeader.css';
import MainNav from '../main_nav/mainNav';

export default function SecondHeader() {
  return (
    <header className='header header--second'>
      <ul className='header--second__options'>
        <li>
          <span><RiCustomerService2Line fontSize={30} /></span>
        </li>
        <li className='header--second__daul-item'>
          <span className='active'>عشوائي</span>
          <span>فلتر</span>
        </li>
      </ul>
      <div className='header--second__nav'>
        <MainNav />
      </div>
      <ul className='header--second__projects-buttons'>
        <li>
          <span>إنشاء مشروع</span>  
        </li>
        <li>
          <span>تقديم مساهمة</span>  
        </li>
        <li>
          <span>عرض استثمار</span>  
        </li>
      </ul>
    </header>
  )
}
