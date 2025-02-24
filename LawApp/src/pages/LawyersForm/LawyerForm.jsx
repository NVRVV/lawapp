import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LawyerForm = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [experience, setExperience] = useState('');
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [casesTaken, setCasesTaken] = useState('');
  const [casesWon, setCasesWon] = useState('');
  const [rating, setRating] = useState(0);

  const handleEnrollmentChange = (e) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[^A-Z0-9]/g, '').toUpperCase();
    setEnrollmentNumber(filteredValue);
  };

  const handleDistrictChange = (e) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[^A-Za-z]/g, '');
    setDistrict(filteredValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      first_name:`${firstName} `, // Replace with actual member ID logic
      username: `${firstName} ${lastName}`,
      enrollment_id: enrollmentNumber,
      district_location: district,
      experience: parseInt(experience),
      cases_taken: parseInt(casesTaken),
      cases_won: parseInt(casesWon),
      rating: parseFloat(rating),
    };

    try {
      await axios.post('http://localhost:5000/api/auth/submit-lawyer-form', formData);
      navigate('/lawyer-dashboard');
    } catch (error) {
      console.error('Form submission failed', error);
    }
  };

  return (
    <section className="bg-bg2 min-h-screen flex flex-col items-center px-5 md:px-10 lg:px-20">
      <div className="bg-white shadow-lg rounded-xl p-5 w-full max-w-lg md:max-w-2xl lg:max-w-4xl mt-20">
        <h1 className="text-left text-3xl text-secondary">Lawyer Registration</h1>

        <form onSubmit={handleSubmit}>
          <div className="mt-7">
            <label htmlFor="firstName" className="text-2xl">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              className="p-2 mt-2 pl-5 text-xl focus:outline-none border border-gray-300 rounded-md w-full"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="mt-5">
            <label htmlFor="lastName" className="text-2xl">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              className="p-2 mt-2 pl-5 text-xl focus:outline-none border border-gray-300 rounded-md w-full"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="mt-5">
            <label htmlFor="experience" className="text-2xl">Experience</label>
            <input
              type="number"
              id="experience"
              placeholder="Enter your experience in years"
              className="p-2 mt-2 pl-5 text-xl focus:outline-none border border-gray-300 rounded-md w-full"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              min="0"
              required
            />
          </div>

          <div className="mt-5">
            <label htmlFor="enrollment" className="text-2xl">Enrollment Number</label>
            <input
              type="text"
              id="enrollment"
              placeholder="Enter your Enrollment number"
              className="p-2 mt-2 pl-5 text-xl focus:outline-none border border-gray-300 rounded-md w-full"
              value={enrollmentNumber}
              onChange={handleEnrollmentChange}
              required
            />
          </div>

          <div className="mt-5">
            <label htmlFor="district" className="text-2xl">District</label>
            <input
              type="text"
              id="district"
              placeholder="Enter your District"
              className="p-2 mt-2 pl-5 text-xl focus:outline-none border border-gray-300 rounded-md w-full"
              value={district}
              onChange={handleDistrictChange}
              required
            />
          </div>

          <div className="mt-5">
            <label htmlFor="cases-taken" className="text-2xl">Number of cases taken</label>
            <input
              type="number"
              id="cases-taken"
              placeholder="Enter no of cases taken"
              className="p-2 mt-2 pl-5 text-xl focus:outline-none border border-gray-300 rounded-md w-full"
              value={casesTaken}
              onChange={(e) => setCasesTaken(e.target.value)}
              min="0"
              required
            />
          </div>

          <div className="mt-5">
            <label htmlFor="cases-won" className="text-2xl">Number of cases won</label>
            <input
              type="number"
              id="cases-won"
              placeholder="Enter no of cases won"
              className="p-2 mt-2 pl-5 text-xl focus:outline-none border border-gray-300 rounded-md w-full"
              value={casesWon}
              onChange={(e) => setCasesWon(e.target.value)}
              min="0"
              required
            />
          </div>

          <div className="mt-5">
            <label htmlFor="rating" className="text-2xl">Rating</label>
            <input
              type="number"
              id="rating"
              placeholder="Enter rating"
              className="p-2 mt-2 pl-5 text-xl focus:outline-none border border-gray-300 rounded-md w-full"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="0"
              max="5"
              step="0.1"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-5">
            <button
              type="submit"
              className="bg-secondary p-3 w-full md:w-1/3 cursor-pointer rounded-md text-white text-xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LawyerForm;
