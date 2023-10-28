import React from 'react';
import './exhibitionscreen.css';
import Navbar from '../components/navbar/Navbar';
import ExhibitionCard from './ExhibitionCard';
import Footer from '../components/footer/Footer';

const ExhibitionScreen = () => {
  const craftData = [
    {
      id: 1,
      imageUrl: "https://i.ytimg.com/an_webp/4UNIxQQJQcE/mqdefault_6s.webp?du=3000&sqp=CIf886kG&rs=AOn4CLCZjfaKTNCdcvb1DmZBjTTaBYse2Q",
      title: "Beautiful Handcrafted Jewelry",
      isCollaborate: false,
      artist: "John Doe",
    },
    {
      id: 2,
      imageUrl: "https://i.ytimg.com/an_webp/4UNIxQQJQcE/mqdefault_6s.webp?du=3000&sqp=CIf886kG&rs=AOn4CLCZjfaKTNCdcvb1DmZBjTTaBYse2Q",
      title: "Vintage Wooden Furniture",
      isCollaborate: true,
      artist: "Jane Smith",
    },
    {
      id: 3,
      imageUrl: "https://i.ytimg.com/an_webp/4UNIxQQJQcE/mqdefault_6s.webp?du=3000&sqp=CIf886kG&rs=AOn4CLCZjfaKTNCdcvb1DmZBjTTaBYse2Q",
      title: "Artistic Ceramics",
      isCollaborate: false,
      artist: "Alice Johnson",
    },
    // Add more craft data as needed
  ];

  return (
    <div className="exhibition-screen">
      <Navbar />
      <div className="exhibition-header">
        <h2 className="exhibitions-heading">🔥🎨 Welcome to the Crafts Exhibition!!! 🤩💫</h2>
        <h4 className="exhibitions-subheading">
          <center>
          Share your crafts with the world!{' '}
          <a href="/upload-craft" className="upload-link">
            Upload Here
          </a>
          </center>
        </h4>
      </div>

      <div className="exhibition-row">
        {craftData.map((craft) => (
          <ExhibitionCard
            key={craft.id}
            imageUrl={craft.imageUrl}
            title={craft.title}
            isCollaborate={craft.isCollaborate}
            artist={craft.artist}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default ExhibitionScreen;
