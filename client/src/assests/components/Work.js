import React, { Component } from "react";

import Projects from "./Projects";
import Mobile from "./Mobile";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      page: "work",
      projects: [],
      mobile: false,
      curIndex: 0
    };
    this.switchEle = this.switchEle.bind(this);
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

  switchEle(e) {
    let nextIndex;
    const len = this.state.projects.length;
    const cur = this.state.curIndex;
    switch (e.target.id) {
      case "left":
        if (this.state.curIndex === 0) {
          nextIndex = len - 1;
        } else {
          nextIndex = cur - 1;
        }
        break;
      case "right":
        if (cur + 1 === len) {
          nextIndex = 0;
        } else {
          nextIndex = cur + 1;
        }
        break;
      default:
        break;
    }

    this.setState({ curIndex: nextIndex });
  }

  render() {
    return (
      <div>
        {this.state.mobile ? (
          <Mobile
            projects={this.state.projects}
            isLoading={this.state.isLoading}
            curIndex={this.state.curIndex}
            switchEle={this.switchEle}
          />
        ) : (
          <Projects
            mobile={this.state.mobile}
            projects={this.state.projects}
            isLoading={this.state.isLoading}
            page={this.state.page}
          />
        )}
      </div>
    );
  }
}

export default Work;
