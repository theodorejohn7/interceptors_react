import * as React from "react";
import Paper from "@mui/material/Paper";

export function Post(props) {
  return (
<a style={{ textDecoration: 'none' }} href="#+9"

onClick={props.postclicked}
> 
      <Paper elevation={18}
      
      sx={{
        border: 1 ,
        borderColor: 'grey.500' ,
        borderRadius: 6,
        p:1,
      }}
      >
        <div>ID : {props.post.id}</div>
        <div>Title : {props.post.title} </div>
        <div>Description : {props.post.description} </div>
      <br />
      <button onClick={props.postDeleted}>Delete Post</button>
      </Paper>
      </a>
  );
}
