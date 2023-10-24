import React from 'react';
import { Link } from 'react-router-dom';
import './blogsbutton.css'
import { useEffect, useState } from 'react';
import { getUserData } from '../../../userUtils';

const BlogsButton = () => {

  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    // Call the getUserData function as a function to get the result and update the state
    getUserData(setUserExists).then((doesUserExist) => {
      setUserExists(doesUserExist);
    });
  }, []);

  return (
    <>
      <div className="blogsButton">
        <Link to={userExists ? '/blogs' : '/hanko-auth'}><input type="button" className='blogsBtn' value="Blogs"/></Link>
      </div>
    </>
  )
}

export default BlogsButton;
