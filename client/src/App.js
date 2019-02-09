import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./assests/components/Home";
import Work from "./assests/components/Work";
import Error from "./assests/components/Error";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
