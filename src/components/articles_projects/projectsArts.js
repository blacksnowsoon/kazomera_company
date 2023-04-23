import React from 'react'
import { TbUserCircle } from 'react-icons/tb';
import { ImAttachment } from 'react-icons/im';
import { BsCamera, BsMic } from 'react-icons/bs'

import Article from '../article/article';
import './projectsArts.css';

export const ProjectsArts = () => {
  return (
    <div className='projects__articles'>
      <div className='projects__header'>
        <div className='projects__header-search'>
          <i><ImAttachment /></i>
          <i><BsCamera /></i>
          <i><BsMic /></i>
          <input placeholder='..... أخبرنا عن شيء ضمن أحد' className='r' />
        </div>
        <i><TbUserCircle fontSize={35} strokeWidth={1.3} /></i>
      </div>
      <div className='projects__content'>
        <Article />
      </div>
    </div>
  )
}