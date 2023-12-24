// App.js
import React, { useState } from 'react';
import './App.css'
import HomePage from './pages/HomePage'; 
import SplashPage from './pages/SplashPage';

const App = () => {
  const [splashVisible, setSplashVisible] = useState(true);
  const [homePageVisable, setHomePageVisible] = useState(false);

  const handleSplashExit = () => {
    setTimeout(() => {
      setHomePageVisible(true);
      setSplashVisible(false);
    }, 1000); // Match this with your CSS animation duration
  };

  return (
    <div>
      {splashVisible && <SplashPage onEnterComplete={handleSplashExit} />}
      {homePageVisable && <HomePage/>}
    </div>
  );
};

export default App;
