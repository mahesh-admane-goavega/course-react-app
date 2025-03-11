import React from "react";
import './App.css';
import logo from './logo.svg';
import MainSite from "./components/MainSite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Courses from './components/Courses'
import Hero from "./components/Hero";

function App() {

  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/api" element={<MainSite />}>
          <Route path="/api" Component={Hero} exact />
          <Route path='/api/courses' element={<Courses/>} exact />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
