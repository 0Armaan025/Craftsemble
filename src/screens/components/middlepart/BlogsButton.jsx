import React from 'react';
import { Link } from 'react-router-dom';
import './blogsbutton.css'

const BlogsButton = () => {
  return (
    <>
      <div className="blogsButton">
        <Link to="/blogs"><input type="button" className='blogsBtn' value="Blogs"/></Link>
      </div>
    </>
  )
}

export default BlogsButton;
