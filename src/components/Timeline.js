import React from 'react'
export default function RoadMap() {
  return (
    <>
      <section id='roadmap'>
        {/* <!-- component --> */}
        <div className="bg-hero bg-pale min-h-screen grid content-center p-5 md:p-2 lg:p-[4rem]" id=''>

          <h1 className="lg:text-6xl  text-4xl font-medium title-font m-4 text-slate-700 md:mb-[3rem] text-center" >
            Roadmap
          </h1>
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2 absolute border-black md:h-full h-[80%] right-[49.89%] z-0" ></div>
            {/* <!-- left timeline --> */}
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12 hidden sm:flex"></div>
              <div className="z-20 items-center order-1 bg-slate-900 shadow-xl w-8 h-8 rounded-full sm:flex hidden">
                <h1 className="mx-auto text-white font-semibold text-lg ">1</h1>
              </div>
              <div className="order-1 bg-red-400 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4 z-10">
                <h3 className="mb-3 font-bold text-slate-700 text-2xl">Firebase for User Auth</h3>
                <p className=" font-medium leading-snug tracking-wide text-slate-700 text-opacity-100">Implementing user login using Firebase to store previous search results. To store user data.</p>
              </div>
            </div>
            {/* <!-- right timeline --> */}
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12 hidden sm:flex"></div>
              <div className="z-20 sm:flex hidden items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
              </div>
              <div className="order-1 bg-red-400 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4 z-10">
                <h3 className="mb-3 font-bold text-slate-700 text-2xl">Storing more 3D models</h3>
                <p className="font-medium leading-snug tracking-wide text-slate-700 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            {/* <!-- left timeline --> */}
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12 hidden sm:flex"></div>
              <div className="z-20 sm:flex hidden items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">3</h1>
              </div>
              <div className="order-1 bg-red-400 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4 z-10">
                <h3 className="mb-3 font-bold text-slate-700 text-2xl">Multi Language Support</h3>
                <p className=" font-medium leading-snug tracking-wide text-slate-700 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            {/* <!-- right timeline --> */}
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12 hidden sm:flex"></div>
              <div className="z-20 sm:flex hidden items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">4</h1>
              </div>
              <div className="order-1 bg-red-400 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4 z-10">
                <h3 className="mb-3 font-bold text-slate-700 text-2xl">Training using AR</h3>
                <p className="font-medium leading-snug tracking-wide text-slate-700 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
