import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const LawyerForm2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { username, experience, enrollmentNumber, district } = location.state || {};

  const [casesTaken, setCasesTaken] = useState('');
  const [casesWon, setCasesWon] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      member_id: 1, // Replace with actual member ID logic
      username,
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
      console.error( error);
    }
  };

  const handlePrevious = () => {
    navigate('/lawyer-next', { state: { username, experience, enrollmentNumber, district } });
  };

  return (
    <section className="bg-bg2 min-h-screen flex flex-col items-center px-5 md:px-10 lg:px-20">
      <div className="bg-white shadow-lg rounded-xl p-5 w-full max-w-lg md:max-w-2xl lg:max-w-4xl mt-20">
        <h1 className="text-left text-3xl text-secondary">
          "The scales of justice balance with evidence, not emotion."
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mt-7">
            <label htmlFor="cases-taken" className="text-2xl">
              Number of cases taken
            </label>
            <input
              type="number"
              id="cases-taken"
              placeholder="Enter no of cases taken"
              className="p-2 mt-2 pl-5 text-xl focus:outline-none border border-gray-300 rounded-md w-full"
              value={casesTaken}
              onChange={(e) => setCasesTaken(e.target.value)}
              min="0"
              step="1"
              required
            />
          </div>

          <div className="mt-5">
            <label htmlFor="cases-won" className="text-2xl">
              Number of cases won
            </label>
            <input
              type="number"
              id="cases-won"
              placeholder="Enter no of cases won"
              className="p-2 mt-2 pl-5 text-xl focus:outline-none border border-gray-300 rounded-md w-full"
              value={casesWon}
              onChange={(e) => setCasesWon(e.target.value)}
              min="0"
              step="1"
              required
            />
          </div>

          <div className="mt-5">
            <label htmlFor="rating" className="text-2xl">
              Rating
            </label>
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
              type="button"
              className="bg-secondary p-3 w-full md:w-1/3 cursor-pointer rounded-md text-white text-xl"
              onClick={handlePrevious}
            >
              Previous
            </button>
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

export default LawyerForm2;
