import React, { useState, useEffect, useCallback } from 'react';
import './SplashPage.css';
import ClickableContainer from '../components/FourPanels/ClickableContainer'


const SplashPage = ({ navigateTo }) => {
    const [animate, setAnimate] = useState(false);
    const [typingFinished, setTypingFinished] = useState(0); // 0 - Typing, 1 - Idle, 2 - Deleting
    const [subtextAnimating, setSubtextAnimating] = useState(false);
    const [enterTriggered, setEnterTriggered] = useState(false);

    const handleEnter = useCallback(() => {
        if (typingFinished === 0 && !animate) {
            // If typing is still in progress, set the flag and wait
            setEnterTriggered(true);
        } else if (!animate) {
            // Usual logic if typing is not in progress
            setAnimate(true);
            navigateTo('Home', 1000)
            setTypingFinished(typingFinished === 1 ? 2 : 0);
            setSubtextAnimating(true);
        }
    }, [animate, typingFinished, navigateTo]);

    useEffect(() => {
        if (enterTriggered && typingFinished === 1) {
            // Perform actions once typing is idle
            setAnimate(true);
            navigateTo('Home', 1000)
            setSubtextAnimating(true);
            setTypingFinished(2);
            setEnterTriggered(false); // Reset the flag
        }
    }, [enterTriggered, typingFinished, navigateTo]);


    useEffect(() => {
        const onWheel = (e) => {
            if (e.deltaY > 0) {
                handleEnter();
            }
        };

        window.addEventListener('wheel', onWheel);
        return () => window.removeEventListener('wheel', onWheel);
    }, [handleEnter]);

    const handleAnimationEnd = (e) => {
        if (e.animationName === 'typing') {
            setTypingFinished(1); // Set to idle after typing completes
        }
    };

    return (
        <div className='parent-container' onClick={handleEnter}>
            <div className={`splash-container ${animate ? 'fade-out' : ''}`}>
                {/* ... */}
            </div>
            <div className="text-container">
                <div className={`name-text ${typingFinished === 1 ? 'hide-cursor' : ''} ${typingFinished === 2 ? 'deleting-effect' : ''}`} onAnimationEnd={handleAnimationEnd}>
                    Gabriel Yeung
                </div>
                <div className="job-subtext">
                    {"Software Developer".split("").map((char, index) => (
                        <span key={index} className={`subtext-letter ${subtextAnimating ? 'drop-out' : ''}`} style={{ animationDelay: `${index * 0.05}s` }}>
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </div>
            </div>
            <div className='next-page-container'>
                <ClickableContainer />
            </div>
            <div className="down-arrow"></div>
        </div>
    );

}
export default SplashPage;
