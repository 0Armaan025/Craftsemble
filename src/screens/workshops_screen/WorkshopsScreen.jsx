import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import './workshopsscreen.css';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';

import {
  getFirestore,
  collection,
  getDocs,
} from 'firebase/firestore';

const WorkshopsScreen = () => {
  const [workshops, setWorkshops] = useState([]);
  
  useEffect(() => {
    // Initialize Firestore
    const db = getFirestore();
    const workshopsCollectionRef = collection(db, 'workshops'); // Replace with your collection name

    // Retrieve workshop data
    const getWorkshopData = async () => {
      try {
        const querySnapshot = await getDocs(workshopsCollectionRef);
        const workshopData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setWorkshops(workshopData);
      } catch (error) {
        console.error('Error retrieving workshop data: ', error);
      }
    };

    getWorkshopData();
  }, []);

  return (
    <div className="workshopsScreen">
      <Navbar />
      <div className="workshops-container">
        <h1 className='workshopsHeading' style={{ color: "black" }}>Upcoming Workshops!</h1>
        <center><h4 style={{ background: "none" }}> <Link to="/workshop-creation" style={{ background: "none" }}>Click here to make a request for a workshop!</Link></h4></center>
        <br />
        <div className="workshop-grid">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="workshop-card">
              <img src={workshop.bannerImage} alt={workshop.title} className="workshop-image" />
              <h3 className="workshop-title" style={{ background: "transparent" }}>{workshop.title}</h3>
              <p className="workshop-date">Date:</p> <p className="workshop-date" style={{ fontWeight: "600", color: "black" }}>{workshop.date}</p>
              <p className="workshop-description">{workshop.description}</p>
              <p className="workshop-hosted">Hosted by:</p> <p className='workshop-hosted' style={{ fontWeight: "bold", color: "black" }}>{workshop.hostedBy}</p>
              <Link to={`/workshop-registration/${workshop.id}`}><button className="register-button">Register</button></Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkshopsScreen;
