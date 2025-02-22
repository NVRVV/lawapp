import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isLawyerSelected, setIsLawyerSelected] = useState(false);
  const navigate = useNavigate();

  return (
    <section
      style={{
        backgroundImage: isLawyerSelected
          ? "url('/src/assets/lawyer_login.png')" // Lawyer BG
          : "url('/src/assets/client_login.png')", // Client BG
      }}
      className={`login-section h-screen bg-cover bg-center ${
        isLawyerSelected ? "lawyer-selected" : ""
      }`}
    >
      <div
        className={`flex flex-col md:flex-row transition-all duration-500 ${
          isLawyerSelected ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Left Section */}
        <div className="flex flex-10 text-white h-max left-section flex-col ml-10">
          <h1 className="text-5xl mt-5 font-bold cursor-pointer"
          onClick={() => navigate('/')}>SLMB</h1>
          <p className="text-xl font-medium mt-5">Your trusted legal partner</p>
        </div>

        {/* Right Section */}
        <div className="login flex flex-10  text-black bg-bg h-screen w-max items-center justify-center">
          <div className="flex-col ml-15 mr-15">
            <h1 className="text-4xl ml-25 mr-25 font-bold ">Create a Account</h1>
            <p className="text-xl ml-35 mr-35 mt-5">
              Already register{" "}
              <span 
              className="text-secondary cursor-pointer"
              onClick={() => navigate('/login') }
              >
                Login
              </span>
            </p>

            {/* Radio Buttons */}
            <div className="flex flex-row ml-25 mr-25 p-2 gap-x-5">
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
              <div className="flex flex-row gap-x-10">
                <div className="flex flex-col  ">
                <label 
                  htmlFor="First Name"
                  className={` transition-opacity duration-300 ${
                    isFocused ? "opacity-100" : "opacity-0"
                  }`}>
                    First Name
                </label>
                <input 
                  type="text" 
                  id="first"
                  placeholder="First Name"
                  className="login-input p-2 mt-2 pl-5 focus:outline-none"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  required
                 />
                </div>
                <div className="flex flex-col">
                <label 
                  htmlFor="Last Name"
                  className={` transition-opacity duration-300 ${
                    isFocused ? "opacity-100" : "opacity-0"
                  }`}>
                    Last Name
                </label>
                <input 
                  type="text" 
                  id="first"
                  placeholder="Last Name"
                  className="login-input p-2 mt-2 pl-5 focus:outline-none"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  required
                 />
                </div>
              </div>

              <div className="flex flex-col mt-4">
                <label
                  htmlFor="email"
                  className={` transition-opacity duration-300 ${
                    isFocused ? "opacity-100" : "opacity-0"
                  }`}
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
                  className={`text-ls mt-5 transition-opacity duration-300 ${
                    isFocused ? "opacity-100" : "opacity-0"
                  }`}
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
                  className="mr-2 cursor-pointer"
                  type="checkbox"
                  name="terms"
                  id="terms"
                  required
                />
                I agree to the
                <span className="text-secondary"> Terms & Conditions</span>
              </p>

              <button className="login-btn text-2xl p-2 mt-5 cursor-pointer"
              onClick={() => navigate('/lawyer-form')}>
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
