import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const BecomeAnArtisanScreen = () => {
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleCheckboxChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  const [collaboration, setCollaboration] = useState(false);

  const handleCollaboration = () => {
    setCollaboration(!collaboration);
  };

  return (
    <>
      <div className="becomeAnArtisanScreen">
        <Navbar />
        <br />
        <center>
          <h2 className="formHeading" style={{color: "black"}}>🤔 Let's upload your art!🥳</h2>
          <br />
          <h4 className="formShowing">We would need you to submit some details, please :)</h4>
          <div className="theboxes" style={{width: "1300px"}}>
            <div className="leftBox">
              <form>
        

                <input type="text" placeholder="Email" className="contactFormInput" /><br /><br />
                <label htmlFor="profilePicture">Craft image</label>
                <br/>
                <input
                  type="file"
                  className="form-control-file"
                  id="craftImage"
                  name="craftImage"
                  accept="image/*"
                />
                <br/>
                <br/>
                
                <label>
                  <input
                    type="checkbox"
                    name="collaboration"
                    checked={collaboration}
                    onChange={handleCollaboration}
                  />
                  Is it collaborative project?
                </label>
                
                <label>
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={agreeToTerms}
                    onChange={handleCheckboxChange}
                  />
                  I agree to the <a href="https://www.termsandconditionsgenerator.com/live.php?token=0C1A7QlBuET1Xn7I90Al0ZPNR4GIbDpU" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>.
                </label>
                
               <br/>
               <br/>
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
      <Footer/>
    </>
  )
}

export default BecomeAnArtisanScreen
