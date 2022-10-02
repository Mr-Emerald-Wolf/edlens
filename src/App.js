import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import AboutApp from './components/AboutApp';
import Tech from './components/Tech';
import RoadMap from './components/Timeline';
import Challenges from './components/Challenges';
import About from './components/About';



function App() {
  return (
    <>
      <Navbar />
      <Landing/>
      <AboutApp />
      <Tech />
      <RoadMap />
      <Challenges />
      <About />
      
    </>
  );
}

export default App;
