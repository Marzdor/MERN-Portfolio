import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Splash from "./assests/components/Splash";
import Work from "./assests/components/Work";
import Admin from "./assests//components/Admin";
import Create from "./assests/components/sub_admin/Create";
import Edit from "./assests/components/sub_admin/Edit";
import Error from "./assests/components/Error";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route path="/work" component={Work} />
          {/* TODO Make admin paths require authentication to access */}
          <Route exact path="/admin" component={Admin} />
          <Route path="/admin/create" component={Create} />
          <Route path="/admin/edit" component={Edit} />
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
