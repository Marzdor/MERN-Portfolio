import React, { Component } from "react";

import Header from "./Header";
import Projects from "./Projects";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }
  componentDidMount() {
    fetch("api/projects")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ sites: data, isLoading: false });
      });
  }
  render() {
    return (
      <div>
        <Header title={"Projects"} />
        {!this.state.isLoading && <Projects sites={this.state.sites} />}
      </div>
    );
  }
}

export default Work;
