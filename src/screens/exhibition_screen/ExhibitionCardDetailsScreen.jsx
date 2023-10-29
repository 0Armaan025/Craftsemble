import React, { useState, useEffect } from 'react';
import './exhibitioncarddetailsscreen.css';
import Navbar from '../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import { getFirestore, doc, getDoc } from 'firebase/firestore'; // Import Firebase Firestore functions
import { useParams } from 'react-router-dom';

const ExhibitionCardDetailsScreen = () => {
  const { projectId } = useParams(); // Get projectId from the URL

  const [exhibitionDetails, setExhibitionDetails] = useState({
    imageUrl: '',
    uploadDate: '',
    artistName: '',
    artistEmail: '',
    isCollaborator: false,
  });

  // Function to handle the star (favorite) button click
  const handleFavoriteClick = () => {
    // Implement your favorite button logic here
  };

  useEffect(() => {
    // Initialize Firestore
    const db = getFirestore();

    // Reference to the specific exhibition document using the projectId
    const exhibitionDocRef = doc(db, 'exhibition', projectId); // Replace 'exhibition' with your collection name

    // Fetch exhibition details from Firestore
    const fetchExhibitionDetails = async () => {
      const docSnapshot = await getDoc(exhibitionDocRef);
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        setExhibitionDetails(data);
        
      } else {
        console.error('Exhibition not found');
      }
    };

    fetchExhibitionDetails();
  }, [projectId]);

  return (
    <>
    <Navbar/>
    <br/>
    <center>
        <h2 style={{color: "black"}}> ⭐ You are now looking at an amazing piece of craft! ⭐ </h2>
    </center>
    <div className="exhibition-card-details">
      <div className="banner">
        <img src={exhibitionDetails.imageUrl} alt="Craft Image" className='craftImage' />
      </div>
      <div className="details">
        <h2>{exhibitionDetails.artistName}'s Craft</h2>
        <p style={{fontSize: "16px"}}>Uploaded on {projectId}</p>
        <p>Contact: {exhibitionDetails.artistEmail}</p>
        {exhibitionDetails.isCollaborator && (
          <p>Collaborator: Yes</p>
        )}
        <h3 style={{background: "none"}}> Total Stars now = 10 </h3>
        <br/>
        <button onClick={handleFavoriteClick}>⭐</button>
        <Link to = "/send-message" style={{background: "none"}}><button>Message them</button></Link>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ExhibitionCardDetailsScreen;
