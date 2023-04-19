import React from 'react';
import Notifications from '../../components/notifications_section/notific';
import './projects.css';
import Adds from '../../components/adds_section/adds';
import RightMneu from '../../components/right_menu/rightMenu';
import MainHeader from '../../components/main_header/mainHeader';
import SecondHeader from '../../components/second_header/secondHeader';
import Article from '../../components/article/article';


export default function Projects() {
  return (
    <div className='projects'>
        <MainHeader />
        <SecondHeader />
      <div className='projects__body'>
        <div className='projects__body-leftside'>
          <Notifications />
          <Adds />
        </div>
        <div className='projects__body-side'>
          {
            ['المشروع', 'Legend', 'Kazoerma', ''].map((item, i) => <Article i={i} key={i} heading={item} more={true} />)
          }
        </div>
        <div className='projects__body-rightside'>
          <Adds />
          <RightMneu />
        </div>
      </div>
    </div>
  )
}
