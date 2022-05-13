import axios from "axios";
import { Component } from "react";

export default class SinglePostDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }
  
  componentDidMount() {
    this.getPostDetails();
  }

  componentDidUpdate() {
    if (!((this.state.post && (this.state.post.id === this.props.id))))
{    this.getPostDetails();}
  }

  getPostDetails = () => {
    axios
      .get(
        `/posts/${this.props.id}.json`
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
            <div>Title : {this.state.post.title}</div>
            <div> Description : {this.state.post.description}</div>
          </div>
        )}
      </div>
    );
  }
}
