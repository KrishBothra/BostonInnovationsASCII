//@ts-check

import React, { useRef } from "react";

import logo from "./Assets/bostonInnovations.png";

export default function Header() {


  const navData = [
    { text: "Projects & Services", link: "/" },
    { text: "Internships & Careers", link: "/" },
    { text: "Innovation & Partners", link: "/" },
    { text: "About Our Company", link: "/" },
  ]

  
  const smallScreenNavbarRef = useRef(null);
  function showNavbar() {
    smallScreenNavbarRef.current?.toggleAttribute("data-open");
  }

  return (
    <header className="w-full px-7 py-6 flex items-center justify-start bg-white z-10 top-0 ">
      <a href="/" className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-9 h-9" />
        <h1 className="text-2xl font-semibold text-[#264d56] ">
          Boston Innovations
        </h1>
      </a>

      <nav className="ml-auto navbar-breakpoint:ml-12 pt-1 before:text-lg font-bold ">

        {/* Large Viewport Nav */}
        <div className="hidden navbar-breakpoint:block">
          <div className="flex gap-10 ">
            {navData.map((item) => (
              <a
                href={item.link}
                className="hover:text-[#366B82] transition-colors"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>

        <button className="h-7 navbar-breakpoint:hidden ml-auto  align-middle"
        onClick={showNavbar}>
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M7.95 11.95h32m-32 12h32m-32 12h32"
            />
          </svg>
        </button>

        {/* small viewport Nav */}
        <div ref={smallScreenNavbarRef} 
        className="hidden data-[open]:block fixed top-[5.2rem] right-0 z-50 bg-white w-full text-center shadow-2xl" 
        
        style={{transform: ""}}>
          <div className="flex gap-10 flex-col px-10 py-10">
            {navData.map((item) => (
              <a
                href={item.link}
                className="hover:text-[#366B82] transition-colors"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>


      </nav>
    </header>
  );
}
