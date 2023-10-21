import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Navbar from '../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import './dashboardscreen.css';

const DashboardScreen = () => {
  const pieChartRef = useRef();
  const lineChartRef = useRef();

  useEffect(() => {
    const createPieChart = (ctx, data) => {
      if (ctx.chart) {
        ctx.chart.destroy();
      }

      ctx.chart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
          responsive: true,
        },
      });
    };

    const createLineChart = (ctx, data) => {
      if (ctx.chart) {
        ctx.chart.destroy();
      }

      ctx.chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          scales: {
            y: [{
              beginAtZero: true,
            }],
          },
        },
      });
    };

    createPieChart(pieChartRef.current, {
      labels: ['Total no of crafts made by you'],
      datasets: [
        {
          label: 'Total no of crafts.',
          data: [30],
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
          borderColor: ['rgb(255, 99, 132)', 'rgb(255, 206, 86)', 'rgb(75, 192, 192)'],
          borderWidth: 1,
        },
      ],
    });

    createLineChart(lineChartRef.current, {
      labels: ['India', 'China', 'Japan'],
      datasets: [
        {
          label: 'Your Profile Visitors (Line)',
          data: [1, 100, 500],
          backgroundColor: 'rgba(255, 120, 120, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    });
  }, []);

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
            <h1 className="dashboardHeading" style={{color: "black"}}> 🤔 Your Statistics 📔</h1>
            <div className="charts" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <div className="chart-container">
                <canvas ref={pieChartRef}></canvas>
              </div>
              <div className="chart-container">
                <canvas ref={lineChartRef}></canvas>
              </div>
            </div>
            <br/>
            <h2> These were your statistics (not proper information till now) </h2>
          </center>
        </div>
      </div>
    </>
  );
};

export default DashboardScreen;
