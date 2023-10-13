import React from 'react';
import './communitycard.css';

const CommuntiyCard = (props) => {
    return (
        <>

            <div className="communityCard">

                <div className="card">
                {/* this is going to be a row  */}
                <div className="imageData">
                    <img className="stubbornImage" src={props.communityImage}/>

                </div>


                <div className="textData">
                    <h1 className="communityName"> {props.communityName}</h1>
                    <h6 className="communityDescription">{props.communityDescription} </h6>
                    <br/>
                    <input type="button" className='joinCommunityBtn' value='Join Community' />
                </div>

                </div>




            </div>
        </>
    )
}

export default CommuntiyCard;
