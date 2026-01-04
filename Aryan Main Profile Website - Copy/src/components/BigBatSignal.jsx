import React from 'react';
import '../styles/bigsignal.css';

const BigBatSignal = ({ type = 'corner' }) => {
    return (
        <div className={`big-bat-signal-wrapper signal-${type}`}>
            <div className="light">
                <div id="batman-logo">
                    <div id="left-white"></div>
                    <div id="right-white"></div>
                    <div id="top-white"></div>
                    <div id="lighting"></div>
                </div>
            </div>

            <div className="particles"></div>
            <div className="star-background"></div>
        </div>
    );
};

export default BigBatSignal;
