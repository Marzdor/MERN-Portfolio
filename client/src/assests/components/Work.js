import React, { Component } from "react";

import Projects from "./Projects";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      page: "work",
      projects: [],
      mobile: false
    };
  }

  componentDidMount() {
    fetch("/api/projects")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ projects: data, isLoading: false });
      });

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.setState({ mobile: true });
    }
  }

  render() {
    return (
      <Projects
        mobile={this.state.mobile}
        projects={this.state.projects}
        isLoading={this.state.isLoading}
        page={this.state.page}
      />
    );
  }
}

export default Work;
