import React from 'react';
import './profilescreen.css';
import Navbar from '../components/navbar/Navbar';

const ProfileScreen = () => {
    return (
        <>
            <Navbar />
            <div className="profile-screen">

                <div className="sidebar">
                    <div className="sidebar-item">Dashboard</div>
                    <div className="sidebar-item">Profile</div>
                    <div className="sidebar-item">Settings</div>
                    <div className="sidebar-item">Messages</div>
                    <div className="sidebar-item">Logout</div>
                </div>
                <div className="content">
                    <h2 className='profileHeading'> ⭐ Welcome, Armaan ⭐</h2>
                    <br />
                    <div className="profileDetails">
                        <div className="profilePic">
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Profile Pic" className="profilePicImg" height="180px" width="180px" style={{borderRadius: "30px"}}/>
                            <br/>
                            
                            <label htmlFor="profilePicture">Change Profile Picture</label>
                            <br/>
                            <br/>
                        <input type="file" className='changeProfilePicture' id='changeProfilePicture' accept='image/*'/>
                        </div>
                        <div className="profileInfo">
                            <br/>
                            <p className="profileInfoPara">Username: Armaan</p>
                            <p className="profileInfoPara">Age: 20</p>
                            <p className="profileInfoPara">Craft Speciality: Painting</p>
                            <p className="profileInfoPara">Country: India</p>
                            <p className="profileInfoPara">Link here <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileScreen;
