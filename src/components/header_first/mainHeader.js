import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { HiOutlineBell } from 'react-icons/hi';
import { images } from '../../assets';
import './mainHeader.css';
import { Link } from 'react-router-dom';

export default function MainHeader() {
  return (
    <header className='header header--main'>
      <div className='header--main__settings'>
        <ul className='header--main__options'>
          <li>
            <i><span><HiOutlineBell fontSize={30} strokeWidth={1} /></span></i>
          </li>
          <li>
            <i><span><HiOutlineBell fontSize={30} strokeWidth={1}/></span></i>
          </li>
          <li className='daul-item'>
            <span>EN</span>
            <span className='active'>عربي</span>
          </li>
        </ul>
        <div className='header--main__search'>
          <i><span><IoIosSearch fontSize={23} /></span></i>
          <input type='search' className='r' placeholder='بحث......' />
        </div>
      </div>
      <div className='header--main__add'></div>
      <div className='header--main__logo'>
        <Link href="/"><img alt="logo" src={images.logoAddress} /></Link>
      </div>
    </header>
  )
}
