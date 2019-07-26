import React, { useState } from 'react';
import './App.css';
import LandingPageTop from './components/LandingPageTop';
import CVPage from './components/CVPage';


function App() {
  return (
    <div className="scroll-container">
      <LandingPageTop/>
      <CVPage/>
    </div>
  );
  }
export default App;
