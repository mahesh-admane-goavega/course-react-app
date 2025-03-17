import React from "react";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Alert, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const LogOutSuccess = () => {

  const navigate = useNavigate();

  const removeCookie = (name) => {
    Cookies.remove(name);
  };

  useEffect(() => {
    removeCookie('jwtToken');
  }, [])

  const handleLogout = () => {
    navigate("/auth/login");
  };

  return (
    <div className="container mt-5">
      <Alert color="success">
        <h4 className="alert-heading">Successfully Logged Out!</h4>
        <p>You have been logged out of your account.</p>
        <hr />
        <p className="mb-0">Click the button below to return to the login page.</p>
        <Button color="primary" onClick={handleLogout}>
          Go to Login
        </Button>
      </Alert>
    </div>
  )
}

export default LogOutSuccess;