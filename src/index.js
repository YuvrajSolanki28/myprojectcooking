import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar'
import LoginSing from './pages/LoginSingup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<App />}/>
        <Route path='login' element={<LoginSing/>}/>
      </Routes>
    </Router>
    
  </React.StrictMode>
);