import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

const Home = () => {
  return (
    <div id="body">
      <Header title={""} />
      <section className="home">
        <h2>About</h2>
        <p>
          I'm a versitial Full-Stack Developer with hobbyist experience. Looking
          to build that “professional experience” that everyone is talking
          about.
        </p>
        <p>
          Outside of working toward my Bachelors Degree in Computer Science I
          spend most of my time developing my skills in the web development
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
