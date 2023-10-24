import React from 'react';
import './exhibitioncarddetailsscreen.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const ExhibitionCardDetailsScreen = () => {
  const exhibitionDetails = {
    imageUrl: 'https://i.ytimg.com/vi/NcXY3SPDe9k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwax9MzCwkgOXLEUB62QQLZabdLA',
    uploadDate: 'October 15, 2023',
    artistName: 'John Doe',
    artistEmail: 'johndoe@example.com',
    isCollaborator: true, // Set to true if it's a collaboration
  };

  // Function to handle the star (favorite) button click
  const handleFavoriteClick = () => {
    // Implement your favorite button logic here
  };

  return (
    <>
    <Navbar/>
    <br/>
    <center>
        <h2 style={{color: "black"}}> ⭐ You, now are looking at an amazing piece of craft! ⭐ </h2>
    </center>
    <div className="exhibition-card-details">
      <div className="banner">
        <img src={exhibitionDetails.imageUrl} alt="Craft Image" className='craftImage' />
      </div>
      <div className="details">
        <h2>{exhibitionDetails.artistName}'s Craft</h2>
        <p>Uploaded on {exhibitionDetails.uploadDate}</p>
        <p>Contact: {exhibitionDetails.artistEmail}</p>
        {exhibitionDetails.isCollaborator && (
          <p>Collaborator: Yes</p>
        )}
        <h3 style={{background: "none"}}> Total Stars now = 10 </h3>
        <br/>
        <button onClick={handleFavoriteClick}>⭐</button>
        <button>Message them</button>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ExhibitionCardDetailsScreen;
