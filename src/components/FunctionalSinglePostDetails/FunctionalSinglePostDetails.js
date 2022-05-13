import axios from "axios";
import { useEffect, useState } from "react";

export function FunctionalSinglePostDetails(props) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (post && post.id === props.id) {
      return;
    }
    getPostDetails();
  });

 
  function getPostDetails() {
    axios
      .get(
        `/posts/${props.id}.json`
      )
      .then((response) => {
        setPost({ ...response.data, id: props.id });
      });
  }

  if (post) {
    return (
      <div>
        <div> Id: {post.id} </div>
        <div> Title: {post.title} </div>
        <div> Description: {post.description} </div>
      </div>
    );
  }
  return null;
}
