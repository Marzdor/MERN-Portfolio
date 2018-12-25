import React from "react";

const Projects = props => {
  const projectEle = [];

  props.projects.forEach(project => {
    projectEle.push(
      <section id={project._id} key={project.siteName}>
        <h4>{project.siteName}</h4>
        <button id="edit" onClick={props.modalControle}>
          Edit
        </button>
        <button id={project._id} onClick={deleteProject}>
          Delete
        </button>
      </section>
    );
  });

  function deleteProject(e) {
    fetch("/api/projects/" + e.target.id, { method: "delete" }).then(res => {
      res.json();
    });
    window.location = "/admin";
  }

  return <div>{projectEle}</div>;
};

export default Projects;
