import * as React from "react";
import Paper from "@mui/material/Paper";

export function Post(props) {
  return (
<a href="#+9"

onClick={props.postclicked}
> 
      <Paper elevation={18}
      
      sx={{
        border: 1 ,
        borderColor: 'grey.500' ,
        borderRadius: 6,
        display: "flex",
        flexWrap: "wrap",
        p:1,
      }}
      >
        <div>ID : {props.post.id}</div>
        <div>Title : {props.post.Title} </div>
        <div>Description : {props.post.Description} </div>
      </Paper>
      </a>
  );
}
