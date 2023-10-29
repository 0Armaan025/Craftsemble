import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import './workshopsregistrationscreen.css';
import Footer from '../components/footer/Footer';
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';

const WorkshopRegistrationScreen = () => {
  const { workshopId } = useParams();
  const [workshopData, setWorkshopData] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);

  useEffect(() => {
    const fetchWorkshopData = async () => {
      try {
        const db = getFirestore();
        const workshopDocRef = doc(db, 'workshops', workshopId);

        const docSnap = await getDoc(workshopDocRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setWorkshopData(data);
        } else {
          console.log('Workshop document does not exist');
        }
      } catch (error) {
        console.error('Error fetching workshop data:', error);
      }
    };

    fetchWorkshopData();
  }, [workshopId]);

  return (
    <>
      <div className="workshopRegistrationScreen">
        <Navbar />
        <br />
        <div className="workshop-registration-container">
          <h1 className="workshop-name" style={{ fontFamily: 'cursive', background: 'transparent' }}>
            {workshopData ? workshopData.workshopname : 'Workshop Name'}
          </h1>
          <div className="workshop-details" style={{ borderRadius: '30px' }}>
            <div className="workshop-image-container" style={{ marginLeft: '20px' }}>
              <center>
                <img src={workshopData ? workshopData.bannerImage : ''} alt={workshopData ? workshopData.title : 'Workshop Title'} className="workshop-image" />
              </center>
            </div>
            <div className="workshop-info" style={{ borderRadius: '30px' }}>
              <br />
              <h2 className="workshop-title" style={{ fontFamily: 'cursive', background: 'transparent' }}>
                {workshopData ? workshopData.title : 'Title of the Workshop'}
              </h2>
              <p className="workshop-description" style={{ background: 'transparent' }}>
                {workshopData ? workshopData.description : 'Workshop description'}
              </p>
              <p className="hosted-by" style={{ background: 'transparent' }}>
                {workshopData ? `Hosted by: ${workshopData.hostedBy}` : 'Hosted by: John Doe'}
              </p>
              <p className="workshop-time" style={{ background: 'transparent' }}>
                {workshopData ? workshopData.dateTime : 'Date and Time: October 10, 2023, 10:00 AM - 2:00 PM'}
              </p>
            </div>
          </div>
          {showRegistration ? (
            <div className="registration-form">
              <h2 style={{color: "black"}}>Registration Form</h2>
              <form>
                <br/>
                <label htmlFor="name" style={{fontSize: "22px" }}>Name:</label>
                <input type="text" id="name" name="name" required style={{width: "500px"}} />

                <label htmlFor="email" style={{fontSize: "22px"}}>Email:</label>
                <input type="email" id="email" name="email" required  style={{width: "500px"}}/>

                <div>
                  <input type="checkbox" id="guardiansPermission" name="guardiansPermission" />
                  <label htmlFor="guardiansPermission" style={{fontSize: "22px"}}>I have my guardian's permission (if under 16)</label>
                </div>

                <div>
                  <input type="checkbox" id="artisan" name="artisan" style={{width: "100px"}}/>
                  <label htmlFor="artisan"style={{fontSize: "22px"}}>I am an artisan</label>
                </div>

                <input type="button" className='submitBtn' value='Submit'/>
              </form>
            </div>
          ) : (
            <div className="detailed-info" style={{ borderRadius: '30px' }}>
              <center>
                <br />
                <h2 style={{ fontFamily: 'cursive' }}>Detailed Information</h2>
                <p className="detailed-description">
                  {workshopData ? workshopData.detailedInformation : 'This workshop will cover various topics related to web development, design, and more. Join us for an exciting and informative session.'}
                </p>
                <div className="myButtons">
                  <input
                    type="button"
                    className="registerBtn"
                    value="Register"
                    onClick={() => setShowRegistration(true)}
                  />
                  <input
                    onClick={() => {
                      alert('in beta!')
                    }}
                    type="button"
                    className="addToGoogleCalendarBtn"
                    value="Add to Google Calendar"
                  />
                </div>
                <br />
              </center>
            </div>
          )}
        </div>
        <br/>
      </div>
      <Footer/>
    </>
  );
};

export default WorkshopRegistrationScreen;
