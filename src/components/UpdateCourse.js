import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Input, Label } from "reactstrap";
import base_url from '../src/bootapi';
import { toast } from 'react-toastify';
import Cookies from "js-cookie";

function UpdateCourse({ toggle, modal, course, updateCourse }) {
  // Create local state for course
  
  const [updatedCourse, setUpdatedCourse] = useState({
    id: course.id,
    title: course.title,
    description: course.description
  });

  // Update local state when the modal opens
  useEffect(() => {
    setUpdatedCourse({
      id: course.id,
      title: course.title,
      description: course.description
    });
  }, [course]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleUpdate = (e) => {
    e.preventDefault(); 
    updateOnServer(updatedCourse);
    toggle(); 
  };

  const getCookie = (name) => {
    return Cookies.get(name); // Returns the value of the cookie
  };

  const updateOnServer = (updatedCourse) =>{
    const token = getCookie("jwtToken");
    console.log("recived course", updateCourse)
    axios.put(`${base_url}/courses`, updatedCourse, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(
      (response) => {
          console.log(response);
          console.log("Success")
          toast.success("Course Successfully Updated!", {
            position: "bottom-center"
          })
          updateCourse(updatedCourse.id, updatedCourse);
      },
      (error) => {
        console.log(error);
        console.log("Error")
        toast.error("Something went wrong!", {
          position: "bottom-center"
        });
      }
    )
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className='custom-modal-header' toggle={toggle}>Edit Course</ModalHeader>
        <div className="p-4">
          <Form onSubmit={handleUpdate}>
            <FormGroup>
              <Label for="courseTitle">Update Course Title</Label>
              <Input
                type="text"
                id="courseTitle"
                value={updatedCourse.title} 
                name="title"
                placeholder="Enter the course title"
                className="mb-3"
                onChange={handleInputChange} 
              />

              <Label for="courseDescription">Update Course Description</Label>
              <Input
                type="textarea"
                id="courseDescription"
                value={updatedCourse.description} 
                name="description"
                placeholder="Describe the course content"
                className="mb-3"
                onChange={handleInputChange}
              />
            </FormGroup>

            <ModalFooter>
              <Button color="primary" type="submit"> 
                Update Course
              </Button>
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </div>
      </Modal>
    </div>
  );
}

export default UpdateCourse;
