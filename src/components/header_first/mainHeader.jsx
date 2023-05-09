import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { HiOutlineBell } from 'react-icons/hi';
import { SlSettings } from 'react-icons/sl';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { images } from '../../assets';
import './mainHeader.css';
import { Link } from 'react-router-dom';

export default function MainHeader() {

  const [isSetting, setSetting] = React.useState(false)

  return (
    <header className='header header--main'>
      <i style={{display: 'none'}} className='settings-icon' onClick={() => setSetting(true)}>
        <SlSettings />
      </i>
      <div className={`header--main__settings ${isSetting ? "overlay" : ""}`}>
        <i style={{display: 'none', position:'absolute', top:'15px',right:'15px'}} 
           className='settings-close'
           onClick={() => setSetting(false)}><AiOutlineClose />
        </i>
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
        <Link to="/">
          <img alt="logo" src={images.logoAddress} />
        </Link>
      </div>
      <i className='menu-icon' style={{display: 'none'}}>
        <AiOutlineMenu />
      </i>
    </header>
  )
}
