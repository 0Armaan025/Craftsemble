import React from 'react';
import './homescreen.css';
import Navbar from '../components/navbar/Navbar';
import MiddlePart from '../components/middlepart/MiddlePart';
import Features from '../components/features/Features';
import Footer from '../components/footer/Footer';

const HomeScreen = () => {
  return (
    <>
    <div className="homeScreen">
        <center>
            <Navbar/>
            {/* <!--Middle part time here --> */}
            <MiddlePart/>
            {/* <!--Footer part time here --> */}
            <Footer/>
        </center>
    </div>
    </>
  )
}

export default HomeScreen
