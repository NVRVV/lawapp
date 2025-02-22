// FeedCard.jsx
import React from 'react';
import { FaBriefcase, FaMapLocationDot, FaUserTie } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { VscGraph } from "react-icons/vsc";
import star from '../../assets/star.png';


const FeedCard = ({ name, category, rating, experience, location, fee, successRate }) => {
  return (
    <div className="bg-white p-4 rounded-lg mt-5 shadow-md mb-5">
        <div className="flex items-start mb-3">
         <FaUserTie className="w-10 h-10 mr-5" /> {/* Added margin-right for spacing */}
        <div className="flex flex-col"> {/* Wrap name and category in a flex column */}
            <h3 className="font-semibold">{name}</h3>
            <h3 className="text-gray-600">{category}</h3>
        </div>
        </div>
        <div className="flex items-center">
            <FaMapLocationDot className="w-5 h-5 mr-2" /> 
            <p className="text-gray-600">{location}</p>
        </div>
        <div className='flex  '>
        <GiMoneyStack className="w-6 h-6 mr-2"/>
        <p className=" ">Fee: ₹{fee} - ₹{fee}/case</p>
        </div>
      
      <div className='flex items-center gap-x-5'>
        <div className='flex bg-bg1 p-1'>
        <FaBriefcase className='w-6 h-6 mr-2'/>
        <p>{experience}</p>
        </div>
        <div className='flex bg-bg1 p-1'>
        <VscGraph className='w-6 h-6 mr-2'/>
        <p>Success Rate: {successRate}%</p>
        </div>
        <div className='flex bg-bg1 p-1'>
        <p className='flex'> {rating} <img className='w-5 h-5' src={star}/> </p>
        </div>
      </div>
      <button className="mt-2 text-green-500 hover:text-green-700">
      </button>
    </div>
  );
};

export default FeedCard