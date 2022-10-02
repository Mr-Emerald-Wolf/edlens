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
                                OCR
                            </p>
                            <p className="text-pale text-xl">
                            Implementation of OCR while streaming a video on the browser through the webcam, also the low accuracy of the OCR when it started working and OCR being unable to clearly discern words in not ideal conditions.
                            </p>
                        </div>
                        <div className="p-2 m-2">
                            <p className="text-red-400 text-2xl font-bold">
                                AR Models
                            </p>
                            <p className="text-pale text-xl">
                                Most good AR models are behind a hefty paywall and often dont support the format required that would mean creating custom models from scratch.
                            </p>
                        </div>

                        <div className="p-2 m-2">
                            <p className="text-red-400 text-2xl font-bold">
                                Markless AR and other libraries
                            </p>
                            <p className="text-pale text-xl">
                                General lack of simple documentation and tutorials to make a functioning product.
                            </p>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}
