import React from 'react'
import './profile.css';
import MainNav from '../../components/nav_main/mainNav'
import Notifications from '../../components/notifications_section/notific'
import Correspondence from '../../components/correspondence_section/corresp'
import Articles from '../../components/articles/articles'
import User from '../../components/user_section/user';
import MinHeader from '../../components/header_minimum/minHeader';

export default function Profile() {
  return (
    <div className='profile'>
      <div className='profile__header'>
        <MinHeader />
      </div>
      <main className='profile__body'>
        <div className='left-sidebar'>
          <Notifications />
        </div>
        <div className='profile__content'>
          <User />
          <div className='articles__container'>
          {
            ['المشاريع', 'المساهمات', 'الاستثمارات', 'الثفقات', 'الإهتمامات']
            .map((obj, s) => <Articles heading={obj} base={true}  />)
          }
          </div>
        </div>
        <div className='profile__right-sidebar'>
          <Correspondence />
          <div style={{display:'flex',gap:'10px'}}>
            <Correspondence />
            <div className='right-side'>
              <MainNav />
            </div>
          </div>
          
        </div>
      </main>
    </div>
  )
}
