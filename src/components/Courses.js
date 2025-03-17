import React, { useState, useEffect } from "react";
import Course from "./Course";
import { Container, Row, Col } from "reactstrap";
import base_url from "../src/bootapi"
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


const Courses = () => {

    const navigate= useNavigate();
    useEffect(() => {
        document.title = "Courses"
    }, []);

    const getCookie = (name) => {
        return Cookies.get(name); // Returns the value of the cookie
      };


   // function to call sereve
    const getAllCoursesFromServer = () => {
        const token = getCookie("jwtToken");
        console.log("Token : ", token);
        axios.get(`${base_url}/courses`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then(
            (response) => {
                toast.success("Course Loaded!",{
                    position: "bottom-center"
                });
                console.log("MyResponse",response);
                setCourse(response.data);
            })
            .catch((error) => {
                console.log(error);
                if(error.status === 401){
                    toast.error("Time Out! Please Login Again!",{
                        position: "top-center"
                    });
                   navigate("/auth/login");
                }
                else{
                    toast.error("Something went wrong!",{
                        position: "top-center"
                    });
                }
            })
    }

// loading course function

useEffect(() => {
    getAllCoursesFromServer()
}, []);

const [courses, setCourse] = useState([

]);

const removeCourseById = (id) => {
    setCourse(courses.filter((c) => c.id !== id));
}

const updateCourseById = (id, updatedCourseData) => {
    setCourse(
        courses.map((course) =>
            course.id === id ? { ...course, ...updatedCourseData } : course
        )
    );
};


return (
    <div className="d-flex justify-content-center align-items-start vh-100">
        <Container className="mt-4">
            <Row>
                {
                    courses.map((course, index) => (
                        <Col sm="12" md="6" lg="4" key={index}>
                            <Course key={index} course={course} courseUpdate={updateCourseById} update={removeCourseById} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </div>
);
};

export default Courses;
