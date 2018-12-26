import React, { Component } from "react";
import { Link } from "react-router-dom";

const tags = [
  "JavaScript",
  "CSS",
  "HTML",
  "React",
  "MongoDB",
  "Express",
  "Node.js"
];

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textIdx: 0,
      timeMain: 0,
      timeSub: 0,
      isOn: false,
      op: false
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  componentDidMount() {
    // fade effect for tags
    this.startTimer();
    //
  }

  startTimer() {
    this.setState({
      isOn: true,
      timeMain: this.state.timeMain,
      timeSub: this.state.timeSub,
      start: Date.now() - this.state.timeMain
    });
    this.timerMain = setInterval(
      () =>
        this.setState({
          timeMain: Date.now() - this.state.start,
          textIdx: this.state.textIdx + 1
        }),
      3000
    );
    this.timerSub = setInterval(() => {
      this.setState({
        timeSub: Date.now() - this.state.start,
        op: !this.state.op
      });
      if (this.state.isOn) {
        if (this.state.op) {
          document.querySelector(".text-tag--splash").style.opacity = 0;
        } else {
          document.querySelector(".text-tag--splash").style.opacity = 1;
        }
      }
    }, 1500);
  }
  stopTimer() {
    this.setState({ isOn: false, timeMain: 0, timeSub: 0, start: 0 });
    clearInterval(this.timerMain);
    clearInterval(this.timerSub);
  }

  render() {
    let changeTags = tags[this.state.textIdx % tags.length];

    return (
      <section className="container container-splash ">
        <h1 className="text-title">Max Ingersoll</h1>
        <h2 className="text-title-sub">a web dev</h2>
        <p className="text-tag--splash">{changeTags}</p>
        <Link className="btn btn-splash" onClick={this.stopTimer} to="/work">
          View My Work
        </Link>
      </section>
    );
  }
}
export default Splash;
