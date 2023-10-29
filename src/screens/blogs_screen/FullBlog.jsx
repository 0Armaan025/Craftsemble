// fullblog.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import './fullblog.css';

const FullBlog = () => {
  const { blogId } = useParams();
  const [fullContent, setFullContent] = useState('');
  const db = getFirestore();

  useEffect(() => {
    const fetchBlogData = async () => {
      const blogRef = doc(db, 'blogs', blogId);

      try {
        const blogSnapshot = await getDoc(blogRef);
        if (blogSnapshot.exists()) {
          const blogData = blogSnapshot.data();
          // Assuming the blog content is stored in a field called 'content'
          setFullContent(blogData.content);
        } else {
          console.error('Blog not found');
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogData();
  }, [blogId, db]);

  return (
    <div className="full-blog">
      <h2>Full Blog</h2>
      <div className="full-blog-content">
        {fullContent}
      </div>
    </div>
  );
};

export default FullBlog;
