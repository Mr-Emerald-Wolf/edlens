import React from 'react'
export default function RoadMap() {
  return (
    <>
      {/* <!-- component --> */}
      <div class="bg-hero bg-pale p-5" id=''>

        <h1 className="sm:text-5xl text-3xl font-medium title-font m-4 text-slate-700  text-center" >
          Roadmap
        </h1>
        <div class="relative wrap overflow-hidden p-10 h-full">
          <div class="sm:border-2 absolute border-black h-full right-[49.89%]" ></div>

          {/* <!-- left timeline --> */}
          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12 hidden sm:flex"></div>
            <div class="z-20 items-center order-1 bg-slate-900 shadow-xl w-8 h-8 rounded-full sm:flex hidden">
              <h1 class="mx-auto text-white font-semibold text-lg ">1</h1>
            </div>
            <div class="order-1 bg-red-400 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4">
              <h3 class="mb-3 font-bold text-slate-700 text-2xl">Lorem Ipsum</h3>
              <p class=" font-medium leading-snug tracking-wide text-slate-700 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12 hidden sm:flex"></div>
            <div class="z-20 sm:flex hidden items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">2</h1>
            </div>
            <div class="order-1 bg-red-400 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4">
              <h3 class="mb-3 font-bold text-slate-700 text-2xl">Lorem Ipsum</h3>
              <p class="font-medium leading-snug tracking-wide text-slate-700 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12 hidden sm:flex"></div>
            <div class="z-20 sm:flex hidden items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto text-white font-semibold text-lg">3</h1>
            </div>
            <div class="order-1 bg-red-400 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4">
              <h3 class="mb-3 font-bold text-slate-700 text-2xl">Lorem Ipsum</h3>
              <p class=" font-medium leading-snug tracking-wide text-slate-700 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          {/* <!-- right timeline --> */}
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12 hidden sm:flex"></div>
            <div class="z-20 sm:flex hidden items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">4</h1>
            </div>
            <div class="order-1 bg-red-400 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4">
              <h3 class="mb-3 font-bold text-slate-700 text-2xl">Lorem Ipsum</h3>
              <p class="font-medium leading-snug tracking-wide text-slate-700 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
