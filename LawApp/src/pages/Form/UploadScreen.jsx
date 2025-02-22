// UploadScreen.jsx
import React, { useRef, useState } from "react";
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

    return (
        <section className="justify-center item-center">
            <Header1 />
            <div
                className="flex flex-col items-center justify-center h-173 w-full bg-cover bg-center pt-20"
                style={{ backgroundImage: `url(${form1})` }}
            >
                <div 
                    className={`screens1 flex-row md:flex-col ml-100 mr-100 rounded-lg items-center justify-center ${
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
                    <div className="flex items-center w-full mt-4">
                        <hr className="flex-grow border-t border-gray-400 mx-4" />
                        <span className="text-gray-600 text-2xl">or</span>
                        <hr className="flex-grow border-t border-gray-400 mx-4" />
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
                        className="mt-5 w-[221px] h-[41px] bg-secondary text-white text-xl rounded-SM hover:shadow-xl cursor-pointer"
                    >
                        Select your PDF
                    </button>
                </div>
            </div>
        </section>
    );
};

export default UploadScreen;