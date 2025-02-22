import React from 'react'
import Header2 from '../../components/Header2';
import { useNavigate } from 'react-router-dom';

const Settting = () => {

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
      <div className="flex-1 p-6 w-full mt-10 max-w-4xl">
        <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 pl-10 ml-10 shadow-lg glass-effect mb-6">
          <h3 className="text-4xl font-semibold mb-2">Settings</h3>
            <h2 className='text-2xl font-semibold'>Welcome!</h2>
            <h2 className='text-2xl pt-5'>User Name</h2>
            <h2 className='mt-7 ml-2 text-lg'>Change Email</h2>
            <div className='bg-bg flex p-4 mr-5 rounded-lg'>
                <h2 className='pl-2'>ram@gmail.com</h2>
                <h2 className='text-red-500 pl-130'>change</h2>
            </div>
            <h2 className='mt-7 ml-2 text-lg'>Change Email</h2>
            <div className='bg-bg flex p-4 mr-5 rounded-lg'>
                <h2 className='pl-2'>ram@gmail.com</h2>
                <h2 className='text-red-500 pl-130'>change</h2>
            </div>
        </div>

      </div>
        </div>
    </section>
    </>
  )
}

export default Settting
