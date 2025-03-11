import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label, } from "reactstrap";

const Login = () => {
    return (
        <div className="mt-5 d-flex justify-content-center align-items-center vh-40">
      <div className="form-container p-4">
        <h2 className="mb-4 text-center font-weight-bold fw-bold fs-4">Log in in to MyCourses.com</h2>
        <Form>
          <FormGroup>
            <Input
              type="text"
              id="courseTitle"
              name="title"
              placeholder="Enter Username"
              className="mb-3"
            />
            <Input
              type="password"
              id="courseDescription"
              name="description"
              placeholder="Enter Password"
              className="mb-3"
            />

            <Button className="mb-2 fw-bold" type="submit" color="primary" block>
              Log in
            </Button>
            <Link className="text-decoration-none" to={"/forget-password"}>Forgat password</Link>
            <br/>
            <Label className="fw-bold">New User? </Label>
            <Link className="text-decoration-none " to={"/register"}> Register Here</Link>
          </FormGroup>
        </Form>
      </div>
    </div>
    )
}

export default Login;