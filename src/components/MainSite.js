import React from 'react'
import { ToastContainer } from 'react-toastify';
import Header from './Header';
import { Outlet} from 'react-router-dom';
import Footer from './Footer';
const MainSite = () => {
  return (
    <div>
         
      <ToastContainer/>
        <Header />
        <Outlet />
        {/* <Routes>
          <Route path='/' Component={Hero} exact />
          <Route path='/api/add-courses' Component={AddCourse} exact />
          <Route path='/api/courses' Component={Courses} exact />
          <Route path='/about-us' Component={AboutUs} exact />
          <Route path='/contact-us' Component={ContactUs} exact />
          <Route path='*' Component={NotFound} />
        </Routes> */}
  
      <Footer/>
      
    </div>
  )
}

export default MainSite
