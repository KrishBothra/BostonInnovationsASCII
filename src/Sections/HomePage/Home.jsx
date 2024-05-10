//@ts-check

import React from "react";
import Header from "../Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Universities from "./Universities";
import Footer from "../Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <Hero />

      <br />
      <br />

      <h1 className="page-centered subheading-style mb-2">About Us</h1>

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
      <br />

      <Projects />

      

      <h2 className="mt-16 mb-1 page-centered subheading-style">Internships & Careers</h2>
      <div className="mb-20 page-centered">
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

      <h2 className="mt-16 page-centered subheading-style" id="contact">
        Connect with us
      </h2>
      {/* TODO: replace with social media themed buttons with their logo */}
      <div className="mb-20 page-centered">
        <a className="text-xl block" href="https://www.linkedin.com/company/boston-innovations/">LinkedIn</a>
        <a className="text-xl block" href="https://discord.gg/t8xg36dMAV">Discord</a>
        <details>
          <summary className="text-xl">Email</summary>
          <div className="pl-10">
            <p className="text-xl">
              General Questions: 
              <a className="ml-1 text-xl underline" href="mailto:info@bostoninnovations.org">info@bostoninnovations.org</a>
            </p>
            <p className="text-xl">
              Partner with Us:
              <a className="ml-1 text-xl underline" href="mailto:outreach@bostoninnovations.org">outreach@bostoninnovations.org</a>
            </p>
            <p className="text-xl">
              Carreer Related:
              <a className="ml-1 text-xl underline" href="mailto:humanresources@bostoninnovations.org">humanresources@bostoninnovations.org</a>
            </p>
          </div>
          
        </details>
      </div>





      <br />
      <br />


      <Footer />

    </div>
  );
}
