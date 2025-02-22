import React  from 'react';
import Header2 from '../../components/Header2';
import { useNavigate } from "react-router-dom";

const LawyerDash = () => {

  const navigate = useNavigate();

  return (
    <section className='bg-bg2'>
        <Header2/>
        <div 
        className="min-h-screen flex" 
        >
      {/* Left Column - SLMBS and Navigation */}
      <div className="w-80 bg-gray-800 text-white ml-15 mt-10 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">SLMB</h2>
        <nav className="  space-y-2">
          <button className=" mb-5 w-full bg-bg1 text-white p-2 rounded hover:bg-secondary"
          onClick={() => navigate('/lawyer-dashboard') }>
            Dashboard
          </button>
          <button className=" mb-5 w-full bg-bg1 text-white p-2 rounded hover:bg-secondary"
          onClick={() => navigate('/lawyer-dashboard/clients') }>
            Clients
          </button>
          <button className="w-full bg-bg1 text-white p-2 rounded hover:bg-secondary" 
          onClick={() => navigate('/lawyer-dashboard/settings')}>
            Settings
          </button>
        </nav>
      </div>

      {/* Right Column - Main Dashboard Content */}
      <div className="flex-1 p-6 w-full ml-10 mt-10 max-w-4xl">
        {/* Header Stats */}
        <div className="flex justify-around mb-6">
          <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect">
            <p className="text-lg text-gray-600">Today New Appointments</p>
            <p className="text-2xl font-bold">5</p>
          </div>
          <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect">
            <p className="text-lg text-gray-600">Pending Cases</p>
            <p className="text-2xl font-bold">5</p>
          </div>
          <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect">
            <p className="text-lg text-gray-600">Closed Cases</p>
            <p className="text-2xl font-bold">5</p>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect mb-6">
          <h3 className="text-2xl font-semibold mb-2">Upcoming Appointments</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Client Name</th>
                <th className="py-2">Case Type</th>
                <th className="py-2">Next Hearing</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Bhanu</td>
                <td className="py-2">Land dispute</td>
                <td className="py-2">2:00 AM Feb-15 2025</td>
                <td className="py-2">Ongoing</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Arun Teja</td>
                <td className="py-2">Divorce</td>
                <td className="py-2">4:00 PM Feb-15 2025</td>
                <td className="py-2">Ongoing</td>
              </tr>
              <tr>
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
          <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect flex-1">
            <h3 className="text-2xl font-semibold mb-2">Previous Clients</h3>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Client Name</th>
                  <th className="py-2">Case Type</th>
                  <th className="py-2">Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Bhanu</td>
                  <td className="py-2">Land dispute</td>
                  <td className="py-2">Win</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Arun Teja</td>
                  <td className="py-2">Divorce</td>
                  <td className="py-2">Win</td>
                </tr>
                <tr>
                  <td className="py-2">Sandeep</td>
                  <td className="py-2">Criminal case</td>
                  <td className="py-2">Settled</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Amount Paid Clients */}
          <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect flex-1">
            <h3 className="text-2xl font-semibold mb-2">Amount Paid Clients</h3>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Name</th>
                  <th className="py-2">Time</th>
                  <th className="py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Bhanu</td>
                  <td className="py-2">4:30</td>
                  <td className="py-2">5000 Rs</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">P. Arun Joshi</td>
                  <td className="py-2">4:30</td>
                  <td className="py-2">5000 Rs</td>
                </tr>
                <tr>
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
    
  )
}

// Add this CSS for the glass effect in your Tailwind config or a separate CSS file
const styles = `
  .glass-effect {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`

export default LawyerDash