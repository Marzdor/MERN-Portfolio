import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Splash from "./assests/components/Splash";
import Work from "./assests/components/Work";
import Admin from "./assests//components/Admin";
import Create from "./assests/components/sub_admin/Create";
import Edit from "./assests/components/sub_admin/Edit";
import Error from "./assests/components/Error";

const auth = {
  isAuthenticated: false,
  authenticate(cb) {
    setTimeout(cb, 100);
    fetch("/api/projects/auth")
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.isAuthenticated = true;
      })
      .catch(error => {
        console.log(error);
      });
  }
};

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };
  login = () => {
    auth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  };
  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <div className="container container-splash">
        <button className="btn-splash" onClick={this.login}>
          Please Sign In
        </button>
      </div>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route path="/work" component={Work} />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/admin" component={Admin} />
          <PrivateRoute path="/admin/create" component={Create} />
          <PrivateRoute path="/admin/edit" component={Edit} />
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
