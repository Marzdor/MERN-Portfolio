import React from "react";

const Projects = props => {
  const projectEle = [];

  props.projects.forEach(project => {
    projectEle.push(
      <section key={project.siteName}>
        <h4>{project.siteName}</h4>
        <button>Edit</button>
        <a href="/admin" id={project._id} onClick={deleteProject}>
          Delete
        </a>
      </section>
    );
  });

  function deleteProject(e) {
    console.log(e.target.id);
    fetch("/api/projects/" + e.target.id, { method: "delete" }).then(res => {
      res.json();
    });
  }

  return <div>{projectEle}</div>;
};

export default Projects;
