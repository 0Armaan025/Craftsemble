import React from 'react';
import { Link } from 'react-router-dom';
import './exhibitioncard.css';

const ExhibitionCard = ({ imageUrl, isCollaborate }) => {
  const handleMoreDetails = () => {
    // Implement your logic for the "More Details" button click
  };

  const handleCollaborate = () => {
    // Implement your logic for the "Collaborate" button click
  };

  return (
    <div className="exhibition-card">
      <div className="card-image">
        <img src={imageUrl} alt="Artwork" />
      </div>
      <div className="card-buttons">
        <button className="more-details-button" style={{marginBottom: "20px"}} onClick={handleMoreDetails}><Link to="/project-details" style={{background: "none", color: "white"}}>More Details</Link></button>
        {isCollaborate === 'yes' && (
          <button className="collaborate-button" onClick={handleCollaborate}>Collaborate</button>
        )}
      </div>
    </div>
  );
}

export default ExhibitionCard;
