import React, { useState } from 'react';
import './becomeanartisanscreen.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { collection, doc, setDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { newStorage } from '../../firebase_setup/firebase';
import { getUserID } from '../../userUtils';
import { getUserEmail } from '../../userUtils';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const BecomeAnArtisanScreen = () => {
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
      console.log("the email is ", getUserEmail.apply)
      console.log("the email2 is ", getUserEmail.arguments)
      console.log("the email3 is ", getUserEmail.bind)
      console.log("the email4 is ", getUserEmail.call)
      console.log("the email5 is ", getUserEmail.caller)
      console.log("the email6 is ", getUserEmail.length)
      console.log("the email7 is ", getUserEmail.name)
      console.log("the email8 is ", getUserEmail.toString)
      console.log("the email9 is ", getUserEmail.prototype)
      // Create a reference to the "users" collection and the "user1" document
      const usersCollectionRef = collection(db, "users");
      const user1DocRef = doc(usersCollectionRef, "user1");
  
      // Create references for profile picture and demo artwork in Firebase Storage
      const profileImageRef = ref(newStorage, `/profileImages/${profileImage.name}`);
      const demoArtworkRef = ref(newStorage, `/demoArtworks/${demoArtWork.name}`);
  
      // Upload the profile picture to Firebase Storage
      const profileUploadTask = uploadBytesResumable(profileImageRef, profileImage);
      await profileUploadTask;
  
      // Upload the demo artwork to Firebase Storage
      const demoArtworkUploadTask = uploadBytesResumable(demoArtworkRef, demoArtWork);
      await demoArtworkUploadTask;
  
      // Get download URLs for the uploaded images
      const profileImageUrl = await getDownloadURL(profileImageRef);
      const demoArtworkUrl = await getDownloadURL(demoArtworkRef);
  
      // Add the data to Firestore, including the profile picture and demo artwork URLs
      const userData = {
        ...formData,
        getUserEmail,
        profileImageUrl,
        demoArtworkUrl,
      };
  
      await setDoc(user1DocRef, userData);
  
      console.log("Data, profile picture URL, and demo artwork URL added to Firestore");
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
