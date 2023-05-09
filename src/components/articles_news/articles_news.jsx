import React from 'react'
import ArticleNews from './article_news';
import { TbUserCircle } from 'react-icons/tb';
import { ImAttachment } from 'react-icons/im';
import { BsCamera, BsMic } from 'react-icons/bs'
import './articles_news.css';


export default function ArticlesNews() {
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
          ['المشروع', 'Legend', 'Kazoerma', ''].map((item, i) => <ArticleNews i={i} key={i} heading={item} />)
        }
      </div>

    </div>
  )
}
