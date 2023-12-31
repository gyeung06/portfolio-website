import React from 'react';
import './LoadingPage.css';

const LoadingPage = () => {


    return (
        <div className="loading-container">
            <div className="loading-text">
                {"Loading".split("").map((char, index) => (
                    <span key={index} className={`subtext-letter`} style={{ animationDelay: `${index * 0.05}s` }}>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default LoadingPage;
