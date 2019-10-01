import React, { useState, useEffect } from "react";
import "../static/profile.css";
import { Route, Switch, Link } from "react-router-dom";
import Modules from "./Modules";
import SingleModule from "./SingleModule";
import NewModuleForm from "./CreateModule";
import EditProfile from "./EditProfile";
import Profile from "./Profile";

const Dashboard = props => {
  const [user, setUser] = useState(props.user);
  const [token, setToken] = useState(props.token);

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" to="./modules">
                  <span data-feather="file"></span>
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./test">
                  <span data-feather="file"></span>
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./courses">
                  <span data-feather="file"></span>
                  Courses
                </Link>
              </li>
            </ul>

            {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <a className="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6> */}
          </div>
        </nav>

        <main
          role="main"
          id="main"
          className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4"
        >
          <Switch>
            <Route
              exact
              path="/dashboard/modules"
              component={props => (
                <Modules {...props} token={token} user={user} />
              )}
            />
            <Route
              exact
              path="/dashboard/modules/:id"
              component={props => <SingleModule {...props} token={token} />}
            />
            <Route
              exact
              path="/dashboard/create"
              component={props => (
                <NewModuleForm {...props} token={token} user={user} />
              )}
            />
            <Route
              exact
              path="/dashboard/profiles/:id"
              component={props => <Profile {...props} token={token} />}
            />
            <Route
              exact
              path="/dashboard/profiles/:id/edit"
              component={props => <EditProfile {...props} token={token} />}
            />
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
