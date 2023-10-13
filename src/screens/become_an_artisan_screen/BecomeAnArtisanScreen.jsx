import React, { useState } from 'react';
import './becomeanartisanscreen.css';
import Navbar from '../components/navbar/Navbar';

const BecomeAnArtisanScreen = () => {
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleCheckboxChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  return (
    <>
      <div className="becomeAnArtisanScreen">
        <Navbar />
        <br />
        <center>
          <h2 className="formHeading">🤔 Wanna become an artisan ? Welcome!! 🥳</h2>
          <br />
          <h4 className="formShowing">We would need you to submit some details, please :)</h4>
          <div className="theboxes" style={{width: "1300px"}}>
            <div className="leftBox">
              <form>
                <input type="text" placeholder="Full Name" className="contactFormInput" /><br /><br />
                <input type="text" placeholder="Username" className="contactFormInput"/><br /><br />
                <input type="number" placeholder="Age" className="contactFormInput" /><br /><br />
                <input type="text" placeholder="Craft Speciality" className="contactFormInput" /><br /><br />
                <input type="text" placeholder="Country" className="contactFormInput" /><br /><br />
                <input type="text" placeholder="Any social media links if you want to add?" className="contactFormInput" /><br /><br />
                <label htmlFor="profilePicture">Profile Picture</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="profilePicture"
                  name="profilePicture"
                  accept="image/*"
                />
                <br/>
                <br/>
                <label htmlFor="demoArtWork">A demo art work for verification</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="demoArtWork"
                  name="demoArtWork"
                  accept="image/*"
                />
                <br/>
                <br/>
                <label>
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={agreeToTerms}
                    onChange={handleCheckboxChange}
                  />
                  I agree to the <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>.
                </label>
                
               
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
    </>
  )
}

export default BecomeAnArtisanScreen