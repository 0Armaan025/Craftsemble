import React from 'react';
import { Link } from 'react-router-dom';
import './continuebutton.css';

const ContinueButton = () => {
  return (
    <>
      <div className="continueButton">
        <Link to="/become-an-artisan"><input type="button" className='continueBtn' value="Continue"/></Link>
      </div>
    </>
  )
}

export default ContinueButton;
