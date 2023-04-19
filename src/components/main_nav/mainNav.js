import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { images } from '../../assets';

export default function MainNav() {
  return (
    <nav className='nav nav--main'>
      <ul className='nav__items'>
        <li className='nav__item nav__item--profile'>
          <span><AiOutlineUser /></span>
        </li>
        <li className='nav__item nav__item--kazomera'>
          <span><img alt="kazomera" src={images.logo} /></span>
        </li>
        <li className='nav__item nav__item--traders'>
          <span><AiOutlineUser /></span>
        </li>
        <li className='nav__item nav__item--contribution'>
          <span><AiOutlineUser /></span>
        </li>
        <li className='nav__item nav__item--news'>
          <span><AiOutlineUser /></span>
        </li>
      </ul>
    </nav>
  )
}
