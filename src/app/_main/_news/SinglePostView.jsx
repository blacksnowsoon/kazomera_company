
import React from 'react'
import ArticleHeader from 'components/_oldcode/article/article_header'
import { FaRegHandshake, FaRegHeart, FaRegStar } from 'react-icons/fa';
import { RiFundsLine } from 'react-icons/ri';
import { FiArrowDownCircle } from 'react-icons/fi';


export default function SinglePostView({post}) {
  // console.log(post)
  return (
    <div className='article'>
      {/* <ArticleHeader /> */}
      <div className='article__body'>
        <p>{post.title}</p>
        <div className='article__content'>
          <img src={post.imageURL} alt={post.title} style={{width: '100%'}}/>
        </div>
      </div>
      <div className='article__more'>
        <ul className='article__more-options'>
          <li style={{'--color-icon': 'red'}} ><FaRegHeart /></li>
          <li><FaRegStar /></li>
          <li><FaRegHandshake strokeWidth={1} /></li>
          {/* <li style={{'--color-icon': 'green'}}><RiFundsLine  /></li> */}
          <li style={{'--color-icon': 'green'}}><FiArrowDownCircle strokeWidth={1} /></li>
        </ul>
      </div>
    </div>
    
  )
}
