import React, { useState, useEffect } from 'react';
import '../index.css';
import hiw1 from '../assets/hiw-1.png';
import hiw2 from '../assets/hiw-2.png';
import hiw3 from '../assets/hiw-3.png';
import Header1 from '../components/Header1';
import AR from '../assets/Arrow-right.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
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
      <section className="bg-bg2 flex flex-col">
        <div className="hero w-full h-90 bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/hero.png')" }}>
          <Header1 />
          <h2 className="text-2xl text-white text-center mt-4 mb-10">Welcome!</h2>
          <button 
            className="text-white bg-secondary button1 text-2xl w-56  flex items-center justify-center gap-2 px-4 py-3 mt-6 mx-auto rounded-lg shadow-md hover:text-secondary" // Adjusted for width, height, and hover effect
            onClick={() => navigate('/filter')}
          >
            Get Started <img src={AR} alt="Arrow" className="w-7 h-7 inline-block" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center mt-5 mb-10">
          <h1 className="text-3xl text-center">How it works</h1>
        </div>

        {/* How It Works Cards - Stacked vertically */}
        <div className="flex flex-col items-center gap-5 mx-5 pb-10">
          <div className="flex flex-col bg-bg w-full h-auto items-center justify-center p-2 rounded-lg shadow-lg">
            <img src={hiw1} alt="Client Submission" className="w-20 h-20" />
            <h1 className="text-xl pt-5 pb-5 text-center">Client Case Submission</h1>
            <p className="px-3 pb-5 text-center text-sm">
              Clients register on the platform and provide essential details about their legal case.
              The system collects case-related information such as case type, legal issue, location, and urgency.
            </p>
          </div>

          <div className="flex flex-col bg-bg w-full h-auto items-center justify-center p-2 rounded-lg shadow-lg">
            <img src={hiw2} alt="Case Review" className="w-20 h-20 mt-5" />
            <h1 className="text-xl pt-5 pb-5 text-center">Lawyer Matching and Recommendation</h1>
            <p className="px-3 pb-5 text-center text-sm">
              The platform employs an advanced matching algorithm to recommend lawyers based on their legal expertise, availability, and proximity for in-person consultations.
              Clients receive a list of recommended lawyers.
            </p>
          </div>

          <div className="flex flex-col bg-bg w-full h-auto items-center justify-center p-2 rounded-lg shadow-lg">
            <img src={hiw3} alt="Legal Consultation" className="w-20 h-20 mt-5" />
            <h1 className="text-xl pt-5 pb-5 text-center">Real-Time Communication & Updates</h1>
            <p className="px-3 pb-5 text-center text-sm">
              Both clients and lawyers receive notifications for status updates, reminders, and confirmations.
              The platform can integrate messaging or video conferencing for virtual consultations.
            </p>
          </div>
        </div>

        <div className="flex flex-col bg-bg p-5 items-center justify-center">
          <div className="flex flex-col items-center w-full">
            <h1 className="text-3xl text-center underline mb-5">Schedule a free case evaluation</h1>
            <p className="text-center mb-5 text-sm">
              The platform leverages an intelligent matching algorithm to seamlessly connect clients with the most suitable lawyers based on expertise, availability, and location, ensuring an efficient and streamlined legal consultation process.
            </p>
            <button 
              className="text-lg bg-black text-white font-bold py-2 px-4 rounded w-60 cursor-pointer hover:shadow-xl mb-5"
              onClick={() => navigate('/popup')}
            >
              Lets talk - Send a message
            </button>
          </div>
        </div>
      </section>
    );
  } else if (screenSize === 'tablet') {
    return (
      <section className="bg-bg2 flex flex-col">
        <div className="hero w-full h-120 bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/hero.png')" }}>
          <Header1 />
          <h2 className="text-3xl text-white text-center mt-6">Welcome!</h2>
          <button 
            className="text-white bg-secondary button1 text-2xl w-56 h-12 flex items-center justify-center gap-2 px-4 py-3 mt-8 mx-auto rounded-lg shadow-md hover:text-secondary" // Adjusted for width, height, and hover effect
            onClick={() => navigate('/filter')}
          >
            Get Started <img src={AR} alt="Arrow" className="w-6 h-6 inline-block" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 mb-12">
          <h1 className="text-4xl text-center">How it works</h1>
        </div>

        {/* How It Works Cards - Stacked vertically or side-by-side on tablet */}
        <div className="flex flex-row md:flex-row items-center justify-center gap-10 mx-10 pb-15">
          <div className="flex flex-col bg-bg w-full h-auto items-center justify-center p-3 rounded-lg shadow-lg">
            <img src={hiw1} alt="Client Submission" className="w-24 h-24 mt-7 mb-7 " />
            <h1 className="text-2xl pt-6 pb-6 text-center">Client Case Submission</h1>
            <p className="px-4 pb-5 text-center text-base">
              Clients register on the platform and provide essential details about their legal case.
              The system collects case-related information such as case type, legal issue, location, and urgency.
            </p>
          </div>

          <div className="flex flex-col bg-bg w-full  h-auto items-center justify-center p-3 rounded-lg shadow-lg">
            <img src={hiw2} alt="Case Review" className="w-24 h-24 mt-6 " />
            <h1 className="text-2xl pt-6 pb-6 text-center">Lawyer Matching and Recommendation</h1>
            <p className="px-4 pb-5 text-center text-base">
              The platform employs an advanced matching algorithm to recommend lawyers based on their legal expertise, availability, and proximity for in-person consultations.
              list of lawyers.
            </p>
          </div>

          <div className="flex flex-col bg-bg w-full  h-auto items-center justify-center p-3 rounded-lg shadow-lg">
            <img src={hiw3} alt="Legal Consultation" className="w-24 h-24 mt-6 " />
            <h1 className="text-2xl pt-6 pb-6 text-center">Real-Time Communication & Updates</h1>
            <p className="px-4 pb-5 text-center text-base">
              Both clients and lawyers receive notifications for status updates, reminders, and confirmations.
              The platform can integrate messaging or video conferencing for virtual consultations.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-bg p-8 items-center justify-center">
          <div className="flex flex-col md:flex-row items-center w-full">
            <div className="flex ml-10 mr-10 w-full md:w-1/2">
              <h1 className="text-4xl text-center md:text-left underline mb-5 md:mb-0">Schedule a free case evaluation</h1>
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <p className="text-center md:text-left mb-5 text-base">
                The platform leverages an intelligent matching algorithm to seamlessly connect clients with the most suitable lawyers based on expertise, availability, and location, ensuring an efficient and streamlined legal consultation process.
              </p>
              <button 
                className="text-xl bg-black text-white font-bold py-2 px-4 rounded w-60 md:w-80 cursor-pointer hover:shadow-xl mx-auto md:mx-0"
                onClick={() => navigate('/popup')}
              >
                Lets talk - Send a message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } else { // desktop
    return (
      <section className="bg-bg2 flex flex-col">
        <div className="hero w-full h-160 bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/hero.png')" }}>
          <Header1 />
          <h2 className="text-6xl text-white text-center mt-10">Welcome!</h2>
          <p className='text-white text-xs mx-40 my-3'>Smart Lawyer Management System efficiently matches clients with the most suitable legal experts for their specific cases. It streamlines the process by providing detailed lawyer profiles and case-relevant recommendations with precision and professionalism.</p>
          <button 
            className="text-white button1 bg-secondary text-l  flex items-center justify-center gap-2 p-2 px-4 mt-12 mx-auto rounded-lg shadow-md" // Adjusted for width, height, and hover effect
            onClick={() => navigate('/filter')}
          >
            Get Started <img src={AR} alt="Arrow" className="w-6 h-6 inline-block" />
          </button>
        </div>

        <div className="flex flex-row md:flex-col items-center justify-center mt-10 mb-15">
          <h1 className="text-6xl text-center">How it works</h1>
        </div>

        {/* How It Works Cards - Side by side */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-30 ml-20 mr-20 pb-20">
          <div className="flex flex-col flex-1 bg-bg w-full h-120 items-center justify-center p-2 rounded-lg shadow-lg">
            <img src={hiw1} alt="Client Submission" />
            <h1 className="text-3xl pt-5 pb-5 text-center">Client Case Submission</h1>
            <p className="px-5 pb-5 text-center">
              Clients register on the platform and provide essential details about their legal case.
              The system collects case-related information such as case type, legal issue, location, and urgency.
            </p>
          </div>

          <div className="flex flex-col flex-1 bg-bg w-full h-120 items-center justify-center p-2 rounded-lg shadow-lg">
            <img src={hiw2} alt="Case Review" className="pt-8" />
            <h1 className="text-3xl pt-8 pb-5 text-center">Lawyer Matching and Recommendation</h1>
            <p className="px-5 pb-5 text-center">
              The platform employs an advanced matching algorithm to recommend lawyers based on their legal expertise, availability, and proximity for in-person consultations.
              Clients receive a list of recommended lawyers.
            </p>
          </div>

          <div className="flex flex-col flex-1 bg-bg w-full h-120 items-center justify-center p-2 rounded-lg shadow-lg">
            <img src={hiw3} alt="Legal Consultation" className="pt-7" />
            <h1 className="text-3xl pt-5 pb-5 p-2 text-center">Real-Time Communication & Updates</h1>
            <p className="px-5 pb-5 text-center">
              Both clients and lawyers receive notifications for status updates, reminders, and confirmations.
              The platform can integrate messaging or video conferencing for virtual consultations.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-bg p-10 pt-15 pb-15 items-center justify-center">
          <div className="flex ml-15 mr-15 w-250">
            <h1 className="text-5xl text-center md:text-left underline">Schedule a free case evaluation</h1>
          </div>
          <div className="flex flex-row md:flex-col">
            <p className="pb-7 pt-3 text-center md:text-left">
              The platform leverages an intelligent matching algorithm to seamlessly connect clients with the most suitable lawyers based on expertise, availability, and location, ensuring an efficient and streamlined legal consultation process.
            </p>
            <button 
              className="text-2xl bg-black text-white font-bold py-2 px-4 rounded w-80 cursor-pointer hover:shadow-xl"
              onClick={() => navigate('/popup')}
            >
              Lets talk - Send a message
            </button>
          </div>
        </div>
      </section>
    );
  }
};

export default Home;