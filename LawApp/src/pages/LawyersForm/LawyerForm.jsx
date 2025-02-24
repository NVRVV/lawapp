import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LawyerForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [experience, setExperience] = useState('');

  const handleNext = () => {
    // Store or process the data if needed before navigating
    navigate('/lawyer-next', { state: { username, experience } });
  };

  return (
    <section className="bg-bg2 min-h-screen flex flex-col items-center px-5 md:px-10 lg:px-20">
      <div className="bg-white shadow-lg rounded-xl p-5 w-full max-w-lg md:max-w-2xl lg:max-w-4xl mt-20">
        <h1 className="text-left text-3xl text-secondary">Welcome!</h1>

        <div className="mt-7">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-2xl">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="p-2 mt-2 pl-5 text-xl focus:outline-none border border-gray-300 rounded-md w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="experience" className="text-2xl">Experience</label>
          <input
            type="number"
            id="experience"
            placeholder="Enter your experience"
            className="p-2 mt-2 pl-5 text-xl focus:outline-none border border-gray-300 rounded-md w-full"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            min="0"
            step="1"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-5">
          <button
            className="bg-secondary p-3 w-full md:w-1/3 cursor-pointer rounded-md text-white text-xl"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default LawyerForm;
