import './mainNav.css';
import { NavLink } from 'react-router-dom';

import Icon from '../../components/icons/_react-icons';

import logo from '../../assets/site-logos/logo.png'
import SideBar from '_sidebar/SideBar';

// the second nav content can be refacotre later as an array takes all the links
// but the style has been done as it's 5 elements because it has a special design 
// whatever the number of links must be always odd
// for more impelmention should edit the style sheet of this component

const meddleMenuContent = [
  {name: "أخبار", route:'/', ele:<Icon name="BsNewspaper" size={30}/>, className: "link-news"},
  {name: "استثمارات", route:'/investments', ele:<Icon name="BsFillBarChartLineFill" size={30}/>, className: "link-invest"},
  {name: "كازوميرا", route:'/kazomera', ele:<img alt="kazomera" src={logo} className= "logo-link" />, className: "link-kazomera"},
  {name: "مساهمات", route:'/contributions', ele:<Icon name='BsCoin' size={30}/>, className: "contribut"},
  {name: "مشروعات", route:'/projects', ele:<Icon name='BsPSquare' size={30}/>, className: "link-projects"},
]

export default function MainNav() {
  return (
    <nav className='sticky'>
      <SideBar />
      <div className='second--nav-container'>
        <ul className='nav--items'>
          {
            meddleMenuContent.map((item, i) => (
              <li key={i} className="nav-item">
                <NavLink to={item.route} title={item.name} className={item?.className}>
                  {item.ele}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}
