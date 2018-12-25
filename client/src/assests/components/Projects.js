import React from "react";

function importAllImages(image) {
  let images = {};
  image.keys().map((item, index) => {
    return (images[item.replace("./", "")] = image(item));
  });
  return images;
}

const image = importAllImages(require.context("../images", false, /\.png$/));

const Projects = props => {
  const projectEle = [];

  if (props.page === "admin") {
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
  } else {
    props.projects.forEach(project => {
      projectEle.push(
        <section key={project.siteName}>
          <h4>{project.siteName}</h4>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <img
              src={image[project.imageBaseName + "_small.png"]}
              srcSet={image[project.imageBaseName + ".png"] + " 1400w"}
              alt="Thumbnail of website."
            />
          </a>
          <h5>{project.tags}</h5>
          <p>{project.description}</p>
        </section>
      );
    });
  }

  function deleteProject(e) {
    fetch("/api/projects/" + e.target.id, { method: "delete" }).then(res => {
      res.json();
    });
    window.location = "/admin";
  }

  return <div>{projectEle}</div>;
};

export default Projects;
