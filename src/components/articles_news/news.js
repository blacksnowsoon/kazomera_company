import React from 'react'
import Article from '../article/article';


export default function News() {
  return (
    <div className='news'>
      {
        ['المشروع', 'Legend', 'Kazoerma', ''].map((item, i) => <Article i={i} key={i} heading={item} more={true} />)
      }
    </div>
  )
}
