import React from "react";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { Route, Switch } from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Toolbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={props => LoginPage(props)} />
        <Route
          exact
          path="/register"
          component={props => RegisterPage(props)}
        />
        <Route
          exact
          path="/register"
          component={props => RegisterPage(props)}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
