import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../../components/Header2';

const LawyerForm2 = () => {
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
  let containerStyles, inputWidth, buttonStyles, buttonContainerStyles;
  if (screenSize === 'mobile') {
    containerStyles = 'flex flex-col ml-5 mr-5 mt-5';
    inputWidth = 'w-full'; // Full width for mobile
    buttonStyles = 'p-2 w-full text-lg'; // Full-width buttons
    buttonContainerStyles = 'flex flex-col gap-4'; // Vertical buttons with gap
  } else if (screenSize === 'tablet') {
    containerStyles = 'flex flex-col ml-20 mr-20 mt-10';
    inputWidth = 'w-[400px]'; // Fixed width for tablet
    buttonStyles = 'p-3 w-40 text-xl';
    buttonContainerStyles = 'flex flex-row gap-5'; // Horizontal buttons with smaller gap
  } else {
    // Desktop
    containerStyles = 'flex-row md:flex-col ml-92 mr-92 rounded-xl mt-15';
    inputWidth = 'w-[631px]'; // Original width for desktop
    buttonStyles = 'p-3 w-30 text-xl';
    buttonContainerStyles = 'flex flex-col md:flex-row gap-105'; // Original desktop layout
  }

  return (
    <section className="bg-bg2 min-h-screen w-full flex flex-col justify-center items-center">
      <Header2 />
      <div className={`lawyer1 ${containerStyles}`}>
        <h1 className="text-left text-3xl mt-10 text-secondary ml-0 md:ml-10">
          "The scales of justice balance with evidence, not emotion."
        </h1>
        <div className={`flex flex-col mt-7 ${screenSize === 'mobile' ? 'ml-0' : 'ml-10'}`}>
          <label
            htmlFor="cases-taken"
            className="text-2xl text-left transition-opacity duration-300"
          >
            Number of cases taken
          </label>
          <input
            type="tel"
            placeholder="Enter no of cases taken"
            className={`lawyer-input p-2 mt-2 pl-5 text-xl focus:outline-none ${inputWidth}`}
            min="0"
            step="10"
            pattern="\d+"
          />
        </div>
        <div className={`flex flex-col mt-5 ${screenSize === 'mobile' ? 'ml-0' : 'ml-10'}`}>
          <label
            htmlFor="cases-won"
            className="text-2xl text-left transition-opacity duration-300"
          >
            Number of cases won
          </label>
          <input
            type="tel"
            placeholder="Enter no of cases won"
            className={`lawyer-input p-2 mt-2 pl-5 text-xl focus:outline-none ${inputWidth}`}
            min="0"
            step="10"
            pattern="\d+"
          />
        </div>
        <div className={`${buttonContainerStyles} mt-10 ${screenSize === 'mobile' ? 'ml-0' : 'ml-10'}`}>
          <button
            className={`bg-secondary ${buttonStyles} rounded-sm text-white cursor-pointer`}
            onClick={() => navigate('/lawyer-next')}
          >
            Previous
          </button>
          <button
            className={`bg-secondary ${buttonStyles} rounded-sm text-white cursor-pointer`}
            onClick={() => navigate('/lawyer-dashboard')}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default LawyerForm2;