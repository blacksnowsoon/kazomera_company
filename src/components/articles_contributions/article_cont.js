import React from 'react'
import ArticleHeader from '../article/article_header'
import { FaRegHandshake, FaRegHeart, FaRegStar } from 'react-icons/fa';
import { RiFundsLine } from 'react-icons/ri';
import { FiArrowDownCircle } from 'react-icons/fi';
import '../article/article.css';


export default function ArticleContributions({heading}) {
  return (
    <div className='article'>
      <ArticleHeader />
      <div className='article__body'>
        <div className='article__body-img'>
          <img alt="img" />
        </div>
        <div className='article__content'>
          <h3>{heading}</h3>
          <p>Legend</p>
        </div>
      </div>
      <div className='article__more'>
        <ul className='article__more-options'>
          <li style={{'--color-icon': 'red'}} ><FaRegHeart /></li>
          <li><FaRegStar /></li>
          <li><FaRegHandshake strokeWidth={1} /></li>
        </ul>
      </div>
    </div>
  )
}
