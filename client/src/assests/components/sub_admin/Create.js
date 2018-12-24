import React from "react";

const Create = props => {
  return (
    <form action="/api/projects" method="post">
      <label>Site Name</label>
      <input
        name="siteName"
        type="text"
        placeholder="Portfolio"
        autoComplete="off"
      />
      <label>Image Base Name</label>
      <input
        name="imageBaseName"
        type="text"
        placeholder="portfolio"
        autoComplete="off"
      />
      <label>Tags</label>
      <input
        name="tags"
        type="text"
        placeholder="HTML,JavaScript,CSS"
        autoComplete="off"
      />
      <label>URL</label>
      <input
        name="url"
        type="text"
        placeholder="https://portfolio.com"
        autoComplete="off"
      />
      <label>Description</label>
      <textarea
        name="description"
        placeholder="This is my portfolio"
        autoComplete="off"
      />
      <input type="Submit" />
    </form>
  );
};

export default Create;
