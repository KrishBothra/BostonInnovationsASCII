import { useState } from "react";
import { Route, Routes} from "react-router-dom"


import Home from "./Home";
import Nav from "./Nav";
import Contact from "./Contact";
import News from "./News";
import Projects from "./Projects";
import Information from "./Information";


function App() {
  return (
    <div>


      <Nav/>

      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="/Projects" element={<Projects/>}></Route>
        <Route path="/news" element={<News/>}></Route>
        <Route path="/information" element={<Information/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      




    </div>
  );
}

export default App;
