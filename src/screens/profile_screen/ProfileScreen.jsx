import React from 'react';
import Navbar from '../components/navbar/Navbar';
import './profilescreen.css';

const ProfileScreen = () => {
    return (
        <>
            <div className="profileScreen">
                <center>
                    <Navbar/>
                    <br/>
                    <br/>
                    <h1 className='profileHeading'>⭐ Your Profile, Armaan! 👋🏻</h1>
                </center>
            </div>
        </>
    );
}

export default ProfileScreen;
