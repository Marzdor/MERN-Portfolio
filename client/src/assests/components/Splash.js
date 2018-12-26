import React from "react";
import { Link } from "react-router-dom";

const Splash = props => {
  return (
    <section className="container container-splash ">
      <h1 className="text-title">Max Ingersoll</h1>
      <h2 className="text-title-sub">a web dev</h2>
      <p className="text-tag--splash">{props.tag}</p>
      <Link className="btn btn-splash" to="/work">
        View My Work
      </Link>
    </section>
  );
};
export default Splash;
