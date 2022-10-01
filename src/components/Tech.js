import React, { useRef } from 'react'
import { tech } from "../data";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';


export default function Tech() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <section ref={ref} id='tech'>
        <div className="grid content-center min-h-screen bg-slate-700 ">
          <div className="">
            <h1 style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }} className="sm:text-5xl text-3xl font-bold title-font m-4  text-pale -mb-4 text-center" >
              Tech Used
            </h1>
            <div className="grid md:grid-cols-3 grid-rows gap-4 p-[2rem] md:p-[4rem] justify-items-center">
              {tech.map((tech) => (
                <div key={tech} className="p-2">
                  <motion.div style={{
                    scale: isInView ? 1 : 0,
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.25s "
                  }} className=" bg-pale rounded-md p-4 h-full items-center shadow-md">
                    <div className="grid grid-rows">
                      <div className="flex p-2">
                        <CheckBadgeIcon className="text-red-400 w-8 h-8 flex-shrink-0 mr-4" />
                        <span className="title-font text-xl font-bold text-slate-700">
                          {tech.Title}
                        </span>
                      </div>
                      <p className="text-red-400 font-medium px-2">{tech.Content}</p>
                    </div>

                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
