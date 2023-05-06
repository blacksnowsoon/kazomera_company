import React from 'react'

import ArticleProjects from './article_projects';
import './articles_projects.css';

export default function ArticlesProjects() {
  return (
    <div className='projects__articles'>
      {
        ["اسم المشروع", "Kazomera project", "Legend app"].map((e, i) => (
          <ArticleProjects key={i} heading={e} />
        ))
      }
    </div>
  )
}