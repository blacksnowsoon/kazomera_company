import React from 'react'
import ArticleHeader from '../article/article_header'
import { FaRegHandshake, FaRegHeart, FaRegStar } from 'react-icons/fa';
import { RiFundsLine } from 'react-icons/ri';
import { FiArrowDownCircle } from 'react-icons/fi';
import '../article/article.css';


export default function ArticleNews({heading}) {
  return (
    <div className='article'>
      {/* <ArticleHeader /> */}
      <div className='article__body'>
        <p>سطر مكتوب عن شئ عن استثمار</p>
        <div className='article__content'>
          <p>صورة أو فيديو أو مقطع</p>
          <p>صوتي أو ملف أو شئ</p>
        </div>
      </div>
      <div className='article__more'>
        <ul className='article__more-options'>
          <li style={{'--color-icon': 'red'}} ><FaRegHeart /></li>
          <li><FaRegStar /></li>
          <li><FaRegHandshake strokeWidth={1} /></li>
          <li style={{'--color-icon': 'green'}}><RiFundsLine  /></li>
          <li style={{'--color-icon': 'green'}}><FiArrowDownCircle strokeWidth={1} /></li>
        </ul>
      </div>
    </div>
  )
}
