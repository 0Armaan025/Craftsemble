import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import './workshopsregistrationscreen.css';
import Footer from '../components/footer/Footer';

const WorkshopRegistrationScreen = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  const workshop = {
    name: 'Workshop Name',
    title: 'Title of the Workshop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
    hostedBy: 'Hosted by: John Doe',
    detailedInfo:
      'This workshop will cover various topics related to web development, design, and more. Join us for an exciting and informative session.',
    time: 'Date and Time: October 10, 2023, 10:00 AM - 2:00 PM',
    imageUrl:
      'https://media4.giphy.com/media/KszkcokOMwO6s2aJ99/giphy.gif?cid=ecf05e471hmz175c6gxf1sfr6hfgcpfrkha1warkj9wpricj&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  };

  return (
    <>
    <div className="workshopRegistrationScreen">
      <Navbar />
      <br />
      <div className="workshop-registration-container">
        <h1 className="workshop-name" style={{ fontFamily: 'cursive', background: 'transparent' }}>
          {workshop.name}
        </h1>
        <div className="workshop-details" style={{ borderRadius: '30px' }}>
          <div className="workshop-image-container" style={{ marginLeft: '20px' }}>
            <center>
              <img src={workshop.imageUrl} alt={workshop.title} className="workshop-image" />
            </center>
          </div>
          <div className="workshop-info" style={{ borderRadius: '30px' }}>
            <br />
            <h2 className="workshop-title" style={{ fontFamily: 'cursive', background: 'transparent' }}>
              {workshop.title}
            </h2>
            <p className="workshop-description" style={{ background: 'transparent' }}>
              {workshop.description}
            </p>
            <p className="hosted-by" style={{ background: 'transparent' }}>
              {workshop.hostedBy}
            </p>
            <p className="workshop-time" style={{ background: 'transparent' }}>
              {workshop.time}
            </p>
          </div>
        </div>
        {showRegistration ? (
          <div className="registration-form">
            <h2>Registration Form</h2>
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
              <p className="detailed-description">{workshop.detailedInfo}</p>
              <div className="myButtons">
                <input
                  type="button"
                  className="registerBtn"
                  value="Register"
                  onClick={() => setShowRegistration(true)}
                />
                <input
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
