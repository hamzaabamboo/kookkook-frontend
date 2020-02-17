import React from "react";
import Login from "./pages/login";
import "./App.css";
import "./assets/sass/theme.scss";
import Nav from "./components/Navbar";
import MainTabs from "./pages/main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <MainTabs />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
