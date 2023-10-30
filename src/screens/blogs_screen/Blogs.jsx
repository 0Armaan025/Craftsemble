import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';
import './blogs.css';
import Navbar from '../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import BlogCard from './BlogCard'; // Import the BlogCard component

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    // Function to fetch all blogs
    const fetchBlogs = async () => {
      try {
        // Replace 'your_collection_name' with the actual name of your blogs collection
        const querySnapshot = await getDocs(collection(db, 'blogs'));

        const blogData = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          blogData.push(data);
        });

        // Set the fetched blogs in the state
        setBlogs(blogData);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    // Call the function to fetch blogs when the component mounts
    fetchBlogs();
  }, [db]);

  // Split the blogs into sets to be displayed in separate BlogList components
  const blogsPerPage = 8; // Adjust the number of blogs to display per BlogList
  const blogSets = [];

  for (let i = 0; i < blogs.length; i += blogsPerPage) {
    blogSets.push(blogs.slice(i, i + blogsPerPage));
  }

  return (
    <>
      <div className="amazing-blog-page">
        <Navbar />
        <hr />
        <br />
        <h1  className='blogPageHeading'>Blogs by fellow artisans! 💫</h1>
       
        <div className="blog-cards">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              author={blog.author}
              title={blog.title}
              content={blog.content}
            />
          ))}
        </div>

        <br />
        <center>
        <Link to="/add-blog">
          <button className="add-blog-button">Add a blog</button>
        </Link>
        </center>
        <br/>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
