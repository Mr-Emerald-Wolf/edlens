import React from 'react'

export default function AboutApp() {
    return (
        <>
            <div className="p-4 bg-red-400 dark:bg-slate-900 min-h-screen">
                <div className="grid sm:grid-cols-2 m-2 grid-flow-row">
                    <div className="">
                        <img className='mx-auto my-auto w-3/4 md:w-2/3 lg:w-1/2' src="./img/phone.png" alt="Profile" />
                    </div>
                    <div className='container text-center mx-auto order-0'>
                        <h1 className="sm:text-5xl text-3xl font-medium title-font m-4 md:mb-2 md:pb-4 text-blueTheme dark:text-sky-300" >
                            Ed Lens
                        </h1>
                        <p className='text-slate-700 dark:text-sky-200 lg:w-2/3 mx-auto  text-justify md:text-2xl p-1'>We developed a web interface for generating AR/VR render of various three-dimensional shapes for example asteroids, comets and other objects. The interface allows users to upload a screenshot or picture .. .. . ..  . .. . . . . .  .. The user can then generate the corresponding AR model of the object, which is found by the ocr.</p>
                        <p className='text-slate-700 dark:text-sky-200 lg:w-2/3 mx-auto text-justify md:text-2xl p-1'>Our project solves the challenge by providing users an accessible interface for  visualizing various number of objects, as well as uploading their own. Our project is important as it can be used by students of any field to better understand what type of objects they are working with in their study environment.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
