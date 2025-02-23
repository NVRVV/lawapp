import React from 'react';
import { FaBriefcase, FaMapLocationDot, FaUserTie } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { VscGraph } from "react-icons/vsc";
import star from '../../assets/star.png';

const FeedModal = ({ feed, onClose }) => {
  if (!feed) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl flex font-bold mb-4 text-gray-800"><FaUserTie className='mr-3'/>{feed.name}</h2>
        <div className="space-y-4">
          <p ><strong>Category:</strong> {feed.category}</p>
          <p className='flex'><FaMapLocationDot className='w-6 h-6 mr-2'/><strong>Location:</strong> {feed.location}</p>
          <p className='flex'><GiMoneyStack className='w-6 h-6 mr-2'/><strong>Fee:</strong> ₹{feed.fee}</p>
          <p className='flex'><FaBriefcase className='w-5 h-5 mr-2'/><strong>Experience:</strong> {feed.experience}</p>
          <p className='flex'><VscGraph className='w-6 h-6 mr-2'/><strong>Success Rate:</strong> {feed.successRate}%</p>
          <p className='flex'><strong>Rating:</strong> {feed.rating}/5 <img src={star}  className='w-5 h-5 mr-2'/></p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 px-4 cursor-pointer py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FeedModal;