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
  const [screenSize, setScreenSize] = useState('desktop');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State for appointments and previous clients
  const [appointments, setAppointments] = useState([
    { id: 1, clientName: "Bhanu", caseType: "Land dispute", date: "2025-02-15T02:00", status: "Ongoing" },
    { id: 2, clientName: "Arun Teja", caseType: "Divorce", date: "2025-02-15T16:00", status: "Ongoing" },
    { id: 3, clientName: "Sandeep", caseType: "Criminal case", date: "2025-02-15T17:00", status: "Pending" },
  ]);
  const [previousClients, setPreviousClients] = useState([
    { clientName: "Bhanu", caseType: "Land dispute", outcome: "Win" },
    { clientName: "Arun Teja", caseType: "Divorce", outcome: "Win" },
    { clientName: "Sandeep", caseType: "Criminal case", outcome: "Settled" },
  ]);
  const [showOutcomePopup, setShowOutcomePopup] = useState(null);
  const [selectedOutcome, setSelectedOutcome] = useState(null);

  // Derived counts
  const pendingCasesCount = appointments.filter(app => app.status === "Pending" || app.status === "Ongoing").length;
  const closedCasesCount = previousClients.length;

  const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024,
    desktop: 1024
  };

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

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDateChange = (id, newDate) => {
    setAppointments(appointments.map(app => 
      app.id === id ? { ...app, date: newDate } : app
    ));
  };

  const handleStatusChange = (id, newStatus) => {
    if (newStatus === "completed") {
      setShowOutcomePopup(id);
      setSelectedOutcome(null);
    } else {
      setAppointments(appointments.map(app => 
        app.id === id ? { ...app, status: newStatus } : app
      ));
    }
  };

  const handleOutcomeSubmit = (id) => {
    if (selectedOutcome) {
      const completedApp = appointments.find(app => app.id === id);
      setAppointments(appointments.filter(app => app.id !== id));
      setPreviousClients([...previousClients, {
        clientName: completedApp.clientName,
        caseType: completedApp.caseType,
        outcome: selectedOutcome
      }]);
      setShowOutcomePopup(null);
      setSelectedOutcome(null);
    }
  };

  const renderHeaderStats = (textSize) => (
    <div className="flex justify-around mb-6">
      <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect">
        <p className={`text-${textSize} text-gray-600`}>Today New Appointments</p>
        <p className={`text-${textSize === 'lg' ? '2xl' : 'xl'} font-bold`}>5</p>
      </div>
      <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect">
        <p className={`text-${textSize} text-gray-600`}>Pending Cases</p>
        <p className={`text-${textSize === 'lg' ? '2xl' : 'xl'} font-bold`}>{pendingCasesCount}</p>
      </div>
      <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect">
        <p className={`text-${textSize} text-gray-600`}>Closed Cases</p>
        <p className={`text-${textSize === 'lg' ? '2xl' : 'xl'} font-bold`}>{closedCasesCount}</p>
      </div>
    </div>
  );

  const renderUpcomingAppointments = (textSize) => (
    <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect mb-6">
      <h3 className={`text-${textSize}xl font-semibold mb-2 text-black`}>Upcoming Appointments</h3>
      <table className="w-full text-left text-black my-4">
        <thead>
          <tr className={`border-b text-${textSize === '2' ? '2xl' : 'base'}`}>
            <th className="py-2">Client Name</th>
            <th className="py-2">Case Type</th>
            <th className="py-2">Appointment Dates</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(app => (
            <tr key={app.id} className={`border-b text-${textSize === '2' ? 'lg' : 'sm'}`}>
              <td className="py-2">{app.clientName}</td>
              <td className="py-2">{app.caseType}</td>
              <td className="py-2">
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <input
                      type="datetime-local"
                      value={app.date}
                      onChange={(e) => handleDateChange(app.id, e.target.value)}
                      className="opacity-0 absolute w-6 h-6 cursor-pointer"
                    />
                    <span className="cursor-pointer">📅</span>
                  </div>
                  <span>{new Date(app.date).toLocaleString()}</span>
                </div>
              </td>
              <td className="py-2">
                <select
                  value={app.status}
                  onChange={(e) => handleStatusChange(app.id, e.target.value)}
                  className="bg-transparent border rounded p-1"
                >
                  <option value="Pending">Pending</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showOutcomePopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4 text-black">Select Case Outcome</h3>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="outcome"
                  value="Win"
                  checked={selectedOutcome === "Win"}
                  onChange={() => setSelectedOutcome("Win")}
                  className="form-radio text-blue-600"
                />
                <span>Win</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="outcome"
                  value="Lost"
                  checked={selectedOutcome === "Lost"}
                  onChange={() => setSelectedOutcome("Lost")}
                  className="form-radio text-blue-600"
                />
                <span>Lost</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="outcome"
                  value="Settled"
                  checked={selectedOutcome === "Settled"}
                  onChange={() => setSelectedOutcome("Settled")}
                  className="form-radio text-blue-600"
                />
                <span>Settled</span>
              </label>
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <button
                className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400"
                onClick={() => {
                  setShowOutcomePopup(null);
                  setSelectedOutcome(null);
                }}
              >
                Cancel
              </button>
              <button
                className={`bg-blue-600 text-white p-2 rounded hover:bg-blue-700 ${!selectedOutcome ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => handleOutcomeSubmit(showOutcomePopup)}
                disabled={!selectedOutcome}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderPreviousClients = (textSize) => (
    <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect flex-1">
      <h3 className={`text-${textSize}xl font-semibold mb-2 text-black`}>Previous Clients</h3>
      <table className="w-full text-left text-black my-4">
        <thead>
          <tr className={`border-b text-${textSize === '2' ? '2xl' : 'base'}`}>
            <th className="py-2">Client Name</th>
            <th className="py-2">Case Type</th>
            <th className="py-2">Outcome</th>
          </tr>
        </thead>
        <tbody>
          {previousClients.map((client, index) => (
            <tr key={index} className={`border-b text-${textSize === '2' ? 'lg' : 'sm'}`}>
              <td className="py-2">{client.clientName}</td>
              <td className="py-2">{client.caseType}</td>
              <td className="py-2">{client.outcome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  if (screenSize === 'mobile') {
    return (
      <section className='bg-bg2'>
        <Header2 />
        <div className="min-h-screen flex-col items-center bg-cover bg-center">
          <button 
            className="bg-white/70 w-xs backdrop-blur-md p-4 rounded-lg mt-10 ml-5 mr-5 shadow-lg glass-effect flex items-center justify-between"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-lg font-bold text-black">Menu</span>
            <span className="text-black">▼</span>
          </button>
          {isMenuOpen && (
            <div className="bg-white/70 w-xs backdrop-blur-md p-4 rounded-lg mt-2 ml-5 mr-5 shadow-lg glass-effect">
              <h2 className="text-lg font-bold mb-4 text-black">SLMB</h2>
              <nav className="space-y-2">
                <button className="w-full bg-secondary text-white p-2 rounded hover:bg-secondary" onClick={() => navigate('/lawyer-dashboard')}>Dashboard</button>
                <button className="w-full bg-secondary text-white p-2 rounded hover:bg-secondary" onClick={() => navigate('/lawyer-dashboard/clients')}>Clients</button>
                <button className="w-full bg-secondary text-white p-2 rounded hover:bg-secondary" onClick={() => navigate('/lawyer-dashboard/settings')}>Settings</button>
              </nav>
            </div>
          )}
          <div className="flex-1 p-4 mt-5">
            <div className='w-full flex-1 items-center'>
              <div className="flex flex-col max-w-xs gap-4 mb-6">
                {renderHeaderStats('base')}
              </div>
            </div>
            {renderUpcomingAppointments('1')}
            <div className="flex flex-col gap-4">
              {renderPreviousClients('1')}
              <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect">
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
        <div className="min-h-screen flex-col items-center bg-cover bg-center">
          <button 
            className="bg-white/70 backdrop-blur-md w-xl p-4 rounded-lg mt-10 ml-10 mr-5 shadow-lg glass-effect flex items-center justify-between"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-lg font-bold text-black">Menu</span>
            <span className="text-black">▼</span>
          </button>
          {isMenuOpen && (
            <div className="bg-white/70 backdrop-blur-md p-4 rounded-lg w-full ml-10 max-w-xl mt-2 mr-5 shadow-lg glass-effect">
              <h2 className="text-lg font-bold mb-4 text-black">SLMB</h2>
              <nav className="space-y-2">
                <button className="w-full bg-secondary text-white p-2 rounded hover:bg-secondary" onClick={() => navigate('/lawyer-dashboard')}>Dashboard</button>
                <button className="w-full bg-secondary text-white p-2 rounded hover:bg-secondary" onClick={() => navigate('/lawyer-dashboard/clients')}>Clients</button>
                <button className="w-full bg-secondary text-white p-2 rounded hover:bg-secondary" onClick={() => navigate('/lawyer-dashboard/settings')}>Settings</button>
              </nav>
            </div>
          )}
          <div className="flex-1 p-4 mt-5">
            <div className="flex flex-col md:flex-row justify-around mb-6 gap-4">
              {renderHeaderStats('base')}
            </div>
            {renderUpcomingAppointments('1')}
            <div className="flex flex-col md:flex-row gap-6">
              {renderPreviousClients('1')}
              <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect w-full md:flex-1">
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
        <div className="min-h-screen flex">
          <div className="w-80 bg-white/80 text-black ml-15 h-80 mt-10 px-4 py-10 rounded-lg shadow-lg glass-effect">
            <h2 className="text-2xl font-bold ml-2 mb-10">SLMB</h2>
            <nav className="space-y-2">
              <button className="mb-5 w-full bg-secondary cursor-pointer text-white p-2 rounded hover:bg-secondary" onClick={() => navigate('/lawyer-dashboard')}>Dashboard</button>
              <button className="mb-5 w-full bg-secondary cursor-pointer text-white p-2 rounded hover:bg-secondary" onClick={() => navigate('/lawyer-dashboard/clients')}>Clients</button>
              <button className="w-full bg-secondary cursor-pointer text-white p-2 rounded hover:bg-secondary" onClick={() => navigate('/lawyer-dashboard/settings')}>Settings</button>
            </nav>
          </div>
          <div className="flex-1 p-6 w-full mt-10 max-w-4xl">
            {renderHeaderStats('lg')}
            {renderUpcomingAppointments('2')}
            <div className="flex gap-6">
              {renderPreviousClients('2')}
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

export default LawyerDash;