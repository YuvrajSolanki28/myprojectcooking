import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'
import {BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Food />
        <Category />
      </Router>
    </div>
  );
}

export default App;
