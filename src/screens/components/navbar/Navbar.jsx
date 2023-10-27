import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import COLLAB_BADGE from '../../../assets/collab_badge.png';
import LOGO from '../../../assets/logo.png';
import { getUserData } from '../../../userUtils'; // Import the function

const Navbar = () => {
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    // Call the getUserData function as a function to get the result and update the state
    getUserData(setUserExists).then((doesUserExist) => {
      setUserExists(doesUserExist);
    });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navbar'>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ fontSize: "30px", marginLeft: "20px", fontWeight: "bold" }}><img src={LOGO} height="80px" width="120px"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
             
              <li className="nav-item" id="navItem">
                <Link className="nav-link" to={userExists ? '/workshops' : '/hanko-auth'}>Workshops</Link>
              </li>
              <li className="nav-item" id="navItem">
                <Link className="nav-link" to={userExists ? '/exhibition' : '/hanko-auth'}>Exhibition</Link>
              </li>
              <li className="nav-item" id="navItem">
                <Link className="nav-link" to={userExists ? '/blogs' : '/hanko-auth'}>Blogs</Link>
              </li>
              <li className="nav-item" id="navItem">
                <Link className="nav-link" to={userExists ? '/explore-communities' : '/hanko-auth'}>Explore Communities</Link>
              </li>
             
              <div className="spacer" style={{ marginLeft: "0rem" }}></div>
              <li className="nav-item">
                <Link to={userExists ? '/become-an-artisan' : '/hanko-auth'}>
                  <input type="button" value="Become an artisan!" className='becomeArtisanBtn' />
                </Link>
              </li>
            </ul>
            <div className="spacer" style={{ marginLeft: "3.8rem" }}></div>
            <div className="user-avatar">
              <Link to={userExists ? '/profile' : '/hanko-auth'}>
                <img
                  src="https://i.ytimg.com/an_webp/CY9tvwEXdW8/mqdefault_6s.webp?du=3000&sqp=CLzYpKkG&rs=AOn4CLCrzkVguWMS8WjJoggdaZP_9gYdew" // Replace with the actual image URL
                  alt="User Avatar"
                  className="rounded-circle"
                  style={{ width: "50px", height: "50px", marginLeft: "20px", cursor: "pointer" }}
                />
              </Link>
            </div>
            <img src={COLLAB_BADGE} alt="collab" className='collabBadge'/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
