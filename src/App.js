import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home";
import Login from "./Pages/Login";

import Loading from "./components/loader";
import ModuleCarousel from "./components/ModuleCarousel";
import Dashboard from "./Pages/Dashboard";
import Register from "./Pages/Register";
import { Route, Switch } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";

import { BrowserRouter } from "react-router-dom";
const URL = "http://127.0.0.1:5000";
class App extends React.Component {
  constructor(props) {
    super(props);

    const existingToken = sessionStorage.getItem("token");
    const api_key =
      window.location.search.split("=")[0] === "?api_key"
        ? window.location.search.split("=")[1]
        : null;
    if (api_key) {
      sessionStorage.setItem("token", api_key);
    }

    this.state = {
      token: existingToken || api_key,
      user: { id: null }
    };
  }

  async componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    try {
      const response = await fetch(URL + "/test", {
        headers: new Headers({
          Authorization: `Token ${this.state.token}`,
          "Content-Type": "application/json"
        })
      });
      const data = await response.json();
      data.token = this.state.token;
      this.setState({ user: data, loaded: true });
    } catch (error) {
      this.setState({ loaded: true });
    }
  };

  render() {
    if (!this.state.loaded) return <Loading />;
    else
      return (
        <BrowserRouter>
          <Toolbar token={this.state.token} user={this.state.user} />
          <div className="under-toolbar">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/login"
                component={props => (
                  <Login
                    {...props}
                    user={this.state.user}
                    token={this.state.token}
                  />
                )}
              />
              <Route
                exact
                path="/register"
                component={props => (
                  <Register {...props} user={this.state.user} />
                )}
              />

              <Route
                exact
                path="/courses"
                component={props => ModuleCarousel(props)}
              />
              <Route
                path="/dashboard"
                component={props => (
                  <Dashboard
                    {...props}
                    token={this.state.token}
                    user={this.state.user}
                  />
                )}
              />
            </Switch>
          </div>
        </BrowserRouter>
      );
  }
}

export default App;
