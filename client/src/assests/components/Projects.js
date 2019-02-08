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
      <section className="project" key={props.sites[site].name}>
        <h2>{props.sites[site].name}</h2>
        <p>{props.sites[site].description}</p>
        <h4>Tech</h4>
        <ul>{techElements}</ul>
        <div>
          <a
            className="btn btn--project"
            href={props.sites[site].urls.code}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
          <a
            className="btn btn--project"
            href={props.sites[site].urls.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
        </div>
      </section>
    );
  }

  return <div>{siteElements}</div>;
};

export default Projects;
