import React, { useState } from 'react';
import './messagesendingscreen.css'; // Import your CSS for styling
import Navbar from '../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';

const MessageSendingScreen = () => {
    const [message, setMessage] = useState('');
    const [image, setImage] = useState(null); // State to store the selected image
    const [messages, setMessages] = useState([]);

    const sendMessage = () => {
        if (message.trim() === '' && !image) return;

        // Create a new message object with a unique ID, the message text, and the selected image
        const newMessage = {
            id: new Date().getTime(),
            text: message,
            image,
        };

        // Add the new message to the messages array
        setMessages([...messages, newMessage]);

        // Clear the input fields
        setMessage('');
        setImage(null);
    };

    return (
        <>
            <Navbar />
            <div className="dashboard-screen">
            <div className="sidebar">
                    <div className="sidebar-item"><Link to="/dashboard" className='sidebar-item' style={{ color: "white", margin: "0px", padding: "0px" }}>Dashboard</Link></div>
                    <Link to='/profile' className='sidebar-item' style={{ color: "white", padding: "0px", margin: "0px" }}><div className="sidebar-item">Profile</div></Link>
                    <Link to='/virtual-drawing-screen' className='sidebar-item' style={{ color: "white", padding: "0px", margin: "0px" }}><div className="sidebar-item">Virtual Drawing</div></Link>
                    <div className="sidebar-item" ><Link to='/messages' style={{ color: "white", margin: "0px", padding: "0px", background: "none" }}>Messages</Link></div>
                    <div className="sidebar-item">Logout</div>
                </div>
                <div className="content">
                <div className="userDataDiv">
                        <img src="https://gumlet.assettype.com/bloombergquint%2F2023-10%2Fff475ccd-211e-4ef1-a188-d3dc603ede3a%2Fanirudh_JwxTBnqAEBo_unsplash.jpg?auto=format%2Ccompress&w=576" height="70px" width='70px' alt="profile" style={{ borderRadius: "75%", marginBottom: "30px" }} className='chatProfilePhoto' />
                        <h3> Name of the user </h3>
                    </div>
                    <div className="messageContainer">
                        {messages.map((message) => (
                            <div key={message.id} className="message">
                                <div className="textAreaDiv" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                    <h3 style={{ color: "black" }}>Name of the user</h3>
                                    {message.text}
                                    {message.image && <img src={URL.createObjectURL(message.image)} alt="Sent Image" height="100px" width="170px"/>}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="messageInput">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                        <button onClick={sendMessage} className='sendMessageBtn'>Send</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MessageSendingScreen;
