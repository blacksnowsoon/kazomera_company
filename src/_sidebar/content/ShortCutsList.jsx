import React from 'react';
import { GiClosedBarbute } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const userRoutesList = [
    {icon: '', title: 'مشروعاتي', to:'projects'},
    {icon: '', title: 'مساهماتي', to:'contributions'},
    {icon: '', title: 'استثماراتي', to:'investments'},
    {icon: '', title: 'ثفقاتي', to:'deals'},
  ]

const userRoutesSavedData = [
    {icon: '', title: 'اهتماماتي', to:'interests'},
    {icon: '', title: 'شبكة علاقاتي', to:'relations'},
    {icon: '', title: 'العناصر المحفوظة', to:'reserved'},
]

const UserLoginInfo = [
  {icon: '', title: 'تسجيل الدخول', to:'/account/login'},
  {icon: '', title: 'الحساب', to:'/profile'},
  {icon: '', title: 'المتطلبات', to:'/requieres'},

]

function itemsCreator(list) {
  return (
    list.map(({icon, title, to:address}, i) => {
      return (
        <li key={i}>
          <Link to={`${address}?filter=mine`}>
            <i><GiClosedBarbute fontSize={22} /></i>
            <span>{title}</span>
          </Link>
        </li>
      )
    })
  )
}


export default function menuMine() {
  return (
    <div className='projects__right-menu'>
      
      <ul className='projects__right-main-menu'>{itemsCreator(userRoutesList)}</ul>
      <ul className='projects__right-fav-menu'>{itemsCreator(userRoutesSavedData)}</ul>
      
    </div>
  )
}
