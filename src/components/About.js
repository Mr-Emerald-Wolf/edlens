import React from 'react'


export default function About() {
  return (
    <>
      <section id='about' className="">
        {/* <!-- component --> */}
        {/* <!-- MDI Icons --> */}
        <link rel="stylesheet" alt="" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css" />

        {/* <!-- Page Container --> */}
        <div class="flex items-center justify-center min-h-screen bg-pale">
          <div class="flex flex-col">
            {/* <!-- Notes --> */}

            <div class="flex flex-col mt-8">
              {/* <!-- Meet the Team --> */}
              <div class="container max-w-7xl px-4">
                {/* <!-- Section Header --> */}
                <div class="flex flex-wrap justify-center text-center mb-24">
                  <div class="w-full lg:w-6/12 px-4">
                    {/* <!-- Header --> */}
                    <h1 class="text-slate-700 text-5xl font-bold mb-6">
                      Meet the Team
                    </h1>

                    {/* <!-- Description --> */}
                    
                  </div>
                </div>

                {/* <!-- Team Members --> */}
                <div class="flex flex-wrap">
                  {/* <!-- Member #1 --> */}
                  <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div class="flex flex-col">
                      {/* <!-- Avatar --> */}

                      <img alt ="" class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80" />


                      {/* <!-- Details --> */}
                      <div class="text-center mt-6">
                        {/* <!-- Name --> */}
                        <h1 class="text-slate-700 text-xl font-bold mb-1">
                          Achintya Gupta
                        </h1>

                        {/* <!-- Title --> */}
                        <div class="text-gray-700 font-light mb-2">
                          Team Lead {"&"} AR Dev
                        </div>

                        {/* <!-- Social Icons --> */}
                        <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                          {/* <!-- Linkedin --> */}
                          <p href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                            <i class="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                          </p>

                          {/* <!-- Twitter --> */}
                          <p href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                            <i class="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                          </p>

                          {/* <!-- Instagram --> */}
                          <p href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                            <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Member #2 --> */}
                  <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div class="flex flex-col">
                      {/* <!-- Avatar --> */}
                      <p href="#" class="mx-auto">
                        <img alt ="" class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                          src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80" />
                      </p>

                      {/* <!-- Details --> */}
                      <div class="text-center mt-6">
                        {/* <!-- Name --> */}
                        <h1 class="text-slate-700 text-xl font-bold mb-1">
                          Shivam Sharma
                        </h1>

                        {/* <!-- Title --> */}
                        <div class="text-gray-700 font-light mb-2">
                          Full Stack
                        </div>

                        {/* <!-- Social Icons --> */}
                        <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                          {/* <!-- Linkedin --> */}
                          <p href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                            <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                          </p>

                          {/* <!-- Twitter --> */}
                          <p href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                            <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                          </p>

                          {/* <!-- Instagram --> */}
                          <p href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                            <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Member #3 --> */}
                  <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div class="flex flex-col">
                      {/* <!-- Avatar --> */}
                      <p href="#" class="mx-auto">
                        <img alt ="" class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                          src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80" />
                      </p>

                      {/* <!-- Details --> */}
                      <div class="text-center mt-6">
                        {/* <!-- Name --> */}
                        <h1 class="text-slate-700 text-xl font-bold mb-1">
                          Rehul Mastogi
                        </h1>

                        {/* <!-- Title --> */}
                        <div class="text-gray-700 font-light mb-2">
                          UI-UX {'&'} Front End 
                        </div>

                        {/* <!-- Social Icons --> */}
                        <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                          {/* <!-- Linkedin --> */}
                          <p href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                            <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                          </p>

                          {/* <!-- Twitter --> */}
                          <p href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                            <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                          </p>

                          {/* <!-- Instagram --> */}
                          <p href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                            <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Member #4 --> */}
                  <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div class="flex flex-col">
                      {/* <!-- Avatar --> */}
                      <p href="#" class="mx-auto">
                        <img alt ="" class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                          src="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80"/>
                      </p>

                      {/* <!-- Details --> */}
                      <div class="text-center mt-6">
                        {/* <!-- Name --> */}
                        <h1 class="text-slate-700 text-xl font-bold mb-1">
                          Bruh
                        </h1>

                        {/* <!-- Title --> */}
                        <div class="text-gray-700 font-light mb-2">
                         Bruh Bruh
                        </div>

                        {/* <!-- Social Icons --> */}
                        <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                          {/* <!-- Linkedin --> */}
                          <p href="#" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                            <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                          </p>

                          {/* <!-- Twitter --> */}
                          <p href="#" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                            <i class="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                          </p>

                          {/* <!-- Instagram --> */}
                          <p href="#" class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                            <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
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
