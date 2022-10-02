import React from 'react'


export default function About() {
  return (
    <>
      <section id='about' className="">
        {/* <!-- component --> */}
        {/* <!-- MDI Icons --> */}
        <link rel="stylesheet" alt="" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css" />

        {/* <!-- Page Container --> */}
        <div className="items-center justify-center min-h-screen bg-pale grid content-center p-4 md:p-2">
          <div className="flex flex-col">
            {/* <!-- Notes --> */}

            <div className="flex flex-col mt-8">
              {/* <!-- Meet the Team --> */}
              <div className="container max-w-7xl px-4">
                {/* <!-- Section Header --> */}
                <div className="flex flex-wrap justify-center text-center mb-24">
                  <div className="w-full lg:w-6/12 px-4">
                    {/* <!-- Header --> */}
                    <h1 className="text-slate-700 lg:text-6xl  text-4xl font-bold mb-8">
                      Meet the Team
                    </h1>

                    {/* <!-- Description --> */}
                    
                  </div>
                </div>

                {/* <!-- Team Members --> */}
                <div className="flex flex-wrap">
                  {/* <!-- Member #1 --> */}
                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col">
                      {/* <!-- Avatar --> */}

                      <img alt ="" className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80" />


                      {/* <!-- Details --> */}
                      <div className="text-center mt-6">
                        {/* <!-- Name --> */}
                        <h1 className="text-slate-700 text-xl font-bold mb-1">
                          Achintya Gupta
                        </h1>

                        {/* <!-- Title --> */}
                        <div className="text-gray-700 font-light mb-2">
                          Team Lead {"&"} AR Dev
                        </div>

                        {/* <!-- Social Icons --> */}
                        <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                          {/* <!-- Linkedin --> */}
                          <p href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                            <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                          </p>

                          {/* <!-- Twitter --> */}
                          <p href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                            <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                          </p>

                          {/* <!-- Instagram --> */}
                          <p href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Member #2 --> */}
                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col">
                      {/* <!-- Avatar --> */}
                      <p href="#" className="mx-auto">
                        <img alt ="" className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                          src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80" />
                      </p>

                      {/* <!-- Details --> */}
                      <div className="text-center mt-6">
                        {/* <!-- Name --> */}
                        <h1 className="text-slate-700 text-xl font-bold mb-1">
                          Shivam Sharma
                        </h1>

                        {/* <!-- Title --> */}
                        <div className="text-gray-700 font-light mb-2">
                          Full Stack
                        </div>

                        {/* <!-- Social Icons --> */}
                        <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                          {/* <!-- Linkedin --> */}
                          <p href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                            <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                          </p>

                          {/* <!-- Twitter --> */}
                          <p href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                            <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                          </p>

                          {/* <!-- Instagram --> */}
                          <p href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Member #3 --> */}
                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col">
                      {/* <!-- Avatar --> */}
                      <p href="#" className="mx-auto">
                        <img alt ="" className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                          src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80" />
                      </p>

                      {/* <!-- Details --> */}
                      <div className="text-center mt-6">
                        {/* <!-- Name --> */}
                        <h1 className="text-slate-700 text-xl font-bold mb-1">
                          Mehul Rastogi
                        </h1>

                        {/* <!-- Title --> */}
                        <div className="text-gray-700 font-light mb-2">
                          UI-UX {'&'} Front End 
                        </div>

                        {/* <!-- Social Icons --> */}
                        <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                          {/* <!-- Linkedin --> */}
                          <p href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                            <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                          </p>

                          {/* <!-- Twitter --> */}
                          <p href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                            <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                          </p>

                          {/* <!-- Instagram --> */}
                          <p href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Member #4 --> */}
                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col">
                      {/* <!-- Avatar --> */}
                      <p href="#" className="mx-auto">
                        <img alt ="" className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                          src="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80"/>
                      </p>

                      {/* <!-- Details --> */}
                      <div className="text-center mt-6">
                        {/* <!-- Name --> */}
                        <h1 className="text-slate-700 text-xl font-bold mb-1">
                          Siddharth Dave
                        </h1>

                        {/* <!-- Title --> */}
                        <div className="text-gray-700 font-light mb-2">
                          Front End {"&"} AR Dev 
                        </div>

                        {/* <!-- Social Icons --> */}
                        <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                          {/* <!-- Linkedin --> */}
                          <p href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                            <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                          </p>

                          {/* <!-- Twitter --> */}
                          <p href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                            <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                          </p>

                          {/* <!-- Instagram --> */}
                          <p href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
