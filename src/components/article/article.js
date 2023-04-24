import React from 'react';
import { FaEllipsisV, FaRegHandshake, FaRegHeart, FaRegStar } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import { RiFundsLine } from 'react-icons/ri';
import { FiArrowDownCircle } from 'react-icons/fi';
import './article.css';


const articleType = {
  projects: '',
}


export default function Article({heading, more=false, type=""}) {
  return (
    <article className='article'>
      <header className='article__header'>
        <ul className='article__header-tools-items'>
          <li><FaEllipsisV /></li>
          {
            ['المجال', 'التصنيف', 'المرحلة', 'الموقع', 'المتطلبات'].map((item, i) => <li key={i}>{item}</li>)
          }
        </ul>
        <div className='article__header-account'>
          <p>اسم الحساب</p>
          <i><BiUserCircle fontSize={30} fontWeight={300} /></i>
        </div>
      </header>
      <div className='article__body'>
        <div className='article__body-img'>
          <img alt="img" />
        </div>
        <div className='article__content'>
          <h3>اسم {heading}</h3>
          <p>Legend</p>
        </div>
      </div>
      <div className='article__more'>
        {
          more && (
            <ul className='article__more-options'>
              <li style={{'--color-icon': 'red'}} ><FaRegHeart /></li>
              <li><FaRegStar /></li>
              <li><FaRegHandshake strokeWidth={1} /></li>
              <li style={{'--color-icon': 'green'}}><RiFundsLine  /></li>
              <li style={{'--color-icon': 'green'}}><FiArrowDownCircle strokeWidth={1} /></li>
            </ul>
          )
        }
      </div>
    </article>
  )
}
