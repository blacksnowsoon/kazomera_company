import React from 'react';
import Notifications from '../../components/notifications_section/notific';
import './home.css';
import Adds from '../../components/adds_section/adds';
import RightMneu from '../../components/menu_mine/menuMine';
import MainHeader from '../../components/header_first/mainHeader';
import SecondHeader from '../../components/header_second/secondHeader';
import Article from '../../components/article/article';
import { Outlet } from 'react-router-dom';


export default function Home() {
  return (
    <div className='home'>
        <MainHeader />
        <SecondHeader />
      <div className='home__body'>
        <div className='home__leftside'>
          <Notifications />
          <Adds />
        </div>
        <div className='home__content'>
          <Outlet />
        </div>
        <div className='home__rightside'>
          <Adds />
          <RightMneu />
        </div>
      </div>
    </div>
  )
}
