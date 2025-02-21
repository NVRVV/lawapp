import React from "react";
import "../index.css";
import pop1 from "../assets/pop1.png";

const Popup = () => {
  return (
    <section
      className="flex flex-col items-center justify-center h-173 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${pop1})` }}
    >
      <div className="popup-overlay ml-10 mr-150 flex-row md:flex-col rounded-xl">
        <h1 className="text-6xl text-white ml-5 mr-50">Free Case Evaluation</h1>
        <div className="flex flex-col md:flex-row gap-20">
            <div className="flex flex-col">
            <h2 className="text-white text-4xl text-left p-10 pt-10 pb-1">Full Name</h2>
            <input type="text" placeholder="Full Name" className="login-input p-2 mt-2 pl-5 ml-10 focus:outline-none"/>
            </div>

          {/* Phone Number Section */}
            <div className="flex flex-col">
            <h2 className="text-white text-4xl text-left  pt-10 pb-1 ">Phone Number</h2>
            <input type="tel" placeholder="Phone Number" required maxLength={10} pattern="\d{10}" inputMode='numeric' className="login-input p-2 mt-2 pl-5 focus:outline-none"/>
            </div>
        </div>
        <div className="flex flex-row md:flex-col">
        <h2 className="text-white text-4xl text-left p-10 pt-10 pb-1">Describe Your Case</h2>
            <textarea name="" id="" className="ml-10 w-132 h-30  bg-white focus:outline-none p-3 resize-none" placeholder="Describe here" ></textarea>
        </div>
        <div className="flex">
            <button className="p-3 px-8 py-2 ml-10 mt-5 bg-black text-white text-2xl rounded-2xl hover:shadow-xl ">SUBMIT</button>
        </div>
      </div>
    </section>
  );
};

export default Popup;
