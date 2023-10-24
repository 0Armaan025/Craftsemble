import React, { useState } from 'react';
import './profilescreen.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import BADGE2 from '../../assets/badge2.png';
import BADGE3 from '../../assets/badge3.png';
import BADGE1 from '../../assets/badge.png';
import Footer from '../components/footer/Footer';

const ProfileScreen = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [editableFields, setEditableFields] = useState({
        username: false,
        name: false,
        age: false,
        craftSpeciality: false,
        country: false,
        link: false,
    });
    const [fieldValues, setFieldValues] = useState({
        username: 'Armaan',
        name: 'Armaan',
        age: '20',
        craftSpeciality: 'Painting',
        country: 'India',
        link: 'https://github.com/0Armaan025',
        verified: true,
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleEditClick = (field) => {
        setEditableFields({ ...editableFields, [field]: true });
    };

    const handleFieldChange = (field, value) => {
        setFieldValues({ ...fieldValues, [field]: value });
    };

    const handleFieldBlur = (field) => {
        setEditableFields({ ...editableFields, [field]: false });
    };

    return (
        <>
            <Navbar />
            <div className="profile-screen">
            <div className="sidebar">
                    <div className="sidebar-item"><Link to="/dashboard" className='sidebar-item' style={{color: "white", margin: "0px", padding: "0px"}}>Dashboard</Link></div>
                    <Link to='/profile' className='sidebar-item' style={{color: "white",padding: "0px", margin: "0px"}}><div className="sidebar-item">Profile</div></Link>
                    <Link to='/virtual-drawing-screen' className='sidebar-item' style={{color: "white",padding: "0px", margin: "0px"}}><div className="sidebar-item">Virtual Drawing</div></Link>
                    <div className="sidebar-item" ><Link to='/messages' style={{color: "white", margin: "0px", padding: "0px", background: "none"}}>Messages</Link></div>
                    <div className="sidebar-item">Logout</div>
                </div>
                <div className="content">
                    <div style={{color: "black"}}>
                        <h2 className="profileHeading" style={{color: "black"}}>⭐Welcome, {fieldValues.name}⭐</h2> 
                        <br/>
                            <h3 style={{fontSize: "42px", marginLeft: "160px", marginTop: "10px", fontFamily: "sans-serif", fontWeight: "bold"}}> Your Badges🚀</h3>

                            <div className="badgesContainer">
                                
                            <img src={BADGE1} height="175px" width="179px" />
                            <img src={BADGE2} height="175px" width="175px" />
                            <img src={BADGE3} height="175px" width="175px" />
                  
                            </div>

                        <h3 style={{fontSize: "42px", marginLeft: "160px", marginTop: "10px", fontFamily: "sans-serif", fontWeight: "bold"}}> Your Stars⭐</h3>
                        <div className="starsContainer">

                        <h4 style={{marginLeft: "250px", fontSize: "42px", fontWeight: "bold"}}> 10 ⭐</h4>
                        </div>
                        
                        
                    </div>

                    
                    <br />
                    <div className="profileDetails">
                        <div className="profilePic">
                            {imagePreview ? (
                                <img src={imagePreview} alt="Profile Pic" className="profilePicImg" height="350px" width="350px" />
                            ) : (
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Profile Pic" className="profilePicImg" height="350px" width="350px" />
                            )}
                            <br />
                            <br />
                            <label htmlFor="changeProfilePicture" className="changeProfilePictureLabel">
                                Change Profile Picture
                            </label>
                            <input
                                type="file"
                                className="changeProfilePicture"
                                id="changeProfilePicture"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                        <div className="profileInfo">
                            <br />
                            <div className="profileInfoItem">
                                <span className="infoLabel">Name:</span>
                                {editableFields.name ? (
                                    <input
                                        type="text"
                                        value={fieldValues.name}
                                        onChange={(e) => handleFieldChange('name', e.target.value)}
                                        onBlur={() => handleFieldBlur('name')}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                handleFieldBlur('name');
                                            }
                                        }}
                                    />
                                ) : (
                                    <span className="infoValue" onClick={() => handleEditClick('name')}>{fieldValues.name}</span>
                                )}
                                <img src="https://cdn-icons-png.flaticon.com/512/650/650143.png" alt="Edit" className="editIcon" onClick={() => handleEditClick('username')} />
                            </div>
                            <div className="profileInfoItem">
                                <span className="infoLabel">Username:</span>
                                {editableFields.username ? (
                                    <input
                                        type="text"
                                        value={fieldValues.username}
                                        onChange={(e) => handleFieldChange('username', e.target.value)}
                                        onBlur={() => handleFieldBlur('username')}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                handleFieldBlur('username');
                                            }
                                        }}
                                    />
                                ) : (
                                    <span className="infoValue" onClick={() => handleEditClick('username')}>{fieldValues.username}</span>
                                )}
                                <img src="https://cdn-icons-png.flaticon.com/512/650/650143.png" alt="Edit" className="editIcon" onClick={() => handleEditClick('username')} />
                            </div>
                            <div className="profileInfoItem">
                                <span className="infoLabel">Age:</span>
                                {editableFields.age ? (
                                    <input
                                        type="text"
                                        value={fieldValues.age}
                                        onChange={(e) => handleFieldChange('age', e.target.value)}
                                        onBlur={() => handleFieldBlur('age')}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                handleFieldBlur('age');
                                            }
                                        }}
                                    />
                                ) : (
                                    <span className="infoValue" onClick={() => handleEditClick('age')}>{fieldValues.age}</span>
                                )}
                                <img src="https://cdn-icons-png.flaticon.com/512/650/650143.png" alt="Edit" className="editIcon" onClick={() => handleEditClick('age')} />
                            </div>
                            <div className="profileInfoItem">
                                <span className="infoLabel">Craft Speciality:</span>
                                {editableFields.craftSpeciality ? (
                                    <input
                                        type="text"
                                        value={fieldValues.craftSpeciality}
                                        onChange={(e) => handleFieldChange('craftSpeciality', e.target.value)}
                                        onBlur={() => handleFieldBlur('craftSpeciality')}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                handleFieldBlur('craftSpeciality');
                                            }
                                        }}
                                    />
                                ) : (
                                    <span className="infoValue" onClick={() => handleEditClick('craftSpeciality')}>{fieldValues.craftSpeciality}</span>
                                )}
                                <img src="https://cdn-icons-png.flaticon.com/512/650/650143.png" alt="Edit" className="editIcon" onClick={() => handleEditClick('craftSpeciality')} />
                            </div>
                            <div className="profileInfoItem">
                                <span className="infoLabel">Country:</span>
                                {editableFields.country ? (
                                    <input
                                        type="text"
                                        value={fieldValues.country}
                                        onChange={(e) => handleFieldChange('country', e.target.value)}
                                        onBlur={() => handleFieldBlur('country')}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                handleFieldBlur('country');
                                            }
                                        }}
                                    />
                                ) : (
                                    <span className="infoValue" onClick={() => handleEditClick('country')}>{fieldValues.country}</span>
                                )}
                                <img src="https://cdn-icons-png.flaticon.com/512/650/650143.png" alt="Edit" className="editIcon" onClick={() => handleEditClick('country')} />
                            </div>
                            <div className="profileInfoItem">
                                <span className="infoLabel">Link here:</span>
                                {editableFields.link ? (
                                    <input
                                        type="text"
                                        value={fieldValues.link}
                                        onChange={(e) => handleFieldChange('link', e.target.value)}
                                        onBlur={() => handleFieldBlur('link')}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                handleFieldBlur('link');
                                            }
                                        }}
                                    />
                                ) : (
                                    <span className="infoValue" onClick={() => handleEditClick('link')}>{fieldValues.link}</span>
                                )}
                                <img src="https://cdn-icons-png.flaticon.com/512/650/650143.png" alt="Edit" className="editIcon" onClick={() => handleEditClick('link')} />
                            </div>
                        </div>
                    </div>
                    <br/>
                    <button className="updateProfileButton">Update Profile</button>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ProfileScreen;
