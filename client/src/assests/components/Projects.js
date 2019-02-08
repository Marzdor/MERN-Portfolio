import React from "react";

const Projects = props => {
  // Create individual site elements
  const siteElements = [];
  for (let site in props.sites) {
    // Create tech elements
    const techElements = [];
    const techList = props.sites[site].tech;
    for (let tech in techList) {
      techElements.push(<li key={techList[tech]}>{techList[tech]}</li>);
    }

    siteElements.push(
      <section key={props.sites[site].name}>
        <h2>{props.sites[site].name}</h2>
        <h4>Tech</h4>
        <ul>{techElements}</ul>
        <p>{props.sites[site].description}</p>
        <a
          href={props.sites[site].urls.code}
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
        <a
          href={props.sites[site].urls.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live
        </a>
      </section>
    );
  }

  return <div>{siteElements}</div>;
};

export default Projects;
