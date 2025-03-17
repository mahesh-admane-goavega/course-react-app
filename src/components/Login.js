import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label, } from "reactstrap";
import axios from "axios";
import base_url from "../src/bootapi";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();
  const [loginCred, setLoginCred] = useState({
    username: '',
    password: ''
  });

  const getCookie = (name) => {
    return Cookies.get(name); // Returns the value of the cookie
  };

  useEffect(() => {
    checkAuthentication();
  }, [])

  const checkAuthentication = () => {
    const token = getCookie("jwtToken");
    // const myTokenDetails = jwtDecode(token);
    // console.log("Decoded JWT Token: ", myTokenDetails);
    console.log("Tokensssss: ", token);
    axios.get(`${base_url}/is_authenticated`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      if(response.data === true){
        navigate("/api/")
      }
    })
      .catch((error) => {
        console.log("Errorr: ", error);
      })
  }

  const loginUser = (e) => {
    e.preventDefault();

    loginAndGetJwtToken(loginCred);
    setLoginCred({ username: "", password: "" });
  }


  const loginAndGetJwtToken = (loginCred) => {
    console.log("My Logins", loginCred);
    axios.post(`${base_url}/login`,
      {
        username: loginCred.username,
        password: loginCred.password
      }
    ).then((response) => {
      const token = response.data;
      Cookies.set('jwtToken', token, { expires: 1 / 24 })
      navigate("/api/courses");
    }
    )
      .catch((error) => {
        console.log(error);
      });
  }



  return (
    <div className="mt-5 d-flex justify-content-center align-items-center vh-40">
      <div className="form-container p-4">
        <h2 className="mb-4 text-center font-weight-bold fw-bold fs-4">Log in in to MyCourses.com</h2>
        <Form onSubmit={loginUser} >
          <FormGroup>
            <Input
              type="text"
              id="username"
              name="username"
              value={loginCred.username}
              onChange={(e) => {
                setLoginCred({ ...loginCred, username: e.target.value })
              }}
              placeholder="Enter Username"
              className="mb-3"
            />
            <Input
              type="password"
              id="password"
              name="password"
              value={loginCred.password}
              onChange={(e) => {
                setLoginCred({ ...loginCred, password: e.target.value })
              }}
              placeholder="Enter Password"
              className="mb-3"
            />

            <Button className="mb-2 fw-bold" type="submit " color="primary" block>
              Log in
            </Button>
            <Link className="text-decoration-none" to={"/forget-password"}>Forgat password</Link>
            <br />
            <Label className="fw-bold">New User? </Label>
            <Link className="text-decoration-none " to={"/register"}> Register Here</Link>
          </FormGroup>
        </Form>
      </div>
    </div>
  )
}

export default Login;