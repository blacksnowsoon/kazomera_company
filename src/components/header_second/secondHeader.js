import React from 'react'
import { RiCustomerService2Line} from 'react-icons/ri'
import './secondHeader.css';
import MainNav from '../nav_main/mainNav';
import { Link } from 'react-router-dom';

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
          <Link to=""><span>إنشاء مشروع</span></Link>  
        </li>
        <li>
          <Link to=""><span>تقديم مساهمة</span></Link>  
        </li>
        <li>
          <Link to=""><span>عرض استثمار</span></Link>  
        </li>
      </ul>
    </header>
  )
}
