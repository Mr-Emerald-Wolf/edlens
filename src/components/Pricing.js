import React from 'react'

export default function Pricing() {
    return (
        <>
            <section id='pricing' className="bg-red-400">

                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 grid content-center min-h-screen p-4 md:p-2">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-4 lg:text-6xl  text-4xl tracking-tight font-bold  text-slate-700 md:mb-[3rem]">Designed for the modern classroom</h2>
                        <p className="mb-5 text-pale text-xl sm:text-2xl ">Focused on making AR</p>
                    </div>
                    <div className="space-y-8 p-[2rem] md:p-0 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        {/* <!-- Pricing Card --> */}
                        <div className="flex flex-col   mx-auto max-w-lg text-center text-gray-900 bg-slate-700 rounded-lg shadow hover:shadow-lg xl:p-8 ">
                            <h3 className="mb-4 text-4xl font-semibold text-red-400">Personal</h3>
                            <p className="font-light sm:text-lg text-pale">Best option for personal use {"&"} for your next project.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl text-white font-bold">₹200</span>
                                <span className="text-gray-500 ">/month</span>
                            </div>
                            {/* <!-- List --> */}
                            <ul className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-red-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span className= "text-pale">Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-red-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span className= "text-pale">No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-red-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span className= "text-pale">Screens supported: <span className="font-semibold">2 </span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-red-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span className= "text-pale">Premium support: <span className="font-semibold">6 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-red-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span className= "text-pale">Free updates: <span className="font-semibold">6 months</span></span>
                                </li>
                            </ul>
                            <p className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center   ">Get started</p>
                        </div>
                        {/* <!-- Pricing Card --> */}
                        <div className="flex flex-col   mx-auto max-w-lg text-center text-gray-900 bg-slate-700 rounded-lg shadow hover:shadow-xl xl:p-8 ">
                            <h3 className="mb-4 text-4xl font-semibold text-red-400">Classroom</h3>
                            <p className="font-light text-pale sm:text-lg ">Relevant for multiple users, extended {"&"} premium support.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl text-white font-bold">₹2000</span>
                                <span className="text-gray-500 ">/month</span>
                            </div>
                            {/* <!-- List --> */}
                            <ul className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-red-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span className= "text-pale">Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-red-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span className= "text-pale">No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-red-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span className= "text-pale">Screens supported: <span className="font-semibold">30 </span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-red-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span className= "text-pale">Premium support: <span className="font-semibold">24 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-red-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span className= "text-pale">Free updates: <span className="font-semibold">24 months</span></span>
                                </li>
                            </ul>
                            <p className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center   ">Get started</p>
                        </div>
                        {/* <!-- Pricing Card --> */}
                        <div className="flex flex-col   mx-auto max-w-lg text-center text-gray-900 bg-slate-700 rounded-lg shadow hover:shadow-xl xl:p-8 ">
                            <h3 className="mb-4 text-4xl font-semibold text-red-400">School</h3>
                            <p className="font-light text-pale sm:text-lg ">Best for large scale uses and extended redistribution rights.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl text-white font-bold">₹7500</span>
                                <span className="text-gray-500 ">/month</span>
                            </div>
                            {/* <!-- List --> */}
                            <ul className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-red-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span className= "text-pale">Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-red-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span className= "text-pale">No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-red-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span className= "text-pale">Screens supported: <span className="font-semibold">100</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-red-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span className= "text-pale">Premium support: <span className="font-semibold">36 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/* <!-- Icon --> */}
                                    <svg className="flex-shrink-0 w-5 h-5 text-red-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    <span className= "text-pale">Free updates: <span className="font-semibold">36 months</span></span>
                                </li>
                            </ul>
                            <p className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center   ">Get started</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
