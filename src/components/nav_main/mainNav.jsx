import './mainNav.css';
import { NavLink } from 'react-router-dom';
import { images } from '../../assets';

import { TbUserCircle } from 'react-icons/tb';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { FaRegHandshake } from 'react-icons/fa';
import { TbSquareLetterP } from 'react-icons/tb';
import { GrHomeRounded } from 'react-icons/gr';

import { House, LetterP, ShakeingHands, SackDollar, AccountCircle  } from '../../assets/svgs';


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
            {name: "حسابي", to:'/profile', ele:<AccountCircle />},
            {name: "كازوميرا", to:'/kazomera', ele:<img alt="kazomera" src={images.logo} />, notLink: true},
            {name: "استثمارات", to:'/investments', ele:<SackDollar />},
            {name: "مساهمات", to:'/contributions', ele:<ShakeingHands />},
            {name: "مشروعات", to:'/projects', ele:<LetterP />},
            {name: "أخبار", to:'/', ele:<House />},
          ]
          .map((item, i) => (
            <li key={i} className="nav__item" data-tooltip={item.name}>
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
