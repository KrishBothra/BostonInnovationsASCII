//@ts-check

import React from "react";

import logo from "./Assets/bostonInnovations.png";

export default function Header() {
  return (
    <header className="w-full px-7 py-7">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-9 h-9" />
        <h1 className="text-2xl font-semibold text-[#264d56] ">
          Boston Innovations
        </h1>

      </div>
      
    </header>
  );
}
