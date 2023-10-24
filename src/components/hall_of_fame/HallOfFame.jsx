import React from 'react';
import './halloffame.css'; // Import your CSS for styling

const HallOfFame = () => {
  return (
    <div className="hallOfFame">
      <div className="trophyContainer">
        <img src="https://images.template.net/91079/detective-badge-template-4cd82.jpg" alt="User" className="userImage"/>
        <div className="trophy">
          <img src="https://images.template.net/91079/detective-badge-template-4cd82.jpg" alt="Trophy" className="animatedTrophy" />
          <span>#1</span>
        </div>
      </div>
    </div>
  );
}

export default HallOfFame;
