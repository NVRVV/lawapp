import React, { useState, useEffect } from 'react';
import filter1 from '../assets/filter-icon.png';
import pro1 from '../assets/profile-icon.png';
import { useNavigate } from 'react-router-dom';

const Header1 = () => {
  const navigate = useNavigate();

  // State to track the current screen size category
  const [screenSize, setScreenSize] = useState('desktop'); // Default to desktop

  // Define breakpoints (in pixels)
  const BREAKPOINTS = {
    mobile: 768,  // Up to 768px for mobile
    tablet: 1024, // Up to 1024px for tablet
    desktop: 1024 // Above 1024px for desktop
  };

  // Update screen size on mount and when window is resized
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= BREAKPOINTS.mobile) {
        setScreenSize('mobile');
      } else if (width <= BREAKPOINTS.tablet) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Render different layouts based on screen size using if-else-if
  if (screenSize === 'mobile') {
    return (
      <>
        <header className="p-4 bg-transparent">
          <div className="flex flex-row items-center">
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <h1 
                className="text-2xl text-white cursor-pointer font-bold"
                onClick={() => navigate('/')}
              >
                SLMB
              </h1>
              <p className="text-sm text-white font-medium mt-1">Your trusted legal partner</p>
            </div>
            <div className="flex  items-center gap-4">
              <div className="flex items-center gap-4">
                <img 
                  src={filter1} 
                  alt="Filter" 
                  className="cursor-pointer ml-2 w-7 h-7"
                  onClick={() => navigate('/filter')}
                />
                <img 
                  src={pro1} 
                  alt="Profile" 
                  className="cursor-pointer w-7 h-7"
                  onClick={() => navigate('/user-profile')}
                />
              </div>
              <h1 
                className="text-lg text-white cursor-pointer"
                onClick={() => navigate('/login')}
              >
                Login
              </h1>
            </div>
          </div>
        </header>
      </>
    );
  } else if (screenSize === 'tablet') {
    return (
      <>
        <header className="p-4 bg-transparent">
          <div className="flex flex-row md:flex-row items-center justify-between">
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
              <h1 
                className="text-3xl text-white cursor-pointer font-bold"
                onClick={() => navigate('/')}
              >
                SLMB
              </h1>
              <p className="text-md text-white font-medium mt-1">Your trusted legal partner</p>
            </div>
            <div className="flex items-center  gap-4">
              <img 
                src={filter1} 
                alt="Filter" 
                className="cursor-pointer w-9 h-9"
                onClick={() => navigate('/filter')}
              />
              <img 
                src={pro1} 
                alt="Profile" 
                className="cursor-pointer w-9 h-9"
                onClick={() => navigate('/user-profile')}
              />
              <h1 
                className="text-xl text-white cursor-pointer"
                onClick={() => navigate('/login')}
              >
                Login
              </h1>
            </div>
          </div>
        </header>
      </>
    );
  } else { // desktop
    return (
      <>
        <header className="p-4 bg-transparent">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-1 items-start flex-col mt-5 ml-10">
              <h1 
                className="text-5xl text-white cursor-pointer font-bold"
                onClick={() => navigate('/')}
              >
                SLMB
              </h1>
              <p className="text-xl text-white font-medium mt-2">Your trusted legal partner</p>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src={filter1} 
                alt="Filter" 
                className="cursor-pointer w-10 h-10 ml-5 mr-5"
                onClick={() => navigate('/filter')}
              />
              <img 
                src={pro1} 
                alt="Profile" 
                className="cursor-pointer w-10 h-10 ml-5"
                onClick={() => navigate('/user-profile')}
              />
              <h1 
                className="text-3xl mr-5 text-white cursor-pointer"
                onClick={() => navigate('/login')}
              >
                Login
              </h1>
            </div>
          </div>
        </header>
      </>
    );
  }
};

export default Header1;