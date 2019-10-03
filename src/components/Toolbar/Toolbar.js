import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

import "./Toolbar.css";

const URL = "http://127.0.0.1:5000";

const Toolbar = props => {
  const [user, setUser] = useState(props.user);
  const handleLogout = async e => {
    e.preventDefault();
    const resp = await fetch(URL + "/logout", {
      headers: {
        Authorization: `Token ${props.token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const response = await resp.json();
    if (response.status === 200) {
      alert("logged out");
      sessionStorage.removeItem("token");
      window.location.replace("/");
    }
    if (response.status === 300) {
      alert(response.message);
    }
  };

  let content = (
    <header className="toolbar">
      <nav className="toolbar_navigation container">
        {/* <div className="toolbar_toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div> */}
        <div className="toolbar_logo">
          <a href="/">POP English</a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation_items">
          {props.user.id === null ? (
            <ul className="toolbar_navigaiton_buttons">
              <li>
                <Link smooth to="./register">
                  <Button className="outline-btn-join">JOIN</Button>
                </Link>
              </li>
              <li>
                <Link smooth to="/#home">
                  Home
                </Link>
              </li>
              <li>
                <Link smooth to="/#courses">
                  Courses
                </Link>
              </li>
              <li>
                <Button className="logout-button" href="./login" size="sm">
                  Login
                </Button>
              </li>
            </ul>
          ) : (
            <ul className="toolbar_navigaiton_buttons">
              <li>
                <Link
                  size="lg"
                  smooth
                  to={`/dashboard/profiles/${props.user.user_id}`}
                >
                  <Button className="outline-btn-username">
                    {props.user.first_name}
                  </Button>
                </Link>
              </li>
              <li>
                <Link smooth to="/dashboard/modules">
                  Courses
                </Link>
              </li>
              <li>
                <Link smooth to="/dashboard/mentors">
                  Mentors
                </Link>
              </li>
              <li>
                <Button
                  className="logout-button"
                  size="sm"
                  onClick={e => handleLogout(e)}
                >
                  Logout
                </Button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );

  return content;
};

export default Toolbar;
