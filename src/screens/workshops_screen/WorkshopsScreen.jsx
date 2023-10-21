import React from 'react';
import Navbar from '../components/navbar/Navbar';
import './workshopsscreen.css'; // Import your CSS file
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';

const WorkshopsScreen = () => {
  const workshops = [
    {
      id: 1,
      title: 'Workshop Title 1',
      date: 'October 10, 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://media4.giphy.com/media/KszkcokOMwO6s2aJ99/giphy.gif?cid=ecf05e471hmz175c6gxf1sfr6hfgcpfrkha1warkj9wpricj&ep=v1_gifs_search&rid=giphy.gif&ct=g', // Image URL for your event
      hostedBy: 'John Doe',
    },
    {
      id: 2,
      title: 'Workshop Title 2',
      date: 'October 15, 2023',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://media4.giphy.com/media/KszkcokOMwO6s2aJ99/giphy.gif?cid=ecf05e471hmz175c6gxf1sfr6hfgcpfrkha1warkj9wpricj&ep=v1_gifs_search&rid=giphy.gif&ct=g', // Image URL for your event
      hostedBy: 'Jane Smith',
    },
    {
        id: 2,
        title: 'Workshop Title 2',
        date: 'October 15, 2023',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl: 'https://media4.giphy.com/media/KszkcokOMwO6s2aJ99/giphy.gif?cid=ecf05e471hmz175c6gxf1sfr6hfgcpfrkha1warkj9wpricj&ep=v1_gifs_search&rid=giphy.gif&ct=g', // Image URL for your event
        hostedBy: 'Jane Smith',
      },
      {
        id: 2,
        title: 'Workshop Title 2',
        date: 'October 15, 2023',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageUrl: 'https://media4.giphy.com/media/KszkcokOMwO6s2aJ99/giphy.gif?cid=ecf05e471hmz175c6gxf1sfr6hfgcpfrkha1warkj9wpricj&ep=v1_gifs_search&rid=giphy.gif&ct=g', // Image URL for your event
        hostedBy: 'Jane Smith',
      },
    // Add more workshop objects as needed
  ];

  return (
    <div className="workshopsScreen">
      <Navbar />
      <div className="workshops-container">
        <h1 className='workshopsHeading' style={{color: "black"}}>Upcoming Workshops!</h1>
        <center><h4> <Link to="/workshop-creation">Click here to make a request for a workshop!</Link></h4></center>
        <br/>
        <div className="workshop-grid">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="workshop-card">
              <img src={workshop.imageUrl} alt={workshop.title} className="workshop-image" />
              <h3 className="workshop-title" style={{background: "transparent"}}>{workshop.title}</h3>
              <p className="workshop-date">Date:</p> <p className="workshop-date" style={{fontWeight: "600",color: "black"}}>{workshop.date}</p>
              <p className="workshop-description">{workshop.description}</p>
              <p className="workshop-hosted">Hosted by:</p> <p className='workshop-hosted' style={{fontWeight: "bold",color: "black"}}>{workshop.hostedBy}</p>
              <Link to="/workshop-registration"><button className="register-button">Register</button></Link>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default WorkshopsScreen;
