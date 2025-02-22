import React, { useState } from 'react'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Home from './pages/Home';


import Filter from './pages/filter/Filter';
import LawyerForm from './pages/LawyersForm/LawyerForm';

import Header1 from './components/Header1';
import FormScreen from './pages/Form/FormScreen';
import UploadScreen from './pages/Form/UploadScreen';
import ReviewScreen from './pages/Form/ReviewScreen';
import LawyerForm1 from './pages/LawyersForm/LawyerForm1';
import LawyerForm2 from './pages/LawyersForm/LawyerForm2';

const App = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  return (
    
    <Router>
      <div>
        <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/register' element={<Register/>}></Route>   
        <Route path='/' element={<><Header1/><Home/></>}></Route>
        <Route path='/form' element={<FormScreen/>}></Route>
        <Route path='/upload' element={<UploadScreen setUploadedFiles={setUploadedFiles} uploadedFiles={uploadedFiles}/>}></Route>
        <Route path='/review' element={<ReviewScreen uploadedFiles={uploadedFiles} setUploadedFiles={setUploadedFiles}/>}></Route>

        <Route path='/' element={<><Home/></>}></Route>

        <Route path='/filter' element={<Filter/>}></Route> 
        <Route path='/lawyer-form' element={<LawyerForm/>}></Route>
        <Route path='/lawyer-next' element={<LawyerForm1/>}></Route>
        <Route path='/lawyer-form-next' element={<LawyerForm2/>}></Route>
        </Routes>
        
      </div>
    </Router>
    
  )
}

export default App
