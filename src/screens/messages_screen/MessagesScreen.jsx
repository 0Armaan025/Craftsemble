import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Navbar from '../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import './messagesscreen.css';
import Message from './Message';
import Footer from '../components/footer/Footer';

const MessagesScreen = () => {
  
  return (
    <>
      <Navbar />
      <div className="dashboard-screen">
      <div className="sidebar">
                    <div className="sidebar-item"><Link to="/dashboard" className='sidebar-item' style={{color: "white", margin: "0px", padding: "0px"}}>Dashboard</Link></div>
                    <Link to='/profile' className='sidebar-item' style={{color: "white",padding: "0px", margin: "0px"}}><div className="sidebar-item">Profile</div></Link>
                    <Link to='/virtual-drawing-screen' className='sidebar-item' style={{color: "white",padding: "0px", margin: "0px"}}><div className="sidebar-item">Virtual Drawing</div></Link>
                    <div className="sidebar-item" ><Link to='/messages' style={{color: "white", margin: "0px", padding: "0px", background: "none"}}>Messages</Link></div>
                    <div className="sidebar-item">Logout</div>
                </div>
        <div className="content">
          <center>
            <h1 className="messageHeading" style={{color: "black"}}> Messages sent to you by different people! 💬</h1>
            <br/>
                <Message/>
                <br/>
                <Message/>
                <br/>
                <Message/>

          </center>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default MessagesScreen;
