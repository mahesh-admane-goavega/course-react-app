import React, { useState, useEffect } from "react";
import Course from "./Course";
import { Container, Row, Col } from "reactstrap";
import base_url from "../src/bootapi"
import axios from "axios";
import { toast } from "react-toastify";
import UpdateCourse from "./UpdateCourse";


const Courses = () => {

    useEffect(() => {
        document.title = "Courses"
    }, []);

    // function to call sereve
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                toast.success("Course Loaded!",{
                    position: "bottom-center"
                });
                console.log(response);
                setCourse(response.data);
            },
            (error) => {
                toast.error("Something went wrong!",{
                    position: "top-center"
                });
                console.log(error);
            }
        )
    }

    // loading course function

    useEffect(() => {
        getAllCoursesFromServer()
    }, []);

    const [courses, setCourse] = useState([

    ]);

    const removeCourseById = (id) => {
        setCourse(courses.filter((c) => c.id != id ));
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
                                <Course key={index} course={course} courseUpdate={updateCourseById}  update={removeCourseById}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Courses;
