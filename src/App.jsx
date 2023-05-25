// import { useState } from "react";
// import "./App.css";
// import App from './App.jsx'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from './components/Sidebar.jsx'
import './index.css'
import Modal from './components/Modal';
import Cards from './components/Cards';
import Home from './components/Home';
import ProtectedRoutes from './components/ProtectedRoutes';

export default function App() {
  return (
    <> 
    <Router>   
    <Routes>
      <Route path="/" element={<Signin/>} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Sidebar" element={<Sidebar />} />
      <Route path="/Modal" element={<Modal />} />
      <Route path="/Cards" element={<Cards />} />
      <Route path="/Home" element={<Home />} /> 
      <Route path ="Sidebar/*" element={< ProtectedRoutes  Component ={Sidebar}/>}/>
      <Route path ="Sidebar/*" element={<Sidebar/>}/>
    </Routes>
  </Router>
  </>
  )
}



