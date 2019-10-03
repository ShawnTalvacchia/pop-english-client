import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import auth from "../auth";

import "../static/App.css";

const Register = props => {
  // const existingToken = sessionStorage.getItem("token");
  // const api_key =
  //   window.location.search.split("=")[0] === "?api_key"
  //     ? window.location.search.split("=")[1]
  //     : null;
  // if (api_key) {
  //   sessionStorage.setItem("token", api_key);
  // }

  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
    checkpass: ""
  });

  // const [token, setToken] = useState(existingToken || api_key);
  const [user, setUser] = useState(props.user);

  const handleChange = e => {
    const fieldname = e.target.name;
    const value = e.target.value;
    setUserInput({ ...userInput, [fieldname]: value });
  };

  const register = async e => {
    e.preventDefault();
    const data = {
      name: userInput.name,
      email: userInput.email,
      password: userInput.password
    };
    if (
      userInput.password !== userInput.checkpass ||
      userInput.password === ""
    ) {
      alert("Passwords must match");
    } else {
      const url = process.env.REACT_APP_BACKEND_URL + "register";
      const resp = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const rep = await resp.json();
      if (rep.status === 200) {
        window.location.replace("/login");
      }
    }
  };
  
  if (user.id !== null) window.location.replace(window.location.origin);
  else
    return (
      <div className="login-register-section">
        <section id="left-side"></section>
        <section id="register-login-side">
          <div className="register-container">
            <div className="header-section text-center">
              <h2>Sign Up Now</h2>

              <hr className="bottom-line" />
            </div>
            <Form className="login-register-form" onSubmit={e => register(e)}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={e => handleChange(e)}
                  type="name"
                  name="name"
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={e => handleChange(e)}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
                <Form.Text>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Form.Group
                  style={{ width: "45%" }}
                  controlId="formBasicPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={e => handleChange(e)}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </Form.Group>

                <Form.Group
                  style={{ width: "45%" }}
                  controlId="formBasicCheckPassword"
                >
                  <Form.Label>Check Password</Form.Label>
                  <Form.Control
                    onChange={e => handleChange(e)}
                    type="password"
                    name="checkpass"
                    placeholder="Check Password"
                  />
                </Form.Group>
              </div>
              <div style={{ textAlign: "center" }}>
                <Button className="login-button" size="lg" type="submit" block>
                  Submit
                </Button>
                <hr className="bottom-line" />
                <h6>
                  <em>Already a member?</em>
                </h6>
                <Button
                  className="login-button-outline"
                  href="./login"
                  type="submit"
                  size="lg"
                  block
                >
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </section>
      </div>
    );
};

export default Register;
