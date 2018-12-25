import React, { Component } from "react";

import Projects from "./Projects";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      page: "work",
      projects: []
    };
  }

  componentDidMount() {
    fetch("/api/projects")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ projects: data });
      });
  }

  render() {
    return <Projects projects={this.state.projects} page={this.state.page} />;
  }
}

export default Work;
