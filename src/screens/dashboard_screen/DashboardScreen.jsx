import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import the chart.js library
import Navbar from '../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import './dashboardscreen.css';

const DashboardScreen = () => {
    const chartRef = useRef({ chart: null });


  useEffect(() => {
    
    const createChart = () => {
        const ctx = chartRef.current.getContext('2d');
        
        
        if (chartRef.current.chart) {
          chartRef.current.chart.destroy();
        }
      
        chartRef.current.chart = new Chart(ctx, {
          type: 'line', 
          data: {
            labels: ['java', 'dart', 'python'], 
            datasets: [
              {
                label: 'Data Series !',
                data: [1, 10000, 500], 
                backgroundColor: 'rgba(255, 120, 120, 0.2)', 
                borderColor: 'rgba(75, 192, 192, 1)', 
                borderWidth: 1,
              },
            ],
          },

          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      };
      

    createChart();
  }, []);

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
          <div className="sidebar-item">Messages</div>
          <div className="sidebar-item">Logout</div>
        </div>
        <div className="content">
          <center>
            <h1 className="dashboardHeading"> 🤔 Your Statistics 📔</h1>
            <div className="chart-container">
              <canvas ref={chartRef}></canvas>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};

export default DashboardScreen;
