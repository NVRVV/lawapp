import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../../components/Header2';

const LawyerForm1 = () => {
  const navigate = useNavigate();
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [screenSize, setScreenSize] = useState(getScreenSize());

  // Handler for Enrollment Number (capital letters and numbers only)
  const handleEnrollmentChange = (e) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[^A-Z0-9]/g, '').toUpperCase();
    setEnrollmentNumber(filteredValue);
  };

  // Handler for District (alphabets only, no numbers or special characters)
  const handleDistrictChange = (e) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[^A-Za-z]/g, '');
    setDistrict(filteredValue);
  };

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
          "Law is order, and good law is good order."
        </h1>
        <div className={`flex flex-col mt-7 ${screenSize === 'mobile' ? 'ml-0' : 'ml-10'}`}>
          <label
            htmlFor="enrolment"
            className="text-2xl text-left transition-opacity duration-300"
          >
            Enrolment Number
          </label>
          <input
            type="text"
            placeholder="Enter your Enrolment number"
            className={`lawyer-input p-2 mt-2 pl-5 text-xl focus:outline-none ${inputWidth}`}
            value={enrollmentNumber}
            onChange={handleEnrollmentChange}
          />
        </div>
        <div className={`flex flex-col mt-5 ${screenSize === 'mobile' ? 'ml-0' : 'ml-10'}`}>
          <label
            htmlFor="district"
            className="text-2xl text-left transition-opacity duration-300"
          >
            District
          </label>
          <input
            type="text"
            placeholder="Enter your District"
            className={`lawyer-input p-2 mt-2 pl-5 text-xl focus:outline-none ${inputWidth}`}
            value={district}
            onChange={handleDistrictChange}
          />
        </div>
        <div className={`${buttonContainerStyles} mt-10 ${screenSize === 'mobile' ? 'ml-0' : 'ml-10'}`}>
          <button
            className={`bg-secondary ${buttonStyles} rounded-sm text-white cursor-pointer`}
            onClick={() => navigate('/lawyer-form')}
          >
            Previous
          </button>
          <button
            className={`bg-secondary ${buttonStyles} rounded-sm text-white cursor-pointer`}
            onClick={() => navigate('/lawyer-form-next')}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default LawyerForm1;