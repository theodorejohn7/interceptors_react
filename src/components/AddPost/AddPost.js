import { useState } , React from "react";
import axios from "axios";

export default function AddPost(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function onCreatePost(e) {
    e.preventDefault();

    const postData = {
      title,
      description,
    };
    axios
      .post(
        `/posts.json`,
        postData
      )
      .then((response) => {

        props.onPostAdded();
        console.log(response);
      });
  }

  return (
    <div>
      <h1> Create Post </h1>
      <form onSubmit={onCreatePost}>
        <div>
          <label>Title : </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Title"
          />
        </div>
        <div>
          <br />
          <label>Description : </label>
          <textarea
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Description"
          />
        </div>{" "}
        <br />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
