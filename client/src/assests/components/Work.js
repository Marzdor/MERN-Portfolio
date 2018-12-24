import React, { Component } from "react";

class Work extends Component {
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
        console.log(data);
      });
  }

  render() {
    return <div>work</div>;
  }
}

export default Work;
