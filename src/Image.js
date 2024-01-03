import React from "react";
import firebase from "firebase";
import Loader from "./Loader";

const Image = React.createClass({
  getInitialState: function () {
    return {
      imageName: this.props.imageName,
      imageUrl: "",
      downloading: true,
    };
  },
  componentWillMount: function () {
    firebase
      .storage()
      .ref(this.props.url)
      .getDownloadURL()
      .then((url) => {
        this.setState({ downloading: false, imageUrl: url });
      });
  },
  render: function () {
    if (this.state.downloading) return <Loader />;

    return (
      <imgage
        src={this.state.imageUrl}
        className={"img-responsive"}
        alt="Profile Picture" // Add a meaningful description or leave it as an empty string
      />
    );
  },
});

export default Image;
