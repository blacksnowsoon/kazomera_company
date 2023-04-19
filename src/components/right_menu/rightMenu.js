// This is a projects' compoenent only used on it;

import React from 'react';
import { GiClosedBarbute } from 'react-icons/gi'
import './rightMenu.css';

const mainMenu = [
    {icon: '', title: 'مشروعاتي'},
    {icon: '', title: 'مساهماتي'},
    {icon: '', title: 'استثماراتي'},
    {icon: '', title: 'ثفقاتي'},
  ]

const favMenu = [
    {icon: '', title: 'اهتماماتي'},
    {icon: '', title: 'شبكة علاقاتي'},
    {icon: '', title: 'العناصر المحفوظة'},
]

function itemsCreator(list) {
  return (
    list.map(({icon, title, address}, i) => {
      return (
        <li key={i}>
          <a href={`${address}`}>
            <i><GiClosedBarbute fontSize={22} /></i>
            <span>{title}</span>
          </a>
        </li>
      )
    })
  )
}


export default function RightMneu() {
  return (
    <div className='projects__right-menu'>
      <ul className='projects__right-main-menu'>{itemsCreator(mainMenu)}</ul>
      <ul className='projects__right-fav-menu'>{itemsCreator(favMenu)}</ul>
    </div>
  )
}
