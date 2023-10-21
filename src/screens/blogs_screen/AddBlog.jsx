import React, { useState } from 'react';
import './addblog.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';


const AddBlog = () => {

  
  

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        
      // Optionally, you can add a success message or redirect the user to a different page.
    } catch (error) {
     
      // Handle the error, show an error message, or do whatever you need to do.
    }
  };
  
  
  

  return (
    <>
    <div className="add-blog-screen">
        <Navbar/>
      <h1 style={{color: "black"}}>Add a Blog</h1>
      <form className="blog-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button type="submit" className='publishButton'>Publish</button>

      </form>
      <br/>
      <br/>
    </div>

    <Footer/>
    </>
  );
};

export default AddBlog;
