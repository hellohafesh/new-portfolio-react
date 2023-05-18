import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="atom">
                <div className="electron"></div>
                <div className="electron-alpha"></div>
                <div className="electron-omega"></div>
            </div>
        </div>
    );
};

export default Loader;