import React from 'react'
import ArticleContributions from './article_cont';
import './articles_cont.css';

export default function ArticlesContributions() {
  return (
    <div className='cont__articles'>
      {
        ["مساهمة", 'مساهمة 2'].map((e, i) => (
          <ArticleContributions key={i} heading={e} />
        ))
      }
    </div>
  )
}
