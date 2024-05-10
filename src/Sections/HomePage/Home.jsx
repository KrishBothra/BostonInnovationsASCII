//@ts-check

import React from "react";
import Header from "../Header";
import Hero from "./Hero";
import Projects from "./Projects";

export default function Home() {
  return (
    <div>
      <Header />

      <Hero />

      <br />
      <br />

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

      <br />
      <br />

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
