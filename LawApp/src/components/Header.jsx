import React from 'react'

const Header = () => {
  return (
    <>
      <header>
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-10 flex-col">
                <h1 className="text-5xl mt-5 font-bold">SLMB</h1>
                <p className="text-xl font-medium mt-5">Your trusted legal partner</p>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header
