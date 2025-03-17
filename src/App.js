import React from "react";
import './App.css';
import MainSite from "./components/MainSite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Courses from './components/Courses'
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import AddCourse from "./components/AddCourse";
import LogOutSuccess from "./components/LogOutSuccess";

function App() {

  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/logout" element={<LogOutSuccess />} />
          <Route path="/" element={<Login />} />
          <Route path="/api" element={<MainSite />}>
          <Route path="/api" element={<Hero/>} exact />
          <Route path='/api/courses' element={<Courses/>} exact />
          <Route path='/api/add-courses' element={<AddCourse/>} exact />
          <Route path='/api/about-us' element={<AboutUs/>} exact />
          <Route path='/api/contact-us' element={<ContactUs/>} exact />
          <Route path='*' element={<NotFound/>} exact />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
