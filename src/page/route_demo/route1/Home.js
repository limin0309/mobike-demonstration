import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Main from "./Main";
import About from "./about";
import topic from "./topic";
export default class Home extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/topic">topic</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact={true} path="/" component={Main} />
            <Route path="/About" component={About} />
            <Route path="/topic" component={topic} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
