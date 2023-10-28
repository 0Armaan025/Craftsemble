import React from 'react';
import { Link } from 'react-router-dom';
import './exhibitioncard.css';

const ExhibitionCard = ({ imageUrl, title, isCollaborate, artist }) => {
  const handleMoreDetails = () => {
    // Implement your logic for the "More Details" button click
  };

  const handleCollaborate = () => {
    // Implement your logic for the "Collaborate" button click
  };

  return (
    <div className="exhibition-card">
      <div className="card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card-details">
        <h3 className="card-title" style={{fontSize: "18px"}}>{title}</h3>
        <p className="card-artist" style={{fontSize: "15px"}}>By: {artist}</p>
      </div>
      <div className="card-buttons">
        <Link to="/project-details" style={{ textDecoration: "none" }}>
          <center>
          <button className="more-details-button">More Details</button>
          </center>
        </Link>
       
      </div>
    </div>
  );
}

export default ExhibitionCard;
