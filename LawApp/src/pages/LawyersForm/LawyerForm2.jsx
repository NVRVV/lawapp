import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../../components/Header2';

const LawyerForm2 = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
          "The scales of justice balance with evidence, not emotion."
        </h1>
        <div className="flex flex-col mt-4 w-full">
          <label
            htmlFor="cases-taken"
            className="text-lg text-left mt-2"
          >
            Number of cases taken
          </label>
          <input
            type="tel"
            placeholder="Enter no of cases taken"
            className="lawyer-input p-2 mt-1 pl-3 text-base focus:outline-none w-full"
            min="0"
            step="10"
            pattern="\d+"
          />
        </div>
        <div className="flex flex-col mt-4 w-full">
          <label
            htmlFor="cases-won"
            className="text-lg text-left mt-2"
          >
            Number of cases won
          </label>
          <input
            type="tel"
            placeholder="Enter no of cases won"
            className="lawyer-input p-2 mt-1 pl-3 text-base focus:outline-none w-full"
            min="0"
            step="10"
            pattern="\d+"
          />
        </div>
        <div className="flex flex-col mt-6 w-full">
          <button
            className="bg-secondary p-2 w-full rounded-sm text-white cursor-pointer text-base mb-2"
            onClick={() => navigate('/lawyer-next')}
          >
            Previous
          </button>
          <button
            className="bg-secondary p-2 w-full rounded-sm text-white cursor-pointer text-base"
            onClick={() => navigate('/lawyer-dashboard')}
          >
            Submit
          </button>
        </div>
      </div>
    );
  } else if (windowWidth >= 768 && windowWidth < 1024) {
    // Tablet view (768px to 1023px)
    view = (
      <div className="lawyer1 flex-col items-center p-6">
        <h1 className="text-left text-2xl mt-8 text-secondary">
          "The scales of justice balance with evidence, not emotion."
        </h1>
        <div className="flex flex-col mt-6 w-full max-w-md">
          <label
            htmlFor="cases-taken"
            className="text-xl text-left mt-2"
          >
            Number of cases taken
          </label>
          <input
            type="tel"
            placeholder="Enter no of cases taken"
            className="lawyer-input p-2 mt-1 pl-4 text-lg focus:outline-none w-full"
            min="0"
            step="10"
            pattern="\d+"
          />
        </div>
        <div className="flex flex-col mt-6 w-full max-w-md">
          <label
            htmlFor="cases-won"
            className="text-xl text-left mt-2"
          >
            Number of cases won
          </label>
          <input
            type="tel"
            placeholder="Enter no of cases won"
            className="lawyer-input p-2 mt-1 pl-4 text-lg focus:outline-none w-full"
            min="0"
            step="10"
            pattern="\d+"
          />
        </div>
        <div className="flex flex-col mt-8 w-full max-w-md">
          <button
            className="bg-secondary p-2 w-full rounded-sm text-white cursor-pointer text-lg mb-2"
            onClick={() => navigate('/lawyer-next')}
          >
            Previous
          </button>
          <button
            className="bg-secondary p-2 w-full rounded-sm text-white cursor-pointer text-lg"
            onClick={() => navigate('/lawyer-dashboard')}
          >
            Submit
          </button>
        </div>
      </div>
    );
  } else {
    // Desktop view (1024px and above)
    view = (
      <div className="lawyer1 flex-row md:flex-col ml-92 mr-92 rounded-xl mt-15">
        <h1 className="text-left text-3xl ml-10 mt-10 text-secondary">
          "The scales of justice balance with evidence, not emotion."
        </h1>
        <div className="flex flex-row md:flex-col ml-10 mt-7">
          <label
            htmlFor="cases-taken"
            className="text-2xl text-left transition-opacity duration-300"
          >
            Number of cases taken
          </label>
          <input
            type="tel"
            placeholder="Enter no of cases taken"
            className="lawyer-input p-2 mt-2 pl-5 text-xl focus:outline-none w-[631px]"
            min="0"
            step="10"
            pattern="\d+"
          />
        </div>
        <div className="flex flex-row md:flex-col ml-10 mt-5">
          <label
            htmlFor="cases-won"
            className="text-2xl text-left transition-opacity duration-300"
          >
            Number of cases won
          </label>
          <input
            type="tel"
            placeholder="Enter no of cases won"
            className="lawyer-input p-2 mt-2 pl-5 text-xl focus:outline-none w-[631px]"
            min="0"
            step="10"
            pattern="\d+"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-105 ml-10 mt-10">
          <button
            className="bg-secondary p-3 w-30 rounded-sm text-white cursor-pointer text-xl"
            onClick={() => navigate('/lawyer-next')}
          >
            Previous
          </button>
          <button
            className="bg-secondary p-3 w-30 rounded-sm text-white cursor-pointer text-xl"
            onClick={() => navigate('/lawyer-dashboard')}
          >
            Submit
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

export default LawyerForm2;