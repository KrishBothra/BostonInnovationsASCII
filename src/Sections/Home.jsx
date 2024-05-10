//@ts-check

import React from "react";
import Header from "./Header";
import "./Home.css";
import Hero from "./Hero";
import FAQ from "./old/FAQ";
import Projects from "./old/Projects";

export default function Home() {
  return (
    <div>

      <Header />

      <Hero />

    
      <br />
      <br />

      <p className="max-w-[75rem] mx-auto px-8 text-xl">
        {/* At Boston Innovations, we leverage cutting-edge technologies to bridge the gap between innovative medical concepts and practical, life-saving solutions.  */}
        At Boston Innovations, we're driven by the pursuit of excellence and the desire to fulfill the unmet needs of the healthcare industry. Our team consists of world-class engineers, scientists, and healthcare professionals who collaborate to push the boundaries of what's possible. From AI-driven diagnostics to advanced medical device development, our expertise is shaping the next wave of medical advancements.
      </p>
      
      <br />
      <br />
      
      {/* <h1>Home</h1> */}

      
      <p className="mt-96">Hello</p>
      

      
      {/* <div class="">
        <h1 class="text-3xl font-bold">Home</h1>
        <br />
        <p class="text-xl">
          Founded by a group of ambitious Boston area engineering students and
          faculty, Bostons Innovations Corporation stands at the forefront of
          biomedical technology and innovation. Our journey began with a shared
          vision to revolutionize the future of healthcare using modern AI
          technology. Today, we are a leading force in the development of
          advanced medical devices, cutting-edge pharmaceuticals, and
          comprehensive artificial intelligence healthcare systems.
        </p>
      </div> */}
    </div>
  );
}
