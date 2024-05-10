//@ts-check

import React from "react";
import Header from "../Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Universities from "./Universities";

export default function Home() {
  return (
    <div>
      <Header />

      <Hero />

      <br />
      <br />

      <h1 className="page-centered text-2xl font-medium mb-1">About Us</h1>

      <p className="page-centered text-xl">
        {/* At Boston Innovations, we're driven by the pursuit of excellence and the desire to fulfill the unmet needs of the healthcare industry. Our team consists of world-class engineers, scientists, and healthcare professionals who collaborate to push the boundaries of what's possible. From AI-driven diagnostics to advanced medical device development, our expertise is shaping the next wave of medical advancements. */}
        Founded by a group of ambitious Boston area engineering students and
        faculty, Bostons Innovations Corporation stands at the forefront of
        biomedical technology and innovation. Our journey began with a shared
        vision to revolutionize the future of healthcare using modern AI
        technology. Today, we are a leading force in the development of advanced
        medical devices, cutting-edge pharmaceuticals, and comprehensive
        artificial intelligence healthcare systems.
      </p>

      <Projects />


      <h2 className="mt-10 mb-1 page-centered text-2xl font-medium">Internships & Careers</h2>
      <div className="page-centered">
        <p className=" text-xl">
          We are currently hiring interns for the summer season in a variety of deparments!
        </p>
        <a className=" text-xl underline text-[#264d56]" href="/careers">
          Learn More
          <svg 
            className="ml-1 inline h-5 align-text-bottom"
            
            xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9.707 15.707L17.5 7.914l1.793 1.793A1 1 0 0 0 21 9V4l-.001-.048A.996.996 0 0 0 20 3h-5a1 1 0 0 0-.707 1.707L16.086 6.5l-7.793 7.793a1 1 0 1 0 1.414 1.414M4 3a1 1 0 0 0-1 1v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a1 1 0 1 0-2 0v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5h6a1 1 0 1 0 0-2z" clip-rule="evenodd"
          /></svg>
        </a>
      </div>
      


      <Universities />







      <br />
      <br />

      <p className="mt-96"> </p>

    </div>
  );
}
