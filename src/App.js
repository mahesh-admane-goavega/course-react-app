import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

import { ToastContainer, toast } from 'react-toastify';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import AddCourse from './components/AddCourse';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import UpdateCourse from './components/UpdateCourse';

function App() {


  const notify = (name) => toast.success("Hello Mahesh");

  return (
    <div className="App container">
      <BrowserRouter>
      <ToastContainer/>
        {/* <Button outline color='secondary' onClick={notify}>Click Me</Button> */}
        <Header />
        <Routes>
          <Route path='/' Component={Hero} exact />
          <Route path='/add-courses' Component={AddCourse} exact />
          <Route path='/courses' Component={Courses} exact />
          <Route path='/about-us' Component={AboutUs} exact />
          <Route path='/contact-us' Component={ContactUs} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
