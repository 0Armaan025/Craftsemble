import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Navbar from '../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import './messagesscreen.css';
import Message from './Message';

const MessagesScreen = () => {
  
  return (
    <>
      <Navbar />
      <div className="dashboard-screen">
        <div className="sidebar">
          <div className="sidebar-item">Dashboard</div>
          <div className="sidebar-item">
            <Link to="/profile" className="sidebar-item" style={{ color: "white", margin: "0px", padding: "0px" }}>
              Profile
            </Link>
          </div>
          
          <div className="sidebar-item">Settings</div>
          <div className="sidebar-item">Virtual Drawing</div>
          <div className="sidebar-item"><Link to='/messages' style={{color: "white", margin: "0px", padding: "0px", background: "none"}}>Messages</Link></div>
          <div className="sidebar-item">Logout</div>
          
        </div>
        <div className="content">
          <center>
            <h1 className="messageHeading"> Messages sent to you by different people! 💬</h1>
            <br/>
                <Message/>
                <br/>
                <Message/>
                <br/>
                <Message/>

          </center>
        </div>
      </div>
    </>
  );
};

export default MessagesScreen;
