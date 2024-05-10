//@ts-check

import React from "react";

import vid from "../Assets/medical-stock-video.mp4";

export default function Hero() {

    const sharedBgDivClassNames="h-[30rem] sm:h-[40rem] w-full"

    return (
        <div className="relative" style={{filter: "url('#goo')"}}>
            
            {/* Used with filter: url('#goo') to round corners of children. found on stack overflow. Adjust stdDeviation to change the border radius. unfortunately, too high radius leaves the edges looking blurry. TODO: better rounding method*/}
            <svg style={{visibility: "hidden", position: "absolute"}} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />    
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                    </filter>
                </defs>
            </svg>

            <div>
                {/* Video background shape */}
                <video 
                    playsInline autoPlay muted loop 
                    className={`${sharedBgDivClassNames} object-cover`}
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 55%, 75% 100%, 25% 100%, 0 55%)",
                    }}
                >
                    <source src={vid} type="video/mp4" />
                </video>
                <div 
                    className={`${sharedBgDivClassNames} bg-gradient-to-br sm:bg-gradient-to-r from-[#366B82] absolute top-0`}
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 55%, 75% 100%, 25% 100%, 0 55%)",
                    }}
                ></div>
            </div>



            <div className="max-w-[93rem] mx-auto px-8 flex items-center pt-10 sm:pt-20 pb-28 text-center sm:text-left absolute top-0 left-0 right-0">
                <div className="mb-20 max-w-xl">
                    
                    <h1 className="text-4xl font-light text-white">
                        Boston Innovations
                    </h1>

                    <p className="text-lg mt-8 font-light text-white text-b">
                        Innovating at the forefront of Biomedical Technology and Artificial Intelligence.
                    </p>

                    <button className="bg-white text-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors font-bold py-4 px-6 rounded-lg rounded-bl-none mt-12">
                        Enquire Today
                    </button>
                </div>
                
            </div>

            
        </div>
    );
}