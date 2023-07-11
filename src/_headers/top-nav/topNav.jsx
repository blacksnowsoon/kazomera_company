// this top nav will be refactore by yassser 
// pleas delete all the styles and the components
// stuck with the design provided by eng.abdelfatah for now
// before start coding look at the ruleset.md file 
// and keep in mind the design good luck
// after finishing the design push it to github

import './topNavStyle.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

//  created modules
import logo from '../../assets/site-logos/logo-address.png'
import Icon from '../../components/icons/_react-icons';

// note the menu in responsive disgn not yet stylyed

//  top nav component has :
// logo-notifications-searchbar-menuBtn for responsive design.
// the setting icon need to refactoring 

const meddleMenuContent = [
  {name: "أخبار", route:'/', ele:<Icon name="BsNewspaper" size={30}/>, className: "link-news"},
  {name: "استثمارات", route:'/investments', ele:<Icon name="BsFillBarChartLineFill" size={30}/>, className: "link-invest"},
  {name: "كازوميرا", route:'/kazomera', ele:<img alt="kazomera" src={logo} className= "logo-link" />, className: "link-kazomera"},
  {name: "مساهمات", route:'/contributions', ele:<Icon name='BsCoin' size={30}/>, className: "contribut"},
  {name: "مشروعات", route:'/projects', ele:<Icon name='BsPSquare' size={30}/>, className: "link-projects"},
]

function TopNav() {
  const [isSetting, setSetting] = React.useState(false);
  const [isMenu, setMenu] = React.useState(false);
  return (
    <>
      <nav className='header--main'>
      {/* logo and menu btn */}
        <div className='header--right'>
          <i className='menu-icon' style={{display: 'none'}} onClick={() => setMenu(true)}>
            <Icon name='FcMenu' />
          </i>
          <div className='logo--container'>
            <Link className='logo--link' to="/">
              <img alt="site-main-logo" src={logo} />
            </Link>
          </div>
          <h5 className='slogon'>KAZOMERA</h5>
        </div>
        {/* search bar */}
        <div className='header--center'>
          <div className='search--container'>
            <button className='search-icon' title='بحث' onClick={() => setSetting(true)}>
            <Icon name="BsSearch" />
            </button>
            <input 
            type='search' 
            className='search--box' 
            placeholder='بحث' 
            autoComplete='on' 
            autoCorrect='on'
            datatype='text' />
          </div>
        </div>
        {/* user notification and language options */}
        <div className='header--left'>
          <div className='language--options'>
              <span title='English' data-toggle="en">EN</span>
              <span title='عربي' data-toggle="ar" className='active'>عربي</span>
          </div>
          <div 
            title='الأشعارات'
            className='notifications--options collapsed' 
            data-toggle="collapse">
              <Icon name='BsBell' color={'black'} className={["if-collapsed"]} size={30}/>
              <Icon name='BsBellFill' color={'black'} className={["if-not-collapsed"]} size={30}/>
          </div>
        </div>
      </nav>
      {/* {isMenu && <Menu isMenu={isMenu} setMenu={setMenu} />} */}
    </>
  )
}


export default TopNav;

export  function MainNav() {
  return (
    <nav className='sticky second--nav-container'>
      
      
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
    </nav>
  )
}