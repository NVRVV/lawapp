import React, { useState } from 'react'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Home from './pages/Home';
<<<<<<< HEAD
=======

import Filter from './pages/filter/Filter';
import LawyerForm from './pages/LawyerForm';


>>>>>>> 7cf7dcb81bcbf33680f5e18699a9e33aa35f3c96
import Header1 from './components/Header1';
import FormScreen from './pages/Form/FormScreen';
import UploadScreen from './pages/Form/UploadScreen';
import ReviewScreen from './pages/Form/ReviewScreen';

const App = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  return (
    
    <Router>
      <div>
        <Routes>
        <Route path='/login' element={<Login />}></Route>
<<<<<<< HEAD
        <Route path='/register' element={<Register/>}></Route>
=======
        <Route path='/register' element={<Register/>}></Route>     

>>>>>>> 7cf7dcb81bcbf33680f5e18699a9e33aa35f3c96
        <Route path='/' element={<><Header1/><Home/></>}></Route>
        <Route path='/form' element={<FormScreen/>}></Route>
        <Route path='/upload' element={<UploadScreen setUploadedFiles={setUploadedFiles} uploadedFiles={uploadedFiles}/>}></Route>
        <Route path='/review' element={<ReviewScreen uploadedFiles={uploadedFiles} setUploadedFiles={setUploadedFiles}/>}></Route>

        <Route path='/' element={<><Home/></>}></Route>
<<<<<<< HEAD
=======

        <Route path='/filter' element={<Filter/>}></Route> 
        <Route path='/lawyer-form' element={<LawyerForm/>}></Route>

>>>>>>> 7cf7dcb81bcbf33680f5e18699a9e33aa35f3c96
        </Routes>
        
      </div>
    </Router>
    
  )
}

export default App
