import React from 'react';
import './middlepart.css';
import ContinueButton from './ContinueButton';
import Features from '../features/Features';
import Faq from '../faq/Faq';
import ContactForm from '../contactform/ContactForm';
import BlogsButton from './BlogsButton';

const MiddlePart = () => {
  return (
    <>
      <div className="middlePart">
        <div className="middleContainer">

            
                    <div className="middleContainer__left_text">
                        <h2 className='middleContainer__left_text_text'> ⭐ It's the time to empower the unsung creators! ⭐</h2>

                        <h4 className='middleContainer__left_text_text_text'>"Elevate Your Craft and Ignite Collaborative Creations."</h4>
                        <br/>
                        <div className="buttons">
                        <ContinueButton/>
                        <div className="spac" style={{width: "2px"}}></div>
                        <BlogsButton/>
                        </div>
                    </div>

                    <div className="middleContainer__right_text">
                        <img src="https://img.freepik.com/free-photo/top-view-attractive-woman-hands-drawing-amazing-picture-canvas-modern-cozy-art-workshop_574295-563.jpg?w=826&t=st=1697122524~exp=1697123124~hmac=bbfb0e34b2a96eb12ee81b86fadd1a491e9ef431cc852e3c5d8214ab6f74c614" alt="this was an image" className="right_image"/>
                    </div>  


                </div>
          <Features/>
          <br/>
          <br/>
          <hr/>
          <br/>
          <Faq/>
          <br/>
          <br/>
          <hr/>
          <br/>
          <br/>
          <ContactForm/>
      </div>
    </>
  )
}

export default MiddlePart;
