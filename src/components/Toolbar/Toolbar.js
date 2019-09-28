import React from "react";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const toolbar = props => (
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
        <ul>
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
            <Button className="login-button" href="./login" size="sm">
              Login
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
