import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { HiOutlineBell } from 'react-icons/hi';
import { images } from '../../assets';
import './mainHeader.css';

export default function MainHeader() {
  return (
    <header className='header header--main'>
      <div className='header--main__settings'>
        <ul className='header--main__options'>
          <li>
            <span><HiOutlineBell /></span>
          </li>
          <li>
            <span><HiOutlineBell /></span>
          </li>
          <li className='daul-item'>
            <span>EN</span>
            <span className='active'>عربي</span>
          </li>
        </ul>
        <div className='header--main__search'>
          <span><FaSearch fontSize={15} /></span>
          <input type='search' className='r' placeholder='بحث......' />
        </div>
      </div>
      <div className='header--main__add'></div>
      <div className='header--main__logo'>
        <a href="/"><img alt="logo" src={images.logoAddress} /></a>
      </div>
    </header>
  )
}
