// This is a projects' compoenent only used on it;

import React from 'react';
import { GiClosedBarbute } from 'react-icons/gi';
import './menuMine.css';
import { Link } from 'react-router-dom';

const mainMenu = [
    {icon: '', title: 'مشروعاتي', to:'projects'},
    {icon: '', title: 'مساهماتي', to:'contributions'},
    {icon: '', title: 'استثماراتي', to:'investments'},
    {icon: '', title: 'ثفقاتي', to:'deals'},
  ]

const favMenu = [
    {icon: '', title: 'اهتماماتي', to:'interests'},
    {icon: '', title: 'شبكة علاقاتي', to:'relations'},
    {icon: '', title: 'العناصر المحفوظة', to:'reserved'},
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
      <ul className='projects__right-main-menu'>{itemsCreator(mainMenu)}</ul>
      <ul className='projects__right-fav-menu'>{itemsCreator(favMenu)}</ul>
    </div>
  )
}
