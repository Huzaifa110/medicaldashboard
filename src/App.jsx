import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="app-main">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default App;

