import './newsStyles.css';
import React from 'react'
import SinglePostView from './SinglePostView';

import { TbUserCircle } from 'react-icons/tb';
import { ImAttachment } from 'react-icons/im';
import { BsCamera, BsMic } from 'react-icons/bs'

// redux api selector hook

import { useGetNewsQuery } from 'features/rtkAPI/apiSlice';

import Indecator from 'components/indecators/Indecator';
import PostForm from 'components/forms/postForms/PostForm';

export default function NewsList() {

  const { data: news = [], isLoading, isSuccess, error, isError } = useGetNewsQuery();
  console.log(news)
  // const newsPosts = React.useMemo(() => {
  //   const postsByCategory = selectPostsByCategory(posts);
  // }, [posts]);
  let content;
  if (isLoading) {
    content = <Indecator />
  } else if (isSuccess) {
    content = news.map((post) => <SinglePostView key={post.id} post={post} />)
  } else if (isError) {
    content = <p>{error.data.message}</p>
  }

  return (
    <div className='news container'>
      <div className='news__header'>
        {/* <div className='news__header-search'>
          <i><ImAttachment /></i>
          <i><BsCamera /></i>
          <i><BsMic /></i>
          <input placeholder='..... أخبرنا عن شيء ضمن أحد' className='r' />
        </div>
        <i><TbUserCircle fontSize={35} strokeWidth={1.3} /></i> */}
        <PostForm />
      </div>
      <div className='news__body'>
        {content}
      </div>

    </div>
  )
}
