import React, { useState, useEffect } from "react";
import "../static/profile.css";
import { Route, Switch, Link } from "react-router-dom";
import { Image } from "semantic-ui-react";

import Mentors from "./Mentors";
import Modules from "./Modules";
import SingleModule from "./SingleModule";
import Enrolled from "./Enrolled";
import NewModuleForm from "./CreateModule";
import EditModule from "../components/EditModule";

import EditProfile from "./EditProfile";
import Profile from "./Profile";

const Dashboard = props => {
  const [user, setUser] = useState(props.user);
  const [token, setToken] = useState(props.token);
  console.log("user", user);

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <div>
                {user.img ? (
                  <Image
                    src={user.img}
                    alt="avatar-img"
                    style={{ padding: ".5rem" }}
                    size="small"
                    circular
                    centered
                  />
                ) : (
                  <Image
                    src="https://i.ibb.co/syTH6dp/avatar-img.png"
                    alt="avatar-img"
                    size="medium"
                    rounded
                    centered
                    // style={{ padding: ".5rem" }}
                  ></Image>
                )}
              </div>
              <li className="nav-item">
                <Link className="nav-link" to="./enrolled">
                  <span data-feather="file"></span>
                  My Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./modules">
                  <span data-feather="file"></span>
                  Upcoming
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="./courses">
                  <span data-feather="file"></span>
                  Courses
                </Link>
              </li> */}
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
              component={props => (
                <SingleModule {...props} token={token} user={user} />
              )}
            />
            <Route
              exact
              path="/dashboard/modules/:id/edit"
              component={props => (
                <EditModule {...props} token={token} user={user} />
              )}
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
            <Route
              exact
              path="/dashboard/enrolled"
              component={props => <Enrolled {...props} token={token} />}
            />
            <Route
              exact
              path="/dashboard/mentors"
              component={props => <Mentors {...props} token={token} />}
            />
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
