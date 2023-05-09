import React from 'react';
import ArticleInvestments from './article_invest';
import "./articles_invest.css";


export default function ArticlesInvestments() {
  return (
    <div className='articles-invest'>
      {
        ["اسم الاستثمار", "اسم الاستثمار", 'اسم الاستثمار'].map((e, i) => (
          <ArticleInvestments heading={e} />
        ))
      }
    </div>
  )
}
