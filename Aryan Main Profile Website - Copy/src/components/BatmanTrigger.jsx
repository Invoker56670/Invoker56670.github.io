import React, { useState } from 'react';
import '../styles/batman.css';

const BatmanTrigger = ({ onTrigger, disabled }) => {
    // Prevent interaction if disabled
    const handleClick = () => {
        if (!disabled) {
            onTrigger();
        }
    };

    return (
        <div
            className={`batman-container ${disabled ? 'disabled' : ''}`}
            onClick={handleClick}
            style={{ pointerEvents: disabled ? 'none' : 'auto', cursor: disabled ? 'default' : 'pointer' }}
        >
            {/* Mini Batman HTML Structure from user's batman.html */}
            <div className="batman">
                <div className="mouth"></div>
                <div className="eye"></div>
                <div className="cape"></div>
                <div className="leg"></div>
                <div className="costume"></div>
                <div className="belt"></div>
            </div>
            <div className="base"></div>
        </div>
    );
};

export default BatmanTrigger;
