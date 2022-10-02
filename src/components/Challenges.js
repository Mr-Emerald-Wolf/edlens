import { useInView } from 'framer-motion';
import React, { useRef } from 'react'
import { motion } from 'framer-motion';

export default function Challenges() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    return (
        <>
            <section ref={ref} id='challenges'>
                <div className="bg-slate-700 min-h-screen grid content-center p-4 md:p-2 lg:p-[4rem]">
                    <motion.h1 style={{
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }} className="lg:text-6xl  text-4xl title-font m-2 text-red-400 font-bold text-center md:mb-[4rem] " >
                        Challenges We Faced
                    </motion.h1>
                    <div className="grid m-3">
                        <motion.div style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                        }} className="p-2 m-2">
                            <p className="text-red-400 text-2xl font-bold">
                                Implementing 3D Models for rendering in our app
                            </p>
                            <p className="text-pale text-xl">
                                Most 3D models are behind a pay wall and to implement the limited models available in the given time period was a challenge.
                            </p>
                        </motion.div>
                        <motion.div style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
                        }} className="p-2 m-2">
                            <p className="text-red-400 text-2xl font-bold">
                                Implementing live OCR to extract text from live video feed
                            </p>
                            <p className="text-pale text-xl">
                                Implementation of the Google Vision API for live OCR to extract text from live video feed was very inconsistent. The API proved to be very buggy; so we had to make some work arounds.
                            </p>
                        </motion.div>

                        <motion.div style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2s"
                        }} className="p-2 m-2">
                            <p className="text-red-400 text-2xl font-bold">
                                Implementing Markerless AR for the first time
                            </p>
                            <p className="text-pale text-xl">
                                Bad tracking and World tracking only works in mobile.
                            </p>
                        </motion.div>


                    </div>
                </div>
            </section>
        </>
    )
}
