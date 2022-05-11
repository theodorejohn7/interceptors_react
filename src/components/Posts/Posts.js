import { Component } from "react";
import { Post } from "../Post/post";
import axios from "axios";

import { Box } from "@mui/system";
import SinglePostDetails from "../SinglePostDetails/SinglePostDetails";
// import { FunctionalSinglePostDetails } from "../FunctionalSinglePostDetails/FunctionalSinglePostDetails";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedPostId: null,
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
        <h1>Posts Data </h1>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              p:1.25,
              borderRadius: 6,
              color:"white",
              backgroundColor:"blue"
            },
          }}
        >
          <a href="#"> Create a Post </a>
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
      </div>
    );
  }
}
