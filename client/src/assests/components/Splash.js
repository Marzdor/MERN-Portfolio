import React from "react";
import { Link } from "react-router-dom";

const Splash = props => {
  return (
    <section>
      <h1>Max Ingersoll</h1>
      <h2>a web dev</h2>
      <p>{props.tag}</p>
      <Link to="/work">View My Work</Link>
    </section>
  );
};
export default Splash;
