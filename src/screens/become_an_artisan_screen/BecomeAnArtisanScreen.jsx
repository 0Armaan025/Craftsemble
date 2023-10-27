import React, { useState, useTransition } from 'react';
import './becomeanartisanscreen.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { collection, doc, setDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { newStorage } from '../../firebase_setup/firebase';


import { Hanko } from '@teamhanko/hanko-elements';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";





const BecomeAnArtisanScreen = () => {


  const [verified, setVerified] = useState(false);
  const hankoApi = "https://c0cf08ab-bf6f-467b-b53b-20d2ab6f77dc.hanko.io";
  const hanko = new Hanko(hankoApi);

  
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    age: '',
    craftSpecialty: '',
    country: '',
    socialMediaLinks: '',
  });

  const [profileImage, setProfileImage] = useState(null);
  const [demoArtWork, setDemoArtWork] = useState(null);

  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleCheckboxChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  const [stars, setStars] = useState(0);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleProfileImageChange = (event) => {
    const image = event.target.files[0];
    setProfileImage(image);
  };

  const handleDemoArtWorkChange = (event) => {
    const image = event.target.files[0];
    setDemoArtWork(image);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const db = getFirestore();

    try {
      
      const newUser = hanko.user.getCurrent();    
      const { id } = await newUser;
      const usersCollectionRef = collection(db, "users");
      const user1DocRef = doc(usersCollectionRef, id);

      const profileImageRef = ref(newStorage, `/profileImages/id/${profileImage.name}`);
      const demoArtworkRef = ref(newStorage, `/demoArtworks/id/${demoArtWork.name}`);

      const profileUploadTask = uploadBytesResumable(profileImageRef, profileImage);
      await profileUploadTask;

      const demoArtworkUploadTask = uploadBytesResumable(demoArtworkRef, demoArtWork);
      await demoArtworkUploadTask;

      const profileImageUrl = await getDownloadURL(profileImageRef);
      const demoArtworkUrl = await getDownloadURL(demoArtworkRef);

      const currentUser = hanko.user.getCurrent();
      if (currentUser !== null) {
        const { email } = await currentUser;
        console.log(`email: ${email}`);
        const userData = {
          ...formData,
          email,
          verified,
          profileImageUrl,
          demoArtworkUrl,
        };
        await setDoc(user1DocRef, userData);

      console.log("Data, profile picture URL, and demo artwork URL added to Firestore");
        
      }
    

      
    } catch (error) {
      console.error("Error adding data and URLs to Firestore:", error);
    }
  };

  return (
    <>
      <div className="becomeAnArtisanScreen">
        <Navbar />
        <br />
        <center>
          <h2 className="formHeading" style={{ color: 'black' }}>
            🤔 Wanna become an artisan ? Welcome!! 🥳
          </h2>
          <br />
          <h4 className="formShowing">We would need you to submit some details, please :)</h4>
          <div className="theboxes" style={{ width: '1300px' }}>
            <div className="leftBox">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleFormChange}
                  className="contactFormInput"
                />
                <br />
                <br />
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleFormChange}
                  className="contactFormInput"
                />
                <br />
                <br />
                <input
                  type="number"
                  placeholder="Age"
                  name="age"
                  value={formData.age}
                  onChange={handleFormChange}
                  className="contactFormInput"
                />
                <br />
                <br />
                <input
                  type="text"
                  placeholder="Craft Specialty"
                  name="craftSpecialty"
                  value={formData.craftSpecialty}
                  onChange={handleFormChange}
                  className="contactFormInput"
                />
                <br />
                <br />
                <input
                  type="text"
                  placeholder="Country"
                  name="country"
                  value={formData.country}
                  onChange={handleFormChange}
                  className="contactFormInput"
                />
                <br />
                <br />
                <input
                  type="text"
                  placeholder="Any social media links if you want to add?"
                  name="socialMediaLinks"
                  value={formData.socialMediaLinks}
                  onChange={handleFormChange}
                  className="contactFormInput"
                />
                <br />
                <br />
                <input
                  type="file"
                  className="form-control-file"
                  id="profilePicture"
                  name="profilePicture"
                  accept="image/*"
                  onChange={handleProfileImageChange}
                />
                <br />
                <br />
                <input
                  type="file"
                  className="form-control-file"
                  id="demoArtWork"
                  name="demoArtWork"
                  accept="image/*"
                  onChange={handleDemoArtWorkChange}
                />
                <br />
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={agreeToTerms}
                    onChange={handleCheckboxChange}
                  />
                  I agree to the{' '}
                  <a
                    href="https://www.termsandconditionsgenerator.com/live.php?token=0C1A7QlBuET1Xn7I90Al0ZPNR4GIbDpU"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms and Conditions
                  </a>
                  .
                </label>
                <input type="submit" value="Submit" className="submitBtn" />
              </form>
            </div>
            <div className="rightBox">
              <img
                src="https://media4.giphy.com/media/KszkcokOMwO6s2aJ99/giphy.gif?cid=ecf05e471hmz175c6gxf1sfr6hfgcpfrkha1warkj9wpricj&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                style={{
                  height: '350px',
                  width: '100%',
                  maxWidth: '350px',
                  borderRadius: '10px',
                  boxShadow: '2px 2px 1px 1px black',
                  marginLeft: '10rem',
                }}
              />
            </div>
          </div>
        </center>
      </div>
      <Footer />
    </>
  );
};

export default BecomeAnArtisanScreen;
