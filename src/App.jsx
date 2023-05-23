// import { useState } from "react";
// import "./App.css";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import React from 'react'
import Card from './components/Cards';
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Sidebar from './components/Sidebar.jsx'
import './index.css'
import Modal from './components/modal';


export default function App() {
  return (
    <>
    <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

    <Router>   
    <Routes>
      <Route path="/" element={<Signin/>} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Sidebar" element={<Sidebar />} />
      <Route path="/Modal" element={<Modal />} />
      <Route path="/Card" element={<Card />} />
    </Routes>
  </Router>
  </>
  )
}




