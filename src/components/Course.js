import { React, useState } from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";
import UpdateCourse from "./UpdateCourse";
import axios from "axios";
import base_url from "../src/bootapi";
import { toast } from "react-toastify";


const Course = ({ course, update, courseUpdate }) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal)

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                toast.success("Successfully deleted course!",{
                    position: "bottom-center"
                });
                update(id);
            },
            (error) => {

                toast.success("Something went wrong!",{
                    position: "bottom-center"
                })
            }
        )
    }

    return (
        <div className="course-card">
            <Card className="course-card-body">
                <CardBody>
                    <CardSubtitle className="course-title">
                        {course.title}
                    </CardSubtitle>
                    <CardText className="course-description">
                        {course.description}
                    </CardText>
                    <Container className="course-buttons">
                        <Button color="danger" onClick={() => deleteCourse(course.id)} className="m-3">Delete</Button>
                        <Button color="warning" onClick={toggle} className="m-3">Update</Button>
                    </Container>
                </CardBody>
            </Card>
            <UpdateCourse toggle={toggle} modal={modal} course={course} updateCourse = {courseUpdate}/>
        </div>
    );
};

export default Course;
