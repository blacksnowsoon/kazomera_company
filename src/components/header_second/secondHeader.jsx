import { RiCustomerService2Line} from 'react-icons/ri'
import './secondHeader.css';
import MainNav from '../nav_main/mainNav';
import { Link, NavLink } from 'react-router-dom';

export default function SecondHeader() {
  return (
    <header className='header header--second'>
      <ul className='header--second__options'>
        <li>
          <span><RiCustomerService2Line fontSize={30} /></span>
        </li>
        <li className='header--second__daul-item'>
          <span className='active'>عشوائي</span>
          <span>فلتر</span>
        </li>
      </ul>
      <div className='header--second__nav'>
        <MainNav />
      </div>
      <ul className='header--second__projects-buttons items-btns items-btns--blue-active'>
        <li>
          <NavLink to="/create/project"><span>إنشاء مشروع</span></NavLink>  
        </li>
        <li>
          <NavLink to="/create/contribution"><span>تقديم مساهمة</span></NavLink>  
        </li>
        <li>
          <NavLink to="/create/investment"><span>عرض استثمار</span></NavLink>  
        </li>
      </ul>
    </header>
  )
}
