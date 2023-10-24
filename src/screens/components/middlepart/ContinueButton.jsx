import React from 'react';
import { Link } from 'react-router-dom';
import './continuebutton.css';
import { useState, useEffect } from "react";
import { getUserData } from '../../../userUtils';

const ContinueButton = () => {
  
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    // Call the getUserData function as a function to get the result and update the state
    getUserData(setUserExists).then((doesUserExist) => {
      setUserExists(doesUserExist);
    });
  }, []);

  return (
    <>
      <div className="continueButton">
        <Link to={userExists ? '/become-an-artisan' : '/hanko-auth'}><input type="button" className='continueBtn' value="Continue"/></Link>
      </div>
    </>
  )
}

export default ContinueButton;
