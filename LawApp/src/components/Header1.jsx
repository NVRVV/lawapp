import React from 'react'
import filter1 from '../assets/filter-icon.png';
import pro1 from '../assets/profile-icon.png';

const Header1 = () => {
  return (
    <>
        <header className=''>
            <div className="flex flex-col md:flex-row">
                <div className="flex  flex-1 flex-col mt-5 ml-10">
                    <h1 className="text-5xl text-white cursor-pointer font-bold">SLMB</h1>
                    <p className="text-xl text-white font-medium mt-2">Your trusted legal partner</p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={filter1} alt="" className='cursor-pointer w-10 h-10 ml-5 mr-5 ' />
                    <img src={pro1} alt="" className='cursor-pointer w-10 h-10 ml-5'/>
                    <h1 className='text-3xl mr-5 text-white cursor-pointer'>Login</h1>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header1
