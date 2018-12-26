import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Splash from "./assests/components/Splash";
import Work from "./assests/components/Work";
import Admin from "./assests//components/Admin";
import Create from "./assests/components/sub_admin/Create";
import Edit from "./assests/components/sub_admin/Edit";
import Error from "./assests/components/Error";

const tags = [
  "JavaScript",
  "CSS",
  "HTML",
  "React",
  "MongoDB",
  "Express",
  "Node.js"
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }
  render() {
    let changeTags = tags[this.state.textIdx % tags.length];
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Splash tag={changeTags} {...props} />}
          />
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
