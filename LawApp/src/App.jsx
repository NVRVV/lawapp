import React, { useState } from 'react'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Home from './pages/Home';
<<<<<<< HEAD
import Filter from './pages/filter/Filter';
import LawyerForm from './pages/LawyerForm';
=======
<<<<<<< HEAD
import Header1 from './components/Header1';
import FormScreen from './pages/Form/FormScreen';
import UploadScreen from './pages/Form/UploadScreen';
import ReviewScreen from './pages/Form/ReviewScreen';
=======
>>>>>>> 0270b62a0526dece896e15469f20f8c9ee028647

>>>>>>> f1cbf40a2a60ff05761ca62bf51200f8027afbc8

const App = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  return (
    
    <Router>
      <div>
        <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register/>}></Route>     
<<<<<<< HEAD
        <Route path='/' element={<><Header1/><Home/></>}></Route>
        <Route path='/form' element={<FormScreen/>}></Route>
        <Route path='/upload' element={<UploadScreen setUploadedFiles={setUploadedFiles} uploadedFiles={uploadedFiles}/>}></Route>
        <Route path='/review' element={<ReviewScreen uploadedFiles={uploadedFiles} setUploadedFiles={setUploadedFiles}/>}></Route>
=======
        <Route path='/' element={<><Home/></>}></Route>
<<<<<<< HEAD
        <Route path='/filter' element={<Filter/>}></Route> 
        <Route path='/lawyer-form' element={<LawyerForm/>}></Route>
=======
>>>>>>> f1cbf40a2a60ff05761ca62bf51200f8027afbc8
>>>>>>> 0270b62a0526dece896e15469f20f8c9ee028647
        </Routes>
        
      </div>
    </Router>
    
  )
}

export default App
