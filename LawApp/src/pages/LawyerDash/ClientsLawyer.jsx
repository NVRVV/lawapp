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

const ClientsLawyer = () => {
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
      <>
        <section className='bg-bg2'>
          <Header2 />
          <div 
            className="min-h-screen flex-col items-center bg-cover bg-center" 
          >
            {/* Menu Button (Navigation on Mobile) */}
            <button 
              className="bg-white/70 backdrop-blur-md p-4 rounded-lg mt-10 ml-5 mr-5 shadow-lg glass-effect flex items-center justify-between"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="text-lg font-bold text-black">Menu</span>
              <span className="text-black">▼</span>
            </button>

            {/* Menu Dropdown (Hidden by default, shown on click) */}
            {isMenuOpen && (
              <div className="bg-white/70 backdrop-blur-md p-4 rounded-lg mt-2 ml-5 mr-5 shadow-lg glass-effect">
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

            {/* Appointments Table */}
            <div className="flex-1 p-4  mt-5 ">
              <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect mb-6">
                <h3 className="text-lg font-semibold mb-2 text-black">Appointments</h3>
                <table className="w-full text-left text-black my-2">
                  <thead>
                    <tr className="border-b text-base">
                      <th className="py-2">Client Name</th>
                      <th className="py-2">Type</th>
                      <th className="py-2">Hearing</th>
                      <th className="py-2">Status</th>
                      <th className="py-2">Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b text-sm">
                      <td className="py-2">Bhanu</td>
                      <td className="py-2">Land dispute</td>
                      <td className="py-2">2:00 AM 15/02/25</td>
                      <td className="py-2">Ongoing</td>
                      <td className="py-2">---</td>
                    </tr>
                    <tr className="border-b text-sm">
                      <td className="py-2">Arun Teja</td>
                      <td className="py-2">Divorce</td>
                      <td className="py-2">4:00 PM 23/02/25</td>
                      <td className="py-2">Ongoing</td>
                      <td className="py-2">---</td>
                    </tr>
                    <tr className="border-b text-sm">
                      <td className="py-2">Sandeep</td>
                      <td className="py-2">Criminal case</td>
                      <td className="py-2">5:00 PM 17/02/25</td>
                      <td className="py-2">Pending</td>
                      <td className="py-2">---</td>
                    </tr>
                    <tr className="border-b text-sm">
                      <td className="py-2">Arun Teja</td>
                      <td className="py-2">Land Dispute</td>
                      <td className="py-2">---</td>
                      <td className="py-2">completed</td>
                      <td className="py-2">Win</td>
                    </tr>
                    <tr className="border-b text-sm">
                      <td className="py-2">Raju</td>
                      <td className="py-2">Tax Case</td>
                      <td className="py-2">---</td>
                      <td className="py-2">completed</td>
                      <td className="py-2">Loose</td>
                    </tr>
                    <tr className="border-b text-sm">
                      <td className="py-2">Dhanraja</td>
                      <td className="py-2">Real Estate</td>
                      <td className="py-2">---</td>
                      <td className="py-2">completed</td>
                      <td className="py-2">Win</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="py-2">Kajal</td>
                      <td className="py-2">Divorce</td>
                      <td className="py-2">---</td>
                      <td className="py-2">completed</td>
                      <td className="py-2">Settled</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else if (screenSize === 'tablet') {
    return (
      <>
        <section className='bg-bg2'>
          <Header2 />
          <div 
            className="min-h-screen flex-col items-center bg-cover bg-center" 
          >
            {/* Menu Button (Navigation on Mobile) */}
            <button 
              className="bg-white/70 backdrop-blur-md p-4 rounded-lg  mt-10 ml-5 mr-5 shadow-lg glass-effect flex items-center justify-between"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="text-lg font-bold text-black">Menu</span>
              <span className="text-black">▼</span>
            </button>

            {/* Menu Dropdown (Hidden by default, shown on click) */}
            {isMenuOpen && (
              <div className="bg-white/70 backdrop-blur-md p-4 rounded-lg w-full max-w-xl mt-2 ml-5 mr-5 shadow-lg glass-effect">
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

            {/* Appointments Table */}
            <div className="flex-1 p-4  mt-5 ">
              <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect mb-6">
                <h3 className="text-lg font-semibold mb-2 text-black">Appointments</h3>
                <table className="w-full text-left text-black my-2">
                  <thead>
                    <tr className="border-b text-base">
                      <th className="py-2">Client Name</th>
                      <th className="py-2">Type</th>
                      <th className="py-2">Hearing</th>
                      <th className="py-2">Status</th>
                      <th className="py-2">Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b text-sm">
                      <td className="py-2">Bhanu</td>
                      <td className="py-2">Land dispute</td>
                      <td className="py-2">2:00 AM 15/02/25</td>
                      <td className="py-2">Ongoing</td>
                      <td className="py-2">---</td>
                    </tr>
                    <tr className="border-b text-sm">
                      <td className="py-2">Arun Teja</td>
                      <td className="py-2">Divorce</td>
                      <td className="py-2">4:00 PM 23/02/25</td>
                      <td className="py-2">Ongoing</td>
                      <td className="py-2">---</td>
                    </tr>
                    <tr className="border-b text-sm">
                      <td className="py-2">Sandeep</td>
                      <td className="py-2">Criminal case</td>
                      <td className="py-2">5:00 PM 17/02/25</td>
                      <td className="py-2">Pending</td>
                      <td className="py-2">---</td>
                    </tr>
                    <tr className="border-b text-sm">
                      <td className="py-2">Arun Teja</td>
                      <td className="py-2">Land Dispute</td>
                      <td className="py-2">---</td>
                      <td className="py-2">completed</td>
                      <td className="py-2">Win</td>
                    </tr>
                    <tr className="border-b text-sm">
                      <td className="py-2">Raju</td>
                      <td className="py-2">Tax Case</td>
                      <td className="py-2">---</td>
                      <td className="py-2">completed</td>
                      <td className="py-2">Loose</td>
                    </tr>
                    <tr className="border-b text-sm">
                      <td className="py-2">Dhanraja</td>
                      <td className="py-2">Real Estate</td>
                      <td className="py-2">---</td>
                      <td className="py-2">completed</td>
                      <td className="py-2">Win</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="py-2">Kajal</td>
                      <td className="py-2">Divorce</td>
                      <td className="py-2">---</td>
                      <td className="py-2">completed</td>
                      <td className="py-2">Settled</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else { // desktop
    return (
      <>
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
            <div className="flex-1 p-6 w-full mt-5 max-w-4xl">
              {/* Upcoming Appointments */}
              <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect mb-6">
                <h3 className="text-2xl font-semibold mb-2 text-black">Appointments</h3>
                <table className="w-full text-left text-black my-4">
                  <thead>
                    <tr className="border-b text-2xl">
                      <th className="py-2">Client Name</th>
                      <th className="py-2">Case Type</th>
                      <th className="py-2">Next Hearing</th>
                      <th className="py-2">Status</th>
                      <th className="py-2">Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b text-lg">
                      <td className="py-2">Bhanu</td>
                      <td className="py-2">Land dispute</td>
                      <td className="py-2">2:00 AM Feb-15 2025</td>
                      <td className="py-2">Ongoing</td>
                      <td className="py-2">---</td>
                    </tr>
                    <tr className="border-b text-lg">
                      <td className="py-2">Arun Teja</td>
                      <td className="py-2">Divorce</td>
                      <td className="py-2">4:00 PM Feb-15 2025</td>
                      <td className="py-2">Ongoing</td>
                      <td className="py-2">---</td>
                    </tr>
                    <tr className="border-b text-lg">
                      <td className="py-2">Sandeep</td>
                      <td className="py-2">Criminal case</td>
                      <td className="py-2">5:00 PM Feb-15 2025</td>
                      <td className="py-2">Pending</td>
                      <td className="py-2">---</td>
                    </tr>
                    <tr className="border-b text-lg">
                      <td className="py-2">Arun Teja</td>
                      <td className="py-2">Land Dispute</td>
                      <td className="py-2">---</td>
                      <td className="py-2">completed</td>
                      <td className="py-2">Win</td>
                    </tr>
                    <tr className="border-b text-lg">
                      <td className="py-2">Raju</td>
                      <td className="py-2">Tax Case</td>
                      <td className="py-2">---</td>
                      <td className="py-2">completed</td>
                      <td className="py-2">Loose</td>
                    </tr>
                    <tr className="border-b text-lg">
                      <td className="py-2">Dhanraja</td>
                      <td className="py-2">Real Estate</td>
                      <td className="py-2">---</td>
                      <td className="py-2">completed</td>
                      <td className="py-2">Win</td>
                    </tr>
                    <tr className="text-lg">
                      <td className="py-2">Kajal</td>
                      <td className="py-2">Divorce</td>
                      <td className="py-2">---</td>
                      <td className="py-2">completed</td>
                      <td className="py-2">Settled</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default ClientsLawyer