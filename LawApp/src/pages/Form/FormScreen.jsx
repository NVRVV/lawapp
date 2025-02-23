import React, { useState, useEffect } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import Header1 from "../../components/Header1";
import form1 from '../../assets/form1.png';
import { CiLocationOn } from "react-icons/ci";

const FormScreen = () => {
  const navigate = useNavigate();

  // State to track the current screen size category
  const [screenSize, setScreenSize] = useState('desktop'); // Default to desktop

  // Define breakpoints (in pixels)
  const BREAKPOINTS = {
    mobile: 768,  // Up to 768px for mobile
    tablet: 1024, // Up to 1024px for tablet
    desktop: 1024 // Above 1024px for desktop
  };

  // Update screen size on mount and when window is resized
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

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Render different layouts based on screen size using if-else-if
  if (screenSize === 'mobile') {
    return (
      <section className="w-full bg-cover bg-center" style={{ backgroundImage: `url(${form1})` }}>
        <div
          className="flex flex-col items-center justify-center h-220 w-full  pt-10"
        >
          <div className=" bg-bg/70 flex flex-col items-center rounded-xl py-10 px-10">
            <h1 className="text-xl text-black text-center mb-4">Case Details</h1>
            <div className="flex flex-col my-3  gap-4 w-full max-w-xs">
              <input 
                type="text" 
                placeholder="Enter the Case Name" 
                className="login-input text-lg p-2 pl-3 w-full focus:outline-none rounded-md"
              />
              <select 
                name="" 
                id="" 
                className="login-input my-3  text-lg p-2 pl-3 w-full focus:outline-none bg-white border border-gray-300 rounded-md"
              >
                <option value="" disabled selected hidden className="text-lg">Category</option>
                <option value="criminal">Criminal</option>
                <option value="civil">Civil</option>
                <option value="family">Family</option>
                <option value="corporate">Corporate</option>
              </select>
            </div>

            <div className="flex flex-col my-3  gap-4 w-full max-w-xs mt-4">
              <input 
                type="tel" 
                placeholder="Phone Number" 
                required 
                maxLength={10} 
                pattern="\d{10}" 
                inputMode="numeric" 
                className="login-input w-full p-2 pl-3 focus:outline-none text-lg rounded-md"
              />
              <div className="flex items-center my-3 w-full border border-gray-300 rounded-md px-3 bg-white">
                <CiLocationOn className="text-gray-500 text-lg" />
                <input 
                  type="text" 
                  placeholder="Location" 
                  className="w-full p-2 pl-3 focus:outline-none text-lg bg-transparent"
                />
              </div>
            </div>

            <div className="flex flex-col   items-center w-full max-w-xs mt-4">
              <textarea 
                name="" 
                id="" 
                className="w-full h-32 bg-white my-3  focus:outline-none p-3 resize-none text-lg rounded-md" 
                placeholder="Description"
              ></textarea>
              <p className="text-lg my-3 text-center mt-3">
                Want to add doc?{" "}
                <span 
                  className="text-secondary cursor-pointer" 
                  onClick={() => navigate("/upload")}
                >
                  Upload
                </span>
              </p>
              <button 
                className="p-2 w-full bg-secondary text-white text-lg rounded-md hover:shadow-xl cursor-pointer mt-3"
                onClick={() => navigate('/filter')}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (screenSize === 'tablet') {
    return (
      <section className="bg-cover bg-center" style={{ backgroundImage: `url(${form1})` }}>
        <div
          className="flex flex-col items-center justify-center h-220   pt-10"
        >
          <div className=" bg-bg/70  flex flex-col md:flex-col items-center rounded-xl p-6">
            <h1 className="text-3xl text-black text-center mb-6">Case Details</h1>
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-md">
              <input 
                type="text" 
                placeholder="Enter the Case Name" 
                className="login-input text-xl p-2 pl-4 w-full focus:outline-none rounded-md"
              />
              <select 
                name="" 
                id="" 
                className="login-input text-xl p-2 pl-4 w-full focus:outline-none bg-white border border-gray-300 rounded-md"
              >
                <option value="" disabled selected hidden className="text-xl">Category</option>
                <option value="criminal">Criminal</option>
                <option value="civil">Civil</option>
                <option value="family">Family</option>
                <option value="corporate">Corporate</option>
              </select>
            </div>

            <div className="flex flex-col md:flex-row gap-6 w-full max-w-md mt-6">
              <input 
                type="tel" 
                placeholder="Phone Number" 
                required 
                maxLength={10} 
                pattern="\d{10}" 
                inputMode="numeric" 
                className="login-input w-full p-2 pl-4 focus:outline-none text-xl rounded-md"
              />
              <div className="flex items-center w-full border border-gray-300 rounded-md px-3 bg-white">
                <CiLocationOn className="text-gray-500 text-xl" />
                <input 
                  type="text" 
                  placeholder="Location" 
                  className="w-full p-2 pl-3 focus:outline-none text-xl bg-transparent"
                />
              </div>
            </div>

            <div className="flex flex-col items-center w-full max-w-md mt-6">
              <textarea 
                name="" 
                id="" 
                className="w-full h-40 bg-white focus:outline-none p-3 resize-none text-xl rounded-md" 
                placeholder="Description"
              ></textarea>
              <p className="text-xl text-center mt-3">
                Want to add doc?{" "}
                <span 
                  className="text-secondary cursor-pointer" 
                  onClick={() => navigate("/upload")}
                >
                  Upload
                </span>
              </p>
              <button 
                className="p-3 w-full bg-secondary text-white text-xl rounded-md hover:shadow-xl cursor-pointer mt-3"
                onClick={() => navigate('/filter')}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } else { // desktop
    return (
      <section style={{ backgroundImage: `url(${form1})` }}>
        <div
          className="flex flex-col items-center justify-center h-173 w-full bg-cover bg-center pt-20"
        >
          <div className="screens flex-row md:flex-col ml-100 mr-100 rounded-xl">
            <h1 className="text-6xl text-black">Case Details</h1>
            <div className="flex flex-col md:flex-row gap-20 justify-center mt-7">
              <input 
                type="text" 
                placeholder="Enter the Case Name" 
                className="login-input text-xl p-2 mt-2 pl-5 w-[331px] h-[54px] focus:outline-none"
              />
              <select 
                name="" 
                id="" 
                className="login-input text-xl p-2 mt-2 pl-5 w-[331px] h-[54px] focus:outline-none bg-white border border-gray-300 rounded-md"
              >
                <option value="" disabled selected hidden className="text-2xl">Category</option>
                <option value="criminal">Criminal</option>
                <option value="civil">Civil</option>
                <option value="family">Family</option>
                <option value="corporate">Corporate</option>
              </select>
            </div>

            <div className="flex flex-col md:flex-row gap-20 justify-center mt-7">
              <input 
                type="tel" 
                placeholder="Phone Number" 
                required 
                maxLength={10} 
                pattern="\d{10}" 
                inputMode="numeric" 
                className="login-input w-[331px] h-[54px] p-2 mt-2 pl-5 focus:outline-none text-xl"
              />
              <div className="flex items-center w-[331px] h-[54px] border border-gray-300 rounded-md px-3 bg-white">
                <CiLocationOn className="text-gray-500 text-2xl" />
                <input 
                  type="text" 
                  placeholder="Location" 
                  className="w-full h-full p-2 pl-3 focus:outline-none text-xl bg-transparent"
                />
              </div>
            </div>

            <div className="flex flex-row md:flex-col justify-center items-center">
              <textarea 
                name="" 
                id="" 
                className="w-[735px] h-[165px] bg-white focus:outline-none p-3 resize-none mt-7 text-xl" 
                placeholder="Description"
              ></textarea>
              <p className="text-xl ml-15 mr-15 mt-3">
                Want to add doc?{" "}
                <span 
                  className="text-secondary cursor-pointer" 
                  onClick={() => navigate("/upload")}
                >
                  Upload
                </span>
              </p>
              <button 
                className="p-3 mt-3 w-[248px] h-[51px] bg-secondary text-white text-xl rounded-xl hover:shadow-xl cursor-pointer"
                onClick={() => navigate('/filter')}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default FormScreen;