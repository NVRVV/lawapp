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
          background: '#9ECA9E', // Orange gradient similar to the image
        }}
      >
        {/* Header */}
        <Header2 />

        {/* Main Content - Split into Welcome and Cases */}
        <div className="flex flex-col md:flex-row max-w-4xl mt-10 m-5 p-2 gap-6">


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
          background: '#9ECA9E' // Orange gradient similar to the image
        }}
      >
        {/* Header */}
        <Header2 />

        {/* Main Content - Split into Welcome and Cases */}
        <div className="flex max-w-7xl mt-20 m-5 p-2 gap-6">
          {/* Welcome Section */}

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