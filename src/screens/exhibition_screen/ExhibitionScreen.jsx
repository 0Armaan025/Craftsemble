import React from 'react';
import './exhibitionscreen.css';
import Navbar from '../components/navbar/Navbar';
import ExhibitionCard from './ExhibitionCard';

const ExhibitionScreen = () => {
  const craftData = [
    {
      imageUrl: "https://i.ytimg.com/an_webp/mSpXxxld4o8/mqdefault_6s.webp?du=3000&sqp=CIzDpKkG&rs=AOn4CLD7yYidlbjqD2aWkt4PTMNmvtLd5A",
      isCollaborate: "no"
    },
    {
      imageUrl: "https://i.ytimg.com/an_webp/mSpXxxld4o8/mqdefault_6s.webp?du=3000&sqp=CIzDpKkG&rs=AOn4CLD7yYidlbjqD2aWkt4PTMNmvtLd5A",
      isCollaborate: "yes"
    },
    {
      imageUrl: "https://i.ytimg.com/an_webp/mSpXxxld4o8/mqdefault_6s.webp?du=3000&sqp=CIzDpKkG&rs=AOn4CLD7yYidlbjqD2aWkt4PTMNmvtLd5A",
      isCollaborate: "no"
    },
    // Add more craft data as needed
  ];

  return (
    <div className="exhibition-screen">
      <Navbar />
      <center>
        <br/>
      <h2 className="exhibitions-heading">🔥🎨 Welcome to the Crafts Exhibition!!! 🤩💫</h2>
      <h4 className="exhibitions-subheading">Wanna share something too? <a href="/join-here">Upload Here!</a></h4>
      </center>
      <br/>
      <div className="exhibition-row">
        {craftData.map((craft, index) => (
          <ExhibitionCard
            key={index}
            imageUrl={craft.imageUrl}
            isCollaborate={craft.isCollaborate}
          />
        ))}
      </div>
      <br/><br/>
    </div>
  );
}

export default ExhibitionScreen;
