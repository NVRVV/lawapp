import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../index.css';

const Register = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isLawyerSelected, setIsLawyerSelected] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [screenSize, setScreenSize] = useState('desktop');
  const BREAKPOINTS = { mobile: 768, tablet: 1024, desktop: 1024 };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= BREAKPOINTS.mobile) setScreenSize('mobile');
      else if (width <= BREAKPOINTS.tablet) setScreenSize('tablet');
      else setScreenSize('desktop');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

// In Register.jsx, handleRegister
const handleRegister = async (e) => {
  e.preventDefault();
  try {
    await axios.post('http://localhost:5000/api/auth/register', {
      first_name: firstName.slice(0, 50),
      last_name: lastName.slice(0, 50),
      email: email.slice(0, 100),
      password,
      role: isLawyerSelected ? 'lawyer' : 'client',
    });
    // Navigate based on role after successful registration
    
      navigate('/login');

  } catch (error) {
    console.error('Registration failed', error);
    setError(error.response?.data?.details || 'Registration failed. Please try again.');
  }
};
  
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
              <h1 className="text-2xl font-bold text-center mt-4 mb-4">Create a Account</h1>
              <p className="text-xl text-center mb-4">
                Already register?{" "}
                <span
                  className="text-secondary cursor-pointer underline"
                  onClick={() => navigate('/login')}
                >
                  Login
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
              <form className="flex flex-col w-full max-w-xs" onSubmit={handleRegister}>
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="first"
                    className={`text-xl ml-2 transition-opacity duration-300 ${isFocused ? "opacity-100" : "opacity-0"}`}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first"
                    placeholder="First Name"
                    className="login-input text-lg p-2 pl-3 w-full focus:outline-none rounded-md"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="last"
                    className={`text-xl ml-2 transition-opacity duration-300 ${isFocused ? "opacity-100" : "opacity-0"}`}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last"
                    placeholder="Last Name"
                    className="login-input text-xl p-2 pl-3 w-full focus:outline-none rounded-md"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col mb-4">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="password"
                    className={`text-xl ml-2 transition-opacity duration-300 ${isFocused ? "opacity-100" : "opacity-0"}`}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <p className="text-lg mb-4">
                  <input
                    className="mr-2 w-5 h-5 cursor-pointer"
                    type="checkbox"
                    name="terms"
                    id="terms"
                    required
                  />
                  I agree to the
                  <span className="text-secondary"> Terms & Conditions</span>
                </p>

                {error && <p className="text-red-500">{error}</p>}

                <button
                  className="login-btn text-lg p-2 mb-5 w-full cursor-pointer"
                  type="submit"
                >
                  Create Account
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
              <h1 className="text-4xl font-bold text-center mb-6">Create a Account</h1>
              <p className="text-2xl text-center mb-6">
                Already register?{" "}
                <span
                  className="text-secondary cursor-pointer underline"
                  onClick={() => navigate('/login')}
                >
                  Login
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
              <form className="flex flex-col w-full" onSubmit={handleRegister}>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex flex-col w-full md:w-1/2">
                    <label
                      htmlFor="first"
                      className={`text-xl ml-2 transition-opacity duration-300 ${isFocused ? "opacity-100" : "opacity-0"}`}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first"
                      placeholder="First Name"
                      className="login-input text-xl p-2 pl-4 w-full focus:outline-none rounded-md"
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex flex-col w-full md:w-1/2">
                    <label
                      htmlFor="last"
                      className={`text-xl ml-2 transition-opacity duration-300 ${isFocused ? "opacity-100" : "opacity-0"}`}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last"
                      placeholder="Last Name"
                      className="login-input text-xl p-2 pl-4 w-full focus:outline-none rounded-md"
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>

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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <p className="text-xl mb-6">
                  <input
                    className="mr-2 w-5 h-5 cursor-pointer"
                    type="checkbox"
                    name="terms"
                    id="terms"
                    required
                  />
                  I agree to the
                  <span className="text-secondary"> Terms & Conditions</span>
                </p>

                {error && <p className="text-red-500">{error}</p>}

                <button
                  className="login-btn  text-xl p-2 w-full  cursor-pointer"
                  type="submit"
                >
                  Create Account
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
          <div className="login flex flex-10 text-black bg-bg h-screen w-max items-center justify-center">
            <div className="flex-col ml-15 mr-15">
              <h1 className="text-3xl font-bold">Create a Account</h1>
              <p className="text-l  mt-5">
                Already register?{" "}
                <span
                  className="text-secondary cursor-pointer underline"
                  onClick={() => navigate('/login')}
                >
                  Login
                </span>
              </p>

              {/* Radio Buttons */}
              <div className="flex flex-row mx-40 p-2 gap-x-5">
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

              {/* Register Form */}
              <form className="flex flex-col" onSubmit={handleRegister}>
                <div className="flex flex-row mx-10 gap-x-10">
                  <div className="flex flex-col">
                    <label
                      htmlFor="first"
                      className={`transition-opacity text-m mt-3 duration-300 ${isFocused ? "opacity-100" : "opacity-0"}`}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first"
                      placeholder="First Name"
                      className="login-input text-xs p-2 mt-2 pl-5 focus:outline-none"
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="last"
                      className={`transition-opacity text-m mt-3  duration-300 ${isFocused ? "opacity-100" : "opacity-0"}`}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last"
                      placeholder="Last Name"
                      className="login-input text-xs p-2 mt-2 pl-5 focus:outline-none"
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-row mx-10 gap-x-10">
                <div className="flex flex-col mt-4">
                  <label
                    htmlFor="email"
                    className={`transition-opacity text-m mt-3 duration-300 ${isFocused ? "opacity-100" : "opacity-0"}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                    className="login-input p-2 text-xs w-auto mt-2 pl-5 focus:outline-none"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label
                    htmlFor="password"
                    className={`text-m mt-3 transition-opacity duration-300 ${isFocused ? "opacity-100" : "opacity-0"}`}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your Password"
                    className="login-input text-xs w-auto p-2 mt-2 pl-5 focus:outline-none"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                </div>

                <p className="text-sm mt-2">
                  <input
                    className="mr-2 cursor-pointer "
                    type="checkbox"
                    name="terms"
                    id="terms"
                    required
                  />
                  I agree to the
                  <span className="text-secondary"> Terms & Conditions</span>
                </p>

                {error && <p className="text-red-500">{error}</p>}

                <button
                  className="login-btn text-l w-50 mx-35 mt-3  p-2 cursor-pointer"
                  type="submit"
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Register;
