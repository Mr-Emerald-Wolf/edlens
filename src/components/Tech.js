import React, { useRef } from 'react'
import { tech } from "../data";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useInView } from 'framer-motion';


export default function Tech() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <section ref={ref} id='tech'>
        <div className="grid content-center h-[35rem] bg-slate-700 ">
          <div className="mb-6 ">
            <h1 style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }} className="sm:text-4xl text-3xl font-medium title-font m-4 text-pale  text-center" >
              Tech Used
            </h1>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {tech.map((tech) => (
                <div key={tech} className="p-2 sm:w-1/2 w-full">
                  <div className=" bg-pale rounded flex p-4 h-full items-center shadow-md">
                    <CheckBadgeIcon className="text-red-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-slate-700">
                      {tech}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
