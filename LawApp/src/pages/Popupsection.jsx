import React, { useState, useEffect } from "react";
import "../index.css";
import pop1 from "../assets/pop1.png";

const Popupsection = () => {
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
      <section
        className="flex flex-col h-screen items-center justify-center w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${pop1})` }}
      >
        <div className="popup-overlay flex flex-col items-center rounded-xl p-4 bg-black bg-opacity-50">
          <h1 className="text-2xl text-white text-center mb-4">Free Case Evaluation</h1>
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <div className="flex flex-col">
              <h2 className="text-white text-lg text-left p-2">Full Name</h2>
              <input 
                type="text" 
                placeholder="Full Name" 
                className="login-input p-2 pl-3 w-full focus:outline-none rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <h2 className="text-white text-lg text-left p-2">Phone Number</h2>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                required 
                maxLength={10} 
                pattern="\d{10}" 
                inputMode="numeric" 
                className="login-input p-2 pl-3 w-full focus:outline-none rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <h2 className="text-white text-lg text-left p-2">Describe Your Case</h2>
              <textarea 
                name="" 
                id="" 
                className="w-full h-24 bg-white focus:outline-none p-3 rounded-md resize-none"
                placeholder="Describe here"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button className="p-2 px-6 py-1 mt-4 bg-black text-white text-lg rounded-2xl hover:shadow-xl">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (screenSize === 'tablet') {
    return (
      <section
        className="flex flex-col h-screen items-center justify-center w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${pop1})` }}
      >
        <div className="popup-overlay flex flex-col items-center rounded-xl p-6 bg-black bg-opacity-50">
          <h1 className="text-3xl text-white text-center mb-6">Free Case Evaluation</h1>
          <div className="flex flex-col md:flex-row gap-6 w-full max-w-md">
            <div className="flex flex-col w-full md:w-1/2">
              <h2 className="text-white text-xl text-left p-3">Full Name</h2>
              <input 
                type="text" 
                placeholder="Full Name" 
                className="login-input p-3 pl-4 w-full focus:outline-none rounded-md"
              />
            </div>

            <div className="flex flex-col w-full md:w-1/2">
              <h2 className="text-white text-xl text-left p-3">Phone Number</h2>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                required 
                maxLength={10} 
                pattern="\d{10}" 
                inputMode="numeric" 
                className="login-input p-3 pl-4 w-full focus:outline-none rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col w-full max-w-md mt-6">
            <h2 className="text-white text-xl text-left p-3">Describe Your Case</h2>
            <textarea 
              name="" 
              id="" 
              className="w-full h-32 bg-white focus:outline-none p-3 rounded-md resize-none"
              placeholder="Describe here"
            ></textarea>
          </div>

          <div className="flex justify-center mt-6">
            <button className="p-3 px-8 py-2 mt-4 bg-black text-white text-xl rounded-2xl hover:shadow-xl">
              SUBMIT
            </button>
          </div>
        </div>
      </section>
    );
  } else { // desktop
    return (
      <section
      className="flex flex-col h-screen items-center justify-center  w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${pop1})` }}
    >
      <div className="popup-overlay  flex-row md:flex-col rounded-xl">
        <h1 className="text-6xl text-white ml-5 mr-50">Free Case Evaluation</h1>
        <div className="flex flex-col md:flex-row gap-20">
            <div className="flex flex-col">
            <h2 className="text-white text-4xl text-left p-10 pt-10 pb-1">Full Name</h2>
            <input type="text" placeholder="Full Name" className="login-input p-2 mt-2 pl-5 ml-10 focus:outline-none"/>
            </div>

          {/* Phone Number Section */}
            <div className="flex flex-col">
            <h2 className="text-white text-4xl text-left  pt-10 pb-1 ">Phone Number</h2>
            <input type="tel" placeholder="Phone Number" required maxLength={10} pattern="\d{10}" inputMode='numeric' className="login-input p-2 mt-2 pl-5 focus:outline-none"/>
            </div>
        </div>
        <div className="flex flex-row md:flex-col">
        <h2 className="text-white text-4xl text-left p-10 pt-10 pb-1">Describe Your Case</h2>
            <textarea name="" id="" className="ml-10 w-132 h-30  bg-white focus:outline-none p-3 resize-none" placeholder="Describe here" ></textarea>
        </div>
        <div className="flex">
            <button className="p-3 px-8 py-2 ml-10 mt-5 bg-black text-white text-2xl rounded-2xl hover:shadow-xl ">SUBMIT</button>
        </div>
      </div>
    </section>
    );
  }
};

export default Popupsection;