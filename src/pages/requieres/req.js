import React from 'react';
import SecondHeader from '../../components/second_header/secondHeader';
import MainHeader from '../../components/main_header/mainHeader';
import Adds from '../../components/adds_section/adds';
import RightMneu from '../../components/right_menu/rightMenu';
import Notifications from '../../components/notifications_section/notific';
import Articles from '../../components/articles/articles';
import Article from '../../components/article/article';
import './req.css';

export default function Requieres() {
  return (
    <div className='req'>
      <MainHeader />
      <SecondHeader />
      <main className='req__body'>
        <div className='req__left-sidebar'>
          {/* <Notifications /> */}
          <Adds />
        </div>
        <div className='req__content'>
          <Article />
        </div>
        <div className='req__right-sidebar'>
          <Adds />
          <RightMneu />
        </div>
      </main>
    </div>
  )
}
