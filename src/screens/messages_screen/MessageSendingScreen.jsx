import React, { useState } from 'react';
import './messagesendingscreen.css';
import Navbar from '../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';

const MessageSendingScreen = () => {
    const [message, setMessage] = useState('');
    const [image, setImage] = useState(null);
    const [messages, setMessages] = useState([]);

    const handleTextChange = (e) => {
        setMessage(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const sendMessage = () => {
        if (message.trim() === '' && !image) return;

        const newMessage = {
            id: new Date().getTime(),
            text: message,
            image,
        };

        setMessages([...messages, newMessage]);
        setMessage('');
        setImage(null);
    };

    return (
        <>
            <Navbar />
            <div className="dashboard-screen">
                <div className="sidebar">
                    <Link to="/dashboard" className="sidebar-item" style={{color: "white"}}>
                        Dashboard
                    </Link>
                    <Link to="/profile" className="sidebar-item"  style={{color: "white"}}>
                        Profile
                    </Link>
                    <Link to="/virtual-drawing-screen" className="sidebar-item"  style={{color: "white"}}>
                        Virtual Drawing
                    </Link>
                    <Link to="/send-message" className="sidebar-item" style={{color: "white"}}>
                        Messages
                    </Link>
                    <div className="sidebar-item">Logout</div>
                </div>
                <div className="content">
                    <div className="messageContainer">
                        {messages.map((message) => (
                            <div key={message.id} className="message">
                                <div className="textAreaDiv">
                                    <h3>Name of the user</h3>
                                    {message.text}
                                    {message.image && (
                                        <img
                                            src={URL.createObjectURL(message.image)}
                                            alt="Sent Image"
                                            height="100px"
                                            width="170px"
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="messageInput">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={message}
                            onChange={handleTextChange}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        <button onClick={sendMessage} className="sendMessageBtn">
                            Send
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MessageSendingScreen;
