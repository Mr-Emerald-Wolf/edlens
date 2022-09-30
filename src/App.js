import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import AboutApp from './components/AboutApp';
import Tech from './components/Tech';
import RoadMap from './components/Timeline';


function App() {
  return (
    <>
      <Navbar/>
      <Landing/>
      <AboutApp/>
      <Tech/>
      <RoadMap/>
    </>
  );
}

export default App;
