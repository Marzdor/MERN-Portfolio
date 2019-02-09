import React from "react";
import { Link } from "react-router-dom";
import r from "../files/Max_Ingersoll_Resume.pdf";

const Header = props => {
  return (
    <header>
      <Link to="/">
        Max Ingersoll
        <hr />
        <p>{props.title}</p>
      </Link>
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

        <a
          href="../files/Max_Ingersoll_Resume.pdf"
          download
          className="icon icon--file"
        >
          Resume
        </a>
      </section>
    </header>
  );
};

export default Header;
