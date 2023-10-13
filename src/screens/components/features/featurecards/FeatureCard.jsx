import React from 'react';
import './featurecard.css';

const FeatureCard = (props) => {
  return (
    <>
      <div className="featureCard">
        <div className="internalBox" style={{ backgroundImage: `url(${props.featureImage})` }}>
          <h2 className='featureH2'>{props.featureName}</h2>
          <div className="internalestBox">
            <p style={{color: "white"}}>{props.featureDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureCard;
