import './projectsStyles.css';
import React from 'react'
import ArticleProjects from './project';

import { useGetProjectsQuery } from 'features/rtkAPI/apiSlice';
export default function ProjectsList() {
  
  const { data: projects = [], isLoading, isSuccess, error, isError } = useGetProjectsQuery();

  
  return (
    <div className='projects__articles container'>
      {
        ["اسم المشروع", "Kazomera project", "Legend app"].map((e, i) => (
          <ArticleProjects key={i} heading={e} />
        ))
      }
    </div>
  )
}