import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navbar'>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{fontSize: "30px", marginLeft: "20px",fontWeight: "bold"}}>Craftsembly</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item" id="navItem">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item" id="navItem">
          <a className="nav-link" href="#">Workshops</a>
        </li>
        <li className="nav-item" id="navItem">
          <a className="nav-link" href="#">Exhibition</a>
        </li>
        <li className="nav-item" id="navItem">
          <a className="nav-link">Communities</a>
        </li>
        <div className="spacer" style={{marginLeft: "1rem"}}></div>
        <li className="nav-item">
          <input type="button" value="Become an artisan!" className='becomeArtisanBtn'/>
        </li>
      </ul>
    </div>
  </div>
</nav></>
  )
}

export default Navbar
