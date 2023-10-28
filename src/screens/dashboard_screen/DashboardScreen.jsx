import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import 'chart.js' instead of 'chart.js/auto'
import Navbar from '../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import './dashboardscreen.css';
import Footer from '../components/footer/Footer';

const DashboardScreen = () => {
  const barChartRef1 = useRef();
  const barChartRef2 = useRef();

  useEffect(() => {
    const createBarChart = (ctx, data, labels, chartLabel) => {
      if (ctx.chart) {
        ctx.chart.destroy();
      }

      ctx.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: chartLabel,
              data: data,
              
              backgroundColor: 'rgba(92, 190, 255, 0.523)',
              borderColor: 'rgb(0,0,0)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: [
              {
                beginAtZero: true,
              },
            ],
          },
        },
      });
    };

    createBarChart(barChartRef1.current, [5,], ['Your stars', ], 'Stars');
    createBarChart(barChartRef2.current, [10], ['Your crafts uploaded'], 'Crafts Uploaded');
  }, []);

  return (
    <>
      <Navbar />
      <div className="dashboard-screen">
        <div className="sidebar">
          <div className="sidebar-item">
            <Link to="/dashboard" className="sidebar-item" style={{ color: "white", margin: "0px", padding: "0px" }}>
              Dashboard
            </Link>
          </div>
          <Link to="/profile" className="sidebar-item" style={{ color: "white", padding: "0px", margin: "0px" }}>
            <div className="sidebar-item">Profile</div>
          </Link>
          <Link to="/virtual-drawing-screen" className="sidebar-item" style={{ color: "white", padding: "0px", margin: "0px" }}>
            <div className="sidebar-item">Virtual Drawing</div>
          </Link>
          <div className="sidebar-item">
            <Link to="/send-message" style={{ color: "white", margin: "0px", padding: "0px", background: "none" }}>Messages</Link>
          </div>
          <div className="sidebar-item">Logout</div>
        </div>
        <div className="content">
          <center>
            <h1 className="dashboardHeading" style={{ color: "black" }}> 🤔 Your Statistics 📔</h1>
            <div className="charts" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <div className="chart-container">
                <canvas ref={barChartRef1}></canvas>
              </div>
              <div className="spacerNew" style={{width: "50px"}}></div>
              <div className="chart-container">
                <canvas ref={barChartRef2}></canvas>
              </div>
            </div>
            {/* <br /> */}
            <h3> Still in beta (dev. mode) </h3>
            <h3> These are your statistics (not proper information yet) </h3>
          </center>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardScreen;
