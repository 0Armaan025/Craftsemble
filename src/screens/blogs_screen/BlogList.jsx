import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  

  return (
    <div className="blog-list">
      <BlogCard/>
    </div>
  );
};

export default BlogList;
