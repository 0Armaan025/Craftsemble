import React from 'react';

const BlogCard = ({ title, content, author }) => {
  return (
    <div className="blog-card">
      <h2>Title</h2>
      <p>Content</p>
      <span>Author</span>
    </div>
  );
};

export default BlogCard;
