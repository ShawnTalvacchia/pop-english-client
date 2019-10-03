import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../static/App.css";
const URL = REACT_APP_BACKEND_URL;

function Login(props) {
  const [email, setEmail] = useState("a");
  const [password, setPassword] = useState("a");
  const [user, setUser] = useState(props.user);

  const handleLogin = async e => {
    e.preventDefault();
    const info = { email, password };

    const resp = await fetch(`${URL}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(info)
    });
    const data = await resp.json();
    if (data.status === 200) {
      window.location.href = `/?api_key=${data.token}`;
    } else {
      alert(`Failure: ${data.message}`);
    }
  };

  if (user.id !== null) window.location.replace(window.location.origin);
  else
    return (
      <section className="login-register-section">
        <div id="left-side"></div>
        <div id="register-login-side">
          <div className="login-container">
            <div className="header-section text-center">
              <h2>Login</h2>
              <hr className="bottom-line" />
            </div>
            <Form
              className="login-register-form"
              onSubmit={e => {
                handleLogin(e);
              }}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={e => setEmail(e.target.value)}
                  name="email"
                  required
                  autoComplete="off"
                  placeholder="Your email address"
                />
                <Form.Text>
                  <Link to="/forget-password">Forget Password</Link>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  name="password"
                  type="password"
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Choose a safe password"
                />
              </Form.Group>

              <div style={{ textAlign: "center" }}>
                <Button
                  className="sign-up-button"
                  size="lg"
                  type="submit"
                  block
                >
                  Login
                </Button>
                <hr className="bottom-line" />
                <div style={{ marginBottom: "2rem" }}>
                  <Button
                    variant="outline-primary"
                    href="http://127.0.0.1:5000/facebook-login"
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
                  size="lg"
                  block
                >
                  Register
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </section>
    );
}

export default Login;
