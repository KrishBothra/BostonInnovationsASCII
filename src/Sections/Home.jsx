//@ts-check

import React from "react";
import Header from "./Header";
import "./Home.css";
import Hero from "./Hero";

export default function Home() {
  return (
    <div>

      <Header />

      <Hero />
      
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
