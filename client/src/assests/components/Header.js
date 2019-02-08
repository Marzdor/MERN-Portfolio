import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <header>
      <Link to="/">{"Max Ingersoll" + props.title}</Link>
      <section>
        <a
          href="https://github.com/Marzdor"
          className="icon icon--git"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/max-ingersoll-6a290ab0/"
          className="icon icon--link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        {/* TODO get resume to download */}
        <a href="/" className="icon icon--file">
          Resume
        </a>
      </section>
    </header>
  );
};

export default Header;
