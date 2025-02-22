import React from 'react'
import Header2 from '../components/Header2'

const LawyerForm = () => {
  return (
    <>
    <section className='bg-bg2'>
      <Header2/>
      <div className='bg-bg items-center justify-items-center'> 
        <h1 className='text-3xl'>Welcome!</h1>
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" alt='Username' placeholder='Enter your User Name' />
        </div>  
      </div>
    </section>
    </>
  )
}

export default LawyerForm
