import './mainNav.css';
import { NavLink } from 'react-router-dom';
import { images } from '../../assets';

import { TbUserCircle } from 'react-icons/tb';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { FaRegHandshake } from 'react-icons/fa';
import { TbSquareLetterP } from 'react-icons/tb';
import { GrHomeRounded } from 'react-icons/gr';


export default function MainNav() {
  return (
    <nav className='nav nav--main'>
      <ul className='nav__items'>
        {
          [
            {name: "حسابي", to:'/profile', ele:<TbUserCircle />},
            {name: "كازوميرا", to:'/kazomera', ele:<img alt="kazomera" src={images.logo} />},
            {name: "استثمارات", to:'/investments', ele:<AiOutlineDollarCircle />},
            {name: "مساهمات", to:'/contributions', ele:<FaRegHandshake />},
            {name: "مشروعات", to:'/projects', ele:<TbSquareLetterP />},
            {name: "أخبار", to:'/', ele:<GrHomeRounded style={{paddingBlock:"5px"}} />},
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
