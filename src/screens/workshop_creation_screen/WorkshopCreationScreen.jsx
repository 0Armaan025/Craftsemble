import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import './workshopcreationscreen.css';

const WorkshopCreationScreen = () => {
    const [formData, setFormData] = useState({
        title: '',
        workshopname: '',
        description: '',
        hostedBy: '',
        dateTime: '',
        detailedInformation: '',
        bannerImage: null,
    });
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleCheckboxChange = () => {
        setAgreeToTerms(!agreeToTerms);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the form submission here, e.g., send data to a server.
    };

    return (
        <>
            <div className="workshopCreationScreen">
                <Navbar />
                <br />
                <center>
                    <h2 className="formHeading">Workshop Creation</h2>
                    <br />
                    <h4 className="formShowing">Please provide workshop details:</h4>
                    <div className="theboxes" style={{ width: "1300px" }}>
                        <div className="leftBox">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    placeholder="Workshop Title"
                                    name="title"
                                    className="contactFormInput"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                /><br /><br />
                                <input
                                    type="text"
                                    placeholder="Workshop Name"
                                    name="workshopname"
                                    className="contactFormInput"
                                    value={formData.workshopname}
                                    onChange={handleInputChange}
                                /><br /><br />
                                <input
                                    type="text"
                                    placeholder="Workshop Description"
                                    name="description"
                                    className="contactFormInput"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                />
                              <br /><br />
                                <input
                                    type="text"
                                    placeholder="Hosted By"
                                    name="hostedBy"
                                    className="contactFormInput"
                                    value={formData.hostedBy}
                                    onChange={handleInputChange}
                                /><br /><br />
                                <input
                                    type="text"
                                    placeholder="Date and Time"
                                    name="dateTime"
                                    className="contactFormInput"
                                    value={formData.dateTime}
                                    onChange={handleInputChange}
                                /><br /><br />
                                <textarea
                                    placeholder="Detailed Information"
                                    name="detailedInformation"
                                    className="contactFormInput"
                                    value={formData.detailedInformation}
                                    onChange={handleInputChange}
                                /><br /><br />
                                <label htmlFor="bannerImage">Banner Image</label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="bannerImage"
                                    name="bannerImage"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                <br />
                                <br />
                                <label>
                                    <input
                                        type="checkbox"
                                        name="agreeToTerms"
                                        checked={agreeToTerms}
                                        onChange={handleCheckboxChange}
                                    />
                                    I agree to the <a href="https://www.termsandconditionsgenerator.com/live.php?token=0C1A7QlBuET1Xn7I90Al0ZPNR4GIbDpU" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>.
                                </label>
                                <input type="submit" value="Submit" className="submitBtn" />
                            </form>
                        </div>
                        <div className="rightBox">
                            <img
                                src="https://media4.giphy.com/media/KszkcokOMwO6s2aJ99/giphy.gif?cid=ecf05e471hmz175c6gxf1sfr6hfgcpfrkha1warkj9wpricj&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                                style={{ height: "350px", width: "100%", maxWidth: "350px", borderRadius: "10px", boxShadow: "2px 2px 1px 1px black", marginLeft: "10rem" }}
                            />
                        </div>
                    </div>
                </center>
            </div>
        </>
    );
}

export default WorkshopCreationScreen;