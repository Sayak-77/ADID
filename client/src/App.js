import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import User from './components/User';
import ProcessData from './components/ProcessData';
import { Route, Routes } from 'react-router-dom';
import ModalForm from './components/ModalForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/process_data' element={<ProcessData/>}/>
      <Route path='/modalform' element={<ModalForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
