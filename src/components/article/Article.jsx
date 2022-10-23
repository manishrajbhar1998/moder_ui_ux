import React from 'react'
import './article.css';
import { IMAGE_PATH } from '../../constant/Image_path';

const Article = ({img,date,title}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className="gpt3__blog-container_article-image">
        <img src={`${IMAGE_PATH}/${img}`} alt="" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article;