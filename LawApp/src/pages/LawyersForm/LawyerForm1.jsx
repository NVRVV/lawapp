import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../../components/Header2';

const LawyerForm1 = () => {
  const navigate = useNavigate();
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handler for Enrollment Number (capital letters and numbers only)
  const handleEnrollmentChange = (e) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[^A-Z0-9]/g, '').toUpperCase();
    setEnrollmentNumber(filteredValue);
  };

  // Handler for District (alphabets only, no numbers or special characters)
  const handleDistrictChange = (e) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[^A-Za-z]/g, ''); // Allow only A-Z and a-z
    setDistrict(filteredValue);
  };

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine the view based on window width
  let view;
  if (windowWidth < 768) {
    // Mobile view (less than 768px)
    view = (
      <div className="lawyer1 flex-col items-center p-4">
        <h1 className="text-left text-xl mt-5 text-secondary">
          "Law is order, and good law is good order."
        </h1>
        <div className="flex flex-col mt-4 w-full">
          <label htmlFor="enrolment" className="text-lg text-left mt-2">
            Enrolment Number
          </label>
          <input
            type="text"
            placeholder="Enter your Enrolment number"
            className="lawyer-input p-2 mt-1 pl-3 text-base focus:outline-none w-full"
            value={enrollmentNumber}
            onChange={handleEnrollmentChange}
          />
        </div>
        <div className="flex flex-col mt-4 w-full">
          <label htmlFor="district" className="text-lg text-left mt-2">
            District
          </label>
          <input
            type="text"
            placeholder="Enter your District"
            className="lawyer-input p-2 mt-1 pl-3 text-base focus:outline-none w-full"
            value={district}
            onChange={handleDistrictChange}
          />
        </div>
        <div className="flex flex-col mt-6 w-full">
          <button
            className="bg-secondary p-2 w-full rounded-sm text-white cursor-pointer text-base mb-2"
            onClick={() => navigate('/lawyer-form')}
          >
            Previous
          </button>
          <button
            className="bg-secondary p-2 w-full rounded-sm text-white cursor-pointer text-base"
            onClick={() => navigate('/lawyer-form-next')}
          >
            Next
          </button>
        </div>
      </div>
    );
  } else if (windowWidth >= 768 && windowWidth < 1024) {
    // Tablet view (768px to 1023px)
    view = (
      <div className="lawyer1 flex-col items-center p-6">
        <h1 className="text-left text-2xl mt-8 text-secondary">
          "Law is order, and good law is good order."
        </h1>
        <div className="flex flex-col mt-6 w-full max-w-md">
          <label htmlFor="enrolment" className="text-xl text-left mt-2">
            Enrolment Number
          </label>
          <input
            type="text"
            placeholder="Enter your Enrolment number"
            className="lawyer-input p-2 mt-1 pl-4 text-lg focus:outline-none w-full"
            value={enrollmentNumber}
            onChange={handleEnrollmentChange}
          />
        </div>
        <div className="flex flex-col mt-6 w-full max-w-md">
          <label htmlFor="district" className="text-xl text-left mt-2">
            District
          </label>
          <input
            type="text"
            placeholder="Enter your District"
            className="lawyer-input p-2 mt-1 pl-4 text-lg focus:outline-none w-full"
            value={district}
            onChange={handleDistrictChange}
          />
        </div>
        <div className="flex flex-col mt-8 w-full max-w-md">
          <button
            className="bg-secondary p-2 w-full rounded-sm text-white cursor-pointer text-lg mb-2"
            onClick={() => navigate('/lawyer-form')}
          >
            Previous
          </button>
          <button
            className="bg-secondary p-2 w-full rounded-sm text-white cursor-pointer text-lg"
            onClick={() => navigate('/lawyer-form-next')}
          >
            Next
          </button>
        </div>
      </div>
    );
  } else {
    // Desktop view (1024px and above)
    view = (
      <div className="lawyer1 flex-row md:flex-col ml-92 mr-92 rounded-xl mt-15">
        <h1 className="text-left text-3xl ml-10 mt-10 text-secondary">
          "Law is order, and good law is good order."
        </h1>
        <div className="flex flex-row md:flex-col ml-10 mt-7">
          <label
            htmlFor="enrolment"
            className="text-2xl text-left transition-opacity duration-300"
          >
            Enrolment Number
          </label>
          <input
            type="text"
            placeholder="Enter your Enrolment number"
            className="lawyer-input p-2 mt-2 pl-5 text-xl focus:outline-none w-[631px]"
            value={enrollmentNumber}
            onChange={handleEnrollmentChange}
          />
        </div>
        <div className="flex flex-row md:flex-col ml-10 mt-5">
          <label
            htmlFor="district"
            className="text-2xl text-left transition-opacity duration-300"
          >
            District
          </label>
          <input
            type="text"
            placeholder="Enter your District"
            className="lawyer-input p-2 mt-2 pl-5 text-xl focus:outline-none w-[631px]"
            value={district}
            onChange={handleDistrictChange}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-105 ml-10 mt-10">
          <button
            className="bg-secondary p-3 w-30 rounded-sm text-white cursor-pointer text-xl"
            onClick={() => navigate('/lawyer-form')}
          >
            Previous
          </button>
          <button
            className="bg-secondary p-3 w-30 rounded-sm text-white cursor-pointer text-xl"
            onClick={() => navigate('/lawyer-form-next')}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-bg2 min-h-screen w-full justify-center items-center">
      <Header2 />
      {view}
    </section>
  );
};

export default LawyerForm1;