import React from 'react';
import './contactform.css';

const ContactForm = () => {
  return (
    <>
      <div className="contactForm">
        <h2 className='contactFormHeading'>Contact Us!</h2>
        <br />
        <div className="theboxes">
          <div className="leftBox">
            <form>
              <input type="text" placeholder="Name" className="contactFormInput" /><br /><br />
              <input type="text" placeholder="Email" className="contactFormInput" /><br /><br />
              
              <textarea type="text" placeholder='Message' className='contactFormInput'/> <br /><br />
              <input type="submit" value="Submit" className="submitBtn" />
            </form>
          </div>
          <div className="rightBox">
            <img
              src="https://media4.giphy.com/media/KszkcokOMwO6s2aJ99/giphy.gif?cid=ecf05e471hmz175c6gxf1sfr6hfgcpfrkha1warkj9wpricj&ep=v1_gifs_search&rid=giphy.gif&ct=g"
              style={{ height: "350px", width: "100%", maxWidth: "350px", borderRadius: "10px", boxShadow: "2px 2px 1px 1px black" , marginLeft: "10rem"}}
            />
          </div>
        </div>
        <br /><br /><br />
      </div>
    </>
  );
}

export default ContactForm;
