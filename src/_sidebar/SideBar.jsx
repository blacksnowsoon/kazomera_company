import './sidebar.css';
import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../components/icons/_react-icons'
import MainMenu from './content/ShortCutsList'
import { NavLink } from 'react-router-dom';
import { BsCamera } from 'react-icons/bs';

const sidebarSections = {
  creates: {
    createProject: {
      title: 'اضافة مشروع',
      icon: '',
      to: ':id/projects/create',
    },
    createInvestment: {
      title: 'اضافة مساهمة',
      icon: '',
      to: ':id/investments/create', 
    },
    createContribution: {
      title: 'اضافة مساهمة',
      icon: '',
      to: 'id/contributions/create',
    }
  },
  activities: {
    interests: {
      title: 'أهتماماتى', 
      icon: '',
      to: ':id/interests',
    },
    connections: {
      title: 'شبكات علاقاتى', 
      icon: '',
      to: ':id/connections',
    },
    savedSubjects: {
      title: 'المواضيع المحفوظة', 
      icon: '',
      to: ':id/reserved',
    }
  },
  settings: {
    account: {
      title: 'حسابي',
      icon: '',
      to: ':id/profile'
    },
    signOut: {
      title: 'تسجيل الخروج',
      icon: '',
    }
  },
}
const SideBar = props => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <nav className={['sidebar-container', isOpen ? 'slide-move-right' : ''].join(" ")}>
      <ToggleMenu onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <UserInfo />
      <UserShortcuts isOpen={isOpen}/>
      {/* <MainMenu /> */}
    </nav>
  )
}

SideBar.propTypes = {}

export default SideBar

const ToggleMenu = ({onClick, isOpen}) => {

  return (
    <button title={!isOpen ? 'أغلاق' : 'أفتح'}  
      onClick={onClick} 
      className={['toggle-sidebar-btn', isOpen ? 'collapsed' : ''].join(" ")} data-toggle='collapse'>
      <Icon name='BsFillArrowLeftCircleFill' size={30} className={["if-collapsed"]} />
      <Icon name='BsFillArrowRightCircleFill'size={30} className={["if-not-collapsed"]} />
    </button>
  )
}
const UserInfo =()=> {
  return (
    <>
      <div className='user-info-container'>
        <div className='user-img-sidebar'>
          <img alt="user" src={require('../assets/site-logos/logo.png')} />
          <p>user name</p>
        </div>
        <div className='profile-complete-bar'>
          <h5 className='title-complete'>الملف الشخصي مكتمل بنسبة</h5>
          <p className='presentage-complete'>65%</p>
          <div className='percentage-bar'></div>
        </div>
        
      <small className='user-info-small'>اكتمال الملف الشخصى يويد الفرص</small>
      </div>
    </>
    
  )
}
const UserShortcuts = ({isOpen}) => {
  return (
    <div className='shortcuts-container'>
      <ul className='user-shortcuts-parent-list'> 
        {
          Object.entries(sidebarSections).map(([Pkey, Pvalue]) => {
            return (
              <li key={Pkey} className='shortcut-p-item'>
                <ul className='user-shortcuts-nested-list'>
                  {
                    Object.entries(Pvalue).map(([cKey, cValue]) => {
                      return (
                        <li className='shortcut-nested-item' key={cKey}>
                          <NavLink title={cValue?.title} className={['user-shortcut-link', isOpen ? 'slide-reverse-flex': ''].join(" ")} to={cValue?.to}>
                          <Icon name='BsCamera' className={["sidebar-icon"]} />
                          {cValue.title}
                          </NavLink>
                      </li>
                      )
                    })
                  }
                </ul>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}