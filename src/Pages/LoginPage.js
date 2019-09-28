import React, { useState, useEffect } from "react";
import useForm from "../components/useForm";
import auth from "../auth";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import "../static/App.css";

function LoginPage(props) {
  const [mess, setMess] = useState("");

  const [userInput, setUserInput] = useState({});

  const handleChange = e => {
    const fieldname = e.target.name;
    const value = e.target.value;
    setUserInput({ ...userInput, [fieldname]: value });
  };

  const login = e => {
    e.preventDefault();
    const url = "http://127.0.0.1:5000/login";
    const data = {
      email: userInput.email,
      password: userInput.pass
    };

    console.log(data);
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
        if (data.token) {
          sessionStorage.setItem("api-key", data.token);
          auth.login(() => {
            props.history.push("/home");
          });
        }
        if (data.message === "No User") {
          setMess({ mess: "User Need Register!" });
          setTimeout(() => props.history.push("/register"), 4000);
        }
        if (data.message === "Wrong Password") {
          setMess(data.message);
        }
      });
  };

  console.log("check userInput", userInput);

  return (
    <section id="login-page">
      <div className="container">
        <div className="header-section text-center">
          <h2>Login</h2>

          <hr className="bottom-line" />
        </div>
        <Form onSubmit={e => login(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={e => handleChange(e)}
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              <Link to="/forget-password">Forget Password</Link>
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={e => handleChange(e)}
              type="password"
              name="pass"
              placeholder="Password"
            />
          </Form.Group>

          <div style={{ textAlign: "center" }}>
            <Button className="sign-up-button" size="lg" type="submit" block>
              Login
            </Button>

            <hr className="bottom-line" />

            <div style={{ marginBottom: "2rem" }}>
              <Button
                href="http://127.0.0.1:5000/facebook-login"
                size="lg"
                block
              >
                Facebook Login
              </Button>
            </div>

            <h6>
              <em>Not a member? Join Now</em>
            </h6>

            <Button
              className="login-button-outline"
              href="./register"
              type="submit"
              size="lg"
              block
            >
              Register
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
}

export default LoginPage;
