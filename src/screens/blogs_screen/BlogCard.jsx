import React from 'react';
import './BlogCard.css';

const BlogCard = ({ title, author, content }) => {
  return (
    <div className="blog-card">
      <h2 className="blog-title">{title}</h2>
      <p className="blog-author">Author: {author}</p>
      <p className="blog-content">{content}</p>
    </div>
  );
}

export default BlogCard;
