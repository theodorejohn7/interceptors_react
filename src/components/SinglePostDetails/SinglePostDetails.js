import axios from "axios";
import { Component } from "react";

export default class SinglePostDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }

  componentDidUpdate() {
    this.getPostDetails();
  }

  componentDidMount() {
    if (!(this.state.post && this.state.post.id === this.props.id))
      this.getPostDetails();
  }

  getPostDetails = () => {
    axios
      .get(
        `https://react-theo-default-rtdb.firebaseio.com/posts/${this.props.id}.json`
      )
      .then((response) => {
        this.setState({
          post: { ...response.data, id: this.props.id },
        });
      });
  };

  render() {
    return (
      <div>
        {this.state.post && (
          <div>
            <div>ID : {this.state.post.id} </div>
            <div>Title : {this.state.post.Title}</div>
            <div> Description : {this.state.post.Description}</div>
          </div>
        )}
      </div>
    );
  }
}
