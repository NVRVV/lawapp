import React from 'react';
import '../index.css';
import hiw1 from '../assets/hiw-1.png';
import hiw2 from '../assets/hiw-2.png';
import hiw3 from '../assets/hiw-3.png';
import hero from '../assets/hero.png'

const Home = () => {
  return (

    <section className='bg-bg2 flex flex-col justify-center'>
        <div>
            <img src={hero} alt="" />
        </div>

      <div className="flex flex-row md:flex-col items-center justify-center mb-10">
        <h1 className='text-6xl'>How it works</h1>        
      </div>

      {/* Parent div with gap & equal height distribution */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-30  ml-20 mr-20 pb-20">
        <div className="flex flex-col flex-1 bg-bg w-full h-120 items-center justify-center p-2 rounded-lg shadow-lg">
          <img src={hiw1} alt="Client Submission" />
          <h1 className='text-3xl pt-10 pb-15 text-center'>Client Case Submission</h1>
          <p className='px-5 pb-5 text-center'>
            Clients register on the platform and provide essential details about their legal case.
            The system collects case-related information such as case type, legal issue, location, and urgency.
          </p>
        </div>

        <div className="flex flex-col flex-1 bg-bg w-full h-120 items-center justify-center p-2 rounded-lg shadow-lg">
          <img src={hiw2} alt="Case Review" className='pt-8'/>
          <h1 className='text-3xl pt-8 pb-5 text-center'>Lawyer Matching and Recommendation</h1>
          <p className='px-5 pb-5 text-center'>
          The platform employs an advanced matching algorithm to recommend lawyers based on their legal expertise, availability, and proximity for in-person consultations.
          Clients receive a list of recommended lawyers
          </p>
        </div>

        <div className="flex flex-col flex-1 bg-bg w-full h-120 items-center justify-center p-2 rounded-lg shadow-lg ">
          <img src={hiw3} alt="Legal Consultation" className='pt-7'/>
          <h1 className='text-3xl pt-5 pb-5 p-2 text-center'>Real-Time Communication & Updates</h1>
          <p className='px-5 pb-5 text-center'>
          Both clients and lawyers receive notifications for status updates, reminders, and confirmations.
          The platform can integrate messaging or video conferencing for virtual consultations.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row bg-bg p-10 pt-15 pb-15 items-center justify-center">
        <div className="flex ml-15 mr-15 w-250">
        <h1 className='text-5xl underline '>Schedule a free case evolution</h1>
        </div>
        <div className="flex flex-row md:flex-col ">
            <p className='pb-7 pt-3'>The platform leverages an intelligent matching algorithm to seamlessly connect clients with the most suitable lawyers based on expertise, availability, and location, ensuring an efficient and streamlined legal consultation process.</p>
            <button className="text-2xl bg-black text-white font-bold py-2 px-4 rounded w-80 cursor-pointer hover:shadow-xl">Lets talk - Send a message</button>
        </div>
        
      </div>
    </section>
  );
}

export default Home;
