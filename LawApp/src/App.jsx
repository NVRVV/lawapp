import React from 'react'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Home from './pages/Home';
import Header1 from './components/Header1';

const App = () => {
  return (
    
    <Router>
      <div>
        <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register/>}></Route>     
        <Route path='/' element={<><Header1/><Home/></>}></Route>
        </Routes>
        
      </div>
    </Router>
    
  )
}

export default App
