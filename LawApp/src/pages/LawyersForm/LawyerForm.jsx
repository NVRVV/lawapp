import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../../components/Header2';

const LawyerForm = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-bg2 min-h-screen flex flex-col items-center px-5 md:px-10 lg:px-20">
      <div className="bg-white shadow-lg rounded-xl p-5 w-full max-w-lg md:max-w-2xl lg:max-w-4xl mt-10">
        <h1 className='text-left text-3xl text-secondary'>Welcome!</h1>
        
        <div className="mt-7">
          <div className="flex flex-col">
            <label htmlFor="email" className='text-2xl'>Username</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your username"
              className="p-2 mt-2 pl-5 text-xl focus:outline-none border border-gray-300 rounded-md w-full"
              required
            />
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="experience" className='text-2xl'>Experience</label>
          <input
            type="tel"
            id="experience"
            placeholder="Enter your experience"
            className="p-2 mt-2 pl-5 text-xl focus:outline-none border border-gray-300 rounded-md w-full"
            min="0"
            step="1"
            pattern="\d+"
          />
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center mt-10 gap-5'>
          <button className='bg-secondary p-3 w-full md:w-1/3 rounded-md text-white text-xl hidden md:block'>Previous</button>
          <button 
            className='bg-secondary p-3 w-full md:w-1/3 rounded-md text-white text-xl' 
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
