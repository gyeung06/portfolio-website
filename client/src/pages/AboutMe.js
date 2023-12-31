import React from 'react';

const AboutMe = ({ navigateTo }) => {
    return (
        <div>
            <button onClick={() => navigateTo('Home')}>Back</button>        
        </div>
    );
};

export default AboutMe;
