import React from "react";
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
                            {/* First Row: No files message */}
                            <p className="text-xl text-gray-600 mb-4">No files uploaded yet</p>

                            {/* Second Row: Buttons */}
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
};

export default ReviewScreen;
