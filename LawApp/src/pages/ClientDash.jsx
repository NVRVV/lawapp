import React from 'react'
import Header2 from '../components/Header2'

const ClientDash = () => {
  return (
    <div 
      className="min-h-screen flex-col items-center bg-cover bg-center" 
      style={{ 
        background: 'linear-gradient(135deg, #ff8a5c, #ff4d4d)', // Orange gradient similar to the image
      }}
    >
      {/* Header and User Info */}
      <Header2/>

      {/* Main Content - Split into Welcome and Cases */}
      <div className="flex max-w-7xl mt-20 m-5 p-2 gap-6">
        {/* Welcome Section */}
        <div className="bg-white/30 backdrop-blur-md pl-5 pr-5 pt-10 pb-10 rounded-lg  ml-10 mr-10  shadow-lg glass-effect w-80">
          <h2 className="text-3xl font-semibold text-black mb-4">Welcome, User Name</h2>
          <p className="text-black mt-10 ml-2 mb-5">ram@gmail.com <span className="text-red-500 cursor-pointer">Change</span></p>
          <button className="bg-yellow-600 text-white cursor-pointer p-2 rounded-lg w-full hover:bg-yellow-700">
            Logout
          </button>
        </div>

        {/* Cases Table */}
        <div className="bg-white/30 backdrop-blur-md rounded-lg p-10  w-100 shadow-lg glass-effect flex-3">
        <table className="w-full text-left text-black my-4">
            <thead>
                <tr className="border-b text-2xl px-5">
                <th className="py-2">Case Name</th>
                <th className="py-2">Category</th>
                <th className="py-2">File</th>
                <th className="py-2">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b text-lg px-5">
                <td className="py-2 ">Divorce</td>
                <td className="py-2 ">Civil</td>
                <td className="py-2 ">details.pdf</td>
                <td className="py-2 ">Description</td>
                </tr>
                <tr className="border-b text-lg px-5">
                <td className="py-2 ">Deforestation</td>
                <td className="py-2 ">Environmental</td>
                <td className="py-2 ">details.pdf</td>
                <td className="py-2 ">Description</td>
                </tr>
                <tr className="text-lg px-5">
                <td className="py-2 ">Deforestation</td>
                <td className="py-2 ">Criminal</td>
                <td className="py-2 ">details.pdf</td>
                <td className="py-2 ">Description</td>
                </tr>
            </tbody>
        </table>
        </div>
      </div>
    </div>
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

export default ClientDash