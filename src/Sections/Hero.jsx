//@ts-check

import React from "react";

import vid from "./Assets/medical-stock-video.mp4";

export default function Hero() {

    return (

        <div className="bg-red-300 relative">
        

            <video 
                playsInline autoPlay muted loop 
                className="w-full h-[40rem] object-cover"
            >
                <source src={vid} type="video/mp4" />
            </video>
            <div className="h-[40rem] w-[100%] bg-gradient-to-r from-[#366B82] absolute top-0">
            </div>
            <div className="page-centered flex items-center pt-20 pb-28 absolute top-0 left-0 right-0">
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