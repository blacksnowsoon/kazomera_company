import React from 'react';
import { GrClose } from 'react-icons/gr';
import { TfiArrowCircleDown } from 'react-icons/tfi'
import Article from '../article/article';
import './articles.css'

export default function Articles({heading}) {
  return (
    <div className='articles'>
      <header className='articles__header'>
        <h3>{heading}</h3>
        <i><GrClose fontSize={20} style={{color:"var(--clr-brown)"}} /></i>
      </header>
      <div className='articles__body'>
        {
          Array(2).fill().map((item, i) => <Article heading={heading}/>)
        }
      </div>
      <div className='articles__more'>
        <TfiArrowCircleDown fontSize={27} />
      </div>
    </div>
  )
}
