import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../../components/Header2';

const LawyerForm2 = () => {
    const navigate = useNavigate();
  return (
    <section className="bg-bg2 min-h-screen flex flex-col items-center px-5 md:px-10 lg:px-20">
      <div className="bg-white shadow-lg rounded-xl p-5 w-full max-w-lg md:max-w-2xl lg:max-w-4xl mt-10">
        <h1 className='text-left text-3xl text-secondary'>&quot;The scales of justice balance with evidence, not emotion.&quot;</h1>
        
        <div className="mt-7">
          <label htmlFor="cases-taken" className='text-2xl'>Number of cases taken</label>
          <input 
            type="tel" 
            placeholder="Enter no of cases taken" 
            className="p-2 mt-2 pl-5 text-xl focus:outline-none border border-gray-300 rounded-md w-full"   
            min="0" 
            step="10" 
            pattern="\d+" 
          /> 
        </div>
        
        <div className="mt-5">
          <label htmlFor="cases-won" className='text-2xl'>Number of cases won</label>
          <input 
            type="tel" 
            placeholder="Enter no of cases won" 
            className="p-2 mt-2 pl-5 text-xl focus:outline-none border border-gray-300 rounded-md w-full" 
            min="0" 
            step="10" 
            pattern="\d+" 
          />
        </div>
        
        <div className='flex flex-col md:flex-row justify-between items-center mt-10 gap-5'>
          <button className='bg-secondary p-3 w-full md:w-1/3 rounded-md text-white text-xl' onClick={()=>navigate('/lawyer-next')}>Previous</button>
          <button className='bg-secondary p-3 w-full md:w-1/3 rounded-md text-white text-xl' onClick={()=>navigate('/lawyer-dashboard')}>Submit</button>
        </div>
      </div>
    </section>
  );
};

export default LawyerForm2;
