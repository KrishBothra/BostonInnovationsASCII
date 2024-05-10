import { useState } from "react";
import { Route, Routes} from "react-router-dom"


import Home from "./Sections/HomePage/Home";


function App() {
  return (
    <div>

      
      {/* <Nav/> */}

      <Routes>
        <Route path="" element={<Home/>}></Route>
        
      </Routes>
      




    </div>
  );
}

export default App;
