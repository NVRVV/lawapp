import React from 'react'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Home from './pages/Home';
import Filter from './pages/filter/Filter';
import LawyerForm from './pages/LawyerForm';


const App = () => {
  return (
    
    <Router>
      <div>
        <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register/>}></Route>     
        <Route path='/' element={<><Home/></>}></Route>
        <Route path='/filter' element={<Filter/>}></Route> 
        <Route path='/lawyer-form' element={<LawyerForm/>}></Route>
        </Routes>
        
      </div>
    </Router>
    
  )
}

export default App
