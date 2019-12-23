import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import MidContent from './components/MidContent'
import MainContent from './components/MainContent';

const App = () => {
  return (
    <div>
      <Navbar />
      <MidContent />
      <MainContent />
    </div>
  );
}

export default App;
