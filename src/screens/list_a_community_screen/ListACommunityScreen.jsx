import React from 'react';
import './listascommunityscreen.css';
import Navbar from '../components/navbar/Navbar';

const ListACommunityScreen = () => {
    return (
        <>
            <div className="listACommunityScreen">
                <Navbar />
                <br />
                <br />
                <center>
                    <h1 className='listCommunityHeading'>💫List your community here!😎</h1>
                    <br/>
                    <div className="theboxes" style={{ width: "1300px" }}>
                        <div className="leftBox">
                            <form>
                                <input type="text" placeholder="Name of the community." className="contactFormInput" /><br /><br />
                                <input type="text" placeholder="A link for joining the group?" className="contactFormInput" /><br /><br />
                                <input type="number" placeholder="A description for the community." className="contactFormInput" /><br /><br />
                                <input type="text" placeholder="For whom is it?" className="contactFormInput" /><br /><br />
                                <label htmlFor="profilePicture">Please add a banner picture</label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="bannerPicture"
                                    name="bannerPicture"
                                    accept="image/*"
                                />
                                <br />
                                <br />
                                
                                <br />
                                <br />
                                

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

export default ListACommunityScreen;
