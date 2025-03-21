import React from "react";
import { Container, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import Cookies from "js-cookie";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

const Header = () => {

    const [username, setUserName] = useState("User");

    useEffect(() => {
        DecodeToken()
    },[])

    
    const DecodeToken = () => {
        const token = getCookie("jwtToken");
        const decodeJwt = jwtDecode(token);
        setUserName(formatUsername(decodeJwt.sub));
    }

    const formatUsername = (username) => {
        if (!username) return ''; // return empty string if username is undefined or empty
        return username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
      };

  const getCookie = (name) => {
    return Cookies.get(name); // Returns the value of the cookie
  };
  



    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <Container>
                    <Nav className="ml-auto" navbar>
                        <NavbarBrand>
                            <Link to="/api" style={{ color: "white", textDecoration: "none" }}>
                                MyCourses.com
                            </Link>
                        </NavbarBrand>
                        <NavItem>
                            <Link to="/api" className="nav-link">
                                Home
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/api/courses" className="nav-link">
                                Courses
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/api/add-courses" className="nav-link">
                                Add Courses
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/api/about-us" className="nav-link">
                                About Us
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/api/contact-us" className="nav-link">
                                Contact Us
                            </Link>
                        </NavItem>
                        {/* <NavItem>
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </NavItem> */}
                        {/* <NavItem className="nav-link ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" color="white" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                        </NavItem> */}
                        <NavItem className="ms-auto">
                            <Link className="nav-link" to={"/auth/logout"} >
                            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" color="white" className="bi bi-person" viewBox="0 2 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                            {username}
                            </Link>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
