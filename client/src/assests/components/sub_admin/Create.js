import React from "react";

const Create = props => {
  return (
    <div className="modal">
      <button id="close" className="btn-splash" onClick={props.modalControle}>
        X
      </button>
      <form className="modal-form" action="/api/projects" method="post">
        <label>Site Name</label>
        <input
          name="siteName"
          type="text"
          placeholder="Portfolio"
          autoComplete="off"
          required
        />
        <label>Image Base Name</label>
        <input
          name="imageBaseName"
          type="text"
          placeholder="portfolio"
          autoComplete="off"
          required
        />
        <label>Tags</label>
        <input
          name="tags"
          type="text"
          placeholder="HTML,JavaScript,CSS"
          autoComplete="off"
          required
        />
        <label>URL</label>
        <input
          name="url"
          type="text"
          placeholder="https://portfolio.com"
          autoComplete="off"
          required
        />
        <label>Description</label>
        <textarea
          name="description"
          placeholder="This is my portfolio"
          autoComplete="off"
          required
        />
        <input className="btn-splash" type="Submit" />
      </form>
    </div>
  );
};

export default Create;
