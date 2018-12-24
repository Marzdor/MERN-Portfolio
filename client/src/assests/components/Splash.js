import React from "react";
import { Link } from "react-router-dom";

const Splash = () => {
  return (
    <section>
      <h1>Max Ingersoll</h1>
      <h2>a web dev</h2>
      <h4>Javascript</h4>
      <Link to="/work">View My Work</Link>
    </section>
  );
};
export default Splash;
