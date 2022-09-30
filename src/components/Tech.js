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
        <div className="grid content-center min-h-screen bg-slate-700 ">
          <div className="mb-6 ">
            <h1 style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }} className="sm:text-5xl text-3xl font-medium title-font m-4 mt-[3rem] text-pale  text-center" >
              Tech Used
            </h1>
            <div className="grid md:grid-cols-3 grid-rows gap-4 p-4 px-[4rem] justify-items-center">
              {tech.map((tech) => (
                <div key={tech} className="p-2">
                  <div className=" bg-pale rounded-md p-4 h-full items-center shadow-md">
                    <div className="grid grid-rows">
                      <div className="flex p-2">
                        <CheckBadgeIcon className="text-red-400 w-8 h-8 flex-shrink-0 mr-4" />
                        <span className="title-font text-xl font-medium text-slate-700">
                          {tech}
                        </span>
                      </div>
                      <p className="text-red-400 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum praesentium est aperiam odit consectetur facere blanditiis porro hic veniam. Vitae nisi nam quae fuga consectetur aliquam quis distinctio recusandae.</p>
                    </div>

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
