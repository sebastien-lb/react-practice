import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { default as Button } from "./component/button/button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>Bonjour</div>
      <Switch>
        <Route path="/a/c">Hello a Hello c</Route>
        <Route path="/c/a">Hello c Hello a</Route>
        <Route path="/a">Hello a</Route>
        <Route path="/b">Hello b</Route>
        <Redirect to="/a" />
      </Switch>
      <Button />
      <nav>
        <Link to="/a">Go to A</Link>
        <Link to="/b">Go to b</Link>
        <a href="/a">Go to a</a>
      </nav>
    </Router>
  );
};

export default App;
