import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header title={""} />
      <section className="home">
        <h2>About</h2>
        <p>
          I'm a "loosely used" Full-Stack Developer, with less then 1 year
          hobbyist experience. Looking to build that “professional experience”
          that everyone is talking about.
        </p>
        <p>
          I’m currently working toward a Bachelors Degree in Computer Science.
          while I continue to build my skills in the the web development
          ecosystem.
        </p>
        <Link className="btn" to="/work">
          View My Projects
        </Link>
      </section>
    </div>
  );
};

export default Home;
