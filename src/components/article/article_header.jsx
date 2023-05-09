import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import './article.css';
// import { FiArrowDownCircle } from 'react-icons/fi';
// import { FaEllipsisV, FaRegHandshake, FaRegHeart, FaRegStar } from 'react-icons/fa';


export default function ArticleHeader({heading}) {

  const [isClosed, setClosed] = useState(true);
  const items = () => ['المجال', 'التصنيف', 'المرحلة', 'الموقع', 'المتطلبات'].map((item, i) => <li key={i}>{item}</li>)

  return (
      <header className='article__header'>
        <ul className='article__header-tools-items items-rounded-dark'>
          <li className='article__header-tools-more' 
              onMouseEnter={() => setClosed(false)}
              onMouseLeave={() => setClosed(true)}
              >
            <FaEllipsisV />
          </li>
          {
            items()
          }
        </ul>
        <div className='article__header-account'>
          <p>اسم الحساب</p>
          <i><BiUserCircle fontSize={30} fontWeight={300} /></i>
        </div>
        <div className='article__header-data-label' style={{position: "absolute", display: isClosed ? "none":"block"}}>
          <ul className='article__header-tools-items items-rounded-dark'>{items()}</ul>
        </div>
      </header>
  )
}
