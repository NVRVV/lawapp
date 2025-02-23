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

const LawyerDash = () => {
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
            className="bg-white/70  w-xs backdrop-blur-md p-4 rounded-lg mt-10 ml-5 mr-5 shadow-lg glass-effect flex items-center justify-between"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-lg font-bold text-black">Menu</span>
            <span className="text-black">▼</span>
          </button>

          {/* Menu Dropdown (Hidden by default, shown on click) */}
          {isMenuOpen && (
            <div className="bg-white/70 w-xs backdrop-blur-md p-4 rounded-lg mt-2 ml-5 mr-5 shadow-lg glass-effect ]">
              <h2 className="text-lg font-bold mb-4 text-black">SLMB</h2>
              <nav className="space-y-2">
                <button 
                  className="w-full bg-secondary text-white p-2 rounded hover:bg-secondary"
                  onClick={() => navigate('/lawyer-dashboard')}
                >
                  Dashboard
                </button>
                <button 
                  className="w-full bg-secondary text-white p-2 rounded hover:bg-secondary"
                  onClick={() => navigate('/lawyer-dashboard/clients')}
                >
                  Clients
                </button>
                <button 
                  className="w-full bg-secondary text-white p-2 rounded hover:bg-secondary"
                  onClick={() => navigate('/lawyer-dashboard/settings')}
                >
                  Settings
                </button>
              </nav>
            </div>
          )}

          {/* Dashboard Content */}
          <div className="flex-1 p-4 mt-5">
            {/* Header Stats */}
            <div className='w-full flex-1 items-center'>
            <div className="flex flex-col max-w-xs gap-4 mb-6">
              <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect">
                <p className="text-base text-gray-900">Today New Appointments</p>
                <p className="text-xl font-bold">5</p>
              </div>
              <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect">
                <p className="text-base text-gray-900">Pending Cases</p>
                <p className="text-xl font-bold">5</p>
              </div>
              <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect">
                <p className="text-base text-gray-900">Closed Cases</p>
                <p className="text-xl font-bold">5</p>
              </div>
            </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect mb-6">
              <h3 className="text-lg font-semibold mb-2 text-black">Upcoming Appointments</h3>
              <table className="w-full text-left text-black my-2">
                <thead>
                  <tr className="border-b text-base">
                    <th className="py-2">Client Name</th>
                    <th className="py-2">Type</th>
                    <th className="py-2">Hearing</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b text-sm">
                    <td className="py-2">Bhanu</td>
                    <td className="py-2">Land dispute</td>
                    <td className="py-2">2:00 AM Feb-15 2025</td>
                    <td className="py-2">Ongoing</td>
                  </tr>
                  <tr className="border-b text-sm">
                    <td className="py-2">Arun Teja</td>
                    <td className="py-2">Divorce</td>
                    <td className="py-2">4:00 PM Feb-15 2025</td>
                    <td className="py-2">Ongoing</td>
                  </tr>
                  <tr className="text-sm">
                    <td className="py-2">Sandeep</td>
                    <td className="py-2">Criminal case</td>
                    <td className="py-2">5:00 PM Feb-15 2025</td>
                    <td className="py-2">Pending</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Previous Clients and Amount Paid Clients Side by Side (Stacked on Mobile) */}
            <div className="flex flex-col gap-4">
              {/* Previous Clients */}
              <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect">
                <h3 className="text-lg font-semibold mb-2 text-black">Previous Clients</h3>
                <table className="w-full text-left text-black my-2">
                  <thead>
                    <tr className="border-b text-base">
                      <th className="py-2">Client Name</th>
                      <th className="py-2">Case Type</th>
                      <th className="py-2">Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b text-sm">
                      <td className="py-2">Bhanu</td>
                      <td className="py-2">Land dispute</td>
                      <td className="py-2">Win</td>
                    </tr>
                    <tr className="border-b text-sm">
                      <td className="py-2">Arun Teja</td>
                      <td className="py-2">Divorce</td>
                      <td className="py-2">Win</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="py-2">Sandeep</td>
                      <td className="py-2">Criminal case</td>
                      <td className="py-2">Settled</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Amount Paid Clients */}
              <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect">
                <h3 className="text-lg font-semibold mb-2 text-black">Amount Paid Clients</h3>
                <table className="w-full text-left text-black my-2">
                  <thead>
                    <tr className="border-b text-base">
                      <th className="py-2">Name</th>
                      <th className="py-2">Time</th>
                      <th className="py-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b text-sm">
                      <td className="py-2">Bhanu</td>
                      <td className="py-2">4:30</td>
                      <td className="py-2">5000 Rs</td>
                    </tr>
                    <tr className="border-b text-sm">
                      <td className="py-2">P. Arun Joshi</td>
                      <td className="py-2">4:30</td>
                      <td className="py-2">5000 Rs</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="py-2">Arun Teja</td>
                      <td className="py-2">4:30</td>
                      <td className="py-2">6000 Rs</td>
                    </tr>
                  </tbody>
                </table>
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
            className="bg-white/70 backdrop-blur-md w-xl p-4 rounded-lg mt-10 ml-10 mr-5 shadow-lg glass-effect flex items-center justify-between"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-lg font-bold text-black">Menu</span>
            <span className="text-black">▼</span>
          </button>

          {/* Menu Dropdown (Hidden by default, shown on click) */}
          {isMenuOpen && (
            <div className="bg-white/70 backdrop-blur-md p-4 rounded-lg w-full ml-10 max-w-xl mt-2 mr-5 shadow-lg glass-effect">
              <h2 className="text-lg font-bold mb-4 text-black">SLMB</h2>
              <nav className="space-y-2">
                <button 
                  className="w-full bg-secondary text-white p-2 rounded hover:bg-secondary"
                  onClick={() => navigate('/lawyer-dashboard')}
                >
                  Dashboard
                </button>
                <button 
                  className="w-full bg-secondary text-white p-2 rounded hover:bg-secondary"
                  onClick={() => navigate('/lawyer-dashboard/clients')}
                >
                  Clients
                </button>
                <button 
                  className="w-full bg-secondary text-white p-2 rounded hover:bg-secondary"
                  onClick={() => navigate('/lawyer-dashboard/settings')}
                >
                  Settings
                </button>
              </nav>
            </div>
          )}

          {/* Dashboard Content */}
          <div className="flex-1 p-4 mt-5 ">
            {/* Header Stats */}
            <div className="flex flex-col md:flex-row justify-around mb-6 gap-4">
              <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect w-full md:w-auto">
                <p className="text-base text-gray-600">Today New Appointments</p>
                <p className="text-xl font-bold">5</p>
              </div>
              <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect w-full md:w-auto">
                <p className="text-base text-gray-600">Pending Cases</p>
                <p className="text-xl font-bold">5</p>
              </div>
              <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect w-full md:w-auto">
                <p className="text-base text-gray-600">Closed Cases</p>
                <p className="text-xl font-bold">5</p>
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect mb-6">
              <h3 className="text-lg font-semibold mb-4 text-black">Upcoming Appointments</h3>
              <table className="w-full text-left text-black my-4">
                <thead>
                  <tr className="border-b text-lg">
                    <th className="py-2">Client Name</th>
                    <th className="py-2">Case Type</th>
                    <th className="py-2">Next Hearing</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b text-base">
                    <td className="py-2">Bhanu</td>
                    <td className="py-2">Land dispute</td>
                    <td className="py-2">2:00 AM Feb-15 2025</td>
                    <td className="py-2">Ongoing</td>
                  </tr>
                  <tr className="border-b text-base">
                    <td className="py-2">Arun Teja</td>
                    <td className="py-2">Divorce</td>
                    <td className="py-2">4:00 PM Feb-15 2025</td>
                    <td className="py-2">Ongoing</td>
                  </tr>
                  <tr className="text-base">
                    <td className="py-2">Sandeep</td>
                    <td className="py-2">Criminal case</td>
                    <td className="py-2">5:00 PM Feb-15 2025</td>
                    <td className="py-2">Pending</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Previous Clients and Amount Paid Clients Side by Side (Stacked on Tablet) */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Previous Clients */}
              <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect w-full md:flex-1">
                <h3 className="text-lg font-semibold mb-4 text-black">Previous Clients</h3>
                <table className="w-full text-left text-black my-4">
                  <thead>
                    <tr className="border-b text-lg">
                      <th className="py-2">Client Name</th>
                      <th className="py-2">Case Type</th>
                      <th className="py-2">Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b text-base">
                      <td className="py-2">Bhanu</td>
                      <td className="py-2">Land dispute</td>
                      <td className="py-2">Win</td>
                    </tr>
                    <tr className="border-b text-base">
                      <td className="py-2">Arun Teja</td>
                      <td className="py-2">Divorce</td>
                      <td className="py-2">Win</td>
                    </tr>
                    <tr className="text-base">
                      <td className="py-2">Sandeep</td>
                      <td className="py-2">Criminal case</td>
                      <td className="py-2">Settled</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Amount Paid Clients */}
              <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect w-full md:flex-1">
                <h3 className="text-lg font-semibold mb-4 text-black">Amount Paid Clients</h3>
                <table className="w-full text-left text-black my-4">
                  <thead>
                    <tr className="border-b text-lg">
                      <th className="py-2">Name</th>
                      <th className="py-2">Time</th>
                      <th className="py-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b text-base">
                      <td className="py-2">Bhanu</td>
                      <td className="py-2">4:30</td>
                      <td className="py-2">5000 Rs</td>
                    </tr>
                    <tr className="border-b text-base">
                      <td className="py-2">P. Arun Joshi</td>
                      <td className="py-2">4:30</td>
                      <td className="py-2">5000 Rs</td>
                    </tr>
                    <tr className="text-base">
                      <td className="py-2">Arun Teja</td>
                      <td className="py-2">4:30</td>
                      <td className="py-2">6000 Rs</td>
                    </tr>
                  </tbody>
                </table>
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
          className="min-h-screen flex" 
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
                  className="mb-5 w-full bg-secondary cursor-pointer text-white p-2 rounded hover:bg-secondary"
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

          {/* Right Column - Main Dashboard Content */}
          <div className="flex-1 p-6 w-full mt-10 max-w-4xl">
            {/* Header Stats */}
            <div className="flex justify-around mb-6">
              <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect">
                <p className="text-lg text-gray-600">Today New Appointments</p>
                <p className="text-2xl font-bold">5</p>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect">
                <p className="text-lg text-gray-600">Pending Cases</p>
                <p className="text-2xl font-bold">5</p>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect">
                <p className="text-lg text-gray-600">Closed Cases</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-black">Upcoming Appointments</h3>
              <table className="w-full text-left text-black my-4">
                <thead>
                  <tr className="border-b text-2xl">
                    <th className="py-2">Client Name</th>
                    <th className="py-2">Case Type</th>
                    <th className="py-2">Next Hearing</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b text-lg">
                    <td className="py-2">Bhanu</td>
                    <td className="py-2">Land dispute</td>
                    <td className="py-2">2:00 AM Feb-15 2025</td>
                    <td className="py-2">Ongoing</td>
                  </tr>
                  <tr className="border-b text-lg">
                    <td className="py-2">Arun Teja</td>
                    <td className="py-2">Divorce</td>
                    <td className="py-2">4:00 PM Feb-15 2025</td>
                    <td className="py-2">Ongoing</td>
                  </tr>
                  <tr className="text-lg">
                    <td className="py-2">Sandeep</td>
                    <td className="py-2">Criminal case</td>
                    <td className="py-2">5:00 PM Feb-15 2025</td>
                    <td className="py-2">Pending</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Previous Clients and Amount Paid Clients Side by Side */}
            <div className="flex gap-6">
              {/* Previous Clients */}
              <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-black">Previous Clients</h3>
                <table className="w-full text-left text-black my-4">
                  <thead>
                    <tr className="border-b text-2xl">
                      <th className="py-2">Client Name</th>
                      <th className="py-2">Case Type</th>
                      <th className="py-2">Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b text-lg">
                      <td className="py-2">Bhanu</td>
                      <td className="py-2">Land dispute</td>
                      <td className="py-2">Win</td>
                    </tr>
                    <tr className="border-b text-lg">
                      <td className="py-2">Arun Teja</td>
                      <td className="py-2">Divorce</td>
                      <td className="py-2">Win</td>
                    </tr>
                    <tr className="text-lg">
                      <td className="py-2">Sandeep</td>
                      <td className="py-2">Criminal case</td>
                      <td className="py-2">Settled</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Amount Paid Clients */}
              <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-black">Amount Paid Clients</h3>
                <table className="w-full text-left text-black my-4">
                  <thead>
                    <tr className="border-b text-2xl">
                      <th className="py-2">Name</th>
                      <th className="py-2">Time</th>
                      <th className="py-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b text-lg">
                      <td className="py-2">Bhanu</td>
                      <td className="py-2">4:30</td>
                      <td className="py-2">5000 Rs</td>
                    </tr>
                    <tr className="border-b text-lg">
                      <td className="py-2">P. Arun Joshi</td>
                      <td className="py-2">4:30</td>
                      <td className="py-2">5000 Rs</td>
                    </tr>
                    <tr className="text-lg">
                      <td className="py-2">Arun Teja</td>
                      <td className="py-2">4:30</td>
                      <td className="py-2">6000 Rs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default LawyerDash