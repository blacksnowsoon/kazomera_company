import React from 'react'
import './profile.css';
import MainNav from '../../components/main_nav/mainNav'
import Notifications from '../../components/notifications_section/notific'
import Correspondence from '../../components/correspondence_section/corresp'
import Articles from '../../components/articles/articles'
import MainHeader from '../../components/main_header/mainHeader'
import SecondHeader from '../../components/second_header/secondHeader'
import { images } from '../../assets'
import User from '../../components/user_section/user';

export default function Profile() {
  return (
    <div className='profile'>
      <div className='profile__header'>
        <MainHeader />
          <div style={{display:'flex',justifyContent:'space-between', alignItems:'center',marginLeft:'15px'}}>
          <SecondHeader />
          <a href="/">
            <img alt="logo" src={images.logoAddress} style={{minWidth:'200px', paddingInline:"10px"}} />
          </a>
        </div>
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
            <div className='profile__main-nav'>
              <MainNav />
            </div>
          </div>
          
        </div>
      </main>
    </div>
  )
}
