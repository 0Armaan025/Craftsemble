import React from 'react';
import BlogList from './BlogList';
import './blogs.css';
import Navbar from '../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';

const Blogs = () => {
  return (
    <>
    <div className="amazing-blog-page">
        <Navbar/>
        <hr/>
        <br/>
      <h1 style={{color: "black"}}>Blogs by fellow developers! 💫</h1>
      <BlogList />
      <br/><br/>
      <Link to="/add-blog"><button className="add-blog-button">Add a blog</button></Link>
    </div>
    <Footer/>
    </>
  );
};

export default Blogs;
