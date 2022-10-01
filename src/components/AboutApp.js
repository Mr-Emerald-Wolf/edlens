import { useInView } from 'framer-motion';
import React, { useRef } from 'react'


export default function AboutApp() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    return (
        <>
            <section id='app' ref={ref}>
                <div className="bg-red-400 min-h-screen grid content-center p-4 md:p-2">
                    <div className="grid sm:grid-cols-2 m-2 grid-flow-row">
                        <div className="grid content-center">
                            <img style={{
                                transform: isInView ? "none" : "translateX(-200px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }} className='mx-auto my-auto w-3/4 md:w-2/3 lg:w-1/2' src="./img/phone.png" alt="Profile" />
                        </div>
                        <div className='container text-center mx-auto order-0 grid content-center '>
                            <h1 style={{
                                transform: isInView ? "none" : "translateX(-200px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }} className="sm:text-6xl text-3xl font-medium title-font md:mb-2 md:pb-4 text-slate-700 " >
                                EdLens
                            </h1>
                            <p style={{
                                transform: isInView ? "none" : "translateX(200px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }} className='text-pale text-center mx-auto lg:w-2/3  md:text-2xl p-1'>We developed a web interface for generating AR/VR render of various three-dimensional shapes for example asteroids, comets and other objects. The interface allows users to upload a screenshot or picture. The user can then generate the corresponding AR model of the object, which is found by the ocr.</p>
                            <p style={{
                                transform: isInView ? "none" : "translateX(200px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }} className='text-pale lg:w-2/3 mx-auto text-center md:text-2xl p-1'>Our project solves the challenge by providing users an accessible interface for  visualizing various number of objects, as well as uploading their own. Our project is important as it can be used by students of any field to better understand what type of objects they are working with in their study environment.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
