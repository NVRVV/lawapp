import React from 'react'
import Login from './pages/Login'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register';

import Header from './components/Header';

import Home from './pages/Home';

import Popup from './pages/Popup';
const App = () => {
  return (
    
    <Router>
      <div>
        <Header/>
        <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/' element={<Popup/>}></Route>
        

        </Routes>
        
      </div>
    </Router>
    
  )
}

export default App
