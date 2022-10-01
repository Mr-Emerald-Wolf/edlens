import React from 'react'

export default function Challenges() {
    return (
        <>
            <section id='challenges'>
                <div className="bg-slate-700 min-h-screen grid content-center p-4 md:p-2 lg:p-[4rem]">
                    <h1 className="lg:text-6xl  text-4xl title-font m-2 text-red-400 font-bold text-center md:mb-[4rem] " >
                        Challenges We Faced
                    </h1>
                    <div className="grid m-3">
                        <div className="p-2 m-2">
                            <p className="text-red-400 text-2xl font-bold">
                                Implementing 3D Models for rendering in our app
                            </p>
                            <p className="text-pale text-xl">
                                Most 3D models are behind a pay wall and to implement the limited models available in the given time period was a challenge.
                            </p>
                        </div>
                        <div className="p-2 m-2">
                            <p className="text-red-400 text-2xl font-bold">
                                Implementing live OCR to extract text from live video feed
                            </p>
                            <p className="text-pale text-xl">
                                Implementation of the Google Vision API for live OCR to extract text from live video feed was very inconsistent. The API proved to be very buggy; so we had to make some work arounds.
                            </p>
                        </div>

                        <div className="p-2 m-2">
                            <p className="text-red-400 text-2xl font-bold">
                                Implementing Markerless AR for the first time
                            </p>
                            <p className="text-pale text-xl">
                                Bad tracking and World tracking only works in mobile. 
                            </p>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}
