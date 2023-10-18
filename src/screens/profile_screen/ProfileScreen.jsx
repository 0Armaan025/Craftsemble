import React, { useState } from 'react';
import './profilescreen.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const ProfileScreen = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [editableFields, setEditableFields] = useState({
        username: false,
        age: false,
        craftSpeciality: false,
        country: false,
        link: false,
    });
    const [fieldValues, setFieldValues] = useState({
        username: 'Armaan',
        age: '20',
        craftSpeciality: 'Painting',
        country: 'India',
        link: 'Instagram',
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
                    <div className="sidebar-item">Settings</div>
                    <div className="sidebar-item">Messages</div>
                    <div className="sidebar-item">Logout</div>
                </div>
                <div className="content">
                    <h2 className="profileHeading">
                        <span role="img" aria-label="Star">⭐</span> Welcome, {fieldValues.username} <span role="img" aria-label="Star">⭐</span>
                    </h2>
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
        </>
    );
};

export default ProfileScreen;
