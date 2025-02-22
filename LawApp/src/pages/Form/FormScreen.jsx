import React from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import Header1 from "../../components/Header1";
import form1 from '../../assets/form1.png'
import { CiLocationOn } from "react-icons/ci";

const FormScreen = () => {
  const navigate = useNavigate();
    return(
        <section>
            <Header1/>
            <div
                  className="flex flex-col items-center justify-center h-173 w-full bg-cover bg-center pt-20"
                  style={{ backgroundImage: `url(${form1})` }}
                >
                  <div className="screens  flex-row md:flex-col ml-100 mr-100 rounded-xl">
                    <h1 className="text-6xl text-black ">Case Details</h1>
                    <div className="flex flex-col md:flex-row gap-20 justify-center mt-7">
                        
                      <input type="text" placeholder="Enter the Case Name" className="login-input text-xl p-2 mt-2 pl-5 w-[331px] h-[54px] focus:outline-none"/>

                      <select name="" id="" className=" text-xl login-input p-2 mt-2 pl-5 w-[331px] h-[54px] focus:outline-none bg-white border border-gray-300 rounded-md">
                        <option value="" disabled selected hidden className="text-2xl ">Category</option>
                        <option value="criminal">Criminal</option>
                        <option value="civil">Civil</option>
                        <option value="family">Family</option>
                        <option value="corporate">Corporate</option>
                      </select>
                        
                    </div>

                    <div className="flex flex-col md:flex-row gap-20 justify-center mt-7">
                        
                      <input type="tel" placeholder="Phone Number" required maxLength={10} pattern="\d{10}" inputMode='numeric' className="login-input w-[331px] h-[54px] p-2 mt-2 pl-5 focus:outline-none text-xl"/>
                      
                      <div className="flex items-center w-[331px] h-[54px] border border-gray-300 rounded-md px-3 bg-white">
                      {/* Location Icon */}
                      <CiLocationOn className="text-gray-500 text-2xl" />

                      {/* Input Field */}
                      <input 
                        type="text" 
                        placeholder="Location" 
                        className="w-full h-full p-2 pl-3 focus:outline-none text-xl bg-transparent"
                      />
                    </div>                
                          
                    </div>
                    
                    <div className="flex flex-row md:flex-col justify-center items-center ">
                    <textarea name="" id="" className=" w-[735px] h-[165px] bg-white focus:outline-none p-3 resize-none mt-7 text-xl" placeholder="Description" ></textarea>

                    <p className="text-xl ml-15 mr-15 mt-3">Want to add doc?{" "}
                    <span 
                      className="text-secondary cursor-pointer" 
                      onClick={() => navigate("/upload")}>
                      Upload
                    </span>
                    </p>
                    
                    <button className="p-3  mt-3 w-[248px] h-[51px] bg-secondary text-white text-xl rounded-xl hover:shadow-xl cursor-pointer">SUBMIT</button>
                    </div>
                    
                  </div>
                </div>
        </section>
    );
}
export default FormScreen;