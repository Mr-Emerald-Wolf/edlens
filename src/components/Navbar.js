import React from "react";
import {Link} from 'react-router-dom';



export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <header className="bg-slate-800 z-50 top-0 md:sticky">
                    <div className="container flex justify-between mx-auto">
                        <Link rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-1 md:font-bold text-3xl text-red-500">
                            EdLens
                        </Link>
                        <div className="flex flex-grow items-center justify-end"></div>       
                        <ul className="items-stretch hidden space-x-3 lg:flex">
                            <li className="flex">
                                <a rel="noopener noreferrer" href="#app" className="flex items-center px-4 -mb-1 text-red-500 hover:text-sky-800 font-Kanit">APP</a>
                            </li>
                            <li className="flex">
                                <a rel="noopener noreferrer" href="#tech" className="flex items-center px-4 -mb-1 text-red-500 hover:text-sky-800 tracking-wide font-light  font-Kanit">TECH USED</a>
                            </li>
                            <li className="flex">
                                <a rel="noopener noreferrer" href="#roadmap" className="flex items-center px-4 -mb-1 text-red-500 hover:text-sky-800  font-Kanit">ROAD MAP</a>
                            </li>
                            <li className="flex">
                                <a rel="noopener noreferrer" href="#challenges" className="flex items-center px-4 -mb-1 text-red-500 hover:text-sky-800  font-Kanit">CHALLENGES FACED</a>
                            </li>
                            <li className="flex">
                                <a rel="noopener noreferrer" href="#pricing" className="flex items-center px-4 -mb-1 text-red-500 hover:text-sky-800  font-Kanit">PRICING</a>
                            </li>
                            <li className="flex">
                                <a rel="noopener noreferrer" href="#about" className="flex items-center px-4 -mb-1 text-red-500 hover:text-sky-800  font-Kanit">ABOUT US</a>
                            </li>
                        </ul>
                        
                       
                    <button className="flex justify-end p-4 md:hidden" onClick={() => setNavbarOpen(!navbarOpen)}>
                  
                   
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ef4444" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    </div>
                   
                    
                <div className="md:hidden">
                    <ul className={(navbarOpen ? "grid grid-cols-1" : "hidden")}>
                        <li ><a className="block p-4  transition   duration-300 bg-slate-700 hover:bg-slate-800 text-red-500"   href="/">Help</a></li>
                        <li ><a className="block text-sm p-4  transition  duration-300 bg-slate-600 hover:bg-slate-800 text-red-500"    href="/">About</a></li>
                        <li ><a  className="block text-sm  p-4  transition  duration-300 bg-slate-700 hover:bg-slate-800 text-red-500"   href="/">Contact</a></li>
                        <li><a className="block  text-sm p-4  transition  duration-300 bg-slate-600  hover:bg-slate-800 text-red-500"   href="/">Log Out</a></li>
                    </ul>
                </div>
                </header>
    </>
  );
}
