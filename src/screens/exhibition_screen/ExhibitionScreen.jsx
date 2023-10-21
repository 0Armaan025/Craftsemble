import React from 'react';
import './exhibitionscreen.css';
import Navbar from '../components/navbar/Navbar';
import ExhibitionCard from './ExhibitionCard';

const ExhibitionScreen = () => {
  const craftData = [
    {
      imageUrl: "https://i.ytimg.com/an_webp/mSpXxxld4o8/mqdefault_6s.webp?du=3000&sqp=CIzDpKkG&rs=AOn4CLD7yYidlbjqD2aWkt4PTMNmvtLd5A",
      isCollaborate: false,
    },
    {
      imageUrl: "https://i.ytimg.com/an_webp/mSpXxxld4o8/mqdefault_6s.webp?du=3000&sqp=CIzDpKkG&rs=AOn4CLD7yYidlbjqD2aWkt4PTMNmvtLd5A",
      isCollaborate: true,
    },
    {
      imageUrl: "https://i.ytimg.com/an_webp/mSpXxxld4o8/mqdefault_6s.webp?du=3000&sqp=CIzDpKkG&rs=AOn4CLD7yYidlbjqD2aWkt4PTMNmvtLd5A",
      isCollaborate: false,
    },
    // Add more craft data as needed
  ];

  return (
    <div className="exhibition-screen">
      <Navbar />
      <center>
        <h2 className="exhibitions-heading">🔥🎨 Welcome to the Crafts Exhibition!!! 🤩💫</h2>
        <h4 className="exhibitions-subheading">
          Share your crafts with the world!
          <a href="/upload" className="upload-link">Upload Here</a>
        </h4>
      </center>

      <div className="exhibition-row">
        {craftData.map((craft, index) => (
          <ExhibitionCard
            key={index}
            imageUrl={craft.imageUrl}
            isCollaborate={craft.isCollaborate}
          />
        ))}
      </div>
    </div>
  );
}

export default ExhibitionScreen;
