import React, { useState, useEffect } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import form1 from '../../assets/form1.png';
import { CiLocationOn } from "react-icons/ci";

const FormScreen = () => {
  const navigate = useNavigate();

  const [screenSize, setScreenSize] = useState('desktop');

  const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024,
    desktop: 1025
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= BREAKPOINTS.mobile) {
        setScreenSize('mobile');
      } else if (width <= BREAKPOINTS.tablet) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-full h-auto bg-cover bg-center flex justify-center items-center p-4" style={{ backgroundImage: `url(${form1})` }}>
      <div className={`bg-white/80 rounded-xl h-80% w-80% p-6  ${screenSize === 'mobile' ? 'max-w-xs' : screenSize === 'tablet' ? 'max-w-md' : 'max-w-lg'}`}> 
        <h1 className="text-center text-black font-bold text-2xl mb-4">Case Details</h1>
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Enter the Case Name" className="p-2 border border-gray-300 rounded-md text-lg" />
          <select className="p-2 border border-gray-300 rounded-md text-lg bg-white">
            <option value="" disabled selected hidden>Category</option>
            <option value="criminal">Criminal</option>
            <option value="civil">Civil</option>
            <option value="family">Family</option>
            <option value="corporate">Corporate</option>
          </select>
          <input type="tel" placeholder="Phone Number" maxLength={10} className="p-2 border border-gray-300 rounded-md text-lg" />
          <div className="flex items-center border border-gray-300 rounded-md px-3 bg-white">
            <CiLocationOn className="text-gray-500 text-lg" />
            <input type="text" placeholder="Location" className="w-full p-2 pl-3 bg-transparent text-lg focus:outline-none" />
          </div>
          <textarea className="p-3 border border-gray-300 rounded-md text-lg h-32 resize-none" placeholder="Description"></textarea>
          <p className="text-center text-lg">Want to add doc? <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/upload")}>Upload</span></p>
          <button className="p-2 bg-blue-600 text-white text-lg rounded-md hover:shadow-xl cursor-pointer" onClick={() => navigate('/filter')}>SUBMIT</button>
        </div>
      </div>
    </section>
  );
};

export default FormScreen;