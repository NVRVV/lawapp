import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../../components/Header2';

const LawyerForm = () => {
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState(getScreenSize());

  // Function to determine screen size category
  function getScreenSize() {
    const width = window.innerWidth;
    if (width <= 640) {
      return 'mobile'; // Mobile view: up to 640px
    } else if (width <= 1024) {
      return 'tablet'; // Tablet view: 641px to 1024px
    } else {
      return 'desktop'; // Desktop view: above 1024px
    }
  }

  // Update screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  // Define styles based on screen size
  let containerStyles, inputWidth, buttonStyles, marginStyles;
  if (screenSize === 'mobile') {
    containerStyles = 'flex flex-col ml-5 mr-5 mt-5';
    inputWidth = 'w-full'; // Full width for mobile
    buttonStyles = 'p-2 w-full text-lg'; // Full-width buttons
    marginStyles = 'ml-0'; // No left margin
  } else if (screenSize === 'tablet') {
    containerStyles = 'flex flex-col ml-20 mr-20 mt-10';
    inputWidth = 'w-[400px]'; // Fixed width for tablet
    buttonStyles = 'p-3 w-40 text-xl';
    marginStyles = 'ml-0 gap-5'; // Small gap between buttons
  } else {
    // Desktop
    containerStyles = 'flex-row md:flex-col ml-92 mr-92 rounded-xl mt-15';
    inputWidth = 'w-[631px]'; // Original width for desktop
    buttonStyles = 'p-3 w-30 text-xl';
    marginStyles = 'ml-135'; // Original margin for Next button
  }

  return (
    <section className="bg-bg2 min-h-screen w-full flex flex-col justify-center items-center">
      <Header2 />
      <div className={`lawyer1 ${containerStyles}`}>
        <h1 className="text-left text-3xl mt-10 text-secondary ml-0 md:ml-10">
          Welcome!
        </h1>
        <div className={`flex-1 flex-col mt-7 ${screenSize === 'mobile' ? 'ml-0' : 'ml-10'}`}>
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-2xl text-left transition-opacity duration-300"
            >
              Username
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your username"
              className={`lawyer-input p-2 mt-2 pl-5 text-xl focus:outline-none ${inputWidth}`}
              required
            />
          </div>
        </div>
        <div className={`flex flex-col mt-5 ${screenSize === 'mobile' ? 'ml-0' : 'ml-10'}`}>
          <label
            htmlFor="experience"
            className="text-2xl text-left transition-opacity duration-300"
          >
            Experience
          </label>
          <input
            type="tel"
            placeholder="Enter your experience"
            className={`lawyer-input p-2 mt-2 pl-5 text-xl focus:outline-none ${inputWidth}`}
            min="0"
            step="1"
            pattern="\d+"
          />
        </div>
        <div
          className={`flex ${
            screenSize === 'mobile' ? 'flex-col' : 'flex-col md:flex-row'
          } gap-5 mt-10 ${screenSize === 'mobile' ? 'ml-0' : 'ml-10'}`}
        >
          <button
            className={`bg-secondary ${buttonStyles} rounded-sm text-white cursor-pointer hidden`}
          >
            Previous
          </button>
          <button
            className={`bg-secondary ${buttonStyles} rounded-sm text-white cursor-pointer ${marginStyles}`}
            onClick={() => navigate('/lawyer-next')}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default LawyerForm;