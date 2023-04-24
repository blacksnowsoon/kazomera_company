import React from 'react'
import Article from '../article/article';
import { TbUserCircle } from 'react-icons/tb';
import { ImAttachment } from 'react-icons/im';
import { BsCamera, BsMic } from 'react-icons/bs'
import './news.css';


export default function News() {
  return (
    <div className='news'>
      <div className='news__header'>
        <div className='news__header-search'>
          <i><ImAttachment /></i>
          <i><BsCamera /></i>
          <i><BsMic /></i>
          <input placeholder='..... أخبرنا عن شيء ضمن أحد' className='r' />
        </div>
        <i><TbUserCircle fontSize={35} strokeWidth={1.3} /></i>
      </div>
      <div className='news__body'>
        {
          ['المشروع', 'Legend', 'Kazoerma', ''].map((item, i) => <Article i={i} key={i} heading={item} more={true} />)
        }
      </div>

    </div>
  )
}
