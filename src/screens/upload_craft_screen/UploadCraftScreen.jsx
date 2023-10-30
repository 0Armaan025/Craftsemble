import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { getFirestore, doc, setDoc } from 'firebase/firestore'; // Import Firebase Firestore functions
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'; // Import Firebase Storage functions
import { newStorage } from '../../firebase_setup/firebase'; // Import your Firebase Storage setup

const BecomeAnArtisanScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    imageName: '', // Add a new field for the image name
    collaboration: false,
    agreeToTerms: false,
  });
  const [stars, setStars] = useState(0);
  const [craftImage, setCraftImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleCraftImageChange = (e) => {
    const file = e.target.files[0];
    setCraftImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms || (!formData.name || !formData.email || !craftImage)) {
      alert('Please fill out all required fields and agree to the terms.');
      return;
    }

    // Configure and initialize Firebase Firestore
    const db = getFirestore();

    var today = new Date();
    const artisanDocRef = doc(db, 'exhibition', today.toString());

    

    // Prepare the data to be saved
    const artisanData = {
      name: formData.name,
      email: formData.email,
      isCollaborative: formData.collaboration,
      imageName: formData.imageName, 
      stars: stars,
    };

    try {
      // Set the data in the Firestore document
      await setDoc(artisanDocRef, artisanData);

      // Upload the image to Firebase Storage
      const imageRef = ref(newStorage, `/craftImages/${artisanDocRef.id}/${formData.imageName}`);
      const uploadTask = uploadBytesResumable(imageRef, craftImage);
      await uploadTask;

      // Get the download URL of the uploaded image
      const imageUrl = await getDownloadURL(imageRef);

      // Update the Firestore document with the image URL
      await setDoc(artisanDocRef, { imageUrl }, { merge: true });

      alert('Artisan data and image submitted successfully!');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <>
      <div className="becomeAnArtisanScreen">
        <Navbar />
        <br />
        <center>
          <h2 className="formHeading" style={{ color: "#fffffe" }}>🤔 Let's upload your art!🥳</h2>
          <br />
          <h4 className="formShowing" style={{color: "#b8c1ec"}}>We would need you to submit some details, please :)</h4>
          <div className="theboxes" style={{ width: "1300px" }}>
            <div className="leftBox">
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" className="contactFormInput" name="name" value={formData.name} onChange={handleInputChange} /><br /><br />
                <input type="text" placeholder="Email" className="contactFormInput" name="email" value={formData.email} onChange={handleInputChange} /><br /><br />
                <input type="text" placeholder="Your masterpiece title" className="contactFormInput" name="imageName" value={formData.imageName} onChange={handleInputChange} /><br /><br />
                <label htmlFor="craftImage" style={{color: "#b8c1ec"}}>Craft image</label>
                <br />
                <input
                  type="file"
                  className="form-control-file"
                  id="craftImage"
                  name="craftImage"
                  accept="image/*"
                  onChange={handleCraftImageChange}
                />
                <br />
 
                <label style={{color: "#b8c1ec"}}>
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                  />
                  I agree to the <a href="https://www.termsandconditionsgenerator.com/live.php?token=0C1A7QlBuET1Xn7I90Al0ZPNR4GIbDpU" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>.
                </label>
                <br />
                <br />
                <input type="submit" value="Submit" className="submitBtn" />
              </form>
            </div>
            <div className="rightBox">
              <img
                src="https://media4.giphy.com/media/KszkcokOMwO6s2aJ99/giphy.gif?cid=ecf05e471hmz175c6gxf1sfr6hfgcpfrkha1warkj9wpricj&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                style={{ height: "350px", width: "100%", maxWidth: "350px", borderRadius: "10px", boxShadow: "2px 2px 1px 1px black", marginLeft: "10rem" }}
              />
            </div>
          </div>
        </center>
      </div>
      <Footer />
    </>
  )
}

export default BecomeAnArtisanScreen;
