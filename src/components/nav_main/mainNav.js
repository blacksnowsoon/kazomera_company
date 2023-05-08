import React from 'react'
import './mainNav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faCamera, faHeart } from '@fortawesome/free-solid-svg-icons';



// <font-awesome-icon :icon="['fal', 'circle-user']" />
// import { faHouse } from '@fortawesome/free-regular-svg-icons';
// import { faSquareP }
// import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

import { NavLink } from 'react-router-dom';
import { images } from '../../assets';



export default function MainNav() {
  return (
    <nav className='nav nav--main'>
      <ul className='nav__items'>
        {
          // [
          //   {name: "حسابي", to:'/profile', ele:<TbUserCircle />},
          //   {name: "كازوميرا", to:'/kazomera', ele:<img alt="kazomera" src={images.logo} />},
          //   {name: "استثمارات", to:'/investments', ele:<AiOutlineDollarCircle />},
          //   {name: "مساهمات", to:'/contributions', ele:<FaRegHandshake />},
          //   {name: "مشروعات", to:'/projects', ele:<TbSquareLetterP />},
          //   {name: "أخبار", to:'/', ele:<GrHomeRounded style={{paddingBlock:"5px"}} />},
          // ]
          [ 
            {name: "حسابي", to:'/profile', ele:<FontAwesomeIcon icon={faCamera} />},
            // {name: "كازوميرا", to:'/kazomera', ele:<img alt="kazomera" src={images.logo} />},
            // {name: "استثمارات", to:'/investments', ele:<AiOutlineDollarCircle />},
            // {name: "مساهمات", to:'/contributions', ele:<FaRegHandshake />},
            // {name: "مشروعات", to:'/projects', ele:<TbSquareLetterP />},
            // {name: "أخبار", to:'/', ele:<FontAwesomeIcon icon={faCircleUser} />},
          ]
          .map((item, i) => (
            <li key={i} className={`nav__item`} data-tooltip={item.name}>
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
