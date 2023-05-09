import './profile.css';

import MainNav from '../../components/nav_main/mainNav'
import MinHeader from '../../components/header_minimum/minHeader';
import Notifications from '../../components/notifications_section/notific'
import Correspondence from '../../components/correspondence_section/corresp'
import User from '../../components/user_section/user';
import Foryou from '../../components/foryou_section/foryou';
import ArticlesProjects from '../../components/articles_projects/articles_projects';

export default function Profile() {
  return (
    <div className='profile'>
      <div className='profile__header'>
        <MinHeader />
      </div>
      <main className='profile__body'>
        <div className='profile__left-sidebar'>
          <Notifications />
          <Correspondence  />
        </div>
        <div className='profile__content'>
          <User />
          <div className='profile__articles--container'>
            <div className='articles__projects'>
              <h3 className='profile__articles-heading'>المشاريع</h3>
              <ArticlesProjects />
            </div>
            <div className='articles__contributions'>
              <h3 className='profile__articles-heading'>المساهمات</h3>
              <ArticlesProjects />
            </div>
            <div className='articles__investments'>
              <h3 className='profile__articles-heading'>الاستثمارات</h3>
              <ArticlesProjects />
            </div>
          </div>
        </div>
        <div className='profile__right-sidebar'>
          <Foryou />
          <div style={{display:'flex',gap:'10px'}}>
            <Correspondence />
            <div className='right'>
              <MainNav />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}