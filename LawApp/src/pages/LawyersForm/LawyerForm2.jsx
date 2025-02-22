import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../../components/Header2';

const LawyerForm2 = () => {
    const navigate = useNavigate();
  return (
    <section className="bg-bg2 min-h-screen w-full justify-center items-center">
      <Header2 />
      <div className="lawyer1 flex-row md:flex-col ml-92 mr-92 rounded-xl mt-15">
        <h1 className='text-left text-3xl ml-10 mt-10 text-secondary'>&quot;The scales of justice balance with evidence, not emotion.&quot;</h1>
        <div className="flex flex-row md:flex-col ml-10 mt-7">
            <h2 className='text-left text-2xl '>No of cases taken</h2>
            <input type="number" placeholder="Enter no of cases taken" className="login-input text-xl p-7  mt-3 mr-14 pl-5 w-[631px] h-[204px] focus:outline-none "   min="0" step="10" pattern="\d+" 
            onInput={(e) => {e.target.value = e.target.value.replace(/[^0-9]/g, '');}}/> 
        </div>
        <div className="flex flex-row md:flex-col ml-10 mt-5">
            <h2 className='text-left text-2xl'>No of cases Won</h2>
            <input type="number" placeholder="Enter no of cases won" className="login-input text-xl p-7  mt-3 mr-14 pl-5 w-[631px] h-[204px] focus:outline-none " min="0" step="10" pattern="\d+" 
            onInput={(e) => {e.target.value = e.target.value.replace(/[^0-9]/g, '');}}/>
        </div>
        <div className='flex flex-col md:flex-row gap-105 ml-10 mt-10'>
          <button className='bg-secondary p-3 w-30 rounded-sm text-white cursor-pointer text-xl'onClick={()=>navigate('/lawyer-next')}>Previous</button>
          <button className='bg-secondary p-3 w-30 rounded-sm text-white cursor-pointer text-xl' onClick={()=>navigate('/lawyer-dashboard')}>Submit</button>
        </div>

      </div>
    </section>
  );
};

export default LawyerForm2;
