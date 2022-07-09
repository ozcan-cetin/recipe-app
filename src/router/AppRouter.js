import React from 'react'
import Details from "../pages/details/Details"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Navbar from "../components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='details' element={<Details/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter