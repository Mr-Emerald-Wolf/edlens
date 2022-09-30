import React from "react";



export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <header className="bg-slate-800  p-1 z-50 top-0 md:sticky">
                    <div className="container flex justify-between mx-auto">
                        <a rel="noopener noreferrer" href="#landing" aria-label="Back to homepage" className="flex items-center p-1 text-2xl text-red-500">
                            EdLens
                        </a>
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
                        
                        <button className="flex justify-end p-4 lg:hidden" onClick={() => setNavbarOpen(!navbarOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                   
                    <div className="lg:hidden">
                        <ul className={(navbarOpen? "": "hidden")}>
                                <li className="active"><a href="#about" className="block text-sm px-2 py-4 bg-white hover:bg-slate-100  font-semibold">About</a></li>
                                <li><a href="#projects" className="block text-sm px-2 py-4 bg-sky-100 hover:bg-slate-100 transition  duration-300">Projects</a></li>
                                <li><a href="#skills" className="block text-sm px-2 py-4 bg-white hover:bg-slate-100 transition duration-300">Skills</a></li>
                                <li><a href="#contact" className="block text-sm px-2 py-4 bg-sky-100 hover:bg-slate-100 transition  duration-300">Contact</a></li>
                         </ul>
                    </div>
                </header>
    </>
  );
}
