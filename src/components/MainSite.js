import React from 'react'



import { ToastContainer } from 'react-toastify';
import Header from './Header';
import Hero from './Hero';
import Courses from './Courses';
import AddCourse from './AddCourse';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import NotFound from './NotFound';
import Footer from './Footer';
const MainSite = () => {
  return (
    <div>
         
      <ToastContainer/>
        <Header />
        <Routes>
          <Route path='/' Component={Hero} exact />
          <Route path='/api/add-courses' Component={AddCourse} exact />
          <Route path='/api/courses' Component={Courses} exact />
          <Route path='/about-us' Component={AboutUs} exact />
          <Route path='/contact-us' Component={ContactUs} exact />
          <Route path='*' Component={NotFound} />
        </Routes>
  
      <Footer/>
      
    </div>
  )
}

export default MainSite
