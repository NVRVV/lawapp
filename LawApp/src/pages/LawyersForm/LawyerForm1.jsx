import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LawyerForm1 = () => {
  const navigate = useNavigate();
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [district, setDistrict] = useState('');

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

  return (
    <section className="bg-bg2 min-h-screen flex flex-col items-center px-5 md:px-10 lg:px-20">
      <div className="bg-white shadow-lg rounded-xl p-5 w-full max-w-lg md:max-w-2xl lg:max-w-4xl mt-20">
        <h1 className="text-left text-3xl text-secondary">
          "Law is order, and good law is good order."
        </h1>
        <div className="mt-7">
          <label htmlFor="enrolment" className="text-2xl">Enrolment Number</label>
          <input
            type="text"
            placeholder="Enter your Enrolment number"
            className="p-2 mt-2 pl-5 text-xl focus:outline-none border border-gray-300 rounded-md w-full"
            value={enrollmentNumber}
            onChange={handleEnrollmentChange}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="district" className="text-2xl">District</label>
          <input
            type="text"
            placeholder="Enter your District"
            className="p-2 mt-2 pl-5 text-xl focus:outline-none border border-gray-300 rounded-md w-full"
            value={district}
            onChange={handleDistrictChange}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-5">
          <button
            className="bg-secondary p-3 w-full md:w-1/3 cursor-pointer rounded-md text-white text-xl"
            onClick={() => navigate('/lawyer-form')}
          >
            Previous
          </button>
          <button
            className="bg-secondary p-3 w-full md:w-1/3 cursor-pointer rounded-md text-white text-xl"
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
