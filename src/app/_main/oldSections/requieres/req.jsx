import SecondHeader from '../../components/header_second/secondHeader';
import MainHeader from '../../components/header_first/mainHeader';
import Adds from '../../components/adds_section/adds';
import RightMneu from '../../components/menu_mine/menuMine';
// import Notifications from '../../components/notifications_section/notific';
import ArticlesNews from '../../_news/NewsList';
// import Article from '../../components/article/article';
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
          <ArticlesNews />
        </div>
        <div className='req__right-sidebar'>
          <Adds />
          <RightMneu />
        </div>
      </main>
    </div>
  )
}
