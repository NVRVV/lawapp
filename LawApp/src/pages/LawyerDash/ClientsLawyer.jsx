import React from 'react';
import Header2 from '../../components/Header2';
import { useNavigate } from 'react-router-dom';

const ClientsLawyer = () => {

    const navigate = useNavigate();

  return (
    <>
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
          onClick={() => navigate('/lawyer-dashboard')}>
            Dashboard
          </button>
          <button className=" mb-5 w-full bg-bg1 text-white p-2 rounded hover:bg-secondary"
          onClick={() => navigate('/lawyer-dashboard/clients')}>
            Clients
          </button>
          <button className="w-full bg-bg1 text-white p-2 rounded hover:bg-secondary"
          onClick={() => navigate('/lawyer-dashboard/settings')}>
            Settings
          </button>
        </nav>
      </div>

      {/* Right Column - Main Dashboard Content */}
      <div className="flex-1 p-6 w-full mt-10 max-w-4xl">

        {/* Upcoming Appointments */}
        <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 shadow-lg glass-effect mb-6">
          <h3 className="text-2xl font-semibold mb-2">Appointments</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Client Name</th>
                <th className="py-2">Case Type</th>
                <th className="py-2">Next Hearing</th>
                <th className="py-2">Status</th>
                <th className='py-2'>Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Bhanu</td>
                <td className="py-2">Land dispute</td>
                <td className="py-2">2:00 AM Feb-15 2025</td>
                <td className="py-2">Ongoing</td>
                <td className="py-2">---</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Arun Teja</td>
                <td className="py-2">Divorce</td>
                <td className="py-2">4:00 PM Feb-15 2025</td>
                <td className="py-2">Ongoing</td>
                <td className="py-2">---</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Sandeep</td>
                <td className="py-2">Criminal case</td>
                <td className="py-2">5:00 PM Feb-15 2025</td>
                <td className="py-2">Pending</td>
                <td className="py-2">---</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Arun Teja</td>
                <td className="py-2">Land Dispute</td>
                <td className="py-2">---</td>
                <td className="py-2">completed</td>
                <td className="py-2">Win</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Raju</td>
                <td className="py-2">Tax Case</td>
                <td className="py-2">---</td>
                <td className="py-2">completed</td>
                <td className="py-2">Loose</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Dhanraja</td>
                <td className="py-2">Real Estate</td>
                <td className="py-2">---</td>
                <td className="py-2">completed</td>
                <td className="py-2">Win</td>
              </tr>
              <tr className="border-b">
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
  )
}

export default ClientsLawyer
