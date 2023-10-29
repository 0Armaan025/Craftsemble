import React, { useState, useEffect } from 'react';
import './exhibitioncarddetailsscreen.css';
import Navbar from '../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import { getFirestore, doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore'; // Import Firebase Firestore functions
import { useParams } from 'react-router-dom';
import { Hanko } from '@teamhanko/hanko-elements';

const ExhibitionCardDetailsScreen = () => {
  const { projectId } = useParams(); // Get projectId from the URL

  const [exhibitionDetails, setExhibitionDetails] = useState({
    imageUrl: '',
    uploadDate: '',
    artistName: '',
    artistEmail: '',
    isCollaborator: false,
    stars: 0, // Initialize the stars count
    uids: [], // Initialize the array to store user IDs who starred
  });

  const [isStarred, setIsStarred] = useState(false); // To prevent multiple starring
  const [currentUserStarred, setCurrentUserStarred] = useState(false); // To check if the current user has already starred

  // Function to handle the star (favorite) button click
  const handleFavoriteClick = async () => {
    if (!isStarred) {
      try {
        const hankoApi = "https://c0cf08ab-bf6f-467b-b53b-20d2ab6f77dc.hanko.io";
        const hanko = new Hanko(hankoApi);
        const currentUser = hanko.user.getCurrent();
        const { id } = await currentUser;
  
        // Check if the current user has already starred
        if (Array.isArray(exhibitionDetails.uids) && exhibitionDetails.uids.includes(id)) {
          setCurrentUserStarred(true);
        } else {
          // Initialize Firestore
          const db = getFirestore();
          const exhibitionDocRef = doc(db, 'exhibition', projectId);
  
          // Update the stars count in Firestore
          await updateDoc(exhibitionDocRef, {
            stars: exhibitionDetails.stars + 1,
            uids: arrayUnion(id),
          });
  
          setIsStarred(true);
  
          // Fetch and update the exhibition details
          const docSnapshot = await getDoc(exhibitionDocRef);
          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            setExhibitionDetails(data);
          }
        }
      } catch (error) {
        console.error('Error starring the project:', error);
      }
    }
  };
  

  useEffect(() => {
    // Initialize Firestore
    const db = getFirestore();
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
        
        {exhibitionDetails.isCollaborator && (
          <p>Collaborator: Yes</p>
        )}
        <h3 style={{background: "none"}}> Total Stars now = {exhibitionDetails.stars}</h3>
        <br/>
        <button onClick={handleFavoriteClick} disabled={isStarred || currentUserStarred}>⭐</button>
        <Link to="/send-message" style={{background: "none"}}><button>Message them</button></Link>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ExhibitionCardDetailsScreen;
