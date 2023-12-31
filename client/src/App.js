// App.js
import React, { useState } from 'react';
import './App.css'
import HomePage from './pages/HomePage'; 
import SplashPage from './pages/SplashPage';
import LoadingPage from './pages/LoadingPage';
import AboutMe from './pages/AboutMe';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Splash');

    // Updated navigateTo function with optional delay parameter
    const navigateTo = (pageName, delay = 0) => {
      if (delay > 0) {
          setTimeout(() => {
              setCurrentPage(pageName);
          }, delay);
      } else {
          setCurrentPage(pageName);
      }
  };

  return (
    <div>
      {currentPage === 'Splash' && <SplashPage navigateTo={navigateTo} />}
      {currentPage === 'Home' && <HomePage navigateTo={navigateTo} />}
      {currentPage === 'About Me' && <AboutMe navigateTo={navigateTo} />}
    </div>
  );
};

export default App;
