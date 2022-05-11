import { Component } from "react";
import { Post } from "../Post/post";
import axios from "axios";

import { Box } from "@mui/system";
import SinglePostDetails from "../SinglePostDetails/SinglePostDetails";
import AddPost from "../AddPost/AddPost";
// import { FunctionalSinglePostDetails } from "../FunctionalSinglePostDetails/FunctionalSinglePostDetails";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedPostId: null,
      isAddPost:false
    };
  }

  componentDidMount() {
    axios
      .get(`https://react-theo-default-rtdb.firebaseio.com/posts.json`)
      .then((response) => {
        const posts = [];
        for (let key in response.data) {
          posts.push({ ...response.data[key], id: key });
        }
        this.setState({
          posts: posts,
        });
      });
  }

  onPostClickHandler = (id) => {
    this.setState({
      selectedPostId: id,
    });
  };

  onAddPostHandler = () => {
    this.setState({
      isAddPost:true
    })
  }

  render() {
    const postRender = this.state.posts.map((post) => {
      return (
        <Post
          key={post.id}
          post={post}
          postclicked={this.onPostClickHandler.bind(this, post.id)}
        />
      );
    });

    return (
      <div>
        <div></div>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
             
            },
          }}
        >
        <h1>Posts Data </h1>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
               
              m:0,
              p:1.25,
              borderRadius: 6,
              color:"white",
              backgroundColor:"blue"
            },
          }}
        >
          <a href="#"
          onClick={this.onAddPostHandler}
          > Create a Post </a>
        </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          {postRender}
        </Box>
        <div>
          {this.state.selectedPostId && (
            <div>
              <SinglePostDetails id={this.state.selectedPostId} />
              {/* <FunctionalSinglePostDetails  id={this.state.selectedPostId} /> */}
            </div>
          )}
        </div>
        <div> 
         {this.state.isAddPost &&  <AddPost /> }
        </div>
      </div>
    );
  }
}
