import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import form1 from '../../assets/form1.png';
import Header1 from "../../components/Header1";

const ReviewScreen = ({ uploadedFiles = [], setUploadedFiles = () => {} }) => {
  const navigate = useNavigate();

  // Function to remove a file by index
  const handleRemoveFile = (indexToRemove) => {
    setUploadedFiles(prevFiles => 
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleUploadMore = () => {
    navigate("/upload");
  };

  // Placeholder function for Submit button
  const handleSubmit = () => {
    console.log("Submitted files:", uploadedFiles);
    // Add your submit logic here
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
        <Header1 />
        <div
          className="flex flex-col items-center justify-center h-220 w-full "
        >
          <div className="bg-bg/70 flex flex-col w-auto px-7 items-center rounded-xl py-10">
            {uploadedFiles.length > 0 ? (
              <div className="items-center justify-center text-center">
                <h2 className="text-xl text-secondary mb-4">Uploaded Files</h2>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto w-full ">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-2 text-xs font-semibold text-gray-700">File Name</th>
                        <th className="p-2 text-xs font-semibold text-gray-700">File Type</th>
                        <th className="p-2 text-xs font-semibold text-gray-700">Size</th>
                        <th className="p-2 text-xs font-semibold text-gray-700">Time</th>
                        <th className="p-2 text-xs font-semibold text-gray-700">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {uploadedFiles.map((file, index) => (
                        <tr key={index} className="border-b last:border-b-0 hover:bg-gray-50">
                          <td className="p-2 text-sm">{file.name}</td>
                          <td className="p-2 text-xs text-gray-600">PDF</td>
                          <td className="p-2 text-xs text-gray-600">{file.size}</td>
                          <td className="p-2 text-xs text-gray-600">{file.date}</td>
                          <td className="p-2">
                            <button
                              onClick={() => handleRemoveFile(index)}
                              className="text-red-500 hover:text-red-700 text-xs font-semibold"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 flex flex-col gap-4 justify-center">
                  <button
                    onClick={handleUploadMore}
                    className="w-full h-[41px] bg-secondary text-white text-lg rounded-md hover:shadow-xl cursor-pointer"
                  >
                    Upload More
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="w-full h-[41px] bg-secondary text-white text-lg rounded-md hover:shadow-xl cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-lg text-gray-600 mb-4">No files uploaded yet</p>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={handleUploadMore}
                    className="w-full h-[41px] bg-secondary text-white text-lg rounded-md hover:shadow-xl cursor-pointer"
                  >
                    Upload
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={uploadedFiles.length === 0}
                    className={`w-full h-[41px] text-white text-lg rounded-md hover:shadow-xl cursor-pointer ${
                      uploadedFiles.length === 0 ? 'bg-gray-400' : 'bg-secondary'
                    }`}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  } else if (screenSize === 'tablet') {
    return (
      <section className="bg-cover bg-center" style={{ backgroundImage: `url(${form1})` }}>
        <Header1 />
        <div
          className="flex flex-col items-center justify-center h-220 pt-10"
        >
          <div className="bg-bg/70 flex flex-col w-auto md:flex-col items-center rounded-xl p-10">
            {uploadedFiles.length > 0 ? (
              <div className="items-center  justify-center text-center">
                <h2 className="text-xl text-secondary mb-6">Uploaded Files</h2>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto w-full max-w-md">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-3 text-sm font-semibold text-gray-700">File Name</th>
                        <th className="p-3 text-sm font-semibold text-gray-700">File Type</th>
                        <th className="p-3 text-sm font-semibold text-gray-700">Size</th>
                        <th className="p-3 text-sm font-semibold text-gray-700">Time</th>
                        <th className="p-3 text-sm font-semibold text-gray-700">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {uploadedFiles.map((file, index) => (
                        <tr key={index} className="border-b last:border-b-0 hover:bg-gray-50">
                          <td className="p-3 text-lg">{file.name}</td>
                          <td className="p-3 text-sm text-gray-600">PDF</td>
                          <td className="p-3 text-sm text-gray-600">{file.size}</td>
                          <td className="p-3 text-sm text-gray-600">{file.date}</td>
                          <td className="p-3">
                            <button
                              onClick={() => handleRemoveFile(index)}
                              className="text-red-500 hover:text-red-700 text-sm font-semibold"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
                  <button
                    onClick={handleUploadMore}
                    className="w-full md:w-[221px] h-[41px] bg-secondary text-white text-xl rounded-md hover:shadow-xl cursor-pointer"
                  >
                    Upload More
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="w-full md:w-[221px] h-[41px] bg-secondary text-white text-xl rounded-md hover:shadow-xl cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-xl text-gray-600 mb-6">No files uploaded yet</p>
                <div className="flex flex-col md:flex-row gap-4">
                  <button
                    onClick={handleUploadMore}
                    className="w-full md:w-[221px] h-[41px] bg-secondary text-white text-xl rounded-md hover:shadow-xl cursor-pointer"
                  >
                    Upload
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={uploadedFiles.length === 0}
                    className={`w-full md:w-[221px] h-[41px] text-white text-xl rounded-md hover:shadow-xl cursor-pointer ${
                      uploadedFiles.length === 0 ? 'bg-gray-400' : 'bg-secondary'
                    }`}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  } else { // desktop
    return (
      <section style={{ backgroundImage: `url(${form1})` }}>
        <Header1 />
        <div
          className="flex flex-col items-center justify-center h-173 w-full bg-cover bg-center pt-20"
        >
          <div className="screens2 flex-row md:flex-col ml-100 mr-100 rounded-lg items-center justify-center">
            {uploadedFiles.length > 0 ? (
              <div className="justify-center items-center">
                <h2 className="text-2xl text-secondary mb-4 text-center">Uploaded Files</h2>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto w-250 ml-8">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-3 text-sm font-semibold text-gray-700">File Name</th>
                        <th className="p-3 text-sm font-semibold text-gray-700">File Type</th>
                        <th className="p-3 text-sm font-semibold text-gray-700">Size</th>
                        <th className="p-3 text-sm font-semibold text-gray-700">Time</th>
                        <th className="p-3 text-sm font-semibold text-gray-700">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {uploadedFiles.map((file, index) => (
                        <tr key={index} className="border-b last:border-b-0 hover:bg-gray-50">
                          <td className="p-3 text-lg">{file.name}</td>
                          <td className="p-3 text-sm text-gray-600">PDF</td>
                          <td className="p-3 text-sm text-gray-600">{file.size}</td>
                          <td className="p-3 text-sm text-gray-600">{file.date}</td>
                          <td className="p-3">
                            <button
                              onClick={() => handleRemoveFile(index)}
                              className="text-red-500 hover:text-red-700 text-sm font-semibold"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 flex flex-col md:flex-row gap-4 justify-center">
                  <button
                    onClick={handleUploadMore}
                    className="w-[221px] h-[41px] bg-secondary text-white text-xl rounded-sm hover:shadow-xl cursor-pointer"
                  >
                    Upload More
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="w-[221px] h-[41px] bg-secondary text-white text-xl rounded-sm hover:shadow-xl cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-xl text-gray-600 mb-4">No files uploaded yet</p>
                <div className="flex flex-col md:flex-row gap-4">
                  <button
                    onClick={handleUploadMore}
                    className="w-[221px] h-[41px] bg-secondary text-white text-xl rounded-sm hover:shadow-xl cursor-pointer"
                  >
                    Upload
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={uploadedFiles.length === 0}
                    className={`w-[221px] h-[41px] text-white text-xl rounded-sm hover:shadow-xl cursor-pointer ${
                      uploadedFiles.length === 0 ? 'bg-gray-400' : 'bg-secondary'
                    }`}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
};

export default ReviewScreen;