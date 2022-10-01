import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute"
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Reset from "./components/Reset";

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import AboutApp from './components/AboutApp';
import Tech from './components/Tech';
import RoadMap from './components/Timeline';
import Challenges from './components/Challenges';
import Pricing from './components/Pricing';


function App() {
  return (
    <>
    <Navbar/>
    <UserAuthContextProvider>
        <Routes>
        <Route path="/home" 
          element={<ProtectedRoute> <Landing/></ProtectedRoute>} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/reset' element={<Reset />} />
        </Routes>
      </UserAuthContextProvider>
    
     
      <AboutApp/>
      <Tech/>
      <RoadMap/>
      <Challenges/>
      <Pricing/>

    </>
  );
}

export default App;
