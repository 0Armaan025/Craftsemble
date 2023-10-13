import React from 'react';
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
        <button className="more-details-button" onClick={handleMoreDetails}>More Details</button>
        {isCollaborate === 'yes' && (
          <button className="collaborate-button" onClick={handleCollaborate}>Collaborate</button>
        )}
      </div>
    </div>
  );
}

export default ExhibitionCard;
