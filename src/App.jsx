// import { useState } from "react";
// import "./App.css";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Signin from "./components/Signin";
import Signup from "./components/Signup";

export default function App() {
  return (
    <>
    <Router>   
    <Routes>
      <Route path="/" element={<Signin/>} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  </Router>
  </>
  )
  // return (
  //   <div >
      
  //       <Signin/>
      
  //   </div>
  // );
}


