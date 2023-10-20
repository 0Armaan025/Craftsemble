import React from 'react';
import './message.css';

const Message = () => {
  return (
    <div className="message">
      <div className="imageDiv">
        <img src="https://i.ytimg.com/vi/NcXY3SPDe9k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwax9MzCwkgOXLEUB62QQLZabdLA" alt="profileImage" className='profileImageMessage' />
      </div>
      <div className="content">
        <div className="textDiv">
          <h2>Name</h2>
          <h4>message</h4>
        </div>
        <div className="dateTimeDiv">
          <h5 className='dateTimeText'>Date/Time</h5>
        </div>
      </div>
    </div>
  );
}

export default Message;
