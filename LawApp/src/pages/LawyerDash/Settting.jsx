import React, { useState, useEffect } from 'react';
import Header2 from '../../components/Header2';
import { useNavigate } from 'react-router-dom';

// Add this CSS for the glass effect in your Tailwind config or a separate CSS file
const styles = `
  .glass-effect {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const Settings = () => {
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
      <section className='bg-bg2'>
        <Header2 />
        <div 
          className="min-h-screen flex-col items-center bg-cover bg-center" 
        >
          {/* Menu Button (Navigation on Mobile) */}
          <button 
            className="bg-white/80 backdrop-blur-md p-4 w-xs rounded-lg mt-10 ml-5 mr-5 shadow-lg glass-effect flex items-center justify-between"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-lg font-bold text-black">Menu</span>
            <span className="text-black">▼</span>
          </button>

          {/* Menu Dropdown (Hidden by default, shown on click) */}
          {isMenuOpen && (
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-lg mt-2 ml-5 mr-5 shadow-lg glass-effect w-full max-w-xs">
              <h2 className="text-lg font-bold mb-4 text-black">SLMB</h2>
              <nav className="space-y-2">
                <button 
                  className="w-full bg-secondary cursor-pointer text-white p-2 rounded hover:bg-secondary"
                  onClick={() => navigate('/lawyer-dashboard')}
                >
                  Dashboard
                </button>
                <button 
                  className="w-full bg-secondary cursor-pointer text-white p-2 rounded hover:bg-secondary"
                  onClick={() => navigate('/lawyer-dashboard/clients')}
                >
                  Clients
                </button>
                <button 
                  className="w-full bg-secondary cursor-pointer text-white p-2 rounded hover:bg-secondary"
                  onClick={() => navigate('/lawyer-dashboard/settings')}
                >
                  Settings
                </button>
              </nav>
            </div>
          )}

          {/* Settings Content */}
          <div className="flex-1 items-center p-4 mt-5">
            <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 pl-2 shadow-lg glass-effect mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-black">Settings</h3>
              <h2 className="text-xl  font-semibold text-black mb-2">Welcome!</h2>
              <h2 className="text-xl text-black mb-2">User Name</h2>
              <h2 className="mt-4 text-sm text-black">Change Email</h2>
              <div className="bg-bg flex p-2 rounded-lg mb-4">
                <h2 className="text-sm pl-2">ram@gmail.com</h2>
                <h2 className="text-red-500 pl-20 cursor-pointer">Change</h2>
              </div>
              <h2 className="mt-4 text-sm text-black">Change Password</h2>
              <div className="bg-bg flex p-2 rounded-lg">
                <h2 className="text-sm pl-2">ram@gmail.com</h2>
                <h2 className="text-red-500 pl-20 cursor-pointer">Change</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (screenSize === 'tablet') {
    return (
      <section className='bg-bg2'>
        <Header2 />
        <div 
          className="min-h-screen flex-col items-center bg-cover bg-center" 
        >
          {/* Menu Button (Navigation on Mobile) */}
          <button 
            className="bg-white/70 backdrop-blur-md p-4 rounded-lg mt-10 ml-10 mr-5 shadow-lg glass-effect flex items-center justify-between"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-lg font-bold text-black">Menu</span>
            <span className="text-black">▼</span>
          </button>

          {/* Menu Dropdown (Hidden by default, shown on click) */}
          {isMenuOpen && (
            <div className="bg-white/70 backdrop-blur-md p-4 rounded-lg w-full max-w-xl mt-2 ml-10 mr-5 shadow-lg glass-effect">
              <h2 className="text-lg font-bold mb-4 text-black">SLMB</h2>
              <nav className="space-y-2">
                <button 
                  className="w-full bg-secondary cursor-pointer text-white p-2 rounded hover:bg-secondary"
                  onClick={() => navigate('/lawyer-dashboard')}
                >
                  Dashboard
                </button>
                <button 
                  className="w-full bg-secondary cursor-pointer text-white p-2 rounded hover:bg-secondary"
                  onClick={() => navigate('/lawyer-dashboard/clients')}
                >
                  Clients
                </button>
                <button 
                  className="w-full bg-secondary cursor-pointer text-white p-2 rounded hover:bg-secondary"
                  onClick={() => navigate('/lawyer-dashboard/settings')}
                >
                  Settings
                </button>
              </nav>
            </div>
          )}

          {/* Settings Content */}
          <div className="flex-1 p-4 mt-5 mr-5">
            <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 pl-5 ml-5 shadow-lg glass-effect mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-black">Settings</h3>
              <h2 className="text-xl font-semibold text-black mb-4">Welcome!</h2>
              <h2 className="text-xl text-black mb-4">User Name</h2>
              <h2 className="mt-6 text-base text-black">Change Email</h2>
              <div className="bg-bg flex p-3 rounded-lg mb-6">
                <h2 className="text-base pl-2">ram@gmail.com</h2>
                <h2 className="text-red-500 pl-32 cursor-pointer">Change</h2>
              </div>
              <h2 className="mt-6 text-base text-black">Change Password</h2>
              <div className="bg-bg flex p-3 rounded-lg">
                <h2 className="text-base pl-2">ram@gmail.com</h2>
                <h2 className="text-red-500 pl-32 cursor-pointer">Change</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else { // desktop
    return (
      <section className='bg-bg2'>
        <Header2 />
        <div 
          className="max-h-screen flex" 
        >
          {/* Left Column - SLMBS and Navigation */}
          <div className="w-80 bg-white/80 text-black ml-15 h-80 mt-10 px-4 py-10 rounded-lg shadow-lg glass-effect">
              <h2 className="text-2xl font-bold ml-2 mb-10 ">SLMB</h2>
              <nav className="space-y-2">
                <button 
                  className="mb-5 w-full bg-secondary cursor-pointer text-white p-2 rounded hover:bg-secondary"
                  onClick={() => navigate('/lawyer-dashboard')}
                >
                  Dashboard
                </button>
                <button 
                  className="mb-5 w-full bg-secondary text-white p-2 cursor-pointer rounded hover:bg-secondary"
                  onClick={() => navigate('/lawyer-dashboard/clients')}
                >
                  Clients
                </button>
                <button 
                  className="w-full bg-secondary text-white p-2 rounded cursor-pointer hover:bg-secondary"
                  onClick={() => navigate('/lawyer-dashboard/settings')}
                >
                  Settings
                </button>
              </nav>
            </div>

          {/* Right Column - Main Dashboard Content */}
          <div className="flex-1 p-6 w-full mt-4 max-w-4xl">
            <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 pl-10 ml-10 shadow-lg glass-effect mb-6">
              <h3 className="text-4xl font-semibold mb-2 text-black">Settings</h3>
              <h2 className="text-3xl font-semibold text-black mt-4 mb-4">Welcome!</h2>
              <h2 className="text-2xl text-black mb-4">User Name</h2>
              <h2 className="mt-7 text-lg text-black">Change Email</h2>
              <div className="bg-bg flex  p-4 mr-5 rounded-lg mb-6">
                <h2 className="text-base  pl-2">ram@gmail.com</h2>
                <h2 className="text-red-500 ml-10 cursor-pointer">Change</h2>
              </div>
              <h2 className="mt-7 text-lg text-black">Change Password</h2>
              <div className="bg-bg flex flex-1 p-4 mr-5 rounded-lg">
                <h2 className="text-base items-start pl-2">*******</h2>
                <h2 className="text-red-500 ml-10 cursor-pointer">Change</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Settings;