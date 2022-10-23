import React from 'react';
import './blog.css';
import { Article } from '../../components';


const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening,
          We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
            <Article img="blog01.png" date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className="gpt3__blog-container_groupB">
            <Article img="blog02.png" date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            <Article img="blog03.png" date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            <Article img="blog04.png" date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            <Article img="blog05.png" date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog