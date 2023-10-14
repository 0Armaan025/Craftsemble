import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navbar'>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ fontSize: "30px", marginLeft: "20px", fontWeight: "bold" }}>Craftsemble</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" id="navItem">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item" id="navItem">
                <Link className="nav-link" to="/workshops">Workshops</Link>
              </li>
              <li className="nav-item" id="navItem">
                <Link className="nav-link" to="/exhibition">Exhibition</Link>
              </li>
              <li className="nav-item" id="navItem">
                <Link className="nav-link" to="/explore-communities">Explore Communities</Link>
              </li>
              <li className="nav-item" id="navItem">
                <Link className="nav-link" to='/my-communities'>My Communities</Link>
              </li>
              <div className="spacer" style={{ marginLeft: "0.2rem" }}></div>
              <li className="nav-item">
                <Link to="/become-an-artisan"><input type="button" value="Become an artisan!" className='becomeArtisanBtn' /></Link>
              </li>
            </ul>
            <div className="user-avatar">
              <Link to="/profile">
              <img
                src="https://i.ytimg.com/an_webp/CY9tvwEXdW8/mqdefault_6s.webp?du=3000&sqp=CLzYpKkG&rs=AOn4CLCrzkVguWMS8WjJoggdaZP_9gYdew" // Replace with the actual image URL
                alt="User Avatar"
                className="rounded-circle"
                style={{ width: "40px", height: "40px" , marginLeft: "40px",cursor: "pointer"}}
              />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
