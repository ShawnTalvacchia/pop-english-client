import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useForm from "../components/useForm";

import "../static/App.css";

const RegisterPage = props => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
    checkpass: ""
  });

  const handleChange = e => {
    const fieldname = e.target.name;
    const value = e.target.value;
    setUserInput({ ...userInput, [fieldname]: value });
  };

  const register = e => {
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
      const url = "http://127.0.0.1:5000/register";
      console.log("check data", data);
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => console.error("Error:", error));
    }
  };

  return (
    <section id="register-page">
      <div className="container">
        <div className="header-section text-center">
          <h2>Sign Up Now</h2>

          <hr className="bottom-line" />
        </div>
        <Form onSubmit={e => register(e)}>
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
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={e => handleChange(e)}
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckPassword">
            <Form.Label>Check Password</Form.Label>
            <Form.Control
              onChange={e => handleChange(e)}
              type="password"
              name="checkpass"
              placeholder="Check Password"
            />
          </Form.Group>

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
  );
};

export default RegisterPage;
