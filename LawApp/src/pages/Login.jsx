import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Login = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isLawyerSelected, setIsLawyerSelected] = useState(false);
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
      <section
        style={{
          backgroundImage: isLawyerSelected
            ? "url('/src/assets/lawyer_login.png')" // Lawyer BG
            : "url('/src/assets/client_login.png')", // Client BG
        }}
        className={`login-section h-screen bg-cover bg-center ${isLawyerSelected ? "lawyer-selected" : ""}`}
      >
        <div className="flex flex-col items-center">
          {/* Left Section */}
          <div className="flex flex-10 text-white h-max  flex-col items-center mt-5">
            <h1 
              className="text-2xl font-bold cursor-pointer"
              onClick={() => navigate('/')}
            >
              SLMB
            </h1>
            <p className="text-sm font-medium mt-2 text-center">Your trusted legal partner</p>
          </div>

          {/* Right Section */}
          <div className=" flex flex-8 text-black bg-bg h-auto w-100 pt-10 pb-10 mt-20 items-center justify-center p-4">
            <div className="flex flex-col w-full items-center">
              <h1 className="text-2xl font-bold text-center mt-4 mb-4">Login</h1>
              <p className="text-xl text-center mb-4">
                Want to join us{" "}
                <span 
                  className="text-secondary cursor-pointer"
                  onClick={() => navigate('/register')}
                >
                  Create Account
                </span>
              </p>

              {/* Radio Buttons */}
              <div className="flex flex-col items-center gap-2 mb-4">
                <label className="radio-box  flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    id="client"
                    onChange={() => setIsLawyerSelected(false)}
                    checked={!isLawyerSelected}
                  />
                  <span className="cursor-pointer ml-2 text-xl">Client</span>
                </label>

                <label className="radio-box  flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    id="lawyer"
                    onChange={() => setIsLawyerSelected(true)}
                    checked={isLawyerSelected}
                  />
                  <span className="cursor-pointer ml-2 text-xl">Lawyer</span>
                </label>
              </div>

              {/* Register Form */}
              <form className="flex flex-col w-full max-w-xs">
                <div className="flex flex-col mt-5 mb-5">
                  <label
                    htmlFor="email"
                    className={`text-xl ml-2 transition-opacity duration-300 ${isFocused ? "opacity-100" : "opacity-0"}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                    className="login-input text-lg p-2 pl-3 w-full focus:outline-none rounded-md"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required
                  />
                </div>

                <div className="flex flex-col mt-5 mb-5">
                  <label
                    htmlFor="password"
                    className={`text-xl  ml-2 transition-opacity duration-300 ${isFocused ? "opacity-100" : "opacity-0"}`}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your Password"
                    className="login-input text-lg p-2 pl-3 w-full focus:outline-none rounded-md"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required
                  />
                </div>

                <button 
                  className="login-btn text-lg p-2 mt-10 mb-5 w-full cursor-pointer"
                  onClick={() => navigate('/user-profile')}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (screenSize === 'tablet') {
    return (
      <section
        style={{
          backgroundImage: isLawyerSelected
            ? "url('/src/assets/lawyer_login.png')" // Lawyer BG
            : "url('/src/assets/client_login.png')", // Client BG
        }}
        className={` h-350 bg-cover bg-center ${isLawyerSelected ? "lawyer-selected" : ""}`}
      >
        <div className="w-full">
          {/* Left Section */}
          <div className=" login justify-center pt-10 pb-10 text-black h-max items-center  ">
            <h1 
              className="text-6xl font-bold cursor-pointer"
              onClick={() => navigate('/')}
            >
              SLMB
            </h1>
            <p className="text-3xl font-medium mt-2 text-center md:text-left">Your trusted legal partner</p>
          </div>

          {/* Right Section */}
          <div className=" login-t flex  flex-col text-black  h-auto w-full  pt-20 pb-20">
            <div className="flex flex-col bg-bg p-5 items-center mt-10 mb-10 w-full max-w-md">
              <h1 className="text-4xl font-bold text-center mb-6">Login</h1>
              <p className="text-2xl text-center mb-6">
                Want to join us{" "}
                <span 
                  className="text-secondary cursor-pointer"
                  onClick={() => navigate('/register')}
                >
                  Create Account
                </span>
              </p>

              {/* Radio Buttons */}
              <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                <label className="text-2xl flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    id="client"
                    onChange={() => setIsLawyerSelected(false)}
                    checked={!isLawyerSelected}
                  />
                  <span className="cursor-pointer ml-2">Client</span>
                </label>

                <label className="text-2xl flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    id="lawyer"
                    onChange={() => setIsLawyerSelected(true)}
                    checked={isLawyerSelected}
                  />
                  <span className="cursor-pointer ml-2">Lawyer</span>
                </label>
              </div>

              {/* Register Form */}
              <form className="flex flex-col w-full">

                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="email"
                    className={`text-2xl ml-2 transition-opacity duration-300 ${isFocused ? "opacity-100" : "opacity-0"}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                    className="login-input text-xl p-2 pl-4 w-full focus:outline-none rounded-md"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required
                  />
                </div>

                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="password"
                    className={`text-2xl ml-2 transition-opacity duration-300 ${isFocused ? "opacity-100" : "opacity-0"}`}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your Password"
                    className="login-input text-xl p-2 pl-4 w-full focus:outline-none rounded-md"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required
                  />
                </div>
                <button 
                  className="login-btn  text-xl mt-10 mb-5 p-2 w-full  cursor-pointer"
                  onClick={() => navigate('/lawyer-form')}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  } else { // desktop
    return (
      <section
        style={{
          backgroundImage: isLawyerSelected
            ? "url('/src/assets/lawyer_login.png')" // Lawyer BG
            : "url('/src/assets/client_login.png')", // Client BG
        }}
        className={`login-section h-screen bg-cover bg-center ${isLawyerSelected ? "lawyer-selected" : ""}`}
      >
        <div
          className={`flex flex-col md:flex-row transition-all duration-500 ${isLawyerSelected ? "md:flex-row-reverse" : ""}`}
        >
          {/* Left Section */}
          <div className="flex flex-10 text-white h-max login flex-col ml-10">
            <h1 
              className="text-5xl mt-5 font-bold cursor-pointer"
              onClick={() => navigate('/')}
            >
              SLMB
            </h1>
            <p className="text-xl font-medium mt-5">Your trusted legal partner</p>
          </div>

          {/* Right Section */}
          <div className="login flex flex-8 text-black bg-bg h-screen w-max items-center justify-center">
            <div className="flex-col ml-15 mr-15">
              <h1 className="text-5xl ml-35 mr-35 font-bold">Login</h1>
              <p className="text-xl ml-15 mr-15 mt-5">
                Want to Sign Up?{" "}
                <span 
                  className="text-secondary cursor-pointer" 
                  onClick={() => navigate("/register")}
                >
                  Create Account
                </span>
              </p>

              {/* Radio Buttons */}
              <div className="flex flex-row ml-40 mr-40 p-2 gap-x-5">
                <label className="radio-box">
                  <input
                    type="radio"
                    name="userType"
                    id="client"
                    onChange={() => setIsLawyerSelected(false)}
                    checked={!isLawyerSelected}
                  />
                  <span className="cursor-pointer">Client</span>
                </label>

                <label className="radio-box">
                  <input
                    type="radio"
                    name="userType"
                    id="lawyer"
                    onChange={() => setIsLawyerSelected(true)}
                    checked={isLawyerSelected}
                  />
                  <span className="cursor-pointer">Lawyer</span>
                </label>
              </div>

              {/* Login Form */}
              <form className="flex flex-col">
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className={`text-xl transition-opacity duration-300 ${isFocused ? "opacity-100" : "opacity-0"}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                    className="login-input p-2 mt-2 pl-5 focus:outline-none"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className={`text-xl mt-5 transition-opacity duration-300 ${isFocused ? "opacity-100" : "opacity-0"}`}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your Password"
                    className="login-input p-2 mt-2 pl-5 focus:outline-none"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required
                  />
                </div>

                <p className="text-sm mt-5">
                  <input
                    className="mr-2 mt-5 mb-5 cursor-pointer"
                    type="checkbox"
                    name="terms"
                    id="terms"
                    required
                  />
                  I agree to the
                  <span className="text-secondary"> Terms & Conditions</span>
                </p>

                <button 
                  className="login-btn text-2xl p-2 mt-5 cursor-pointer"
                  onClick={() => navigate('/user-profile')}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Login;