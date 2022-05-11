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

  // useEffect(()=>{
  //     getPostDetails();
  // },[])

  function getPostDetails() {
    axios
      .get(
        `https://react-theo-default-rtdb.firebaseio.com/posts/${props.id}.json`
      )
      .then((response) => {
        setPost({ ...response.data, id: props.id });
      });
  }

  if (post) {
    return (
      <div>
        <div> Id: {post.id} </div>
        <div> Title: {post.Title} </div>
        <div> Description: {post.Description} </div>
      </div>
    );
  }
  return null;
}
