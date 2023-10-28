import React from 'react';

const BlogCard = ({ title, content, author }) => {
  return (
    <div className="blog-card">
      <h2>{title}</h2>
      <p>{content}</p>
      <span>Author: {author}</span>
    </div>
  );
};

export default BlogCard;
