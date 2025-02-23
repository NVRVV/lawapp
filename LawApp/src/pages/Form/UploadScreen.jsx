import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import Header1 from "../../components/Header1";
import form1 from '../../assets/form1.png';
import form2 from '../../assets/form2.png';

const UploadScreen = ({ uploadedFiles, setUploadedFiles }) => {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    processFile(file);
  };

  const processFile = (file) => {
    if (file && file.type === "application/pdf") {
      setUploadedFiles(prevFiles => [...prevFiles, {
        name: file.name,
        size: (file.size / 1024).toFixed(2) + ' KB',
        date: new Date().toLocaleDateString()
      }]);
      // Redirect to review page after successful upload
      navigate("/review");
    } else if (file) {
      alert("Please upload a PDF file only");
    }
    setIsDragging(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    processFile(file);
  };

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
          className="flex flex-col items-center justify-center h-220 w-full "
        >
          <div className="bg-bg/70 flex flex-col w-full h-100 items-center rounded-xl py-3 px-3">
            <img src={form2} alt="upload" className="w-50 h-auto mb-4" />
            <h1 className="text-secondary text-lg cursor-pointer mb-2 text-center">
              {isDragging ? "Drop your PDF here" : "Drop your PDF"}
            </h1>
            <div className="flex items-center w-auto mt-2">
              <span className="text-gray-600 text-lg">or</span>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              accept=".pdf,application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              onClick={handleButtonClick}
              className="mt-3 w-full h-[41px] bg-secondary text-white text-lg rounded-md hover:shadow-xl cursor-pointer"
            >
              Select your PDF
            </button>
          </div>
        </div>
      </section>
    );
  } else if (screenSize === 'tablet') {
    return (
      <section className="bg-cover bg-center" style={{ backgroundImage: `url(${form1})` }}>
        <div
          className="flex flex-col items-center justify-center w-full h-220 pt-10"
        >
          <div className="bg-bg/70 flex flex-col md:flex-col w-2xl items-center rounded-xl p-6">
            <img src={form2} alt="upload" className="w-70 h-auto mb-6" />
            <h1 className="text-secondary text-xl cursor-pointer mb-4 text-center">
              {isDragging ? "Drop your PDF here" : "Drop your PDF"}
            </h1>
            <div className="flex items-center w-auto mt-4">
              <span className="text-gray-600 text-xl">or</span>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              accept=".pdf,application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              onClick={handleButtonClick}
              className="mt-5 w-full md:w-[221px] h-[41px] bg-secondary text-white text-xl rounded-md hover:shadow-xl cursor-pointer"
            >
              Select your PDF
            </button>
          </div>
        </div>
      </section>
    );
  } else { // desktop
    return (
      <section style={{ backgroundImage: `url(${form1})` }}>
        <div
          className="flex flex-col items-center justify-center max-h-screen w-full bg-cover bg-center pt-20"
        >
          <div 
            className={`screens1 flex-row md:flex-col ml-100 mr-100 mb-33    rounded-lg items-center justify-center ${
              isDragging ? 'bg-gray-200' : ''
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <img src={form2} alt="upload" className="mr-43 ml-43" />
            <h1 className="text-secondary text-2xl cursor-pointer mb-2">
              {isDragging ? "Drop your PDF here" : "Drop your PDF"}
            </h1>
            <input
              type="file"
              ref={fileInputRef}
              accept=".pdf,application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              onClick={handleButtonClick}
              className="mt-5 w-[221px] h-[41px] bg-secondary text-white text-xl rounded-SM hover:shadow-xl cursor-pointer"
            >
              Select your PDF
            </button>
          </div>
        </div>
      </section>
    );
  }
};

export default UploadScreen;