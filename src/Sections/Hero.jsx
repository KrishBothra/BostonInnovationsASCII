//@ts-check

import React from "react";



export default function Hero() {

    return (
        <div className="bg-red-300">
            <div className="h-full page-centered flex items-center  pt-20 pb-28">
                <div className="mb-20 max-w-xl">
                    
                    <h1 className="text-4xl font-light">
                        Boston Innovations
                    </h1>

                    <p className="text-lg mt-8 font-light">
                        Innovating at the forefront of Biomedical Technology and Artificial Intelligence.
                        {/* Founded by a group of ambitious Boston area engineering students and faculty, Boston Innovations Corporation stands at the forefront of biomedical technology and innovation. Our journey began with a shared vision to revolutionize the future of healthcare using modern AI technology. Today, we are a leading force in the development of advanced medical devices, cutting-edge pharmaceuticals, and comprehensive artificial intelligence healthcare systems. */}
                    </p>

                    <button className="bg-white text-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors font-bold py-4 px-6 rounded-lg rounded-bl-none mt-12">
                        Enquire Today
                    </button>
                </div>

                <div className="overlay-bg" data-darkreader-inline-bgcolor=""> </div>
                
            </div>
        </div>
    );
}