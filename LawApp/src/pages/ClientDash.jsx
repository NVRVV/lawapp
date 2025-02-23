import React, { useState, useEffect } from 'react';
import Header2 from '../components/Header2';
import { useNavigate } from 'react-router-dom'; // Added for navigation
import { TbMenu } from "react-icons/tb";

// Add this CSS for the glass effect in your Tailwind config or a separate CSS file
const styles = `
  .glass-effect {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const ClientDash = () => {
  const navigate = useNavigate();

  // State to track the current screen size category
  const [screenSize, setScreenSize] = useState('desktop'); // Default to desktop

  // Define breakpoints (in pixels)
  const BREAKPOINTS = {
    mobile: 768,  // Up to 768px for mobile
    tablet: 1024, // Up to 1024px for tablet
    desktop: 1024 // Above 1024px for desktop
  };

  // State for menu visibility on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div 
        className="min-h-screen w-full flex-col items-center bg-cover bg-center" 
        style={{ 
          background: '#9ECA9E', // Orange gradient similar to the image
        }}
      >
        {/* Header */}
        <Header2 />

        {/* Menu Button (Welcome Section on Mobile) */}
        <div className='w-full '>
        <button 
          className="bg-white/30 backdrop-blur-md p-4 rounded-lg mt-20 ml-5 mr-5 shadow-lg glass-effect  flex items-center justify-between"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-xl font-semibold text-black">Menu</span>
          <span className="text-black"><TbMenu className='ml-3 w-6 h-6'/></span>
        </button>
        </div>

        {/* Menu Dropdown (Hidden by default, shown on click) */}
        {isMenuOpen && (
          <div className="bg-white/30 backdrop-blur-md p-4 rounded-lg mt-2 ml-5 mr-5 shadow-lg glass-effect ">
            <h2 className="text-xl font-semibold text-black mb-2">Welcome, User Name</h2>
            <p className="text-black mt-2 mb-2">ram@gmail.com <span className="text-red-500 cursor-pointer">Change</span></p>
            <button 
              className="bg-yellow-600 text-white p-2 rounded-lg w-full hover:bg-yellow-700"
              onClick={() => navigate('/logout')} // Assuming a logout route or function
            >
              Logout
            </button>
          </div>
        )}

        {/* Cases Table */}
        <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 mt-5 ml-5 mr-5 shadow-lg glass-effect">
          <table className="w-full text-left text-black my-2">
            <thead>
              <tr className="border-b text-lg">
                <th className="py-2">Case Name</th>
                <th className="py-2">Category</th>
                <th className="py-2">File</th>
                <th className="py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b text-sm">
                <td className="py-2">Divorce</td>
                <td className="py-2">Civil</td>
                <td className="py-2">details.pdf</td>
                <td className="py-2">Description</td>
              </tr>
              <tr className="border-b text-sm">
                <td className="py-2">Deforestation</td>
                <td className="py-2">Environmental</td>
                <td className="py-2">details.pdf</td>
                <td className="py-2">Description</td>
              </tr>
              <tr className="text-sm">
                <td className="py-2">Deforestation</td>
                <td className="py-2">Criminal</td>
                <td className="py-2">details.pdf</td>
                <td className="py-2">Description</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (screenSize === 'tablet') {
    return (
      <div 
        className="min-h-screen flex-col items-center bg-cover bg-center" 
        style={{ 
          background: 'linear-gradient(135deg, #ff8a5c, #ff4d4d)', // Orange gradient similar to the image
        }}
      >
        {/* Header */}
        <Header2 />

        {/* Main Content - Split into Welcome and Cases */}
        <div className="flex flex-col md:flex-row max-w-4xl mt-10 m-5 p-2 gap-6">
          {/* Welcome Section */}
          <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg ml-5 mr-5 shadow-lg glass-effect w-full md:w-80">
            <h2 className="text-2xl font-semibold text-black mb-4">Welcome, User Name</h2>
            <p className="text-black mt-4 mb-4">ram@gmail.com <span className="text-red-500 cursor-pointer">Change</span></p>
            <button 
              className="bg-yellow-600 text-white p-2 rounded-lg w-full hover:bg-yellow-700"
              onClick={() => navigate('/logout')} // Assuming a logout route or function
            >
              Logout
            </button>
          </div>

          {/* Cases Table */}
          <div className="bg-white/30 backdrop-blur-md rounded-lg p-6 mt-5 ml-5 mr-5 w-full md:w-full shadow-lg glass-effect">
            <table className="w-full text-left text-black my-4">
              <thead>
                <tr className="border-b text-xl">
                  <th className="py-2">Case Name</th>
                  <th className="py-2">Category</th>
                  <th className="py-2">File</th>
                  <th className="py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b text-base">
                  <td className="py-2">Divorce</td>
                  <td className="py-2">Civil</td>
                  <td className="py-2">details.pdf</td>
                  <td className="py-2">Description</td>
                </tr>
                <tr className="border-b text-base">
                  <td className="py-2">Deforestation</td>
                  <td className="py-2">Environmental</td>
                  <td className="py-2">details.pdf</td>
                  <td className="py-2">Description</td>
                </tr>
                <tr className="text-base">
                  <td className="py-2">Deforestation</td>
                  <td className="py-2">Criminal</td>
                  <td className="py-2">details.pdf</td>
                  <td className="py-2">Description</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else { // desktop
    return (
      <div 
        className="min-h-screen flex-col items-center bg-cover bg-center" 
        style={{ 
          background: 'linear-gradient(135deg, #ff8a5c, #ff4d4d)', // Orange gradient similar to the image
        }}
      >
        {/* Header */}
        <Header2 />

        {/* Main Content - Split into Welcome and Cases */}
        <div className="flex max-w-7xl mt-20 m-5 p-2 gap-6">
          {/* Welcome Section */}
          <div className="bg-white/30 backdrop-blur-md pl-5 pr-5 pt-10 pb-10 rounded-lg ml-10 mr-10 shadow-lg glass-effect w-80">
            <h2 className="text-3xl font-semibold text-black mb-4">Welcome, User Name</h2>
            <p className="text-black mt-10 ml-2 mb-5">ram@gmail.com <span className="text-red-500 cursor-pointer">Change</span></p>
            <button 
              className="bg-yellow-600 text-white p-2 rounded-lg w-full hover:bg-yellow-700"
              onClick={() => navigate('/logout')} // Assuming a logout route or function
            >
              Logout
            </button>
          </div>

          {/* Cases Table */}
          <div className="bg-white/30 backdrop-blur-md rounded-lg p-10 w-full md:w-auto shadow-lg glass-effect flex-3">
            <table className="w-full text-left text-black my-4">
              <thead>
                <tr className="border-b text-2xl">
                  <th className="py-2">Case Name</th>
                  <th className="py-2">Category</th>
                  <th className="py-2">File</th>
                  <th className="py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b text-lg">
                  <td className="py-2">Divorce</td>
                  <td className="py-2">Civil</td>
                  <td className="py-2">details.pdf</td>
                  <td className="py-2">Description</td>
                </tr>
                <tr className="border-b text-lg">
                  <td className="py-2">Deforestation</td>
                  <td className="py-2">Environmental</td>
                  <td className="py-2">details.pdf</td>
                  <td className="py-2">Description</td>
                </tr>
                <tr className="text-lg">
                  <td className="py-2">Deforestation</td>
                  <td className="py-2">Criminal</td>
                  <td className="py-2">details.pdf</td>
                  <td className="py-2">Description</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};

export default ClientDash;