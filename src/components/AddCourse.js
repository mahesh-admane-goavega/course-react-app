import { React, useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import base_url from "../src/bootapi";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {

  const getCookie = (name) => {
    return Cookies.get(name); // Returns the value of the cookie
  };

  useEffect(() => {
    document.title = "Add Course";
  }, []);

  const [course, setCourse] = useState({
    title: '',
    description: ''
  });

  // form handler function
  const handleForm = (e) => {
    e.preventDefault();
    console.log(course);
    postDataToServer(course);

    // After submission, reset the course state
    setCourse({ title: '', description: '' });
  };

  // function to post data on server
  const postDataToServer = (data) => {
    const token = getCookie("jwtToken");
    axios.post(`${base_url}/courses`, data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(
      (response) => {
        console.log(response);
        console.log("Success");
        toast.success("Successfully added new course!", {
          position: "bottom-center"
        });
        // Reset course state after success
        setCourse({ title: "", description: "" });
      },
      (error) => {
        console.log(error);
        console.log("Error");
        toast.error("Something went wrong!", {
          position: "bottom-center"
        });
      }
    );
  };

  const navigate = useNavigate();

  useEffect(() => {
    checkAuthentication();
  }, [])

  const checkAuthentication = () => {
    const token = getCookie("jwtToken");
    axios.get(`${base_url}/is_authenticated`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      if (response.data === true) {
      }
    })
      .catch((error) => {
        console.log("Errorr: ", error);
        navigate("/auth/login")
      })
  }

  return (
    <div className="mt-5 d-flex justify-content-center align-items-start vh-100">
      <div className="form-container p-4">
        <h2 className="mb-4 text-center">Add New Course</h2>
        <Form onSubmit={handleForm}>
          <FormGroup>
            <Label for="courseTitle">Course Title</Label>
            <Input
              type="text"
              id="courseTitle"
              name="title"
              placeholder="Enter the course title"
              className="mb-3"
              value={course.title}
              onChange={(e) => {
                setCourse({ ...course, title: e.target.value });
              }}
            />

            <Label for="courseDescription">Course Description</Label>
            <Input
              type="textarea"
              id="courseDescription"
              name="description"
              placeholder="Describe the course content"
              className="mb-3"
              value={course.description}
              onChange={(e) => {
                setCourse({ ...course, description: e.target.value });
              }}
            />

            <Button type="submit" color="primary" block>
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default AddCourse;
