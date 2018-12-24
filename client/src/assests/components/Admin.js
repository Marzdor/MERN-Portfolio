import React, { Component } from "react";

import Projects from "./sub_admin/Projects";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      projects: []
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
  }

  render() {
    return (
      <section>
        <Projects projects={this.state.projects} />
      </section>
    );
  }
}

export default Admin;
