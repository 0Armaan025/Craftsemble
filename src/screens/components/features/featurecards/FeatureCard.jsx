import React from 'react';
import './featurecard.css';

const FeatureCard = (props) => {
  return (
    <>
      <div className="featureCard">
        <div className="internalBox" style={{ backgroundImage: `url(${props.featureImage})` }}>
          <h3 className='featureH2'>{props.featureName}</h3>
          <div className="internalestBox">
            <p className="ourP" style={{color: "white"}}>{props.featureDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureCard;
