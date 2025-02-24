import React, { useState, useEffect, useRef } from "react";
import "../../index.css";
import form1 from '../../assets/form1.png'; // Ensure this path is correct
import Header1 from "../../components/Header1";

const ReviewScreen = ({ uploadedFiles = [], setUploadedFiles = () => {} }) => {
  const fileInputRef = useRef(null);
  const [screenSize, setScreenSize] = useState('desktop');

  const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024,
    desktop: 1024,
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

  const handleRemoveFile = (indexToRemove) => {
    setUploadedFiles(prevFiles => 
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files)
      .filter(file => file.type === "application/pdf") // Only accept PDF files
      .map(file => ({
        name: file.name,
        size: `${(file.size / 1024).toFixed(2)} KB`,
        date: new Date().toLocaleTimeString(),
      }));
    if (newFiles.length < e.target.files.length) {
      alert("Only PDF files are accepted. Non-PDF files were ignored.");
    }
    setUploadedFiles(prevFiles => [...prevFiles, ...newFiles]);
    e.target.value = null; // Reset input
  };

  const handleSubmit = () => {
    console.log("Submitted files:", uploadedFiles);
    // Add your submit logic here
  };

  const fileInput = (
    <input
      type="file"
      ref={fileInputRef}
      onChange={handleFileChange}
      multiple
      accept="application/pdf" // Restrict to PDF files in file picker
      className="hidden"
    />
  );

  if (screenSize === 'mobile') {
    return (
      <section className="w-full bg-cover bg-center " style={{ backgroundImage: `url(${form1})` }}>
      
        {fileInput}
        <div className="flex flex-col items-center justify-center h-220 w-full">
          <div className="bg-bg/70 flex flex-col w-auto px-7 items-center rounded-xl py-10">
            {uploadedFiles.length > 0 ? (
              <div className="items-center justify-center text-center">
                <h2 className="text-xl text-secondary mb-4">Uploaded Files</h2>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto w-full">
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
                    onClick={handleUploadClick}
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
                    onClick={handleUploadClick}
                    className="w-full h-auto bg-secondary text-white text-2xl rounded-md hover:shadow-xl cursor-pointer px-5 py-2"
                  >
                    Upload
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={uploadedFiles.length === 0}
                    className={`w-full h-auto text-white text-2xl rounded-md hover:shadow-xl cursor-pointer px-5 py-2 ${
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
      <section className=" bg-cover bg-center " style={{ backgroundImage: `url(${form1})` }}>
        
        {fileInput}
        <div className="flex flex-col items-center justify-center h-220 pt-10">
          <div className="bg-bg/70 flex flex-col w-auto md:flex-col items-center rounded-xl p-10">
            {uploadedFiles.length > 0 ? (
              <div className="items-center justify-center text-center">
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
                    onClick={handleUploadClick}
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
                    onClick={handleUploadClick}
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
      <section style={{ backgroundImage: `url(${form1})` }} className=' h-screen w-full bg-cover bg-center'>
        
        {fileInput}
        <div className="flex flex-col items-center justify-center pt-20">
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
                    onClick={handleUploadClick}
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
                    onClick={handleUploadClick}
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