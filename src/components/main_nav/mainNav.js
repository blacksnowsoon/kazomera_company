import React from 'react'
import { GrHomeRounded } from 'react-icons/gr';
import { TbSquareLetterP, TbUserCircle } from 'react-icons/tb';
import { FaRegHandshake } from 'react-icons/fa';
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { images } from '../../assets';
import { NavLink } from 'react-router-dom';
import './mainNav.css';

export default function MainNav() {
  return (
    <nav className='nav nav--main'>
      <ul className='nav__items'>
        {
          [
            {to:'/profile', ele:<TbUserCircle />},
            {to:'/kazomera', ele:<img alt="kazomera" src={images.logo} />},
            {to:'/investments', ele:<FaRegHandshake />},
            {to:'/contributions', ele:<AiOutlineDollarCircle />},
            {to:'/projects', ele:<TbSquareLetterP />},
            {to:'/', ele:<GrHomeRounded style={{paddingBlock:"5px"}} />},
          ]
          .map((item, i) => (
            <li key={i} className={`nav__item`}>
              <NavLink to={item.to} >
                {item.ele}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
