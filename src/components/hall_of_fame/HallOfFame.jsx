import React from 'react';
import './halloffame.css'; // Import your CSS for styling

const HallOfFame = () => {
  return (
    <>
    <div className="hallOfFame">
      <center>
        <h1 style={{fontFamily:"sans-serif", fontSize: "38px", color: "black", fontWeight: "bold"}}> Hall of Fame 🖼️ </h1>
        <br/>
      <div className="trophyContainer">
        <img src="https://images.template.net/91079/detective-badge-template-4cd82.jpg" alt="User" className="userImage" id="imageNew"/>
        <div className="trophy">
          <img src="https://images.template.net/91079/detective-badge-template-4cd82.jpg" alt="Trophy" className="animatedTrophy" />
          <span>#1</span>
        </div>
      </div>
      </center>
    </div>
    <br/><br/><br/><br/><br/>
    <hr/>
    </>
  );
}

export default HallOfFame;
